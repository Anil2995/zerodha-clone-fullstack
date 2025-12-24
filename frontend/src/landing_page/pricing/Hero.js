import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const pricingFeatures = [
    {
      icon: "pricingEquity.svg",
      title: "Free equity delivery",
      price: "₹0",
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
      highlight: true
    },
    {
      icon: "intradayTrades.svg",
      title: "Intraday and F&O trades",
      price: "₹20",
      priceNote: "per order",
      description: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades."
    },
    {
      icon: "pricingMF.svg",
      title: "Free direct MF",
      price: "₹0",
      description: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
      highlight: true
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        {/* Hero Header */}
        <div className="text-center mb-5">
          <h1 className="hero-title mb-3">Pricing</h1>
          <p className="hero-subtitle">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="pricing-card h-100"
                style={{
                  background: feature.highlight
                    ? 'linear-gradient(135deg, #387ED1 0%, #5c9ce5 100%)'
                    : 'white',
                  color: feature.highlight ? 'white' : 'inherit'
                }}
              >
                <div
                  className="pricing-icon"
                  style={{
                    background: feature.highlight
                      ? 'rgba(255,255,255,0.2)'
                      : '#f5f5f5'
                  }}
                >
                  <img
                    src={`media/images/${feature.icon}`}
                    alt={feature.title}
                    style={{
                      filter: feature.highlight ? 'brightness(0) invert(1)' : 'none'
                    }}
                  />
                </div>
                <div className="pricing-value" style={{ color: feature.highlight ? 'white' : 'inherit' }}>
                  {feature.price}
                  {feature.priceNote && (
                    <span style={{ opacity: 0.8 }}>/{feature.priceNote}</span>
                  )}
                </div>
                <h4 className="mt-3 mb-3" style={{ color: feature.highlight ? 'white' : 'inherit' }}>
                  {feature.title}
                </h4>
                <p style={{
                  opacity: feature.highlight ? 0.9 : 0.7,
                  fontSize: '0.95rem'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="p-5 text-center"
              style={{
                background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
                borderRadius: '20px'
              }}
            >
              <h3 className="mb-4">Additional Charges</h3>
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>No AMC charges</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Free account opening</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>No hidden charges</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://zerodha.com/charges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-custom"
                >
                  <i className="fas fa-calculator me-2"></i>
                  View Detailed Charges
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;