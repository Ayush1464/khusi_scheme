import { motion } from 'motion/react';
import { 
  BarChart3,
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  MapPin, 
  School,
  Package,
  Users,
  Download,
  Filter,
  Search,
  Bell,
  Shield,
  Truck,
  Activity,
  Target,
  FileText
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const productionData = [
  { month: 'Jan', production: 3200000, distribution: 3100000, target: 3333333 },
  { month: 'Feb', production: 3500000, distribution: 3400000, target: 3333333 },
  { month: 'Mar', production: 3800000, distribution: 3700000, target: 3333333 },
  { month: 'Apr', production: 4000000, distribution: 3950000, target: 3333333 },
  { month: 'May', production: 3900000, distribution: 3850000, target: 3333333 },
  { month: 'Jun', production: 4200000, distribution: 4100000, target: 3333333 },
];

const districtPerformance = [
  { district: 'Khorda', schools: 450, coverage: 98, distributed: 1200000, status: 'excellent' },
  { district: 'Cuttack', schools: 380, coverage: 95, distributed: 980000, status: 'excellent' },
  { district: 'Puri', schools: 320, coverage: 92, distributed: 820000, status: 'good' },
  { district: 'Ganjam', schools: 410, coverage: 88, distributed: 1050000, status: 'good' },
  { district: 'Balasore', schools: 290, coverage: 85, distributed: 750000, status: 'warning' },
  { district: 'Mayurbhanj', schools: 340, coverage: 82, distributed: 880000, status: 'warning' },
];

const shgPerformance = [
  { name: 'SHG-001', production: 450000, quality: 98, efficiency: 95, location: 'Bhubaneswar' },
  { name: 'SHG-002', production: 380000, quality: 96, efficiency: 92, location: 'Cuttack' },
  { name: 'SHG-003', production: 420000, quality: 97, efficiency: 94, location: 'Puri' },
  { name: 'SHG-004', production: 390000, quality: 95, efficiency: 90, location: 'Berhampur' },
  { name: 'SHG-005', production: 360000, quality: 94, efficiency: 88, location: 'Balasore' },
];

const complianceData = [
  { name: 'BIS Certified', value: 98.5 },
  { name: 'Pending', value: 1.5 },
];

const COLORS = ['#10b981', '#f59e0b'];

const alerts = [
  { id: 1, type: 'warning', message: 'Low stock alert in Mayurbhanj district schools', time: '2 hours ago' },
  { id: 2, type: 'success', message: 'Monthly target achieved - 4.2M units produced', time: '5 hours ago' },
  { id: 3, type: 'info', message: 'New SHG onboarding completed in Kalahandi', time: '1 day ago' },
  { id: 4, type: 'warning', message: 'Quality check pending for Batch #2341', time: '1 day ago' },
];

function GovernmentAdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl">Government Admin Portal</h1>
                <p className="text-sm text-orange-100">Mission Shakti, Government of Odisha</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm bg-white/20 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm"
              >
                Back to Presentation
              </button>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600">
                GA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Quick Stats Banner */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl mb-1">23.6M</div>
            <div className="text-sm text-gray-600">Total Production</div>
            <div className="text-xs text-green-600 mt-1">↑ 12% from last quarter</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">22.7M</div>
            <div className="text-sm text-gray-600">Distributed</div>
            <div className="text-xs text-gray-500 mt-1">96% of production</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <School className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">5,247</div>
            <div className="text-sm text-gray-600">Schools Covered</div>
            <div className="text-xs text-green-600 mt-1">↑ 247 new this year</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="text-2xl mb-1">1,156</div>
            <div className="text-sm text-gray-600">Active SHGs</div>
            <div className="text-xs text-green-600 mt-1">↑ 56 new groups</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl mb-1">98.5%</div>
            <div className="text-sm text-orange-100">BIS Compliance</div>
            <div className="text-xs text-orange-200 mt-1">Quality certified</div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          {['overview', 'districts', 'shgs', 'logistics', 'compliance', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 capitalize whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Charts Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Production Trends */}
              <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg text-gray-900">Production & Distribution Trends</h3>
                  <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                    <option>All Time</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="production" stroke="#ea580c" strokeWidth={3} />
                    <Line type="monotone" dataKey="distribution" stroke="#10b981" strokeWidth={3} />
                    <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* BIS Compliance */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg mb-6 text-gray-900">BIS Compliance Status</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={complianceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {complianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts & Notifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  Recent Alerts & Notifications
                </h3>
                <button className="text-orange-600 text-sm hover:text-orange-700">
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border-l-4 ${
                      alert.type === 'warning' 
                        ? 'bg-orange-50 border-orange-500' 
                        : alert.type === 'success' 
                        ? 'bg-green-50 border-green-500' 
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      alert.type === 'warning' 
                        ? 'bg-orange-100' 
                        : alert.type === 'success' 
                        ? 'bg-green-100' 
                        : 'bg-blue-100'
                    }`}>
                      {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-orange-600" />}
                      {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {alert.type === 'info' && <Activity className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm mb-1">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SHG Performance Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Top Performing SHGs</h3>
                <button className="text-orange-600 text-sm hover:text-orange-700 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm text-gray-600">SHG Name</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Location</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Production</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Quality Score</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Efficiency</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shgPerformance.map((shg) => (
                      <tr key={shg.name} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-orange-600">{shg.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{shg.location}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{shg.production.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: `${shg.quality}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-900">{shg.quality}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${shg.efficiency}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-900">{shg.efficiency}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Excellent
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Districts Tab */}
        {activeTab === 'districts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">District-wise Performance</h3>
                <div className="flex gap-3">
                  <select 
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="all">All Districts</option>
                    {districtPerformance.map((d) => (
                      <option key={d.district} value={d.district}>{d.district}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {districtPerformance.slice(0, 3).map((district, index) => (
                  <div key={district.district} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg text-gray-900">{district.district}</h4>
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Schools</span>
                        <span className="text-lg">{district.schools}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Coverage</span>
                        <span className="text-lg text-green-600">{district.coverage}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Distributed</span>
                        <span className="text-lg">{(district.distributed / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm text-gray-600">District</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Schools</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Coverage %</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Units Distributed</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtPerformance.map((district) => (
                      <tr key={district.district} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-orange-600">{district.district}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{district.schools}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div 
                                className={`h-2 rounded-full ${
                                  district.coverage >= 95 ? 'bg-green-600' : 
                                  district.coverage >= 85 ? 'bg-orange-600' : 'bg-red-600'
                                }`}
                                style={{ width: `${district.coverage}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-900">{district.coverage}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900">
                          {district.distributed.toLocaleString()}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            district.status === 'excellent' ? 'bg-green-100 text-green-700' :
                            district.status === 'good' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {district.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Tabs Placeholder */}
        {['shgs', 'logistics', 'compliance', 'reports'].includes(activeTab) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl mb-2 capitalize">{activeTab} Management</h3>
            <p className="text-gray-600">Detailed {activeTab} tracking and management interface...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default GovernmentAdminPanel;
