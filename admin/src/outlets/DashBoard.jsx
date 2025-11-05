import React from "react";
import StatsBox from "../components/common/StatsBox";
import { CodeXml, Star, Swords, Users } from "lucide-react";

function DashBoard() {
  return (
    <section className="p-5">
      <div className="w-full grid grid-cols-4 gap-5">
        <StatsBox icon={<Users size={20} />} stat={55454} title={"USERS"} />
        <StatsBox icon={<CodeXml size={20} />} stat={69} title={"PROBLEMS"} />
        <StatsBox icon={<Swords size={20} />} stat={65} title={"Battles"} />
        <StatsBox icon={<Star size={20} />} stat={4.5} title={"RATING"} />
      </div>
    </section>
  );
}

export default DashBoard;
