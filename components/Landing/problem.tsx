export  default function  Problem() {
  const problems = [
    {
      icon: '💰',
      title: 'Expensive Testing',
      stat: '₹50-150',
      description: 'Lab-based Hb tests are unaffordable for many rural families'
    },
    {
      icon: '🏥',
      title: 'Limited Access',
      stat: '80%+',
      description: 'Villages lack nearby health facilities with testing equipment'
    },
    {
      icon: '⏰',
      title: 'Delayed Detection',
      stat: '2-3 weeks',
      description: 'Wait time for results leads to severe complications'
    },
    {
      icon: '📊',
      title: 'High Prevalence',
      stat: '58%',
      description: 'Women in Assam suffer from anemia (NFHS-5 data)'
    }
  ]

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">The Crisis</span>
          <h2 className="section-title mt-3">
            Anemia is a <span className="text-primary-600">Silent Epidemic</span> in Rural Assam
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Despite being preventable and treatable, millions of women and adolescent girls suffer from severe anemia due to lack of accessible screening.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="card group hover:border-primary-300 border-2 border-transparent"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">{problem.stat}</div>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">The Consequences</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Maternal mortality during pregnancy and childbirth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Impaired child development and cognitive function</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Reduced productivity and economic participation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Perpetuation of poverty cycle across generations</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="text-6xl md:text-7xl font-bold text-accent-300 mb-2">3.5M+</div>
              <p className="text-xl">Women affected in Assam alone</p>
              <div className="mt-8 text-4xl md:text-5xl font-bold text-white mb-2">₹2,000 Cr</div>
              <p className="text-lg">Annual economic burden on Assam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

