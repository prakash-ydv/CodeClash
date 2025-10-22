import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import LoginPage from "./pages/LoginPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import SignUpPage from "./pages/SignUpPage";
import BattlePage from "./pages/BattlePage";
import ProfilePage from "./pages/ProfilePage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const googleOauthLogin = () => {
    return (
      <GoogleOAuthProvider
        clientId={
          "658818578297-m79hi9a1t985340c98jkufejbavf3s66.apps.googleusercontent.com"
        }
      >
        <LoginPage />
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={googleOauthLogin()} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/battle" element={<BattlePage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
