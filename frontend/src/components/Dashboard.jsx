import React from "react";

const MetricCard = ({ title, value, icon, color, trend }) => (
  <div
    className={`bg-white rounded-xl shadow-lg p-8 border-l-4 transform hover:scale-105 transition-transform duration-300 ${color}`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
          {title}
        </p>
        <h3 className="text-4xl font-bold text-gray-900 mt-3">
          ${(value || 0).toLocaleString()}
        </h3>
        {trend && (
          <p
            className={`text-sm mt-2 ${trend > 0 ? "text-green-600" : "text-red-600"} font-semibold`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% vs Last Month
          </p>
        )}
      </div>
      <div className="text-4xl text-gray-400">{icon}</div>
    </div>
  </div>
);

export default function Dashboard({ data }) {
  const dashboardData = data || {
    totalRevenue: 125000,
    totalExpenses: 45000,
    netProfit: 80000,
    cashFlow: 35000,
  };

  const insights = [
    {
      type: "success",
      icon: "✓",
      title: "Strong Performance",
      description: "Revenue is up 15% compared to last month",
      color: "bg-green-50 border-l-4 border-green-500",
    },
    {
      type: "warning",
      icon: "⚠",
      title: "Cost Optimization",
      description: "Review operational expenses for potential savings",
      color: "bg-yellow-50 border-l-4 border-yellow-500",
    },
    {
      type: "info",
      icon: "📊",
      title: "Market Trend",
      description: "Growing demand in Product Category A detected",
      color: "bg-blue-50 border-l-4 border-blue-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={dashboardData.totalRevenue}
          icon="💰"
          color="border-green-500"
          trend={15}
        />
        <MetricCard
          title="Total Expenses"
          value={dashboardData.totalExpenses}
          icon="📉"
          color="border-red-500"
          trend={-5}
        />
        <MetricCard
          title="Net Profit"
          value={dashboardData.netProfit}
          icon="📈"
          color="border-blue-500"
          trend={22}
        />
        <MetricCard
          title="Cash Flow"
          value={dashboardData.cashFlow}
          icon="💳"
          color="border-purple-500"
          trend={8}
        />
      </div>

      {/* Performance & Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Financial Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Financial Summary
          </h3>
          <div className="space-y-6">
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Revenue</span>
                <span className="text-green-600 font-semibold text-sm">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500 group-hover:from-green-500 group-hover:to-green-700"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Expenses</span>
                <span className="text-red-600 font-semibold text-sm">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-500 group-hover:from-red-500 group-hover:to-red-700"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Profit Margin</span>
                <span className="text-blue-600 font-semibold text-sm">64%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-700"
                  style={{ width: "64%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              💡 <span className="font-semibold">Tip:</span> Maintain revenue
              focus while optimizing operational costs for maximum
              profitability.
            </p>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🤖 AI Insights & Recommendations
          </h3>
          <div className="space-y-4">
            {insights.map((insight, idx) => (
              <div
                key={idx}
                className={`${insight.color} rounded-lg p-4 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
              >
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-lg">{insight.icon}</span>
                  {insight.title}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
              ✓
            </div>
            <div>
              <p className="font-semibold text-gray-900">System Health</p>
              <p className="text-sm text-gray-600">All systems operational</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
              ✓
            </div>
            <div>
              <p className="font-semibold text-gray-900">Database Status</p>
              <p className="text-sm text-gray-600">Connected & synced</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
              ✓
            </div>
            <div>
              <p className="font-semibold text-gray-900">API Status</p>
              <p className="text-sm text-gray-600">25+ endpoints active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
