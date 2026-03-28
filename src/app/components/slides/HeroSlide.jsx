import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Shield, School } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function HeroSlide() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Admin Panel Access Buttons */}
      <div className="absolute top-8 left-8 z-50 flex gap-3">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate('/admin/government')}
          className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/30 flex items-center gap-2 group"
        >
          <Shield className="w-5 h-5" />
          <span className="text-sm">Govt Admin</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/admin/school')}
          className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/30 flex items-center gap-2 group"
        >
          <School className="w-5 h-5" />
          <span className="text-sm">School Admin</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Mission Shakti, Government of Odisha</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl mb-6 leading-tight"
              >
                SmartKhusi
                <br />
                <span className="text-orange-200">Platform</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-orange-100 mb-8 leading-relaxed"
              >
                Digital Monitoring & Management System
                <br />
                for Sanitary Napkin Production
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => navigate('/overview')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all flex items-center gap-2 shadow-xl group"
                >
                  Explore Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all border border-white/30">
                  Watch Demo
                </button>
              </motion.div>
              
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20"
              >
                <div>
                  <div className="text-3xl mb-1">40Cr+</div>
                  <div className="text-orange-200 text-sm">Annual Production</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">5,000+</div>
                  <div className="text-orange-200 text-sm">Schools Coverage</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">100%</div>
                  <div className="text-orange-200 text-sm">Traceability</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:scale-105 transition-transform"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759738093180-aa603b03fc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBydXJhbCUyMHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MXx8fHwxNzc0NzE2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Women Empowerment"
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-white text-sm">Women Empowerment</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:scale-105 transition-transform mt-8"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHRydWNrfGVufDF8fHx8MTc3NDcwMjgzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Logistics"
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-white text-sm">Smart Logistics</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:scale-105 transition-transform col-span-2"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765258923753-1c1dd0fc3b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzc0NzE2MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Technology"
                    className="w-full h-40 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-white text-sm">Digital Technology</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;