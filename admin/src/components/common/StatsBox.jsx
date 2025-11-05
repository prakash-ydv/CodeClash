import React from "react";

function StatsBox({ icon, stat, title }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 
      p-6 rounded-xl border border-white/10 bg-[#161b22] 
      hover:border-orange-500 
      transition-all duration-300 ease-in-out shadow-md`}
    >
      <h1 className="font-semibold text-4xl text-white">{stat}</h1>

      <div className="flex items-end gap-2">
        <span className="text-orange-500">{icon}</span>
        <h5 className="text-sm text-gray-400 uppercase tracking-wider">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default StatsBox;
