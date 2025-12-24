import React from "react";
import "./Apps.css";

const Apps = () => {
  const zerodhaApps = [
    {
      name: "Kite",
      description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, and more.",
      icon: "https://zerodha.com/static/images/kite-logo.svg",
      link: "https://kite.zerodha.com",
      color: "#FF5722",
      features: ["Streaming data", "Advanced charts", "GTT orders", "Multi-exchange"]
    },
    {
      name: "Console",
      description: "Central dashboard for funds, reports, holdings, and account settings.",
      icon: "https://zerodha.com/static/images/console-logo.svg",
      link: "https://console.zerodha.com",
      color: "#4CAF50",
      features: ["Fund management", "Tax reports", "Portfolio analysis", "Account settings"]
    },
    {
      name: "Coin",
      description: "Direct mutual fund investments with zero commission.",
      icon: "https://zerodha.com/static/images/coin-logo.svg",
      link: "https://coin.zerodha.com",
      color: "#2196F3",
      features: ["Direct MFs", "Zero commission", "SIP", "Goal tracking"]
    },
    {
      name: "Kite Connect",
      description: "Build trading and investment apps with our APIs.",
      icon: "https://kite.trade/images/kiteconnect-logo.svg",
      link: "https://kite.trade",
      color: "#9C27B0",
      features: ["REST APIs", "WebSocket", "SDK", "Documentation"]
    },
    {
      name: "Varsity",
      description: "Free and comprehensive stock market education.",
      icon: "https://zerodha.com/static/images/varsity-logo.svg",
      link: "https://zerodha.com/varsity",
      color: "#FF9800",
      features: ["Free content", "12+ modules", "Certifications", "Videos"]
    },
    {
      name: "Sentinel",
      description: "Create custom alerts for stock prices and market events.",
      icon: "https://zerodha.com/static/images/sentinel-logo.svg",
      link: "https://sentinel.zerodha.com",
      color: "#E91E63",
      features: ["Price alerts", "Custom conditions", "Email & SMS", "Multi-instrument"]
    }
  ];

  const thirdPartyApps = [
    {
      name: "Smallcase",
      description: "Invest in portfolios of stocks curated by experts.",
      icon: "https://assets.smallcase.com/static/images/logo.svg",
      link: "https://www.smallcase.com",
      category: "Investments"
    },
    {
      name: "Streak",
      description: "Create, backtest, and deploy trading strategies without coding.",
      icon: "https://streak.tech/assets/images/streak-logo.svg",
      link: "https://streak.zerodha.com",
      category: "Algo Trading"
    },
    {
      name: "Sensibull",
      description: "Options trading made simple with visual strategies.",
      icon: "https://sensibull.com/assets/images/logo.svg",
      link: "https://sensibull.com",
      category: "Options"
    },
    {
      name: "Golden Pi",
      description: "Buy and sell bonds online with complete transparency.",
      icon: "https://www.goldenpi.com/images/logo.svg",
      link: "https://www.goldenpi.com",
      category: "Bonds"
    }
  ];

  return (
    <div className="apps-container">
      <div className="apps-header">
        <h1>
          <span className="apps-icon">📱</span>
          Apps
        </h1>
        <p className="apps-subtitle">
          Trading and investment apps from Zerodha ecosystem
        </p>
      </div>

      {/* Zerodha Apps Section */}
      <div className="apps-section">
        <h2 className="section-title">
          <span className="title-icon">🏢</span>
          Zerodha Products
        </h2>
        <div className="apps-grid">
          {zerodhaApps.map((app, index) => (
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="app-card"
              style={{ '--accent-color': app.color }}
            >
              <div className="app-icon-wrapper">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="app-icon"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="app-emoji">${app.name[0]}</span>`;
                  }}
                />
              </div>
              <div className="app-info">
                <h3>{app.name}</h3>
                <p className="app-description">{app.description}</p>
                <div className="app-features">
                  {app.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
              <div className="app-arrow">
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Third Party Apps Section */}
      <div className="apps-section">
        <h2 className="section-title">
          <span className="title-icon">🤝</span>
          Partner Apps
        </h2>
        <p className="section-subtitle">
          Apps built on Kite Connect by third-party developers
        </p>
        <div className="partner-apps-grid">
          {thirdPartyApps.map((app, index) => (
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="partner-app-card"
            >
              <div className="partner-icon-wrapper">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="partner-icon"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="partner-emoji">${app.name[0]}</span>`;
                  }}
                />
              </div>
              <div className="partner-info">
                <span className="partner-category">{app.category}</span>
                <h4>{app.name}</h4>
                <p>{app.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="apps-stats">
        <div className="stat-item">
          <span className="stat-number">1 Cr+</span>
          <span className="stat-label">Users on Kite</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Partner Apps</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">₹0</span>
          <span className="stat-label">Delivery Brokerage</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Apps;