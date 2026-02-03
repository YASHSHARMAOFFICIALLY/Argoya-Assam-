// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Activity,
//   Wind,
//   Brain,
//   Cookie,
//   Heart,
//   Eye,
//   User,
//   Utensils,
//   Droplets,
//   Syringe,
//   Sparkles,
// } from "lucide-react";

// /* ---------------- TYPES ---------------- */

// type SymptomForm = {
//   fatigue: number; // 1–5
//   breathlessness: boolean; // Yes/No
//   dizziness: boolean; // Yes/No
//   pica: boolean; // Yes/No
//   fastHeartbeat: boolean; // Yes/No
//   pallor: "none" | "mild" | "severe";
//   ageGroup: "child" | "teen" | "adult" | "senior";
//   diet: "rarely" | "sometimes" | "often" | "daily";
//   heavyBleeding: boolean; // Yes/No
//   recentBloodLoss: boolean; // Yes/No
// };

// /* ---------------- RISK CALCULATION ---------------- */
// /*
// Enhanced scoring logic with new questions:
// - Fatigue (1–5) → 0–16
// - Breathlessness → 12
// - Dizziness → 8
// - Pica → 15
// - Fast heartbeat → 8
// - Pallor → mild 8, severe 20
// - Age → child/senior 8
// - Diet → rarely 12, sometimes 8, often 4, daily 0
// - Heavy bleeding → 12
// - Recent blood loss → 12

// Max ≈ 100
// */

// function calculateRisk(data: SymptomForm) {
//   let score = 0;

//   score += (data.fatigue - 1) * 4;
//   score += data.breathlessness ? 12 : 0;
//   score += data.dizziness ? 8 : 0;
//   score += data.pica ? 15 : 0;
//   score += data.fastHeartbeat ? 8 : 0;

//   if (data.pallor === "mild") score += 8;
//   if (data.pallor === "severe") score += 20;

//   if (data.ageGroup === "child" || data.ageGroup === "senior" || data.ageGroup === "adult") score += 8;

//   if (data.diet === "rarely") score += 12;
//   else if (data.diet === "sometimes") score += 8;
//   else if (data.diet === "often") score += 4;

//   score += data.heavyBleeding ? 12 : 0;
//   score += data.recentBloodLoss ? 12 : 0;

//   let risk = "Low";
//   if (score >= 60) risk = "High";
//   else if (score >= 30) risk = "Medium";

//   return { score, risk };
// }

// /* ---------------- QUESTION CARD ---------------- */

// function QuestionCard({
//   title,
//   assamese,
//   icon: Icon,
//   children,
// }: {
//   title: string;
//   assamese?: string;
//   icon?: React.ElementType;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-red-300 transition-all duration-300">
//       <div className="flex items-start gap-3">
//         {Icon && (
//           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
//             <Icon className="w-5 h-5 text-white" />
//           </div>
//         )}
//         <div className="flex-1">
//           <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
//           {assamese && (
//             <p className="text-sm text-slate-500 mt-1">{assamese}</p>
//           )}
//         </div>
//       </div>
//       <div className="pl-13">{children}</div>
//     </div>
//   );
// }

// /* ---------------- PROGRESS BAR ---------------- */

// function ProgressBar({ progress }: { progress: number }) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between items-center">
//         <span className="text-sm font-medium text-slate-700">
//           Form Progress
//         </span>
//         <span className="text-sm font-semibold text-red-600">
//           {Math.round(progress)}%
//         </span>
//       </div>
//       <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 transition-all duration-500 ease-out"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </div>
//   );
// }

// /* ---------------- PAGE ---------------- */

// export default function ScreenPage() {
//   const router = useRouter();

//   const [form, setForm] = useState<SymptomForm>({
//     fatigue: 1,
//     breathlessness: false,
//     dizziness: false,
//     pica: false,
//     fastHeartbeat: false,
//     pallor: "none",
//     ageGroup: "adult",
//     diet: "sometimes",
//     heavyBleeding: false,
//     recentBloodLoss: false,
//   });

//   // Calculate progress based on meaningful interactions
//   const calculateProgress = () => {
//     let filledCount = 0;
//     const totalQuestions = 10;

