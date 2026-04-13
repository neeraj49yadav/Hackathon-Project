import React, { useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "critical",
      icon: "🔴",
      title: "Low Stock Alert",
      message:
        "Product B is running low on inventory - only 15 units remaining",
      timestamp: "5 mins ago",
      action: "Reorder Now",
    },
    {
      id: 2,
      type: "warning",
      icon: "🟡",
      title: "Performance Alert",
      message:
        "Expenses trending higher this month - review cost optimizations",
      timestamp: "2 hours ago",
      action: "Review",
    },
    {
      id: 3,
      type: "info",
      icon: "ℹ️",
      title: "System Update",
      message: "New analytics feature has been deployed successfully",
      timestamp: "1 day ago",
      action: "Learn More",
    },
    {
      id: 4,
      type: "critical",
      icon: "🔴",
      title: "Revenue Threshold",
      message: "Sales performance below target for this week",
      timestamp: "3 hours ago",
      action: "Analyze",
    },
    {
      id: 5,
      type: "success",
      icon: "🟢",
      title: "Target Achieved",
      message: "Profit margin exceeded quarterly target by 12%",
      timestamp: "6 hours ago",
      action: "Celebrate",
    },
  ]);

  const [readAlerts, setReadAlerts] = useState(new Set());

  const dismissAlert = (alertId) => {
    setReadAlerts((prev) => new Set([...prev, alertId]));
  };

  const clearAllAlerts = () => {
    setReadAlerts(new Set(alerts.map((a) => a.id)));
  };

  const unreadCount = alerts.filter((a) => !readAlerts.has(a.id)).length;

  const activeAlerts = alerts.filter((a) => !readAlerts.has(a.id));

  const getAlertStyles = (type) => {
    const styles = {
      critical: {
        bg: "bg-red-50",
        border: "border-l-4 border-red-500",
        icon: "text-red-600",
        title: "text-red-900",
        badge: "bg-red-100 text-red-800",
      },
      warning: {
        bg: "bg-yellow-50",
        border: "border-l-4 border-yellow-500",
        icon: "text-yellow-600",
        title: "text-yellow-900",
        badge: "bg-yellow-100 text-yellow-800",
      },
      info: {
        bg: "bg-blue-50",
        border: "border-l-4 border-blue-500",
        icon: "text-blue-600",
        title: "text-blue-900",
        badge: "bg-blue-100 text-blue-800",
      },
      success: {
        bg: "bg-green-50",
        border: "border-l-4 border-green-500",
        icon: "text-green-600",
        title: "text-green-900",
        badge: "bg-green-100 text-green-800",
      },
    };
    return styles[type] || styles.info;
  };

  return (
    <div className="space-y-8">
      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg p-6 border-2 border-red-200">
          <p className="text-gray-700 text-sm font-medium">Critical Alerts</p>
          <p className="text-4xl font-bold text-red-600 mt-2">
            {alerts.filter((a) => a.type === "critical").length}
          </p>
          <p className="text-xs text-gray-600 mt-2">Require immediate action</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-6 border-2 border-yellow-200">
          <p className="text-gray-700 text-sm font-medium">Warnings</p>
          <p className="text-4xl font-bold text-yellow-600 mt-2">
            {alerts.filter((a) => a.type === "warning").length}
          </p>
          <p className="text-xs text-gray-600 mt-2">Needs attention</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border-2 border-blue-200">
          <p className="text-gray-700 text-sm font-medium">Unread</p>
          <p className="text-4xl font-bold text-blue-600 mt-2">{unreadCount}</p>
          <p className="text-xs text-gray-600 mt-2">pending review</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border-2 border-green-200">
          <p className="text-gray-700 text-sm font-medium">Resolved</p>
          <p className="text-4xl font-bold text-green-600 mt-2">
            {readAlerts.size}
          </p>
          <p className="text-xs text-gray-600 mt-2">closed alerts</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Active Alerts ({activeAlerts.length})
        </h3>
        {unreadCount > 0 && (
          <button
            onClick={clearAllAlerts}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Mark All as Read
          </button>
        )}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {activeAlerts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-5xl mb-4">✅</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              All Caught Up!
            </p>
            <p className="text-gray-600">
              No active alerts. Your system is running smoothly.
            </p>
          </div>
        ) : (
          activeAlerts.map((alert) => {
            const styles = getAlertStyles(alert.type);
            return (
              <div
                key={alert.id}
                className={`${styles.bg} ${styles.border} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={`text-3xl flex-shrink-0 ${styles.icon} group-hover:scale-110 transition-transform`}
                  >
                    {alert.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4
                          className={`text-lg font-bold ${styles.title} mb-2`}
                        >
                          {alert.title}
                        </h4>
                        <p className="text-gray-700 text-sm mb-3">
                          {alert.message}
                        </p>
                        <p className="text-xs text-gray-500 font-medium">
                          {alert.timestamp}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${styles.badge} hover:shadow-md`}
                        >
                          {alert.action}
                        </button>
                        <button
                          onClick={() => dismissAlert(alert.id)}
                          className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-400 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Alert Settings */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          ⚙️ Alert Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 rounded accent-blue-600"
            />
            <div>
              <p className="font-semibold text-gray-900">Email Notifications</p>
              <p className="text-xs text-gray-600">Get alerted via email</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 rounded accent-blue-600"
            />
            <div>
              <p className="font-semibold text-gray-900">In-App Alerts</p>
              <p className="text-xs text-gray-600">Show notifications in app</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 rounded accent-blue-600"
            />
            <div>
              <p className="font-semibold text-gray-900">Critical Only</p>
              <p className="text-xs text-gray-600">Only critical alerts</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 rounded accent-blue-600"
            />
            <div>
              <p className="font-semibold text-gray-900">Daily Digest</p>
              <p className="text-xs text-gray-600">Summary email daily</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
