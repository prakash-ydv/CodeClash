import React from "react";
import GreenEffext from "../utils/GreenEffext";
import { NavLink } from "react-router-dom";

function SmallScreenWarning() {
  return (
    <div className="flex flex-col h-screen w-full center terminal-bg text-white relative space-y-5">
      <GreenEffext />
      <h1>Switch to Desktop</h1>
      <NavLink to={"/"} className="text-sm text-orange-500">
        Home
      </NavLink>
    </div>
  );
}

export default SmallScreenWarning;
