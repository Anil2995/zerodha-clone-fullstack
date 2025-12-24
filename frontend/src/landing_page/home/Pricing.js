import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const pricingItems = [
    {
      icon: "pricing0.svg",
      title: "Free account opening",
      subtitle: "No maintenance charges",
      description: "Zero account opening charges and zero AMC",
      highlight: "₹0"
    },
    {
      icon: "pricingEquity.svg",
      title: "Free equity delivery",
      subtitle: "All direct mutual funds",
      description: "Free equity delivery trades and direct mutual funds",
      highlight: "₹0"
    },
    {
      icon: "pricingMF.svg",
      title: "Intraday and F&O",
      subtitle: "Flat per executed order",
      description: "No matter how large your order size",
      highlight: "₹20"
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Unbeatable pricing</h2>
          <p className="section-subtitle">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {pricingItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="pricing-card h-100">
                <div className="pricing-icon">
                  <img
                    src={`media/images/${item.icon}`}
                    alt={item.title}
                  />
                </div>
                <div className="pricing-value">
                  {item.highlight}
                  {item.highlight === "₹20" && <span>/order</span>}
                </div>
                <h4 className="mt-3 mb-2">{item.title}</h4>
                <p className="text-primary mb-2" style={{ fontWeight: '500' }}>
                  {item.subtitle}
                </p>
                <p className="text-muted small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/pricing" className="btn-secondary-custom">
            <i className="fas fa-calculator me-2"></i>
            See detailed pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;