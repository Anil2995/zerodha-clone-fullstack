import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holdingsRes, positionsRes] = await Promise.all([
          axios.get(`${API_URL}/allHoldings`),
          axios.get(`${API_URL}/allPositions`)
        ]);
        setHoldings(holdingsRes.data);
        setPositions(positionsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate totals from holdings
  const calculateTotals = () => {
    if (holdings.length === 0) {
      return {
        investment: 0,
        currentValue: 0,
        pnl: 0,
        pnlPercent: 0
      };
    }

    const investment = holdings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
    const currentValue = holdings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
    const pnl = currentValue - investment;
    const pnlPercent = investment > 0 ? ((pnl / investment) * 100) : 0;

    return { investment, currentValue, pnl, pnlPercent };
  };

  const formatCurrency = (value) => {
    if (value >= 100000) {
      return (value / 100000).toFixed(2) + 'L';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(2) + 'k';
    }
    return value.toFixed(2);
  };

  const totals = calculateTotals();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="summary-container">
      <div className="username">
        <h6>Hi, User! 👋</h6>
        <p className="welcome-text">Welcome back to your trading dashboard</p>
        <hr className="divider" />
      </div>

      {/* Quick Stats Cards */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon equity">💼</div>
          <div className="stat-info">
            <p className="stat-label">Portfolio Value</p>
            <h4 className="stat-value">₹{formatCurrency(totals.currentValue)}</h4>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon holdings">📊</div>
          <div className="stat-info">
            <p className="stat-label">Total Holdings</p>
            <h4 className="stat-value">{holdings.length}</h4>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon positions">📈</div>
          <div className="stat-info">
            <p className="stat-label">Active Positions</p>
            <h4 className="stat-value">{positions.length}</h4>
          </div>
        </div>

        <div className={`stat-card ${totals.pnl >= 0 ? 'profit' : 'loss'}`}>
          <div className="stat-icon pnl">{totals.pnl >= 0 ? '📈' : '📉'}</div>
          <div className="stat-info">
            <p className="stat-label">Today's P&L</p>
            <h4 className={`stat-value ${totals.pnl >= 0 ? 'profit' : 'loss'}`}>
              {totals.pnl >= 0 ? '+' : ''}₹{formatCurrency(Math.abs(totals.pnl))}
            </h4>
          </div>
        </div>
      </div>

      {/* Equity Section */}
      <div className="section">
        <span className="section-header">
          <p>💰 Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0</span>
            </p>
            <p>
              Opening balance <span>₹3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings Section */}
      <div className="section">
        <span className="section-header">
          <p>📈 Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totals.pnl >= 0 ? "profit" : "loss"}>
              {totals.pnl >= 0 ? '+' : '-'}₹{formatCurrency(Math.abs(totals.pnl))}
              <small> ({totals.pnl >= 0 ? '+' : ''}{totals.pnlPercent.toFixed(2)}%)</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{formatCurrency(totals.currentValue)}</span>
            </p>
            <p>
              Investment <span>₹{formatCurrency(totals.investment)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Commodity Section */}
      <div className="section commodity-section">
        <span className="section-header">
          <p>🏆 Commodity</p>
        </span>
        <div className="commodity-placeholder">
          <p>You don't have any commodity holdings</p>
          <a href="#" className="btn-link">Start trading commodities →</a>
        </div>
      </div>
    </div>
  );
};

export default Summary;