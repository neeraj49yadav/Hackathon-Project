import React, { useState } from "react";

export default function Predictions() {
  const [selectedForecast, setSelectedForecast] = useState("revenue");

  const predictions = [
    {
      id: "revenue",
      title: "Revenue Forecast",
      icon: "📈",
      color: "from-green-400 to-green-600",
      current: "$150,000",
      forecasted: "$175,000",
      change: "+16.7%",
      changeType: "positive",
      timeframe: "Next 7 Days",
      confidence: "94%",
      details: [
        { week: "Week 1", amount: "$35,000", forecast: "$38,000" },
        { week: "Week 2", amount: "$38,000", forecast: "$42,000" },
        { week: "Week 3", amount: "$42,000", forecast: "$45,000" },
        { week: "Week 4", amount: "$35,000", forecast: "$50,000" },
      ],
    },
    {
      id: "expenses",
      title: "Expense Prediction",
      icon: "📉",
      color: "from-red-400 to-red-600",
      current: "$45,000",
      forecasted: "$48,000",
      change: "+6.7%",
      changeType: "negative",
      timeframe: "Next 30 Days",
      confidence: "87%",
      details: [
        { week: "Salaries", amount: "$20,000", forecast: "$20,500" },
        { week: "Operations", amount: "$15,000", forecast: "$16,000" },
        { week: "Marketing", amount: "$10,000", forecast: "$11,500" },
      ],
    },
    {
      id: "sales",
      title: "Sales Prediction",
      icon: "💰",
      color: "from-blue-400 to-blue-600",
      current: "245 transactions",
      forecasted: "289 transactions",
      change: "+17.9%",
      changeType: "positive",
      timeframe: "Next Week",
      confidence: "91%",
      details: [
        { category: "Product A", current: "45", forecast: "54" },
        { category: "Product B", current: "38", forecast: "42" },
        { category: "Product C", current: "162", forecast: "193" },
      ],
    },
    {
      id: "inventory",
      title: "Inventory Demand",
      icon: "📦",
      color: "from-purple-400 to-purple-600",
      current: "485 units",
      forecasted: "520 units",
      change: "+7.2%",
      changeType: "positive",
      timeframe: "Next 2 Weeks",
      confidence: "85%",
      details: [
        { product: "Premium Package", current: "150", forecast: "165" },
        { product: "Standard Plan", current: "75", forecast: "85" },
        { product: "Starter Bundle", current: "200", forecast: "210" },
      ],
    },
  ];

  const currentPrediction = predictions.find((p) => p.id === selectedForecast);

  const recommendations = [
    {
      icon: "🎯",
      title: "Maximize Peak Season",
      description:
        "Revenue is forecasted to increase 16.7% next week. Prepare inventory and marketing campaigns.",
      priority: "high",
    },
    {
      icon: "🛍️",
      title: "Product C Growing Strong",
      description:
        "Product C showing 19% growth in predicted sales. Consider increasing stock levels.",
      priority: "high",
    },
    {
      icon: "💡",
      title: "Cost Optimization Needed",
      description:
        "Operating expenses trending up. Review marketing ROI and operational efficiency.",
      priority: "medium",
    },
    {
      icon: "📊",
      title: "Market Trend Alert",
      description:
        "Detection of emerging market segment. Consider product diversification strategy.",
      priority: "medium",
    },
  ];

  const getPriorityColors = (priority) => {
    return priority === "high"
      ? "bg-red-50 border-red-300 text-red-900"
      : "bg-yellow-50 border-yellow-300 text-yellow-900";
  };

  return (
    <div className="space-y-8">
      {/* Prediction Cards Selection */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {predictions.map((pred) => (
          <button
            key={pred.id}
            onClick={() => setSelectedForecast(pred.id)}
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
              selectedForecast === pred.id
                ? `bg-gradient-to-br ${pred.color} text-white shadow-2xl`
                : "bg-white text-gray-900 hover:shadow-xl"
            }`}
          >
            <p className="text-3xl mb-2">{pred.icon}</p>
            <p
              className={`font-semibold text-sm mb-1 ${
                selectedForecast === pred.id ? "text-white" : "text-gray-700"
              }`}
            >
              {pred.title}
            </p>
            <p
              className={`text-xs ${
                selectedForecast === pred.id
                  ? "text-white opacity-90"
                  : "text-gray-600"
              }`}
            >
              {pred.timeframe}
            </p>
          </button>
        ))}
      </div>

      {/* Main Prediction Display */}
      {currentPrediction && (
        <div
          className={`bg-gradient-to-br ${currentPrediction.color} rounded-xl shadow-2xl p-10 text-white overflow-hidden relative`}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-white opacity-90 text-sm font-semibold uppercase tracking-wide">
                  AI Forecast
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  {currentPrediction.title}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Confidence Score</p>
                <p className="text-3xl font-bold">
                  {currentPrediction.confidence}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-white opacity-90 text-sm">Current</p>
                <p className="text-2xl font-bold mt-2">
                  {currentPrediction.current}
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-white opacity-90 text-sm">Forecasted</p>
                <p className="text-2xl font-bold mt-2">
                  {currentPrediction.forecasted}
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-white opacity-90 text-sm">Change</p>
                <p className="text-2xl font-bold mt-2">
                  {currentPrediction.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Forecast Details */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Forecast Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  {selectedForecast === "revenue"
                    ? "Period"
                    : selectedForecast === "expenses"
                      ? "Category"
                      : selectedForecast === "sales"
                        ? "Product"
                        : "Product"}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  Current
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                  Forecasted
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPrediction?.details.map((detail, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 group-hover:text-blue-600">
                    {detail.week ||
                      detail.category ||
                      detail.product ||
                      detail.category}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">
                    {detail.amount || detail.current}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-green-600">
                    {detail.forecast}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          🤖 AI Recommendations Based on Predictions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`border-2 rounded-lg p-5 hover:shadow-lg transition-all duration-300 ${getPriorityColors(rec.priority)}`}
            >
              <div className="flex gap-3">
                <span className="text-2xl">{rec.icon}</span>
                <div>
                  <p className="font-bold mb-1">{rec.title}</p>
                  <p className="text-sm">{rec.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        rec.priority === "high"
                          ? "bg-red-200 text-red-900"
                          : "bg-yellow-200 text-yellow-900"
                      }`}
                    >
                      {rec.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Details */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          📊 Model Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900 font-semibold">Algorithm</p>
            <p className="text-lg font-bold text-blue-600 mt-2">
              Advanced LSTM Neural Network
            </p>
            <p className="text-xs text-blue-800 mt-2">
              Analyzes historical patterns and trends
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-900 font-semibold">Data Points</p>
            <p className="text-lg font-bold text-green-600 mt-2">1,000+</p>
            <p className="text-xs text-green-800 mt-2">
              Last 90 days of analytics
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm text-purple-900 font-semibold">
              Update Frequency
            </p>
            <p className="text-lg font-bold text-purple-600 mt-2">Real-Time</p>
            <p className="text-xs text-purple-800 mt-2">
              Continuously learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
