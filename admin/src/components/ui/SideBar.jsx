import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  ChartSpline,
  CodeXml,
  LayoutDashboard,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

function SideBar() {
  return (
    <div
      className={`w-74 h-screen terminal-header border-r border-white/10 flex flex-col text-white transition-all duration-300 ease-in-out`}
    >
      {/* Sidebar Header */}
      <div className="p-5 border-b border-white/10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-zinc-900 font-bold text-sm">
          &lt;/&gt;
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white text-lg">CodeBattle</span>
          <span className="text-[#8b949e] text-xs">Admin</span>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 flex flex-col py-5 overflow-y-auto">
        {/* Main Section */}
        <div className="mb-6">
          <div className="px-5 mb-3">
            <span className="text-[#8b949e] text-xs font-mono uppercase tracking-wider">
              Main
            </span>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 ${
                isActive
                  ? "bg-orange-500/20 border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex items-center gap-2">
              {" "}
              <LayoutDashboard size={16} /> Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 border-transparent ${
                isActive
                  ? "bg-orange-500/20  border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex gap-2 items-center">
              {" "}
              <ChartSpline size={16} /> Analytics
            </span>
          </NavLink>
        </div>
        {/* Management Section */}
        <div className="mb-6">
          <div className="px-5 mb-3">
            <span className="text-[#8b949e] text-xs font-mono uppercase tracking-wider">
              MANAGEMENT
            </span>
          </div>
          <NavLink
            to="/problems"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 border-transparent ${
                isActive
                  ? "bg-orange-500/20 border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex items-center gap-2">
              {" "}
              <Users size={16} /> Problems
            </span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 border-transparent ${
                isActive
                  ? "bg-orange-500/20 border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex gap-2 items-center">
              {" "}
              <CodeXml size={16} /> Users
            </span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 border-transparent ${
                isActive
                  ? "bg-orange-500/20  border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex gap-2 items-center">
              {" "}
              <Swords size={16} /> Battles
            </span>
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 transition-all duration-200 text-sm border-l-4 border-transparent ${
                isActive
                  ? "bg-orange-500/20  border-orange-500"
                  : "text-gray-300 hover:bg-orange-500/5 hover:bg-opacity-5 hover:text-white"
              }`
            }
          >
            <i className="fas fa-tachometer-alt text-center"></i>
            <span className="flex gap-2 items-center">
              {" "}
              <Trophy size={16} /> Tournaments
            </span>
          </NavLink>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-[#0d1117] font-bold text-sm">
            AD
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-sm">Admin User</div>
            <div className="text-[#8b949e] text-xs">Super Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
