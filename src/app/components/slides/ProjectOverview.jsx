import { motion } from 'motion/react';
import { TrendingUp, School, Target, Users, Package, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '40 Crore',
    label: 'Annual Production Target',
    description: 'Sanitary napkins produced yearly',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: School,
    value: '5,000+',
    label: 'Schools Coverage',
    description: 'Across rural Odisha',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    value: '10 Crore',
    label: 'Quarterly Target',
    description: 'Distribution milestone',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    value: '1,000+',
    label: 'SHG Members',
    description: 'Women entrepreneurs empowered',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MapPin,
    value: '30+',
    label: 'Districts',
    description: 'Pan-Odisha coverage',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Quality Compliance',
    description: 'BIS certified production',
    color: 'from-orange-500 to-red-600',
  },
];

function ProjectOverview() {
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
            Project Overview
          </div>
          <h2 className="text-5xl mb-4">
            Transforming <span className="text-orange-600">Rural Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive digital ecosystem for managing sanitary napkin production,
            distribution, and compliance across Odisha
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="text-4xl mb-2">
                {stat.value}
              </div>
              
              <div className="text-gray-900 mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl mb-4">
              Our Vision
            </h3>
            <p className="text-xl text-orange-100 leading-relaxed">
              To create a transparent, efficient, and sustainable ecosystem that ensures
              every girl child in rural Odisha has access to quality sanitary products,
              while empowering local women entrepreneurs through digital innovation.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-orange-400">
              <div>
                <div className="text-3xl mb-1">100%</div>
                <div className="text-orange-200 text-sm">Transparency</div>
              </div>
              <div>
                <div className="text-3xl mb-1">Zero</div>
                <div className="text-orange-200 text-sm">Wastage</div>
              </div>
              <div>
                <div className="text-3xl mb-1">Full</div>
                <div className="text-orange-200 text-sm">Traceability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectOverview;
