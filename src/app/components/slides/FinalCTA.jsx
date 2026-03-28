import { motion } from 'motion/react';
import { Mail, Phone, Globe, ArrowRight, Sparkles, Heart, Target } from 'lucide-react';
import { useNavigate } from 'react-router';

function FinalCTA() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-red-700" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-5xl w-full text-center text-white">
          {/* Icon Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-3xl bg-white/10 blur-xl"
              />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-7xl mb-6 leading-tight">
              Transforming Rural Healthcare
              <br />
              <span className="text-orange-200">Through Technology</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join us in building India's most advanced sanitary napkin production ecosystem—
            empowering women, ensuring quality, and creating lasting social impact.
          </motion.p>

          {/* Three Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <Heart className="w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-2xl mb-2">Social Impact</h3>
              <p className="text-orange-100">Empowering rural women and ensuring menstrual health dignity</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <Target className="w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-2xl mb-2">Government Trust</h3>
              <p className="text-orange-100">Built for Mission Shakti, Government of Odisha</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <Sparkles className="w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-2xl mb-2">Innovation</h3>
              <p className="text-orange-100">Leveraging cutting-edge technology for social good</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <button
              onClick={() => navigate('/')}
              className="bg-white text-orange-600 px-10 py-5 rounded-full hover:bg-orange-50 transition-all text-xl shadow-2xl flex items-center gap-3 group"
            >
              Start Presentation Again
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full hover:bg-white/30 transition-all text-xl border border-white/30">
              Schedule Demo
            </button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="border-t border-white/20 pt-12"
          >
            <h3 className="text-2xl mb-8">Get In Touch</h3>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-orange-100">smartkhusi@odisha.gov.in</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-orange-100">+91 674 XXXX XXXX</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-orange-100">smartkhusi.odisha.gov.in</span>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl mb-2">40Cr</div>
                <div className="text-orange-200 text-sm">Production</div>
              </div>
              <div>
                <div className="text-4xl mb-2">5,000+</div>
                <div className="text-orange-200 text-sm">Schools</div>
              </div>
              <div>
                <div className="text-4xl mb-2">1,000+</div>
                <div className="text-orange-200 text-sm">SHGs</div>
              </div>
              <div>
                <div className="text-4xl mb-2">100%</div>
                <div className="text-orange-200 text-sm">Transparent</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-orange-200 text-sm">
              © 2026 SmartKhusi Platform | Mission Shakti, Government of Odisha
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FinalCTA;
