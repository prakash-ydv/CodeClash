import React, { useEffect, useState } from "react";

function Rules({ trigger }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, [trigger]);

  return (
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } h-full w-full flex-col items-center justify-center absolute top-0 left-0 backdrop-blur-sm bg-black/40 z-[99] text-white`}
    >
      <div className="bg-gray-900/80 rounded-2xl p-6 shadow-lg max-w-md text-center">
        <h1 className="font-semibold text-2xl uppercase mb-4">Rules</h1>
        <ul className="text-left space-y-2">
          <li>🚫 Cheating is not allowed</li>
          <li>🚫 Copy-paste is not allowed</li>
          <li>🚫 Switching tabs is not allowed</li>
          <li>⚠️ -10 for each wrong submission</li>
          <li>🏆 Bonus points for early completion</li>
        </ul>

        <button
          onClick={() => setIsActive(false)}
          className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Rules;
