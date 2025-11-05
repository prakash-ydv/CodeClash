import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ScreenSize from "./pages/ScreenSize";
import DashBoard from "./outlets/DashBoard";
import Problems from "./outlets/Problems";
import NotFound from "./pages/NotFound";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 800);
    window.addEventListener("resize", handleResize);
    console.log("Changed...");
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return <ScreenSize />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<DashBoard />} />
          <Route path="hello" element={<h1>hello</h1>} />
          <Route path="problems" element={<Problems />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
