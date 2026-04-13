import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              📊 Decision Support System
            </h1>
            <p className="text-blue-100 mt-2 text-lg">
              Real-Time Business Intelligence & Analytics
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-4 items-center">
              <div className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
                <span className="text-sm font-medium">🟢 System Online</span>
              </div>
              <div className="text-white text-center">
                <p className="text-xs opacity-75">Last Updated</p>
                <p className="font-semibold">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
