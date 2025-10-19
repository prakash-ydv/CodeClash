import { User, Users } from "lucide-react";
import React from "react";

function BattleModeBox(props) {
  return (
    <div className="relative w-full center flex-col terminal-header p-5 rounded-2xl gap-5 border border-white/10 hover:border-orange-500 hover:scale-105 transition-all duration-300 ease-in-out">
      <span className="text-orange-500">{props.icon}</span>
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <p className="text-center text-xs md:text-sm text-zinc-500">
        {props.about}
      </p>
      <button
        onClick={() => props.fn()}
        className="bg-gradient-to-r from-orange-500 to-orange-600 w-38 px-3 py-2 fira text-sm text-black font-semibold rounded-md"
      >
        {props.buttonText}
      </button>
      <span className="absolute top-5 right-5 text-3xl opacity-5 fira">
        {"{...}"}
      </span>
    </div>
  );
}

export default BattleModeBox;
