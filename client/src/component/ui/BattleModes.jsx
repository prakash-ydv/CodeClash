import React from "react";
import BattleModeBox from "../utils/BattleModeBox";
import { Swords, Trophy, User } from "lucide-react";

function BattleModes() {
  function print() {
    console.log("working...");
  }
  const modes = [
    {
      icon: <User size={40} />,
      title: "1v1 Duel",
      about:
        " Challenge a friend directly with a custom invite code. Perfect for practicing together or settling coding debates.",
      fn: print,
      buttonText: "battleNow()",
    },
    {
      icon: <Swords size={40} />,
      title: "Quick Match",
      about:
        "Get matched with a coder of similar skill level for a fast-paced coding duel. Solve problems faster to win.",
      fn: print,
      buttonText: "findMatch()",
    },
    {
      icon: <Trophy size={40} />,
      title: "Tournament",
      about:
        "Join coding tournaments with multiple rounds. Last developer standing wins the grand prize.",
      fn: print,
      buttonText: "joinTournament()",
    },
  ];
  return (
    <div className="w-full md:w-[80vw] transition-all duration-300 ease-in-out">
      <h1 className="pt-20 pb-10 text-center text-3xl md:text-[2.2rem] fira font-bold">
        battle.Modes<span className="text-orange-500">;</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modes.map((item, index) => (
          <BattleModeBox
            key={index}
            icon={item.icon}
            title={item.title}
            about={item.about}
            fn={item.fn}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default BattleModes;
