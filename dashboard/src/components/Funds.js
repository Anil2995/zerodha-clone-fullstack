import React, { useState, useEffect } from "react";
import "./Funds.css";

const Funds = () => {
  const [user, setUser] = useState(null);
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("zerodhaUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
  }, []);

  const balance = user?.balance || 100000;

  const equityData = {
    availableMargin: balance,
    usedMargin: 0,
    availableCash: balance,
    openingBalance: balance,
    payin: 0,
    payout: 0,
    span: 0,
    deliveryMargin: 0,
    exposure: 0,
    optionsPremium: 0
  };

  const handleAddFunds = () => {
    alert(`Demo: Would add ₹${amount} to your account via UPI`);
    setShowAddFundsModal(false);
    setAmount("");
  };

  const handleWithdraw = () => {
    alert(`Demo: Would withdraw ₹${amount} from your account`);
    setShowWithdrawModal(false);
    setAmount("");
  };

  return (
    <div className="funds-container">
      {/* Header Section */}
      <div className="funds-header">
        <div className="funds-title">
          <h1>
            <span className="funds-icon">💰</span>
            Funds
          </h1>
          <p className="funds-subtitle">
            Instant, zero-cost fund transfers with UPI
          </p>
        </div>
        <div className="funds-actions">
          <button
            className="btn-add-funds"
            onClick={() => setShowAddFundsModal(true)}
          >
            <span className="btn-icon">➕</span>
            Add Funds
          </button>
          <button
            className="btn-withdraw"
            onClick={() => setShowWithdrawModal(true)}
          >
            <span className="btn-icon">💸</span>
            Withdraw
          </button>
        </div>
      </div>

      {/* Balance Overview Cards */}
      <div className="balance-cards">
        <div className="balance-card primary">
          <div className="balance-card-icon">💼</div>
          <div className="balance-card-content">
            <span className="balance-label">Available Balance</span>
            <span className="balance-amount">
              ₹{balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
        <div className="balance-card">
          <div className="balance-card-icon">📊</div>
          <div className="balance-card-content">
            <span className="balance-label">Used Margin</span>
            <span className="balance-amount">₹0.00</span>
          </div>
        </div>
        <div className="balance-card">
          <div className="balance-card-icon">📈</div>
          <div className="balance-card-content">
            <span className="balance-label">Collateral</span>
            <span className="balance-amount">₹0.00</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="funds-content">
        {/* Equity Section */}
        <div className="funds-section">
          <div className="section-header">
            <h2>
              <span className="section-icon">📈</span>
              Equity
            </h2>
            <span className="section-badge">NSE / BSE</span>
          </div>

          <div className="funds-table">
            <div className="funds-row highlight">
              <span className="row-label">Available margin</span>
              <span className="row-value primary">
                ₹{equityData.availableMargin.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="funds-row">
              <span className="row-label">Used margin</span>
              <span className="row-value">₹{equityData.usedMargin.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Available cash</span>
              <span className="row-value">
                ₹{equityData.availableCash.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="funds-divider"></div>

            <div className="funds-row">
              <span className="row-label">Opening balance</span>
              <span className="row-value">
                ₹{equityData.openingBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="funds-row">
              <span className="row-label">Payin</span>
              <span className="row-value">₹{equityData.payin.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Payout</span>
              <span className="row-value">₹{equityData.payout.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">SPAN</span>
              <span className="row-value">₹{equityData.span.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Delivery margin</span>
              <span className="row-value">₹{equityData.deliveryMargin.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Exposure</span>
              <span className="row-value">₹{equityData.exposure.toFixed(2)}</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Options premium</span>
              <span className="row-value">₹{equityData.optionsPremium.toFixed(2)}</span>
            </div>

            <div className="funds-divider"></div>

            <div className="funds-row">
              <span className="row-label">Collateral (Liquid funds)</span>
              <span className="row-value">₹0.00</span>
            </div>
            <div className="funds-row">
              <span className="row-label">Collateral (Equity)</span>
              <span className="row-value">₹0.00</span>
            </div>
            <div className="funds-row highlight">
              <span className="row-label">Total Collateral</span>
              <span className="row-value">₹0.00</span>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="funds-section">
          <div className="section-header">
            <h2>
              <span className="section-icon">🪙</span>
              Commodity
            </h2>
            <span className="section-badge coming-soon">Coming Soon</span>
          </div>

          <div className="commodity-cta">
            <div className="commodity-icon">🏆</div>
            <h3>Trade in Commodities</h3>
            <p>Open a commodity trading account to trade in Gold, Silver, Crude Oil, and more.</p>
            <button className="btn-open-account">
              Open Commodity Account
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <a href="https://console.zerodha.com" target="_blank" rel="noopener noreferrer" className="action-item">
            <span className="action-icon">📊</span>
            <span>Console</span>
          </a>
          <a href="#" className="action-item">
            <span className="action-icon">📝</span>
            <span>Statements</span>
          </a>
          <a href="#" className="action-item">
            <span className="action-icon">📋</span>
            <span>Tax P&L</span>
          </a>
          <a href="#" className="action-item">
            <span className="action-icon">⚙️</span>
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <div className="modal-overlay" onClick={() => setShowAddFundsModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add Funds</h2>
            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                min="1"
              />
            </div>
            <div className="payment-methods">
              <p>Payment Method</p>
              <div className="method-options">
                <label className="method-option selected">
                  <input type="radio" name="method" defaultChecked />
                  <span className="method-icon">📱</span>
                  <span>UPI</span>
                </label>
                <label className="method-option">
                  <input type="radio" name="method" />
                  <span className="method-icon">🏦</span>
                  <span>Net Banking</span>
                </label>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowAddFundsModal(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleAddFunds}>
                Add ₹{amount || 0}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="modal-overlay" onClick={() => setShowWithdrawModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Withdraw Funds</h2>
            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                min="1"
                max={balance}
              />
              <small>Available: ₹{balance.toLocaleString("en-IN")}</small>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowWithdrawModal(false)}>
                Cancel
              </button>
              <button className="btn-confirm withdraw" onClick={handleWithdraw}>
                Withdraw ₹{amount || 0}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;