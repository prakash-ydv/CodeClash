import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const platform = [
    {
      title: "home()",
      url: "/",
    },
    {
      title: "battleModes()",
      url: "/battle",
    },
    {
      title: "leaderBoard()",
      url: "leaderboard",
    },
    {
      title: "problems()",
      url: "/problems",
    },
  ];

  const support = [
    {
      title: "helpCenter()",
      url: "/",
    },
    {
      title: "community()",
      url: "/",
    },
    {
      title: "reportBug()",
      url: "/",
    },
    {
      title: "contactUs()",
      url: "/",
    },
  ];

  const legal = [
    {
      title: "termsOfService()",
      url: "/",
    },
    {
      title: "privicyPolicy()",
      url: "/",
    },
    {
      title: "cookiePolicy()",
      url: "/",
    },
    {
      title: "codeOfConduct()",
      url: "/",
    },
  ];
  return (
    <footer className="flex gap-5 md:items-center justify-evenly w-full terminal-header mt-20 border-t border-white/10 p-10">
      <div id="branding" className="w-full md:w-72 flex flex-col gap-2">
        <h1 className="text-lg ">CodeClash</h1>
        <p className="text-zinc-500 text-sm">
          Where developers compete, improve, and showcase their coding skills.
        </p>
        <div id="social-icons" className="flex gap-2 opacity-40">
          <a target="_blank" href="https://www.linkedin.com/in/prakash-ydv/">
            <Linkedin size={20} />
          </a>
          <a target="_blank" href="https://github.com/prakash-ydv">
            <Github size={20} />
          </a>
          <a target="_blank" href="https://www.instagram.com/prakash___ydv">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="flex gap-1 flex-col">
        <h1 className="text-lg">Platform</h1>

        {platform.map((item, index) => (
          <NavLink key={index + "a"} to={item.url} className={"nav"}>
            {item.title}
          </NavLink>
        ))}
      </div>

      <div className="hidden sm:flex gap-1 flex-col">
        <h1 className="text-lg">Support</h1>
        {support.map((item, index) => (
          <NavLink key={index + "b"} to={item.url} className={"nav"}>
            {item.title}
          </NavLink>
        ))}
      </div>

      <div className="hidden sm:flex gap-1 flex-col">
        <h1 className="text-lg">Legal</h1>

        {legal.map((item, index) => (
          <NavLink key={index + "c"} to={item.url} className={"nav"}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
