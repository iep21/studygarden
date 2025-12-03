import React, { useState } from "react";
import AppRoutes from "./AppRoutes";

// Option: use an env variable to force login in dev
const FORCE_SHOW_LOGIN = import.meta.env.VITE_FORCE_LOGIN === "true";

function App() {
  // in dev, this will be false so user lands on the login page
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(FORCE_SHOW_LOGIN ? false : false);
  // (set to false above so login shows by default; change logic if you need)
  const [coins] = useState(0);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div className="app-layout">
      <AppRoutes isAuthenticated={isAuthenticated} onLogin={handleLogin} />
    </div>
  );
}

export default App;