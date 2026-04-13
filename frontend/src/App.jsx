import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Real-Time Decision Support System
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to Decision Support
          </h2>
          <p className="text-gray-600">
            Loading dashboard... System is ready for real-time analytics and
            decision making.
          </p>
        </div>
      </main>
    </div>
  );
}
