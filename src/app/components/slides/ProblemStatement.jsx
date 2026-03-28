import { motion } from 'motion/react';
import { AlertCircle, FileQuestion, Truck, Users, Database, ClipboardX, TrendingDown, Package } from 'lucide-react';

const problems = [
  {
    icon: FileQuestion,
    title: 'Manual Tracking',
    description: 'Paper-based records leading to data inconsistencies and delays',
    impact: 'High error rate, lost documentation',
    color: 'border-red-300 bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: ClipboardX,
    title: 'No Compliance System',
    description: 'Lack of standardized BIS compliance verification process',
    impact: 'Quality concerns, regulatory risks',
    color: 'border-orange-300 bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Truck,
    title: 'Logistics Gaps',
    description: 'Inefficient delivery tracking and route optimization',
    impact: 'Delayed deliveries, wastage',
    color: 'border-yellow-300 bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Users,
    title: 'SHG Inefficiency',
    description: 'Limited visibility into SHG performance and productivity',
    impact: 'Underutilized capacity',
    color: 'border-red-300 bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: Database,
    title: 'Data Fragmentation',
    description: 'Scattered information across multiple systems and registers',
    impact: 'Poor decision-making',
    color: 'border-orange-300 bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: TrendingDown,
    title: 'Inventory Mismanagement',
    description: 'No real-time stock monitoring leading to shortages',
    impact: 'Supply chain disruptions',
    color: 'border-yellow-300 bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Package,
    title: 'Quality Control Issues',
    description: 'Inconsistent quality checks and batch tracking',
    impact: 'Product quality variations',
    color: 'border-red-300 bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: AlertCircle,
    title: 'Accountability Gap',
    description: 'Difficult to trace issues back to source',
    impact: 'Limited accountability',
    color: 'border-orange-300 bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

function ProblemStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm mb-4">
            Current Challenges
          </div>
          <h2 className="text-5xl mb-4">
            The <span className="text-orange-600">Problem</span> We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional systems face critical challenges that impact efficiency,
            quality, and reach of sanitary napkin distribution
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${problem.color} rounded-2xl p-6 border-2 hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${problem.iconColor} flex-shrink-0`}>
                  <problem.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-3">
                {problem.description}
              </p>
              
              <div className="text-xs text-gray-600 bg-white/50 px-3 py-2 rounded-lg">
                <span className="opacity-75">Impact:</span> {problem.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200"
        >
          <h3 className="text-2xl text-center mb-8 text-gray-900">
            The Cost of Inefficiency
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Time lost in manual processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-600 mb-2">15%</div>
              <div className="text-sm text-gray-600">Product wastage due to poor tracking</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Delayed deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-2">₹50L+</div>
              <div className="text-sm text-gray-600">Annual inefficiency cost</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-gray-700">
            <span className="text-orange-600">SmartKhusi</span> addresses these challenges with 
            <br />a comprehensive digital solution
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProblemStatement;
