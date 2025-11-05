import React from "react";
import { NavLink } from "react-router-dom";

function Problems() {
  return (
    <section>
      <div className="w-full grid grid-cols-4 p-5 text-white">
        <NavLink to={"/problems/create"} className="h-48 w-48 rounded-md border border-green-500">
          CREATE
        </NavLink>
        <button className="h-48 w-48 rounded-md border border-orange-500">
          EDIT
        </button>
      </div>
    </section>
  );
}

export default Problems;
