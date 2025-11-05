import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-10 terminal-header text-white border-b border-white/10">
      <div id="left" className="flex">
        <h1 className="font-bold  text-2xl"> Dashboard</h1>{" "}
      </div>

      <div id="right">
        <span className="text-sm">prakashyadav9576@gmail.com</span>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default Navbar;
