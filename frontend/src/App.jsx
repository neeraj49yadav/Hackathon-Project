import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import Inventory from "./components/Inventory";
import Alerts from "./components/Alerts";
import Predictions from "./components/Predictions";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dashboard");
      const data = await response.json();
      setDashboardData(data.data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
      setDashboardData({
        totalRevenue: 125000,
        totalExpenses: 45000,
        netProfit: 80000,
        cashFlow: 35000,
      });
    }
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "sales", label: "Sales", icon: "💰" },
    { id: "inventory", label: "Inventory", icon: "📦" },
    { id: "alerts", label: "Alerts", icon: "⚠️" },
    { id: "predictions", label: "Predictions", icon: "🤖" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Navigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "dashboard" && <Dashboard data={dashboardData} />}
        {activeTab === "sales" && <Sales />}
        {activeTab === "inventory" && <Inventory />}
        {activeTab === "alerts" && <Alerts />}
        {activeTab === "predictions" && <Predictions />}
      </main>

      <Footer />
    </div>
  );
}
