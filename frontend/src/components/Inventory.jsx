import React, { useState } from "react";

export default function Inventory() {
  const [filterStatus, setFilterStatus] = useState("all");

  const inventory = [
    {
      id: 1,
      name: "Product A - Premium",
      sku: "SKU-001",
      stock: 150,
      status: "optimal",
      reorder: 50,
      value: "$45,000",
      icon: "🟢",
    },
    {
      id: 2,
      name: "Product B - Standard",
      sku: "SKU-002",
      stock: 15,
      status: "critical",
      reorder: 100,
      value: "$3,000",
      icon: "🔴",
    },
    {
      id: 3,
      name: "Product C - Starter",
      sku: "SKU-003",
      stock: 75,
      status: "moderate",
      reorder: 30,
      value: "$7,500",
      icon: "🟡",
    },
    {
      id: 4,
      name: "Product D - Bundle",
      sku: "SKU-004",
      stock: 200,
      status: "optimal",
      reorder: 80,
      value: "$60,000",
      icon: "🟢",
    },
    {
      id: 5,
      name: "Product E - Deluxe",
      sku: "SKU-005",
      stock: 45,
      status: "moderate",
      reorder: 60,
      value: "$18,000",
      icon: "🟡",
    },
  ];

  const filteredInventory =
    filterStatus === "all"
      ? inventory
      : inventory.filter((item) => item.status === filterStatus);

  const statusConfig = {
    optimal: {
      badge: "In Stock",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
    },
    moderate: {
      badge: "Low Stock",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
    },
    critical: {
      badge: "Critical",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
    },
  };

  const getStatusConfig = (status) =>
    statusConfig[status] || statusConfig.optimal;

  const totalValue = inventory.reduce(
    (sum, item) => sum + parseInt(item.value.replace(/[$,]/g, "")),
    0,
  );

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border-2 border-blue-200">
          <p className="text-gray-700 text-sm font-medium">Total Items</p>
          <p className="text-4xl font-bold text-blue-600 mt-2">485</p>
          <p className="text-xs text-gray-600 mt-2">across 5 products</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border-2 border-green-200">
          <p className="text-gray-700 text-sm font-medium">Inventory Value</p>
          <p className="text-4xl font-bold text-green-600 mt-2">
            ${(totalValue / 1000).toFixed(0)}K
          </p>
          <p className="text-xs text-gray-600 mt-2">total asset value</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-6 border-2 border-yellow-200">
          <p className="text-gray-700 text-sm font-medium">Stock Alerts</p>
          <p className="text-4xl font-bold text-yellow-600 mt-2">2</p>
          <p className="text-xs text-gray-600 mt-2">items need reorder</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-6 border-2 border-purple-200">
          <p className="text-gray-700 text-sm font-medium">Stock Turnover</p>
          <p className="text-4xl font-bold text-purple-600 mt-2">4.2x</p>
          <p className="text-xs text-gray-600 mt-2">per quarter</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {["all", "optimal", "moderate", "critical"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
              filterStatus === status
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status !== "all" &&
              ` (${inventory.filter((i) => i.status === status).length})`}
          </button>
        ))}
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  SKU
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Current Stock
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Reorder Level
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInventory.map((item) => {
                const config = getStatusConfig(item.status);
                const stockPercentage =
                  (item.stock / (item.stock + item.reorder)) * 100;

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">{item.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                      {item.sku}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-900">
                          {item.stock}
                        </span>
                        <div className="w-16 bg-gray-300 rounded-full h-1.5 mt-2">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full"
                            style={{
                              width: `${Math.min(stockPercentage, 100)}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                      {item.reorder} units
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${config.bgColor} ${config.textColor}`}
                      >
                        {config.badge}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          📋 Inventory Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
            <p className="font-semibold text-gray-900 mb-2">🔴 Urgent Action</p>
            <p className="text-sm text-gray-700">
              Product B is at critical stock level. Reorder immediately to avoid
              stockouts.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="font-semibold text-gray-900 mb-2">💡 Optimization</p>
            <p className="text-sm text-gray-700">
              Consider bulk ordering to reduce unit costs and improve inventory
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
