import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  const features = [
    {
      icon: "fa-users",
      title: "Customer-first always",
      description: "That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India."
    },
    {
      icon: "fa-shield-halved",
      title: "No spam or gimmicks",
      description: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace, the way you like."
    },
    {
      icon: "fa-globe",
      title: "The Zerodha universe",
      description: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
    },
    {
      icon: "fa-coins",
      title: "Do better with money",
      description: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
    }
  ];

  return (
    <section className="section-padding stats-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="section-title mb-4">Trust with confidence</h2>

            {features.map((feature, index) => (
              <div key={index} className="d-flex mb-4 hover-lift p-3" style={{
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div className="feature-icon me-3" style={{
                  minWidth: '50px',
                  height: '50px',
                  fontSize: '1.2rem'
                }}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <div>
                  <h4 className="fs-5 mb-2">{feature.title}</h4>
                  <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="text-center">
              <img
                src="media/images/ecosystem.png"
                alt="Zerodha Ecosystem"
                className="img-fluid hover-lift"
                style={{
                  maxWidth: "100%",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))"
                }}
              />
              <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/product" className="btn-secondary-custom">
                  Explore our products <i className="fas fa-arrow-right ms-2"></i>
                </Link>
                <a
                  href="https://kite-demo.zerodha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-custom"
                >
                  Try Kite demo <i className="fas fa-external-link-alt ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;