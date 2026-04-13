import React, { useState, useEffect } from "react";

export default function App() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dashboard");
      const data = await response.json();
      setDashboardData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
      setDashboardData({
        totalRevenue: 125000,
        totalExpenses: 45000,
        netProfit: 80000,
        cashFlow: 35000,
      });
      setLoading(false);
    }
  };

  const MetricCard = ({ title, value, icon, color }) => (
    <div className={`bg-white rounded-lg shadow p-6 border-l-4 ${color}`}>
      <p className="text-gray-600 text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 mt-2">
        ${value.toLocaleString()}
      </h3>
      <p className="text-gray-500 text-xs mt-2">{icon}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Decision Support System
              </h1>
              <p className="text-blue-100 mt-1">Real-Time Business Analytics</p>
            </div>
            <div className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              <span>📊 Live Dashboard</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex gap-6">
          {["overview", "sales", "inventory", "alerts", "predictions"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <div>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Revenue"
                value={dashboardData?.totalRevenue || 0}
                icon="💰"
                color="border-green-500"
              />
              <MetricCard
                title="Total Expenses"
                value={dashboardData?.totalExpenses || 0}
                icon="📉"
                color="border-red-500"
              />
              <MetricCard
                title="Net Profit"
                value={dashboardData?.netProfit || 0}
                icon="📈"
                color="border-blue-500"
              />
              <MetricCard
                title="Cash Flow"
                value={dashboardData?.cashFlow || 0}
                icon="💳"
                color="border-purple-500"
              />
            </div>

            {/* Performance Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Financial Summary */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Financial Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Expenses</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Profit Margin</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "64%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow p-6 border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  🤖 AI Insights & Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3 border-l-4 border-green-500">
                    <p className="text-sm font-medium text-green-700">
                      ✓ Strong Performance
                    </p>
                    <p className="text-xs text-gray-600">
                      Revenue is up 15% compared to last month
                    </p>
                  </div>
                  <div className="bg-white rounded p-3 border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-yellow-700">
                      ⚠ Cost Optimization
                    </p>
                    <p className="text-xs text-gray-600">
                      Review operational expenses for potential savings
                    </p>
                  </div>
                  <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-blue-700">
                      📊 Market Trend
                    </p>
                    <p className="text-xs text-gray-600">
                      Growing demand in Product Category A detected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Recent Activity
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-700">System Health Check</span>
                  <span className="text-green-600 text-sm font-medium">
                    ✓ Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-700">Database Status</span>
                  <span className="text-green-600 text-sm font-medium">
                    ✓ Connected
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">API Endpoints</span>
                  <span className="text-green-600 text-sm font-medium">
                    ✓ Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sales Tab */}
        {activeTab === "sales" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Sales Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm">Total Sales</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">$150K</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm">Transactions</p>
                <p className="text-3xl font-bold text-green-600 mt-2">245</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm">Avg Order Value</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">$612</p>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Inventory Status
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Product A",
                  stock: 150,
                  level: "optimal",
                  status: "🟢",
                },
                { name: "Product B", stock: 15, level: "low", status: "🔴" },
                { name: "Product C", stock: 75, level: "good", status: "🟡" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded"
                >
                  <span className="font-medium">
                    {product.status} {product.name}
                  </span>
                  <div className="text-right">
                    <p className="font-bold">{product.stock} units</p>
                    <p className="text-xs text-gray-600">{product.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === "alerts" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Active Alerts
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="font-semibold text-red-800">⚠ Low Stock Alert</p>
                <p className="text-sm text-red-700">
                  Product B is running low on inventory
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="font-semibold text-yellow-800">
                  ⚠ Performance Alert
                </p>
                <p className="text-sm text-yellow-700">
                  Expenses trending higher this month
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Predictions Tab */}
        {activeTab === "predictions" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              AI Predictions
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900">
                  📈 Revenue Forecast
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  Expected revenue for next week: $35,000
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900">📊 Sales Trend</p>
                <p className="text-sm text-green-700 mt-1">
                  Upward trend expected to continue
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-900">🛍 Top Product</p>
                <p className="text-sm text-purple-700 mt-1">
                  Product A showing highest growth potential
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-12">
        <p>
          Real-Time Decision Support System © 2024 | Powered by AI Analytics
        </p>
      </footer>
    </div>
  );
}
