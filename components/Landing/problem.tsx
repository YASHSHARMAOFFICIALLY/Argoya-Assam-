
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
    <section id="problem" className="py-24 bg-slate-50  relative overflow-hidden">
      {/* Background Decorative Elements - Matching Hero Style */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/50 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100/40 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-100 border border-primary-200 px-4 py-1.5 rounded-full mb-6">
          
            <span className="text-4xl font-bold text-primary-700 text-center uppercase tracking-normal dark:text-white">Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tigh">
            Anemia is a <span className=" bg-clip-text bg-gradient-to-r text-red-600 from-primary-600 to-primary-800">Silent Epidemic</span>
          </h2>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed dark:bg-white ">
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
              
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 ">{item.title}</h3>
              <div className={`text-4xl font-black mb-4 ${item.accent}`}>{item.stat}</div>
              <p className="text-slate-600 text-sm leading-relaxed ">{item.description}</p>
              
              {/* Subtle Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
