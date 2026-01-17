"use client";

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center text-center px-6">
      
      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.25),transparent_60%)]"></div>
        <div className="absolute inset-0 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-wide drop-shadow-lg">
          Smart AI Automation for Education
        </h2>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          PAIB automates attendance, exams, student analytics, and academic
          workflows using Artificial Intelligence.
        </p>

        <button
          onClick={() => alert("Welcome to PAIB 🚀")}
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-purple-500/40 transition-all duration-300"
        >
          Get Started
        </button>

        {/* 🚀 Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            "Smart Attendance",
            "AI Based Exams",
            "Student Analytics",
          ].map((item, index) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white hover:-translate-y-3 hover:shadow-blue-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="font-bold text-xl mb-3">{item}</h3>
              <p className="text-sm text-gray-300">
                Automated and intelligent education process powered by AI.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🌠 Floating Glow Orbs */}
      <div className="absolute top-20 left-10 h-40 w-40 bg-blue-500/30 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-20 right-10 h-40 w-40 bg-purple-500/30 rounded-full blur-3xl animate-ping"></div>

    </section>
  );
};

export default Home;
