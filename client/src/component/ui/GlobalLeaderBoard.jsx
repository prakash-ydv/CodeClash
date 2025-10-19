import React from "react";
import LeaderBoardBox from "../utils/LeaderBoardBox";

function GlobalLeaderBoard() {
  return (
    <div className="w-full md:w-[80vw]">
      <h1 className="py-10 md:py-15 text-center text-3xl md:text-[2.2rem] fira font-bold">
        Global Leaderboard<span className="text-orange-500">;</span>
      </h1>
      <div className="w-full bg-orange-500 rounded-t-3xl center p-5">
        <h1 className="text-black font-bold text-xl md:text-2xl fira">
          TOP_CODERS_WEEKLY
        </h1>
      </div>

      <LeaderBoardBox />
      <LeaderBoardBox />
      <LeaderBoardBox />
      <LeaderBoardBox />
      <LeaderBoardBox />
    </div>
  );
}

export default GlobalLeaderBoard;
