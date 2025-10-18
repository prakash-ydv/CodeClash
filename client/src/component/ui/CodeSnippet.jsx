import React from "react";

function CodeSnippet() {
  return (
    <div class="code-snippet flex flex-col gap-1 tracking-wide bg-white/5 p-5 text-sm md:text-md w-sm md:w-lg lg:w-3xl rounded-xl mt-10 border border-white/10">
      <div>
        <span className="code-keyword fira"> function </span>
        <span className="code-function fira"> battle </span> (opponent)
        <span className="fira">
            {" { "}
        </span>
      </div>
      <div>
        &nbsp;&nbsp;<span className="code-keyword fira"> const </span>{" "}
        <span className="code-var fira">problem </span> ={" "}
        <span className="code-function fira">generateProblem </span>();
      </div>
      <div>
        &nbsp;&nbsp;<span className="code-keyword fira"> const </span>{" "}
        <span className="code-var fira"> solution </span> ={" "}
        <span className="code-function fira"> code </span>(problem);
      </div>
      <div>
        &nbsp;&nbsp;<span className="code-keyword fira"> return </span>{" "}
        <span className="code-function fira"> compare </span>(solution,
        opponent.solution);
      </div>
      <div></div>
      <div className="code-comment">// Join 50K+ developers in coding battles</div>
    </div>
  );
}

export default CodeSnippet;
