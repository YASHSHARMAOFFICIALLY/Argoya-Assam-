// export  default function  Problem() {
//   const problems = [
//     {
//       icon: '💰',
//       title: 'Expensive Testing',
//       stat: '₹50-150',
//       description: 'Lab-based Hb tests are unaffordable for many rural families'
//     },
//     {
//       icon: '🏥',
//       title: 'Limited Access',
//       stat: '80%+',
//       description: 'Villages lack nearby health facilities with testing equipment'
//     },
//     {
//       icon: '⏰',
//       title: 'Delayed Detection',
//       stat: '2-3 weeks',
//       description: 'Wait time for results leads to severe complications'
//     },
//     {
//       icon: '📊',
//       title: 'High Prevalence',
//       stat: '58%',
//       description: 'Women in Assam suffer from anemia (NFHS-5 data)'
//     }
//   ]

//   return (
//     <section id="problem" className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">The Crisis</span>
//           <h2 className="section-title mt-3">
//             Anemia is a <span className="text-primary-600">Silent Epidemic</span> in Rural Assam
//           </h2>
//           <p className="text-lg text-gray-600 mt-4">
//             Despite being preventable and treatable, millions of women and adolescent girls suffer from severe anemia due to lack of accessible screening.
//           </p>
//         </div>

//         {/* Problem Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {problems.map((problem, index) => (
//             <div 
//               key={index} 
//               className="card group hover:border-primary-300 border-2 border-transparent"
//             >
//               <div className="text-5xl mb-4">{problem.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
//               <div className="text-3xl font-bold text-primary-600 mb-3">{problem.stat}</div>
//               <p className="text-gray-600">{problem.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Impact Statement */}
//         <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-3xl font-bold mb-4">The Consequences</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-3">
//                   <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Maternal mortality during pregnancy and childbirth</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Impaired child development and cognitive function</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Reduced productivity and economic participation</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                   <span>Perpetuation of poverty cycle across generations</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="text-center md:text-right">
//               <div className="text-6xl md:text-7xl font-bold text-accent-300 mb-2">3.5M+</div>
//               <p className="text-xl">Women affected in Assam alone</p>
//               <div className="mt-8 text-4xl md:text-5xl font-bold text-white mb-2">₹2,000 Cr</div>
//               <p className="text-lg">Annual economic burden on Assam</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
export default function Problem() {
  const problems = [
    {
      icon: '💰',
      title: 'Expensive Testing',
      stat: '₹50-150',
      description: 'Lab-based Hb tests are unaffordable for many rural families',
      accent: 'text-amber-500'
    },
    {
      icon: '🏥',
      title: 'Limited Access',
      stat: '80%+',
      description: 'Villages lack nearby health facilities with testing equipment',
      accent: 'text-rose-500'
    },
    {
      icon: '⏰',
      title: 'Delayed Detection',
      stat: '2-3 weeks',
      description: 'Wait time for results leads to severe complications',
      accent: 'text-sky-500'
    },
    {
      icon: '📊',
      title: 'High Prevalence',
      stat: '58%',
      description: 'Women in Assam suffer from anemia (NFHS-5 data)',
      accent: 'text-emerald-500'
    }
  ]

  return (
    <section id="problem" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements - Matching Hero Style */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/50 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100/40 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 border border-primary-200 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
            <span className="text-4xl font-bold text-primary-700 text-center uppercase tracking-normal">Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Anemia is a <span className=" bg-clip-text bg-gradient-to-r text-red-600 from-primary-600 to-primary-800">Silent Epidemic</span>
          </h2>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed">
            Despite being preventable, millions of women in rural Assam suffer due to systemic barriers that our smartphone technology eliminates.
          </p>
        </div>

        {/* Problem Cards - Elevated Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Floating Icon Circle */}
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{item.title}</h3>
              <div className={`text-4xl font-black mb-4 ${item.accent}`}>{item.stat}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              
              {/* Subtle Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Impact Statement - High Contrast "Hero-Style" Card */}
        {/* <div className="mt-20 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl">
        
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/20 blur-[80px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                The Cost of <br/><span className="text-accent-400 font-display italic">Inaction</span>
              </h3>
              <div className="space-y-6">
                {[
                  "Maternal mortality during pregnancy",
                  "Impaired child cognitive development",
                  "Reduced local economic productivity"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center">
                <div className="text-5xl font-black text-accent-400 mb-2">3.5M+</div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Women Affected</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center">
                <div className="text-5xl font-black text-white mb-2">₹2k Cr</div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Economic Burden</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
