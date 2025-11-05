import React from "react";
import StatsBox from "../components/common/StatsBox";
import Navbar from "../components/ui/Navbar";
import SideBar from "../components/ui/SideBar";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="terminal-bg w-full max-h-screen flex">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardPage;
