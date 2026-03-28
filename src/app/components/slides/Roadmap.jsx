import { motion } from 'motion/react';
import { Rocket, Target, TrendingUp, Zap, Globe } from 'lucide-react';

const roadmapPhases = [
  {
    year: 'Year 1',
    period: '2026',
    title: 'Foundation & Launch',
    icon: Rocket,
    color: 'from-blue-500 to-blue-600',
    milestones: [
      'Core platform development',
      'Pilot launch in 5 districts',
      'Onboard 50 SHGs',
      'Basic mobile app release',
    ],
    metrics: '10M units/year',
  },
  {
    year: 'Year 2',
    period: '2027',
    title: 'Scale & Expansion',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    milestones: [
      'Expand to all 30 districts',
      'Advanced analytics dashboard',
      'AI-powered quality checks',
      'Integrate 200+ SHGs',
    ],
    metrics: '25M units/year',
  },
  {
    year: 'Year 3',
    period: '2028',
    title: 'Optimization',
    icon: Zap,
    color: 'from-orange-500 to-orange-600',
    milestones: [
      'Full automation of logistics',
      'Predictive inventory system',
      'Blockchain for traceability',
      'Mobile-first experience',
    ],
    metrics: '40M units/year',
  },
  {
    year: 'Year 4',
    period: '2029',
    title: 'Innovation',
    icon: Target,
    color: 'from-purple-500 to-purple-600',
    milestones: [
      'IoT-enabled production units',
      'Real-time quality sensors',
      'Advanced ML predictions',
      'Multi-state integration ready',
    ],
    metrics: '50M units/year',
  },
  {
    year: 'Year 5',
    period: '2030',
    title: 'National Model',
    icon: Globe,
    color: 'from-pink-500 to-pink-600',
    milestones: [
      'Pan-India framework ready',
      'Export quality compliance',
      'Open API for partners',
      'Industry benchmark platform',
    ],
    metrics: '75M+ units/year',
  },
];

function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm mb-4">
            5-Year Vision
          </div>
          <h2 className="text-5xl mb-4">
            Strategic <span className="text-orange-600">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A phased approach to building Odisha's most advanced
            sanitary napkin production ecosystem
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4 justify-between">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{phase.period}</div>
                        <h3 className="text-2xl text-gray-900">{phase.title}</h3>
                      </div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {phase.milestones.map((milestone, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color}`} />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-1">Production Target</div>
                      <div className="text-2xl text-orange-600">{phase.metrics}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase.color} border-4 border-white shadow-lg z-10`}
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} opacity-20 blur-xl`}
                  />
                </div>

                {/* Year Label */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="text-6xl text-orange-600/20 hidden lg:block"
                  >
                    {phase.year}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl mb-4">Vision 2030</h3>
          <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
            By 2030, SmartKhusi will be the national benchmark for digitized
            women's healthcare product manufacturing and distribution
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-orange-200 text-sm">SHGs Empowered</div>
            </div>
            <div>
              <div className="text-4xl mb-2">75M+</div>
              <div className="text-orange-200 text-sm">Annual Production</div>
            </div>
            <div>
              <div className="text-4xl mb-2">10,000+</div>
              <div className="text-orange-200 text-sm">Schools Reached</div>
            </div>
            <div>
              <div className="text-4xl mb-2">5 States</div>
              <div className="text-orange-200 text-sm">Pan-India Model</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Roadmap;