//     if (form.fatigue > 1) filledCount++;
//     if (form.breathlessness) filledCount++;
//     if (form.dizziness) filledCount++;
//     if (form.pica) filledCount++;
//     if (form.fastHeartbeat) filledCount++;
//     if (form.pallor !== "none") filledCount++;
//     if (form.ageGroup !== "adult") filledCount++; // adult is default
//     if (form.diet !== "sometimes") filledCount++; // sometimes is default
//     if (form.heavyBleeding) filledCount++;
//     if (form.recentBloodLoss) filledCount++;

//     return (filledCount / totalQuestions) * 100;
//   };

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     setProgress(calculateProgress());
//   }, [form]);

//   const submitHandler = () => {
//     const result = calculateRisk(form);
//     router.push(`/result?score=${result.score}&risk=${result.risk}`);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-red-300/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="relative mx-auto max-w-3xl px-4 py-12 space-y-8">
//         {/* Header */}
//         <div className="text-center space-y-3">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md">
//             <Sparkles className="w-5 h-5 text-red-600" />
//             <span className="text-sm font-semibold text-slate-700">
//               Health Screening
//             </span>
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
//             Anemia Symptom Screening
//           </h1>
//           <p className="text-slate-600 max-w-xl mx-auto">
//             Answer the questions based on how the person feels today. This
//             screening helps identify potential anemia risk.
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
//           <ProgressBar progress={progress} />
//         </div>

//         {/* Questions */}
//         <div className="space-y-6">
//           {/* AGE GROUP */}
//           <QuestionCard
//             title="What is your age group?"
//             assamese="আপোনাৰ বয়স গোট কি?"
//             icon={User}
//           >
//             <div className="space-y-2">
//               {[
//                 { value: "child", label: "Child (Under 12)" },
//                 { value: "teen", label: "Teenager (12-18)" },
//                 { value: "adult", label: "Adult (19-60)" },
//                 { value: "senior", label: "Senior (60+)" },
//               ].map((option) => (
//                 <label
//                   key={option.value}
//                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors"
//                 >
//                   <input
//                     type="radio"
//                     name="ageGroup"
//                     value={option.value}
//                     checked={form.ageGroup === option.value}
//                     onChange={(e) =>
//                       setForm({ ...form, ageGroup: e.target.value as any })
//                     }
//                     className="w-4 h-4 text-red-600 focus:ring-2 focus:ring-red-500"
//                   />
//                   <span className="text-slate-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </QuestionCard>

//           {/* FATIGUE */}
//           <QuestionCard
//             title="Do you feel tired even after rest?"
//             assamese="জিৰণিৰ পিছতো ভাগৰ লাগে নেকি?"
//             icon={Activity}
//           >
//             <div className="space-y-3">
//               <input
//                 type="range"
//                 min={1}
//                 max={5}
//                 value={form.fatigue}
//                 onChange={(e) =>
//                   setForm({ ...form, fatigue: Number(e.target.value) })
//                 }
//                 className="w-full h-2 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
//               />
//               <div className="flex justify-between text-xs text-slate-500">
//                 <span>Not at all</span>
//                 <span className="font-semibold text-red-600 text-base">
//                   {form.fatigue} / 5
//                 </span>
//                 <span>Extremely</span>
//               </div>
//             </div>
//           </QuestionCard>

//           {/* BREATHLESSNESS */}
//           <QuestionCard
//             title="Do you feel breathless during normal activity?"
//             assamese="সাধাৰণ কামতে উশাহ লয় নেকি?"
//             icon={Wind}
//           >
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.breathlessness}
//                 onChange={(e) =>
//                   setForm({ ...form, breathlessness: e.target.checked })
//                 }
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>

//           {/* DIZZINESS */}
//           <QuestionCard
//             title="Do you feel dizzy or light-headed often?"
//             assamese="সঘনাই মূৰ ঘূৰায় নেকি?"
//             icon={Brain}
//           >
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.dizziness}
//                 onChange={(e) =>
//                   setForm({ ...form, dizziness: e.target.checked })
//                 }
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>

