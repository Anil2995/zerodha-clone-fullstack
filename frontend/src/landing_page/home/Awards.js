import React from "react";

function Awards() {
  const tradingOptions = [
    { icon: "fa-chart-line", text: "Futures and Options" },
    { icon: "fa-coins", text: "Commodity derivatives" },
    { icon: "fa-money-bill-wave", text: "Currency derivatives" },
    { icon: "fa-building", text: "Stocks & IPOs" },
    { icon: "fa-piggy-bank", text: "Direct mutual funds" },
    { icon: "fa-landmark", text: "Bonds and Govt. Securities" }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="text-center">
              <img
                src="media/images/largestBroker.svg"
                alt="India's Largest Broker"
                className="img-fluid hover-lift"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="section-title mb-3">
              Largest stock broker in India
            </h2>
            <p className="lead text-muted mb-4">
              1.6+ crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
            </p>

            <div className="row g-3 mb-4">
              {tradingOptions.map((option, index) => (
                <div key={index} className="col-6">
                  <div className="d-flex align-items-center p-3 hover-lift" style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    <i className={`fas ${option.icon} me-3`} style={{
                      color: '#387ED1',
                      fontSize: '1.2rem',
                      width: '24px'
                    }}></i>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                      {option.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3" style={{
              background: '#fafafa',
              borderRadius: '12px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <p className="text-muted small mb-3">As featured in</p>
              <img
                src="media/images/pressLogos.png"
                alt="Press Logos"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  opacity: 0.8,
                  filter: "grayscale(20%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;