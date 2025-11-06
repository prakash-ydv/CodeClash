import React, { useEffect } from "react";

function TabMonitor({ onTabSwitch }) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.warn("User switched tab 🚨");
        onTabSwitch?.(); // call parent handler if provided
      } else {
        console.log("User returned ✅");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onTabSwitch]);

  return null; // invisible component
}

export default TabMonitor;
