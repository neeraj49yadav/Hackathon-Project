import React, { useState } from "react";

export default function Sales() {
  const [timeframe, setTimeframe] = useState("month");

  const salesMetrics = [
    {
      label: "Total Sales",
      value: "$150,000",
      icon: "💰",
      color: "from-green-400 to-green-600",
    },
    {
      label: "Transactions",
      value: "245",
      icon: "🛒",
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Avg Order Value",
      value: "$612",
      icon: "📊",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const topProducts = [
    { name: "Premium Package", sales: 45, revenue: "$27,000", trend: "↑ 12%" },
    { name: "Standard Plan", sales: 38, revenue: "$19,000", trend: "↑ 8%" },
    { name: "Starter Bundle", sales: 162, revenue: "$18,900", trend: "↓ 3%" },
  ];

  const salesByPeriod = [
    { period: "Week 1", amount: 32000, percentage: 65 },
    { period: "Week 2", amount: 28000, percentage: 58 },
    { period: "Week 3", amount: 45000, percentage: 92 },
    { period: "Week 4", amount: 45000, percentage: 92 },
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {salesMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">{metric.icon}</span>
              <span
                className={`bg-gradient-to-r ${metric.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
              >
                Active
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Sales by Period */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Sales by Week</h3>
          <div className="flex gap-2">
            {["week", "month", "year"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeframe === period
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {salesByPeriod.map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">
                  {item.period}
                </span>
                <span className="text-gray-900 font-bold">
                  ${item.amount.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-700 shadow-lg"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          🏆 Top Performing Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h4>
                <span
                  className={`text-sm font-bold ${product.trend.includes("↑") ? "text-green-600" : "text-red-600"}`}
                >
                  {product.trend}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Units Sold</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.sales}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">Total Revenue</p>
                  <p className="text-xl font-bold text-green-600">
                    {product.revenue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Insights */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 border border-amber-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          💡 Sales Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">📈 Growth Trend</p>
            <p className="text-sm text-gray-700">
              Sales are trending upward with Week 3 showing a 41% increase
              compared to Week 1.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">
              🎯 Peak Performance
            </p>
            <p className="text-sm text-gray-700">
              Premium Package is your top revenue generator, accounting for 18%
              of total sales volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