//           {/* PICA */}
//           <QuestionCard
//             title="Do you crave ice, chalk, or mud?"
//             assamese="বৰফ / চক / মাটি খাবলৈ ইচ্ছা হয় নেকি?"
//             icon={Cookie}
//           >
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.pica}
//                 onChange={(e) => setForm({ ...form, pica: e.target.checked })}
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>

//           {/* FAST HEARTBEAT */}
//           <QuestionCard
//             title="Do you feel your heart beating fast?"
//             assamese="হৃদস্পন্দন বেছি বেছি লাগে নেকি?"
//             icon={Heart}
//           >
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.fastHeartbeat}
//                 onChange={(e) =>
//                   setForm({ ...form, fastHeartbeat: e.target.checked })
//                 }
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>

//           {/* PALLOR */}
//           <QuestionCard
//             title="Check color of lips / nails / inside eyelid"
//             assamese="ঠোঁট / নখ / চকুৰ তলৰ পতাৰ ৰং পৰীক্ষা কৰক"
//             icon={Eye}
//           >
//             <select
//               className="w-full rounded-lg border border-slate-300 p-3 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all cursor-pointer"
//               value={form.pallor}
//               onChange={(e) =>
//                 setForm({ ...form, pallor: e.target.value as any })
//               }
//             >
//               <option value="none">Normal (Pink)</option>
//               <option value="mild">Pale</option>
//               <option value="severe">Very Pale</option>
//             </select>
//           </QuestionCard>

//           {/* DIETARY HABITS */}
//           <QuestionCard
//             title="How often do you eat iron-rich foods?"
//             assamese="আপুনি কিমান সঘনাই লোহা সমৃদ্ধ খাদ্য খায়?"
//             icon={Utensils}
//           >
//             <p className="text-xs text-slate-500 mb-3">
//               (meat, leafy greens, lentils, beans)
//             </p>
//             <div className="space-y-2">
//               {[
//                 { value: "rarely", label: "Rarely (Once a week or less)" },
//                 { value: "sometimes", label: "Sometimes (2-3 times a week)" },
//                 { value: "often", label: "Often (4-5 times a week)" },
//                 { value: "daily", label: "Daily" },
//               ].map((option) => (
//                 <label
//                   key={option.value}
//                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
//                 >
//                   <input
//                     type="radio"
//                     name="diet"
//                     value={option.value}
//                     checked={form.diet === option.value}
//                     onChange={(e) =>
//                       setForm({ ...form, diet: e.target.value as any })
//                     }
//                     className="w-4 h-4 text-red-600 focus:ring-2 focus:ring-red-500"
//                   />
//                   <span className="text-slate-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </QuestionCard>

//           {/* HEAVY MENSTRUAL BLEEDING */}
//           <QuestionCard
//             title="Do you experience heavy menstrual bleeding?"
//             assamese="আপুনি অত্যধিক ঋতুস্ৰাৱ অনুভৱ কৰে নেকি?"
//             icon={Droplets}
//           >
//             <p className="text-xs text-slate-500 mb-3">
//               (only females of childbearing age)
//             </p>
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.heavyBleeding}
//                 onChange={(e) =>
//                   setForm({ ...form, heavyBleeding: e.target.checked })
//                 }
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>

//           {/* RECENT BLOOD LOSS */}
//           <QuestionCard
//             title="Any recent injury, surgery, or blood donation?"
//             assamese="সম্প্ৰতি কোনো আঘাত, শল্যচিকিৎসা বা ৰক্তদান?"
//             icon={Syringe}
//           >
//             <p className="text-xs text-slate-500 mb-3">
//               (Within the last 3 months)
//             </p>
//             <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-colors">
//               <input
//                 type="checkbox"
//                 checked={form.recentBloodLoss}
//                 onChange={(e) =>
//                   setForm({ ...form, recentBloodLoss: e.target.checked })
//                 }
//                 className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
//               />
//               <span className="text-slate-700 font-medium">Yes</span>
//             </label>
//           </QuestionCard>
//         </div>

//         {/* SUBMIT */}
//         <div className="space-y-4">
//           <button
//             onClick={submitHandler}
//             className="w-full rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 py-5 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg"
//           >
//             Calculate Risk →
//           </button>

