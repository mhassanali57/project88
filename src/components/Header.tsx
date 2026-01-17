import React from "react";

const Header = () => {
  return (
    <header className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="container mx-auto flex items-center gap-4 px-6 py-5">
        <div className="h-12 w-12 bg-white text-blue-700 rounded-xl flex items-center justify-center font-extrabold shadow">
          AI
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">PAIB</h1>
          <p className="text-sm text-white/80">
            AI Automation for Education System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
