import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { findSimilarQuestions, storeConversation } from "@/lib/embeddings";
import { supabase } from "@/lib/supabase";

// Initialize Gemini
const genAI = new GoogleGenerativeAI("AIzaSyBpagUfsms1_cQjroyEJ3mEjz1OnHZoXQM");

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash", // Updated to the current stable flash model name
  systemInstruction: {
    role: "system",
     parts: [{ text: `
    You are a professional Health Assistant. 
    
    RULES:
    1. LIMIT: Provide a maximum of 2-3 concise sentences.
    2. DIRECT: Answer the user's question immediately. Use bold text for medication names or key actions.
    3. OTC ONLY: If asked about medicine, mention common over-the-counter options like **Acetaminophen** or **Ibuprofen** generally, but do not give dosages.
    4. MANDATORY DISCLAIMER: Every response must end with: "Consult a doctor for personal medical advice."
    5. EMERGENCY: If symptoms sound life-threatening, tell them to call 911 immediately.
  `}],
  },
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  ],
});

async function checkForAnswer(question: string) {
  const { data: conversations, error } = await supabase
    .from("conversations")
    .select("answer")
    .eq("question", question)
    .limit(1)
    .single();

  if (error || !conversations) return null;
  return conversations.answer;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body; 

    console.log("Processing question for Hospital:", message);

    // 1. Check Database for Similar Questions
    try {
      const similarQuestion = await findSimilarQuestions(message);
      if (similarQuestion) {
        return new Response(
          JSON.stringify({ response: similarQuestion.answer, source: "database" }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (dbError) {
      console.warn("Database lookup failed:", dbError);
    }

    // 2. Check for Staff Answers
    try {
      const staffAnswer = await checkForAnswer(message);
      if (staffAnswer) {
        return new Response(
          JSON.stringify({ response: staffAnswer, source: "staff" }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (dbError) {
      console.warn("Staff answer lookup failed:", dbError);
    }

    // 3. Use Gemini if no database match found
    const chat = model.startChat({
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 800,
      },
    });

    const promptWithContext = `User Question: ${message}`;

    const result = await chat.sendMessage(promptWithContext);
    const response = await result.response;
    const answer = response.text();

    if (!answer) throw new Error("Empty response from Gemini");

    // 4. Optional: Store the new conversation for future similarity matches
    try {
      await storeConversation(message, answer);
    } catch (storeError) {
      console.warn("Failed to store conversation:", storeError);
    }

    return new Response(
      JSON.stringify({ response: answer, source: "gemini" }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process request",
        details: error instanceof Error ? error.message : String(error) 
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}