//           <p className="text-xs text-slate-500 text-center">
//             This is a screening tool, not a medical diagnosis. Always consult a
//             healthcare professional.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Wind,
  Brain,
  Cookie,
  Heart,
  Eye,
  User,
  Utensils,
  Droplets,
  Syringe,
  Sparkles,
} from "lucide-react";

/* ---------------- TYPES ---------------- */
type SymptomForm = {
  fatigue: number;
  breathlessness: boolean;
  dizziness: boolean;
  pica: boolean;
  fastHeartbeat: boolean;
  pallor: "none" | "mild" | "severe";
  ageGroup: "child" | "teen" | "adult" | "senior";
  diet: "rarely" | "sometimes" | "often" | "daily";
  heavyBleeding: boolean;
  recentBloodLoss: boolean;
};

/* ---------------- HELPERS ---------------- */

function YesNoToggle({ value, onChange }: { value: boolean; onChange: (val: boolean) => void }) {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 font-semibold flex items-center justify-center gap-2 ${
          value === true 
          ? "border-red-600 bg-red-50 text-red-700 shadow-sm" 
          : "border-slate-100 bg-white text-slate-500 hover:border-slate-200"
        }`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 font-semibold flex items-center justify-center gap-2 ${
          value === false 
          ? "border-slate-600 bg-slate-100 text-slate-800 shadow-sm" 
          : "border-slate-100 bg-white text-slate-500 hover:border-slate-200"
        }`}
      >
        No
      </button>
    </div>
  );
}

function QuestionCard({ title, assamese, icon: Icon, children }: any) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
            <Icon className="w-5 h-5 text-rose-600" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          {assamese && <p className="text-sm text-slate-500 mt-1">{assamese}</p>}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

/* ---------------- RISK LOGIC ---------------- */

function calculateRisk(data: SymptomForm) {
  let score = 0;
  score += (data.fatigue - 1) * 4;
  score += data.breathlessness ? 12 : 0;
  score += data.dizziness ? 8 : 0;
  score += data.pica ? 15 : 0;
  score += data.fastHeartbeat ? 8 : 0;
  if (data.pallor === "mild") score += 8;
  if (data.pallor === "severe") score += 20;
  if (data.ageGroup === "child" || data.ageGroup === "senior") score += 8;
  if (data.diet === "rarely") score += 12;
  else if (data.diet === "sometimes") score += 8;
  else if (data.diet === "often") score += 4;
  score += data.heavyBleeding ? 12 : 0;
  score += data.recentBloodLoss ? 12 : 0;

  let risk = "Low";
  if (score >= 60) risk = "High";
  else if (score >= 30) risk = "Medium";
  return { score, risk };
}

/* ---------------- MAIN PAGE ---------------- */

