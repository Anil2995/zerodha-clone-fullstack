import React from "react";

function Brokerage() {
  const chargesList = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
  ];

  const quickLinks = [
    { icon: "fa-calculator", title: "Brokerage Calculator", url: "https://zerodha.com/brokerage-calculator" },
    { icon: "fa-list-ul", title: "List of Charges", url: "https://zerodha.com/charges" },
    { icon: "fa-percent", title: "Margin Calculator", url: "https://zerodha.com/margin-calculator" },
    { icon: "fa-exchange-alt", title: "Currency Charges", url: "#" }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row g-4">
          {/* Charges Information */}
          <div className="col-lg-8">
            <div
              className="h-100 p-4"
              style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <h3 className="mb-4" style={{ fontWeight: '600' }}>
                <i className="fas fa-info-circle me-2 text-primary"></i>
                Additional Charges
              </h3>

              <ul className="list-unstyled">
                {chargesList.map((charge, index) => (
                  <li
                    key={index}
                    className="d-flex mb-3"
                    style={{
                      paddingBottom: '12px',
                      borderBottom: index < chargesList.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}
                  >
                    <i
                      className="fas fa-check-circle me-3 mt-1"
                      style={{ color: '#00C853', fontSize: '0.9rem' }}
                    ></i>
                    <span style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                      {charge}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-4 p-4"
                style={{
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
                  borderRadius: '12px'
                }}
              >
                <p className="mb-0" style={{ fontSize: '0.9rem', color: '#333' }}>
                  <i className="fas fa-lightbulb me-2" style={{ color: '#ffc107' }}></i>
                  <strong>Pro Tip:</strong> Open your account today and start trading with zero brokerage on equity delivery!
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4">
            <div
              className="h-100 p-4"
              style={{
                background: 'linear-gradient(135deg, #387ED1 0%, #5c9ce5 100%)',
                borderRadius: '16px',
                color: 'white'
              }}
            >
              <h4 className="mb-4" style={{ fontWeight: '600' }}>
                Quick Tools
              </h4>

              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center mb-3 p-3"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px'
                    }}
                  >
                    <i className={`fas ${link.icon}`}></i>
                  </div>
                  <span style={{ fontWeight: '500' }}>{link.title}</span>
                  <i className="fas fa-arrow-right ms-auto" style={{ fontSize: '0.8rem' }}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;