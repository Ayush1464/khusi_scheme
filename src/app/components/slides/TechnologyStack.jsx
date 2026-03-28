import { motion } from 'motion/react';
import { Code, Server, Database, Cloud, MapPin, Shield, Zap, Layers } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const techStack = {
  frontend: [
    { name: 'React.js', description: 'Modern UI framework', icon: Code },
    { name: 'Next.js', description: 'Production framework', icon: Layers },
    { name: 'Tailwind CSS', description: 'Utility-first styling', icon: Code },
  ],
  backend: [
    { name: 'Node.js', description: 'JavaScript runtime', icon: Server },
    { name: 'Django/Python', description: 'Robust backend', icon: Server },
    { name: 'REST APIs', description: 'Secure endpoints', icon: Zap },
  ],
  database: [
    { name: 'PostgreSQL', description: 'Primary database', icon: Database },
    { name: 'Redis', description: 'Caching layer', icon: Database },
    { name: 'MongoDB', description: 'Document store', icon: Database },
  ],
  cloud: [
    { name: 'AWS/Azure', description: 'Cloud infrastructure', icon: Cloud },
    { name: 'Docker', description: 'Containerization', icon: Layers },
    { name: 'Kubernetes', description: 'Orchestration', icon: Cloud },
  ],
  integrations: [
    { name: 'Google Maps API', description: 'GPS tracking', icon: MapPin },
    { name: 'Payment Gateway', description: 'Transactions', icon: Shield },
    { name: 'SMS Gateway', description: 'Notifications', icon: Zap },
  ],
};

function TechnologyStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm mb-4 border border-orange-500/30">
            Technology Stack
          </div>
          <h2 className="text-5xl mb-4">
            Built on <span className="text-orange-400">Modern Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade architecture ensuring scalability, security, and reliability
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <div className="grid md:grid-cols-5 gap-6">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center"
              >
                <Code className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Frontend</h4>
                <div className="text-xs text-blue-200">React & Next.js</div>
              </motion.div>

              {/* API Gateway */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-center"
              >
                <Zap className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-lg mb-2">API Layer</h4>
                <div className="text-xs text-purple-200">REST APIs</div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-center"
              >
                <Server className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Backend</h4>
                <div className="text-xs text-green-200">Node.js / Django</div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-center"
              >
                <Database className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Database</h4>
                <div className="text-xs text-orange-200">PostgreSQL</div>
              </motion.div>

              {/* Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-center"
              >
                <Cloud className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Cloud</h4>
                <div className="text-xs text-indigo-200">AWS / Azure</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Tech Stack */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-400" />
              Frontend Layer
            </h3>
            <div className="space-y-4">
              {techStack.frontend.map((tech, index) => (
                <div key={tech.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <div className="text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-green-400" />
              Backend Layer
            </h3>
            <div className="space-y-4">
              {techStack.backend.map((tech, index) => (
                <div key={tech.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                  <div>
                    <div className="text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-orange-400" />
              Database Layer
            </h3>
            <div className="space-y-4">
              {techStack.database.map((tech, index) => (
                <div key={tech.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <div>
                    <div className="text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cloud & Integrations */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <Cloud className="w-6 h-6 text-indigo-400" />
              Cloud Infrastructure
            </h3>
            <div className="space-y-4">
              {techStack.cloud.map((tech, index) => (
                <div key={tech.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2" />
                  <div>
                    <div className="text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-pink-400" />
              Third-Party Integrations
            </h3>
            <div className="space-y-4">
              {techStack.integrations.map((tech, index) => (
                <div key={tech.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                  <div>
                    <div className="text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-10 text-center"
        >
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl mb-4">Enterprise Security</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Multi-layer security with encryption, authentication, and compliance measures
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl mb-1">SSL/TLS</div>
              <div className="text-orange-200 text-sm">Encryption</div>
            </div>
            <div>
              <div className="text-2xl mb-1">OAuth 2.0</div>
              <div className="text-orange-200 text-sm">Authentication</div>
            </div>
            <div>
              <div className="text-2xl mb-1">RBAC</div>
              <div className="text-orange-200 text-sm">Access Control</div>
            </div>
            <div>
              <div className="text-2xl mb-1">99.9%</div>
              <div className="text-orange-200 text-sm">Uptime SLA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechnologyStack;
