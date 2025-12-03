import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import StudyPage from "./pages/StudyPage";
import GardenPage from "./pages/GardenPage";

interface AppRoutesProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, onLogin }) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make the login page the first page at "/" */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<AuthPage onLoginSuccess={onLogin} />} />
            <Route path="/login" element={<AuthPage onLoginSuccess={onLogin} />} />
            {/* optionally add protected routes but they will be redirected if not authed */}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            {/* When authenticated, show the app pages and default to study */}
            <Route path="/" element={<Navigate to="/study" replace />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="/garden" element={<GardenPage />} />
            <Route path="*" element={<Navigate to="/study" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;