import "./App.css";
import { useState } from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { Header } from "./components/layouts/Header";
import { Dashboard } from "./pages/Dashboard";
import { isTokenValid } from "./services/tokenService";

// import { Dashboard } from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {

    const token = localStorage.getItem("token");
    return isTokenValid(token);
  });

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  

  

  return (
    <>
      <header>
        {isAuthenticated ? <Header handleLogout={handleLogout} /> : <p></p>}
      </header>
      <main>
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <LoginScreen onLoginSuccess={handleLoginSuccess} />
        )}
      </main>

    </>
  );
}

export default App;
