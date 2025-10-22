import React from "react";
import NavBar from "../component/ui/NavBar";

function LoginPage() {
  return (
    <div className="h-screen terminal-bg">
      <NavBar />
      <div className="w-full terminal-bg center h-[85vh] ">
        <div className="center flex-col p-5 border border-white/10 rounded-2xl">
          {/* buttons */}
          <div className="flex gap-5">
            <button className="w-42 p-2 rounded-md font-semibold bg-gradient-to-r fira from-orange-500 to-orange-400">
              Login
            </button>
            <button className="w-42 p-2 rounded-md font-semibold bg-gradient-to-r fira from-orange-500 to-orange-400">
              signUp
            </button>
          </div>

          {/* login form */}

          <form action="" className="w-full flex flex-col gap-2">
            <div>
              <label className="text-xs text-zinc-500">email</label>
              <input
                className="custom-input"
                id="mail"
                type="email"
                required={true}
                spellCheck={false}
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500">password</label>
              <input
                className="custom-input"
                type="password"
                required={true}
                minLength={4}
              />
            </div>
            <span className="text-xs text-zinc-500 cursor-pointer py-">forgot password</span>
            <input
              className="bg-green-500 rounded-md text-sm p-2 font-semibold cursor-pointer"
              type="submit"
              value={"Login"}
            />
          </form>

          <span className="text-zinc-500 py-5">or</span>

          <button className="w-full flex items-center justify-center text-sm gap-2 bg-white text-black px-4 py-2 rounded-md">
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-4 h-4"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
