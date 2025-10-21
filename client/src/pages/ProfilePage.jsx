import React from "react";
import NavBar from "../component/ui/NavBar";
import Footer from "../component/ui/Footer";

function ProfilePage() {
  return (
    <div className="w-full min-h-screen terminal-bg transition-all duration-300 ease-in-out">
      <NavBar />
      <div
        id="main-body"
        className="w-full p-5 sm:px-10 md:px-20 grid grid-cols-1 lg:grid-cols-3 text-white gap-5"
      >
        {/* Sidebar */}
        <div
          id="side-bar"
          className="w-full md:col-span-1 flex flex-col gap-3 border rounded-2xl border-white/10 p-5 hover:border-orange-500"
        >
          <div id="profile-details" className="flex items-center gap-4">
            <span className="h-16 w-16 overflow-hidden bg-center bg-white rounded-xl">
              <img
                src="https://thumbs.dreamstime.com/b/happy-black-teen-boy-outside-african-american-smiles-sitting-bench-192130399.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </span>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold">Durgesh Naiii</h1>
              <span className="text-xs text-zinc-500">@username</span>
            </div>
          </div>
          <p className="text-xs text-zinc-500">
            Full Stack Developer | DSA is Love
          </p>

          <button
            title="edit profile"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 p-2 px-4 rounded-md text-sm"
          >
            Edit Profile
          </button>
        </div>

        {/* Stats section*/}
        <div id="stats" className="w-full flex flex-col gap-5 md:col-span-2">
          {/* first row */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col items-center justify-evenly border border-white/10 rounded-2xl p-5 hover:border-orange-500">
              <h1 className="font-bold text-4xl md:text-[3.5rem]">7</h1>
              <p className="text-sm text-zinc-500">Battles Played</p>
            </div>
            <div className="flex flex-col items-center justify-evenly border border-white/10 rounded-2xl p-5 hover:border-orange-500">
              <h1 className="font-bold text-4xl md:text-[3.5rem]">4</h1>
              <p className="text-sm text-zinc-500">Battles Won</p>
            </div>
            <div className="flex flex-col items-center justify-evenly border border-white/10 rounded-2xl p-5 hover:border-orange-500">
              <h1 className="font-bold text-4xl md:text-[3.5rem]">71%</h1>
              <p className="text-sm text-zinc-500">Win Ratio</p>
            </div>
            <div className="flex flex-col items-center justify-evenly border border-white/10 rounded-2xl p-5 hover:border-orange-500">
              <h1 className="font-bold text-4xl md:text-[3.5rem]">64%</h1>
              <p className="text-sm text-zinc-500">Accuracy</p>
            </div>
          </div>

          <div className="w-full h-62 p-5 border border-white/10 rounded-2xl">
            <h1>Coding Stats</h1>
          </div>
          <div className="w-full h-62 p-5 border border-white/10 rounded-2xl">
            <h1>Recent Activity</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
