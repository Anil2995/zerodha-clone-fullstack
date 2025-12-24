import React, { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import KiteLogin from "./KiteLogin";
import WelcomeModal from "./WelcomeModal";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    checkAuth();
  }, []);

  const checkAuth = () => {
    const storedUser = localStorage.getItem("zerodhaUser");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData && userData.email) {
          setUser(userData);
          setIsAuthenticated(true);

          // Check if this is first time user
          const welcomeSeen = localStorage.getItem("zerodhaWelcomeSeen");
          if (!welcomeSeen) {
            setShowWelcome(true);
          }
        }
      } catch (e) {
        console.error("Error parsing user data:", e);
        localStorage.removeItem("zerodhaUser");
      }
    }
    setIsLoading(false);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);

    // Show welcome modal for new logins
    const welcomeSeen = localStorage.getItem("zerodhaWelcomeSeen");
    if (!welcomeSeen) {
      setShowWelcome(true);
    }
  };

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="kite-loader">
            <div className="loader-ring"></div>
            <img
              src="https://zerodha.com/static/images/kite-logo.svg"
              alt="Kite"
              className="loader-logo"
            />
          </div>
          <p className="loading-text">Loading Kite...</p>
        </div>
        <style>{`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .loading-content {
            text-align: center;
          }
          .kite-loader {
            position: relative;
            width: 100px;
            height: 100px;
            margin: 0 auto 20px;
          }
          .loader-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 4px solid rgba(255,255,255,0.2);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          .loader-logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            filter: brightness(0) invert(1);
          }
          .loading-text {
            color: rgba(255,255,255,0.9);
            font-size: 1rem;
            font-weight: 500;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <KiteLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // If authenticated, show dashboard
  return (
    <>
      <TopBar />
      <Dashboard />
      {showWelcome && (
        <WelcomeModal user={user} onClose={handleWelcomeClose} />
      )}
    </>
  );
};

export default Home;