import React from "react";
import NavBar from "../component/ui/NavBar";
import { CodeXml, Swords } from "lucide-react";
import GreenEffext from "../component/utils/GreenEffext";
import CodeSnippet from "../component/ui/CodeSnippet";
import GlobalLeaderBoard from "../component/ui/GlobalLeaderBoard";

function HomePage() {
  return (
    <div className="relative w-full overflow-hidden text-white">
      <NavBar />
      <GreenEffext />
      <div
        id="hero-container"
        className="terminal-bg w-full h-full flex flex-col items-center p-5 md:px-10 pt-30 gap-12"
      >
        <h1 className="text-[2.4rem] md:text-[3.3rem] font-bold tracking-wide fira">
          CodeClash<span className="text-orange-500">.arena</span>
          <span className="cursor"></span>
        </h1>

        <p className="text-sm md:text-md lg:text-lg w-[90vw] md:w-[60vw] lg:w-[45vw] text-center font-light tracking-wider text-zinc-400 opacity-90">
          Challenge developers worldwide in real-time coding battles. Test your
          skills, climb rankings, and earn your spot among the coding elite.
        </p>

        <div className="flex flex-col md:flex-row gap-5">
          <button className="center gap-2 fira text-sm text-black font-semibold bg-orange-500 p-2 px-3 rounded-md tracking-wide">
            <CodeXml />
            startBattle()
          </button>

          <button className="center gap-2 fira text-sm text-green-500 border border-green-500 font-semibold p-2 px-3 rounded-md tracking-wide hover:bg-green-500/10">
            <Swords />
            findOpponent()
          </button>
        </div>

        <CodeSnippet />
      </div>

      <section className="terminal-bg w-full center px-5 md:px-10">
        <GlobalLeaderBoard />
      </section>
    </div>
  );
}

export default HomePage;
