import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      
      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/40 via-teal-500/30 to-purple-600/40"></div>

        {/* Stars texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>

        {/* Nebula lights */}
        <div className="absolute -top-20 -left-20 h-72 w-72 bg-emerald-400/30 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute top-10 right-10 h-72 w-72 bg-purple-500/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 container mx-auto flex items-center gap-4 px-6 py-6">
        
        {/* Logo */}
        <div className="h-12 w-12 rounded-xl bg-white/90 text-emerald-700 flex items-center justify-center font-extrabold shadow-xl hover:scale-110 transition duration-300">
          AI
        </div>

        {/* Title */}
        <div className="animate-fadeIn">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
            PAIB
          </h1>
          <p className="text-sm text-white/80">
            AI Automation for Education System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
