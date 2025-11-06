import React, { useContext, useEffect, useState } from "react";
import NavBar from "../component/ui/NavBar";
import ProblemStatement from "../component/ui/ProblemStatement";
import Rules from "../component/ui/Rules";
import Editor from "@monaco-editor/react";
import CodeIDE from "../component/ui/CodeIDE";
import SmallScreenWarning from "../component/ui/SmallScreenWarning";
import TabMonitor from "../component/security/TabMonitor";
import { runCode } from "../api/problem.api";
import { UserContext } from "../context/UserContext";

function BattlePage() {
  const { code, setIdeLang, ideLang } = useContext(UserContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);
  const [isRulesActive, setIsRulesActive] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 800);
    window.addEventListener("resize", handleResize);
    console.log("Changed...");
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return <SmallScreenWarning />;
  }

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      {/* <TabMonitor
        onTabSwitch={() => alert("Tab switched! Penalty applied 🚫")}
      /> */}

      <NavBar />

      <div className="p-2 flex gap-2 terminal-bg h-[88.7vh] text-white">
        <Rules trigger={isRulesActive} />

        <section
          id="problem-statement"
          className="w-[35vw] terminal-header  overflow-auto rounded-md border border-white/10 no-scrollbar"
        >
          <ProblemStatement />
        </section>

        <div className="w-[65vw] overflow-auto rounded-md border border-white/10 no-scrollbar">
          <div className="h-10 flex gap-2 p-1 truncate text-sm">
            <select
              className="border-none outline-none"
              name="language"
              value={ideLang}
              onChange={(e) => setIdeLang(e.target.value)}
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>

            <div className="w-22 h-full center terminal-header">Timer</div>
            <div className="w-22 h-full center terminal-header">Score</div>
            <button
              onClick={() => setIsRulesActive((prev) => !prev)}
              className="w-22 h-full center terminal-header"
            >
              Rules
            </button>
            <div className="w-22 h-full center terminal-header">Giveup</div>
            <div className="w-22 h-full center terminal-header">
              Tie Request
            </div>
            <div className="w-22 h-full center terminal-header">Chat</div>
            <div className="w-22 h-full center terminal-header">Report</div>
            <div className="w-22 h-full center terminal-header">Feedback</div>
          </div>

          <section
            id="coding-screen"
            className="w-full h-[60vh] terminal-header border border-white/5 relative"
          >
            {/* IDE */}
            <CodeIDE />
            <div className="absolute z-9 flex gap-2 bottom-0 right-2 text-sm">
              <button
                onClick={() => runCode(code, ideLang)}
                className="px-2 py-1 terminal-bg rounded-md"
              >
                run()
              </button>
              <button className="px-2 bg-green-800 rounded-md">submit()</button>
            </div>
          </section>

          <section id="test-cases" className="p-2 space-y-4 text-sm">
            <h1>Test Cases</h1>
            <div id="test case holder" className="flex gap-2">
              <div className="terminal-header p-2 rounded-md">
                <h1>Test 1</h1>
                <p>Input</p>
                <p>Expected Output</p>
              </div>
              <div className="terminal-header p-2 rounded-md">
                <h1>Test 2</h1>
                <p>Input</p>
                <p>Expected Output</p>
              </div>
              <div className="terminal-header p-2 rounded-md">
                <h1>Test 3</h1>
                <p>Input</p>
                <p>Expected Output</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
