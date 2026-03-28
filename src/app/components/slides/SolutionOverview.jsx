import { motion } from 'motion/react';
import { Layers, Eye, Workflow, Zap, Shield, BarChart3, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Complete visibility into every stage of production and distribution',
  },
  {
    icon: Workflow,
    title: 'Traceability',
    description: 'Track every product from raw material to final delivery',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automated workflows reducing manual intervention by 80%',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'Built-in BIS compliance checks and certification management',
  },
];

function SolutionOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            Our Solution
          </div>
          <h2 className="text-5xl mb-4">
            Introducing <span className="text-orange-600">SmartKhusi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A centralized, intelligent platform that digitizes and optimizes
            the entire sanitary napkin production ecosystem
          </p>
        </motion.div>

        {/* System Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200 mb-12"
        >
          <h3 className="text-2xl text-center mb-10 text-gray-900">
            Centralized System Architecture
          </h3>
          
          <div className="relative">
            {/* Central Hub */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-12 py-8 rounded-3xl shadow-2xl"
              >
                <Layers className="w-12 h-12 mx-auto mb-3" />
                <div className="text-2xl text-center">SmartKhusi</div>
                <div className="text-sm text-orange-100 text-center">Central Platform</div>
              </motion.div>
            </div>

            {/* Connected Modules */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: BarChart3, label: 'Raw Material\nMonitoring', color: 'from-blue-500 to-blue-600' },
                { icon: Shield, label: 'BIS Compliance\nSystem', color: 'from-green-500 to-green-600' },
                { icon: Workflow, label: 'Digital\nLogbook', color: 'from-purple-500 to-purple-600' },
                { icon: Users, label: 'SHG\nDashboard', color: 'from-pink-500 to-pink-600' },
              ].map((module, index) => (
                <motion.div
                  key={module.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-0.5 bg-gradient-to-b from-orange-300 to-transparent" />
                  
                  <div className={`bg-gradient-to-br ${module.color} text-white p-6 rounded-2xl text-center shadow-lg`}>
                    <module.icon className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-sm whitespace-pre-line">{module.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {[
                { icon: Smartphone, label: 'GPS Tracking', color: 'from-orange-500 to-red-600' },
                { icon: BarChart3, label: 'Accounting\nModule', color: 'from-teal-500 to-teal-600' },
                { icon: Layers, label: 'Packaging &\nDispatch', color: 'from-indigo-500 to-indigo-600' },
                { icon: Shield, label: 'Quality\nAssurance', color: 'from-amber-500 to-amber-600' },
              ].map((module, index) => (
                <motion.div
                  key={module.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${module.color} text-white p-6 rounded-2xl text-center shadow-lg`}>
                    <module.icon className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-sm whitespace-pre-line">{module.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-2xl shadow-lg"
            >
              <feature.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-orange-100 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolutionOverview;
