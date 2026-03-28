import { motion } from 'motion/react';
import { 
  Package, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  School, 
  Users, 
  Calendar,
  Download,
  Bell,
  Filter,
  Search,
  BarChart3,
  Clock
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const monthlyData = [
  { month: 'Jan', received: 8500, distributed: 8200, remaining: 300 },
  { month: 'Feb', received: 9000, distributed: 8800, remaining: 200 },
  { month: 'Mar', received: 8800, distributed: 8500, remaining: 300 },
  { month: 'Apr', received: 9200, distributed: 9000, remaining: 200 },
  { month: 'May', received: 8900, distributed: 8700, remaining: 200 },
  { month: 'Jun', received: 9500, distributed: 9200, remaining: 300 },
];

const recentDistributions = [
  { id: 'DST-2341', date: '2026-03-25', class: 'Class 8-A', quantity: 120, status: 'Completed', students: 60 },
  { id: 'DST-2342', date: '2026-03-24', class: 'Class 9-B', quantity: 140, status: 'Completed', students: 70 },
  { id: 'DST-2343', date: '2026-03-23', class: 'Class 10-A', quantity: 100, status: 'Completed', students: 50 },
  { id: 'DST-2344', date: '2026-03-22', class: 'Class 7-C', quantity: 110, status: 'Completed', students: 55 },
  { id: 'DST-2345', date: '2026-03-21', class: 'Class 8-B', quantity: 130, status: 'Completed', students: 65 },
];

const upcomingDeliveries = [
  { id: 'DEL-5621', scheduledDate: '2026-03-30', quantity: 5000, vehicle: 'VH-2341', status: 'In Transit' },
  { id: 'DEL-5622', scheduledDate: '2026-04-05', quantity: 5500, vehicle: 'VH-2342', status: 'Scheduled' },
  { id: 'DEL-5623', scheduledDate: '2026-04-12', quantity: 5000, vehicle: 'VH-2343', status: 'Scheduled' },
];

function SchoolAdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <School className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl text-gray-900">School Admin Portal</h1>
                <p className="text-sm text-gray-600">Govt. High School, Bhubaneswar</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-600 rounded-full"></span>
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Back to Presentation
              </button>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                SA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {['overview', 'distributions', 'inventory', 'requests'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 capitalize transition-all ${
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
            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-green-600 text-sm flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +8%
                  </span>
                </div>
                <div className="text-3xl mb-1">9,200</div>
                <div className="text-sm text-gray-600">Total Stock Available</div>
                <div className="text-xs text-gray-500 mt-2">Last updated: Today, 10:30 AM</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-600 text-sm">100%</span>
                </div>
                <div className="text-3xl mb-1">600</div>
                <div className="text-sm text-gray-600">Distributed This Month</div>
                <div className="text-xs text-gray-500 mt-2">Target: 650 units</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl mb-1">320</div>
                <div className="text-sm text-gray-600">Active Beneficiaries</div>
                <div className="text-xs text-gray-500 mt-2">Girls (Class 6-10)</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 border-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="text-3xl mb-1 text-orange-600">Next Delivery</div>
                <div className="text-sm text-gray-600">March 30, 2026</div>
                <div className="text-xs text-gray-500 mt-2">5,000 units expected</div>
              </motion.div>
            </div>

            {/* Charts Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg mb-4 text-gray-900">Monthly Distribution Trends</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="received" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="distributed" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg mb-4 text-gray-900">Stock Overview</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="remaining" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-gray-900">Recent Distributions</h3>
                <button className="text-orange-600 text-sm hover:text-orange-700 flex items-center gap-2">
                  View All
                  <Download className="w-4 h-4" />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Distribution ID</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Date</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Class</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Quantity</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Students</th>
                      <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDistributions.map((dist) => (
                      <tr key={dist.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-orange-600">{dist.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{dist.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{dist.class}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{dist.quantity}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{dist.students}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {dist.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Deliveries */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg mb-6 text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Upcoming Deliveries
              </h3>
              
              <div className="space-y-4">
                {upcomingDeliveries.map((delivery) => (
                  <div key={delivery.id} className="bg-white rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{delivery.id}</div>
                        <div className="text-sm text-gray-600">
                          {delivery.quantity} units • Vehicle: {delivery.vehicle}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900 mb-1">{delivery.scheduledDate}</div>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        delivery.status === 'In Transit' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {delivery.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other tabs content */}
        {activeTab === 'distributions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl mb-4">Distribution Management</h3>
            <p className="text-gray-600">Detailed distribution tracking and records...</p>
          </motion.div>
        )}

        {activeTab === 'inventory' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl mb-4">Inventory Management</h3>
            <p className="text-gray-600">Stock levels and reorder management...</p>
          </motion.div>
        )}

        {activeTab === 'requests' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl mb-4">Stock Requests</h3>
            <p className="text-gray-600">Submit and track stock requisition requests...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default SchoolAdminPanel;
