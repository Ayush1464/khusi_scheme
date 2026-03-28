import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Package, Users, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useNavigate } from 'react-router';

const productionData = [
  { month: 'Jan', produced: 3200000, distributed: 3000000 },
  { month: 'Feb', produced: 3500000, distributed: 3300000 },
  { month: 'Mar', produced: 3800000, distributed: 3600000 },
  { month: 'Apr', produced: 4000000, distributed: 3900000 },
  { month: 'May', produced: 3900000, distributed: 3800000 },
  { month: 'Jun', produced: 4200000, distributed: 4100000 },
];

const districtData = [
  { name: 'Khorda', value: 15 },
  { name: 'Cuttack', value: 12 },
  { name: 'Puri', value: 10 },
  { name: 'Ganjam', value: 13 },
  { name: 'Others', value: 50 },
];

const COLORS = ['#ea580c', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'];

function WebPlatformPreview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm mb-4">
            Platform Preview
          </div>
          <h2 className="text-5xl mb-4">
            Powerful <span className="text-orange-600">Dashboard</span> Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intuitive interfaces designed for administrators, logistics teams, and SHG members
          </p>
        </motion.div>

        {/* Admin Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl mb-6 text-gray-900">Admin Dashboard</h3>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Package, label: 'Total Production', value: '23.6M', change: '+12%', color: 'orange' },
                { icon: TrendingUp, label: 'Distribution', value: '22.7M', change: '+8%', color: 'green' },
                { icon: Users, label: 'Active SHGs', value: '156', change: '+5', color: 'blue' },
                { icon: CheckCircle, label: 'Quality Rate', value: '98.5%', change: '+2%', color: 'purple' },
              ].map((kpi, index) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`bg-${kpi.color}-50 border border-${kpi.color}-200 rounded-2xl p-6`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <kpi.icon className={`w-8 h-8 text-${kpi.color}-600`} />
                    <span className="text-green-600 text-sm">{kpi.change}</span>
                  </div>
                  <div className="text-3xl mb-1">{kpi.value}</div>
                  <div className="text-sm text-gray-600">{kpi.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Production vs Distribution Chart */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg mb-4 text-gray-900">Production & Distribution Trends</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="produced" fill="#ea580c" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="distributed" fill="#fb923c" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* District Distribution */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg mb-4 text-gray-900">Distribution by District (%)</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={districtData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {districtData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logistics Tracking Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl mb-6 text-gray-900">GPS Tracking Interface</h3>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0NjI1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Map View"
                    className="w-full h-full object-cover rounded-2xl opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <MapPin className="w-6 h-6 text-orange-600 inline mr-2" />
                      <span className="text-gray-900">12 Active Deliveries</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg mb-4 text-gray-900">Active Vehicles</h4>
                {[
                  { id: 'VH-2341', location: 'Bhubaneswar → Cuttack', eta: '45 min', status: 'On Time' },
                  { id: 'VH-2342', location: 'Puri → Konark', eta: '1.2 hrs', status: 'On Time' },
                  { id: 'VH-2343', location: 'Berhampur → Ganjam', eta: '2 hrs', status: 'Delayed' },
                ].map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-600">{vehicle.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        vehicle.status === 'On Time' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {vehicle.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{vehicle.location}</div>
                    <div className="text-xs text-gray-500">ETA: {vehicle.eta}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SHG Mobile Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl mb-6 text-gray-900">SHG Mobile Interface</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-3xl p-8 shadow-2xl">
              <Users className="w-12 h-12 mb-4" />
              <h4 className="text-2xl mb-2">Member Portal</h4>
              <p className="text-orange-100 mb-6">Easy-to-use mobile interface for SHG members</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Daily production logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Performance tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Payment status</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <BarChart3 className="w-12 h-12 mb-4 text-orange-600" />
              <h4 className="text-2xl mb-2 text-gray-900">Analytics</h4>
              <p className="text-gray-600 mb-6">Real-time insights and reports</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-2xl">45,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Target</span>
                  <span className="text-lg text-green-600">90%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-3xl p-8 shadow-2xl">
              <Package className="w-12 h-12 mb-4" />
              <h4 className="text-2xl mb-2">Inventory</h4>
              <p className="text-green-100 mb-6">Stock and material tracking</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Raw material alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Finished goods count</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Stock requisition</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-10 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl mb-4">Experience the Live Platform</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Click below to explore the fully functional admin dashboards
          </p>
          
          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate('/admin/government')}
              className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all flex items-center gap-3 shadow-xl group"
            >
              <ExternalLink className="w-5 h-5" />
              Government Admin Panel
            </button>
            
            <button
              onClick={() => navigate('/admin/school')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all flex items-center gap-3 border border-white/30 group"
            >
              <ExternalLink className="w-5 h-5" />
              School Admin Panel
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WebPlatformPreview;