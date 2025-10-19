import React from "react";
import LeaderBoardBox from "../utils/LeaderBoardBox";

function GlobalLeaderBoard() {
  const leaderBoardData = [
    {
      serial: 1,
      name: "Prakash Kumar",
      title: "GrandMaster",
      rating: 2564,
      winRatio: 95,
    },
    {
      serial: 2,
      name: "Aisha Rahman",
      title: "Master",
      rating: 2420,
      winRatio: 89,
    },
    {
      serial: 3,
      name: "Liam O'Connor",
      title: "Expert",
      rating: 2315,
      winRatio: 84,
    },
    {
      serial: 4,
      name: "Sofia Martinez",
      title: "Candidate",
      rating: 2190,
      winRatio: 78,
    },
    {
      serial: 5,
      name: "Kenji Tanaka",
      title: "Expert",
      rating: 2065,
      winRatio: 72,
    },
  ];
  return (
    <div className="w-full md:w-[80vw]">
      <h1 className="pt-20 pb-10 text-center text-3xl md:text-[2.2rem] fira font-bold">
        global.Leaderboard<span className="text-orange-500">;</span>
      </h1>
      <div className="w-full bg-orange-500 rounded-t-3xl center p-5">
        <h1 className="text-black font-bold text-xl md:text-2xl fira">
          TOP_CODERS_WEEKLY
        </h1>
      </div>

      {leaderBoardData.map((item, index) => (
        <LeaderBoardBox
          serial={item.serial}
          name={item.name}
          title={item.title}
          rating={item.rating}
          winRatio={item.winRatio}
        />
      ))}
    </div>
  );
}

export default GlobalLeaderBoard;
