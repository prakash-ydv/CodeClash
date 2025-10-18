import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CodeXml, Menu, X } from "lucide-react";

function NavBar() {
  const isLogedIn = false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between w-full p-5 px-10 terminal-header border-b-1 terminal-border">
      <div id="left" className="flex items-center gap-4 font-bold text-2xl">
        <span className="p-1 rounded-md tracking-tighter bg-gradient-to-r from-orange-500 to-orange-400">
          <CodeXml />
        </span>
        <h1 className="text-white">CodeClash</h1>
      </div>

      <div id="middle" className="hidden lg:flex gap-8 xl:gap-10 text-white">
        <NavLink
          className={({ isActive }) =>
            `fira hover:text-orange-400 transition-colors duration-300 ease-in-out
            ${isActive ? "text-orange-400" : "text-white"}
            `
          }
          to={"/"}
        >
          home()
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `fira hover:text-orange-400 transition-colors duration-300 ease-in-out
            ${isActive ? "text-orange-400" : "text-white"}
            `
          }
          to={"/battle"}
        >
          battle()
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `fira hover:text-orange-400 transition-colors duration-300 ease-in-out
            ${isActive ? "text-orange-400" : "text-white"}
            `
          }
          to={"/problems"}
        >
          problems()
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `fira hover:text-orange-400 transition-colors duration-300 ease-in-out
            ${isActive ? "text-orange-400" : "text-white"}
            `
          }
          to={"/leaderboard"}
        >
          leaderboard()
        </NavLink>
      </div>

      {!isLogedIn ? (
        <div id="login" className="hidden lg:flex gap-5">
          <NavLink
            className={
              "center p-2 px-3 fira rounded-lg text-sm font-semibold text-green-500 border border-green-500 hover:bg-green-700/20 transition-color duration-300 ease-in-out "
            }
            to={"/login"}
          >
            console.login()
          </NavLink>
          <NavLink
            className={
              "center p-2 px-3 fira rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-orange-600 to-orange-500 hover:text-white transition-all duration-300 ease-in-out"
            }
            to={"/signup"}
          >
            signUp()
          </NavLink>
        </div>
      ) : (
        <span className="hidden lg:block h-10 w-10 rounded-full bg-white">
          <img src="" alt="" />
        </span>
      )}

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 z-30"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full terminal-header border-b-1 terminal-border lg:hidden z-20
          transform transition-all duration-300 ease-in-out overflow-hidden
          ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Navigation Links */}
          <NavLink
            className={({ isActive }) =>
              `fira text-white hover:text-orange-400 transition-colors duration-300 ease-in-out text-lg py-2
              ${isActive ? "text-orange-400" : ""}
            `
            }
            to={"/"}
            onClick={closeMobileMenu}
          >
            home()
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `fira text-white hover:text-orange-400 transition-colors duration-300 ease-in-out text-lg py-2
              ${isActive ? "text-orange-400" : ""}
            `
            }
            to={"/battle"}
            onClick={closeMobileMenu}
          >
            battle()
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `fira text-white hover:text-orange-400 transition-colors duration-300 ease-in-out text-lg py-2
              ${isActive ? "text-orange-400" : ""}
            `
            }
            to={"/problems"}
            onClick={closeMobileMenu}
          >
            problems()
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `fira text-white hover:text-orange-400 transition-colors duration-300 ease-in-out text-lg py-2
              ${isActive ? "text-orange-400" : ""}
            `
            }
            to={"/leaderboard"}
            onClick={closeMobileMenu}
          >
            leaderboard()
          </NavLink>

          {/* Auth Section */}
          <div className="pt-4 border-t border-gray-600">
            {!isLogedIn ? (
              <div className="flex flex-col space-y-4">
                <NavLink
                  className={
                    "center p-3 fira rounded-lg text-sm font-semibold text-green-500 border border-green-500 hover:bg-green-700/20 transition-color duration-300 ease-in-out text-center"
                  }
                  to={"/login"}
                  onClick={closeMobileMenu}
                >
                  console.login()
                </NavLink>
                <NavLink
                  className={
                    "center p-3 fira rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-orange-600 to-orange-500 hover:text-white transition-all duration-300 ease-in-out text-center"
                  }
                  to={"/signup"}
                  onClick={closeMobileMenu}
                >
                  signUp()
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <span className="h-10 w-10 rounded-full bg-white flex-shrink-0"></span>
                <span className="fira text-white text-sm">Profile</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu - FIXED VERSION */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={closeMobileMenu}
          style={{ top: "84px" }} // Adjust this value based on your navbar height
        />
      )}
    </div>
  );
}

export default NavBar;
