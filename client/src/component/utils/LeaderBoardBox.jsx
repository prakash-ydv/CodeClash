import React from "react";

function LeaderBoardBox(props) {
  return (
    <div className="w-full flex items-center justify-between bg-[#161b22] hover:bg-white/10 transition-all duration-300 ease-in-out border border-white/10 p-5 md:px-10">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">{props.serial}</h1>
        <div id="dp" className="h-10 w-10 bg-white rounded-full"></div>

        <div className="flex flex-col gap-1">
          <h1 className="truncate w-20 md:w-30 lg:w-40">{props.name}</h1>
          <span className="text-xs">{props.title}</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-md md:text-xl">{props.rating}</h1>
          <p className="text-xs text-zinc-500">Rating</p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-md md:text-xl">
            {props.winRatio}%
          </h1>
          <p className="text-xs text-zinc-500">Win Rate</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardBox;
