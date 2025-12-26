import { useQuery } from '@tanstack/react-query';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { fetchHarvestStatistics } from '../services/mangoService';
import LoadingSpinner from '../components/LoadingSpinner';

const COLORS = ['#FF9800', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#F44336'];

const DashboardPage = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['harvestStatistics'],
    queryFn: fetchHarvestStatistics,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-600 text-lg">Failed to load statistics. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mango Insights Dashboard</h1>
          <p className="text-gray-600">
            Explore seasonal trends, availability patterns, and popular varieties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Availability Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Monthly Availability</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stats.monthlyAvailability}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#FF9800"
                  strokeWidth={2}
                  name="Available Varieties"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Popular Varieties Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Varieties</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.popularVarieties}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#FFC107" name="Orders" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart for Popular Varieties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Variety Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.popularVarieties}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="orders"
                >
                  {stats.popularVarieties.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Seasonal Trends Table */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seasonal Trends</h2>
            <div className="space-y-4">
              {stats.seasonalTrends.map((trend, index) => (
                <div
                  key={index}
                  className="border-l-4 border-mango-orange pl-4 py-2"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800">{trend.season}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      trend.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                      trend.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {trend.demand}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {trend.varieties} variety{trend.varieties !== 1 ? 'ies' : ''} available
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-mango-yellow to-mango-orange rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Total Varieties</h3>
            <p className="text-4xl font-bold">{stats.popularVarieties.length}</p>
          </div>
          <div className="bg-gradient-to-br from-mango-green to-mango-green-dark rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Peak Season</h3>
            <p className="text-4xl font-bold">May-July</p>
          </div>
          <div className="bg-gradient-to-br from-mango-orange to-mango-orange-dark rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-4xl font-bold">
              {stats.popularVarieties.reduce((sum, v) => sum + v.orders, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

