// export default function Solution() {
//   return (
//     <section id="solution" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left - Visual */}
//           <div className="order-2 lg:order-1">
//             <div className="relative">
//               {/* Main Card */}
//               <div className="bg-white rounded-2xl shadow-2xl p-8">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
//                     <span className="text-3xl">🩺</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900">AnemiaScreen Assam</h4>
//                     <p className="text-sm text-gray-600">Smart Screening Tool</p>
//                   </div>
//                 </div>

//                 {/* Features List */}
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">15 Smart Questions</p>
//                       <p className="text-sm text-gray-600">Evidence-based questionnaire + simple vitals</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Instant Risk Score</p>
//                       <p className="text-sm text-gray-600">Low/Medium/High classification in 5 minutes</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Clear Action Plan</p>
//                       <p className="text-sm text-gray-600">Diet, supplements, and referral guidance</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Works Offline</p>
//                       <p className="text-sm text-gray-600">No internet needed during screening</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Score Visualization */}
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                         <span className="text-xl">🟢</span>
//                       </div>
//                       <p className="text-xs font-semibold text-gray-900">Low Risk</p>
//                       <p className="text-xs text-gray-600">0-30</p>
//                     </div>
//                     <div>
//                       <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                         <span className="text-xl">🟡</span>
//                       </div>
//                       <p className="text-xs font-semibold text-gray-900">Medium</p>
//                       <p className="text-xs text-gray-600">31-60</p>
//                     </div>
//                     <div>
//                       <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                         <span className="text-xl">🔴</span>
//                       </div>
//                       <p className="text-xs font-semibold text-gray-900">High Risk</p>
//                       <p className="text-xs text-gray-600">61-100</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Badge */}
//               <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
//                 <p className="text-sm font-bold">100% Free</p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="order-1 lg:order-2">
//             <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Solution</span>
//             <h2 className="section-title mt-3">
//               Turn Every <span className="text-primary-600">Smartphone</span> Into a Screening Clinic
//             </h2>
//             <p className="text-lg text-gray-600 mt-4 mb-8">
//               AnemiaScreen Assam empowers ASHA workers to conduct accurate anemia screenings using just a smartphone—no expensive equipment, no lab access needed.
//             </p>

//             {/* Value Props */}
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-1">Evidence-Based Scoring</h4>
//                   <p className="text-gray-600">Based on WHO guidelines and NFHS-5 data. Validated risk calculation algorithm with 85% accuracy.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-1">Multi-Language Support</h4>
//                   <p className="text-gray-600">Available in Assamese, Hindi, and English. Voice input option for low-literacy users.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                   <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-1">Community Analytics</h4>
//                   <p className="text-gray-600">Village-level heatmaps help health officers identify high-risk areas for targeted intervention.</p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-8">
//               <a href="#how-it-works" className="btn-primary inline-block">
//                 See How It Works →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-0 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Visual Mockup ─────────────────────────────────────── */}
          <div className="relative order-2 lg:order-1">

            {/* Subtle background accents */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-accent-100/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {/* Main Phone-like Card */}
              <div className="bg-white rounded-3xl border border-gray-100/80 shadow-xl shadow-gray-200/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-200/30">

                {/* Notch simulation + Status bar feel */}
                <div className="h-7 bg-gray-900/5 flex items-center justify-center">
                  <div className="w-24 h-1 bg-gray-400/40 rounded-full" />
                </div>

                {/* App Content */}
                <div className="p-6 sm:p-7">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-700/30 text-white text-2xl">
                        🩺
                      </div>
                      <div>
                        <h4 className="text-xl font-extrabold text-gray-900 tracking-tight">
                          AnemiaScreen
                        </h4>
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mt-0.5">
                          Assam Edition
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                      LIVE
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1 mb-7">
                    {[
                      { icon: "📝", title: "15 Smart Questions", desc: "WHO-aligned clinical flow" },
                      { icon: "🧠", title: "Instant AI Risk Score", desc: "0–100 probability estimate" },
                      { icon: "📶", title: "Offline-first", desc: "Works anywhere, syncs later" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/70 hover:bg-primary-50/60 transition-colors duration-200 border border-gray-100/50"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Risk Assessment + Recommendation (now inside) */}
                  <div className="space-y-5 pt-5 border-t border-gray-100">
                    <div>
                      <div className="flex justify-between items-baseline mb-2.5">
                        <p className="text-base font-bold text-gray-900">Current Risk</p>
                        <span className="text-2xl font-black text-amber-600">58%</span>
                      </div>
                      <div className="h-3.5 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 w-[30%]" />
                        <div className="bg-amber-400 w-[28%]" />
                        <div className="bg-rose-500 w-[42%]" />
                      </div>
                    </div>

                    {/* Recommendation Card */}
                    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 p-5 rounded-2xl border border-amber-100/80">
                      <p className="text-xs font-bold uppercase text-amber-800 tracking-wide mb-2">
                        Immediate Suggestion
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Increase intake of iron-rich local greens like{" "}
                        <span className="font-semibold text-primary-700">Kolmou</span>, palak, and consider adding citrus for better absorption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ─────────────────────────────────────── */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-primary-100/60 border border-neutral-200 text-xl font-bold text-primary-700 uppercase tracking-widest mb-4 -ml-50">
              Our Solution 
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-3xl font-black text-gray-900 leading-tight mb-6">
              Zero-cost, high-impact anemia
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 bg-clip-text text-transparent">
                screening in your pocket
              </span>
            </h2>

            <p className="text-lg md:text-l text-gray-700 leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0 font-medium -mt-10">
              Replace expensive diagnostics with a clinically-validated, voice-guided tool designed for ASHA workers — accurate, offline-capable, and built for Assam.
            </p>

            {/* Value Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mb-40">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Evidence-based logic</h4>
                <p className="text-gray-600">
                  WHO-aligned symptom scoring → reliable 0–100 risk in <strong>under 3 minutes</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Assamese-first experience</h4>
                <p className="text-gray-600">
                  Voice prompts & guidance in local dialect — accessible even in low-literacy settings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Village-level insights</h4>
                <p className="text-gray-600">
                  Anonymous aggregated data → heatmaps & trends without compromising privacy.
                </p>
              </div>
            </div>

            {/* CTA */}
            {/* <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 text-black font-bold text-lg shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-[1.02] transition-all duration-300"
            >
              See How It Works →
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}