export default function ScreenPage() {
  const router = useRouter();
  const [form, setForm] = useState<SymptomForm>({
    fatigue: 1,
    breathlessness: false,
    dizziness: false,
    pica: false,
    fastHeartbeat: false,
    pallor: "none",
    ageGroup: "adult",
    diet: "sometimes",
    heavyBleeding: false,
    recentBloodLoss: false,
  });

  const submitHandler = () => {
    const result = calculateRisk(form);
    router.push(`/result?score=${result.score}&risk=${result.risk}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-5 mt-10 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
                <Sparkles className="w-4 h-4 text-rose-500 " />
                <span className="text-xs font-bold uppercase tracking-wider  text-slate-600">Health Assessment</span>
            </div>
          <h1 className="text-4xl font-black text-slate-900">Endemic Screening</h1>
          <p className="text-slate-500">Provide accurate details for a better risk analysis.</p>
        </div>

        <div className="space-y-6">
          
          {/* 1. AGE GROUP */}
          <QuestionCard title="Age Group" assamese="বয়স গোট" icon={User}>
            <div className="grid grid-cols-2 gap-3">
              {["child", "teen", "adult", "senior"].map((age) => (
                <button
                  key={age}
                  onClick={() => setForm({...form, ageGroup: age as any})}
                  className={`py-3 rounded-xl border-2 capitalize font-medium transition-all ${
                    form.ageGroup === age ? "border-rose-500 bg-rose-50 text-rose-700" : "border-slate-100 bg-white text-slate-600"
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </QuestionCard>

          {/* 2. FATIGUE SLIDER */}
          <QuestionCard title="How tired do you feel?" assamese="ভাগৰ কেনেকুৱা লাগে?" icon={Activity}>
            <input 
              type="range" min="1" max="5" value={form.fatigue} 
              onChange={(e) => setForm({...form, fatigue: parseInt(e.target.value)})}
              className="w-full h-2 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
              <span>FRESH</span>
              <span className="text-rose-600">LEVEL {form.fatigue}</span>
              <span>EXHAUSTED</span>
            </div>
          </QuestionCard>

          {/* 3. BREATHLESSNESS */}
          <QuestionCard title="Breathless during activity?" assamese="উশাহ চুটি হয় নেকি?" icon={Wind}>
            <YesNoToggle value={form.breathlessness} onChange={(val) => setForm({...form, breathlessness: val})} />
          </QuestionCard>

          {/* 4. DIZZINESS */}
          <QuestionCard title="Dizzy or light-headed?" assamese="মূৰ ঘূৰায় নেকি?" icon={Brain}>
            <YesNoToggle value={form.dizziness} onChange={(val) => setForm({...form, dizziness: val})} />
          </QuestionCard>

          {/* 5. PICA */}
          <QuestionCard title="Crave ice, chalk, or mud?" assamese="মাটি বা চক খাবৰ মন যায় নেকি?" icon={Cookie}>
            <YesNoToggle value={form.pica} onChange={(val) => setForm({...form, pica: val})} />
          </QuestionCard>

          {/* 6. HEARTBEAT */}
          <QuestionCard title="Fast heartbeat?" assamese="হৃদস্পন্দন দ্ৰুত নেকি?" icon={Heart}>
            <YesNoToggle value={form.fastHeartbeat} onChange={(val) => setForm({...form, fastHeartbeat: val})} />
          </QuestionCard>

          {/* 7. PALLOR (EYE/LIPS) */}
          <QuestionCard title="Color of Nails/Lips" assamese="নখ বা ওঁঠৰ ৰং" icon={Eye}>
            <div className="flex gap-3">
              {["none", "mild", "severe"].map((p) => (
                <button
                  key={p}
                  onClick={() => setForm({...form, pallor: p as any})}
                  className={`flex-1 py-3 rounded-xl border-2 capitalize font-medium transition-all ${
                    form.pallor === p ? "border-rose-500 bg-rose-50 text-rose-700" : "border-slate-100 bg-white text-slate-600"
                  }`}
                >
                  {p === 'none' ? 'Normal' : p}
                </button>
              ))}
            </div>
          </QuestionCard>

          {/* 8. DIET */}
          <QuestionCard title="Iron-rich food frequency" assamese="আইৰনযুক্ত খাদ্য খোৱাৰ সঘনতা" icon={Utensils}>
            <div className="grid grid-cols-2 gap-3">
              {["rarely", "sometimes", "often", "daily"].map((d) => (
                <button
                  key={d}
                  onClick={() => setForm({...form, diet: d as any})}
                  className={`py-3 rounded-xl border-2 capitalize font-medium transition-all ${
                    form.diet === d ? "border-rose-500 bg-rose-50 text-rose-700" : "border-slate-100 bg-white text-slate-600"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </QuestionCard>

          {/* 9. HEAVY BLEEDING */}
          <QuestionCard title="Heavy menstrual bleeding?" assamese="অত্যধিক ঋতুস্ৰাৱ হয় নেকি?" icon={Droplets}>
            <YesNoToggle value={form.heavyBleeding} onChange={(val) => setForm({...form, heavyBleeding: val})} />
          </QuestionCard>

          {/* 10. BLOOD LOSS */}
          <QuestionCard title="Recent injury or blood loss?" assamese="শেহতীয়া আঘাত বা তেজ ওলোৱা?" icon={Syringe}>
            <YesNoToggle value={form.recentBloodLoss} onChange={(val) => setForm({...form, recentBloodLoss: val})} />
          </QuestionCard>

        </div>

        <button
          onClick={submitHandler}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-rose-600 transition-all shadow-xl active:scale-95"
        >
          GET RESULTS →
        </button>
      </div>
    </main>
  );
}