import { motion } from 'motion/react';
import { 
  Package, 
  Shield, 
  BookOpen, 
  CheckCircle, 
  Box, 
  MapPin, 
  Calculator, 
  LayoutDashboard 
} from 'lucide-react';

const modules = [
  {
    icon: Package,
    title: 'Raw Material Monitoring',
    description: 'Real-time tracking of raw material inventory, procurement, and quality checks',
    features: ['Stock alerts', 'Supplier management', 'Quality verification'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Shield,
    title: 'BIS Compliance',
    description: 'Automated compliance verification and certification management system',
    features: ['Auto verification', 'Certificate tracking', 'Compliance reports'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: BookOpen,
    title: 'Digital Logbook',
    description: 'Paperless production recording with timestamp and user authentication',
    features: ['Digital records', 'Audit trails', 'Easy access'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance (QAP)',
    description: 'Comprehensive quality checks at every production stage with batch tracking',
    features: ['Multi-stage QC', 'Batch tracking', 'Rejection logs'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Box,
    title: 'Packaging & Dispatch',
    description: 'Automated packaging logs and dispatch management with barcode generation',
    features: ['Barcode system', 'Dispatch tracking', 'Invoice generation'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Real-time vehicle tracking and route optimization for efficient delivery',
    features: ['Live tracking', 'Route optimization', 'Delivery alerts'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: Calculator,
    title: 'Accounting Module',
    description: 'Integrated financial management for expenses, revenues, and transactions',
    features: ['Expense tracking', 'Revenue reports', 'Financial analytics'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
  },
  {
    icon: LayoutDashboard,
    title: 'SHG Dashboard',
    description: 'Personalized dashboards for Self-Help Groups with performance metrics',
    features: ['Performance KPIs', 'Target tracking', 'Member management'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
];

function CoreModules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-5xl mb-4">
            <span className="text-orange-600">8 Core Modules</span> for Complete Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each module designed to address specific operational needs
            with seamless integration across the platform
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`${module.bgColor} rounded-3xl p-6 border-2 ${module.borderColor} hover:shadow-2xl transition-all bg-white`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 shadow-lg`}>
                <module.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl mb-3 text-gray-900">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {module.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {module.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${module.color}`} />
                    <span className="text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl mb-4">Seamless Integration</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            All modules work together as a unified ecosystem, sharing data in real-time
            for maximum efficiency and visibility
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-orange-200 text-sm">Data Synchronization</div>
            </div>
            <div>
              <div className="text-4xl mb-2">Real-time</div>
              <div className="text-orange-200 text-sm">Updates Across Modules</div>
            </div>
            <div>
              <div className="text-4xl mb-2">Single</div>
              <div className="text-orange-200 text-sm">Source of Truth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CoreModules;
