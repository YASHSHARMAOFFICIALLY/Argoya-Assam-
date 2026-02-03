import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { findSimilarQuestions, storeConversation } from "@/lib/embeddings";
import { supabase } from "@/lib/supabase";

// Initialize Gemini
const genAI = new GoogleGenerativeAI("AIzaSyBq-1d5V_jPgv2Agww6nmYRgJyQrW6I7CI");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Updated to the current stable flash model name
  systemInstruction: {
    role: "system",
    parts: [{ text: `
      You are a specialized medical chatbot for the hospital identified by the user. 
      
      RULES:
      1. First, identify the specific hospital the user is inquiring about based on the context provided.
      2. Provide information ONLY regarding that specific hospital.
      3. Use your internal knowledge and search capabilities to find details about that hospital.
      4. If specific details (like specific services) are unavailable, provide the hospital's official phone number or general contact info.
      5. Keep responses extremely SHORT, CLEAR, and TO THE POINT. Avoid fluff or long introductions.
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
    const { message, hospitalId, hospitalName } = body; 

    console.log("Processing question for Hospital:", hospitalId);

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
        temperature: 0.5,
        maxOutputTokens: 500,
      },
    });

    const promptWithContext = `
      Context: You are the assistant for ${hospitalName || 'the hospital'} (ID: ${hospitalId}). 
      Rule: Always refer to the hospital by its name, not its ID number.
      User Question: ${message}`;

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