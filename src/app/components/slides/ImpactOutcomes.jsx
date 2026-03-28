import { motion } from 'motion/react';
import { Users, TrendingUp, Shield, Award, Heart, Leaf, Target, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const impactAreas = [
  {
    icon: Users,
    title: 'Women Empowerment',
    stat: '1,000+',
    description: 'SHG members trained and earning sustainable livelihood',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: TrendingUp,
    title: '100% Traceability',
    stat: 'End-to-End',
    description: 'Complete visibility from raw material to delivery',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'BIS Compliance',
    stat: '98.5%',
    description: 'Quality-certified products meeting national standards',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Leaf,
    title: 'Zero Wastage',
    stat: '95%',
    description: 'Reduction in material wastage through smart inventory',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
];

const outcomes = [
  {
    icon: Target,
    title: 'Operational Efficiency',
    items: [
      '80% reduction in manual data entry',
      '60% faster delivery times',
      '90% reduction in errors',
      'Real-time inventory updates',
    ],
  },
  {
    icon: Heart,
    title: 'Social Impact',
    items: [
      'Dignified menstrual health for girls',
      'School attendance improvement',
      'Breaking menstrual stigma',
      'Rural women entrepreneurship',
    ],
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    items: [
      'BIS certified production',
      'Consistent product quality',
      'Zero counterfeit products',
      'Customer satisfaction tracking',
    ],
  },
];

function ImpactOutcomes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            Impact & Outcomes
          </div>
          <h2 className="text-5xl mb-4">
            Creating <span className="text-orange-600">Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives through technology, transparency, and sustainable empowerment
          </p>
        </motion.div>

        {/* Key Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${area.bgColor} rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all bg-white`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl mb-2 text-gray-900">
                {area.stat}
              </div>
              
              <h3 className="text-xl mb-3 text-gray-900">
                {area.title}
              </h3>
              
              <p className="text-sm text-gray-600">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Outcomes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <outcome.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl text-gray-900">{outcome.title}</h3>
              </div>
              
              <div className="space-y-3">
                {outcome.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Impact Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 flex flex-col justify-center text-white">
              <Sparkles className="w-12 h-12 mb-6" />
              <h3 className="text-4xl mb-6">Empowering Rural Women</h3>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                SmartKhusi isn't just a platform—it's a movement empowering thousands of
                women entrepreneurs while ensuring menstrual hygiene dignity for every girl child.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl">₹15,000+</div>
                    <div className="text-orange-200 text-sm">Average monthly income per SHG member</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl">50,000+</div>
                    <div className="text-orange-200 text-sm">Girls reached with quality products</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700727448686-b314cb5f9948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdvcmtpbmclMjBmYWN0b3J5fGVufDF8fHx8MTc3NDcxNjE5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Women Empowerment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-16 bg-white rounded-3xl p-10 shadow-xl border border-gray-200"
        >
          <h3 className="text-3xl text-center mb-10 text-gray-900">
            By The Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2 text-orange-600">40Cr</div>
              <div className="text-sm text-gray-600">Annual Production</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-green-600">100%</div>
              <div className="text-sm text-gray-600">Traceability</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Less Wastage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-purple-600">80%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-pink-600">1000+</div>
              <div className="text-sm text-gray-600">Women Empowered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ImpactOutcomes;
