import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const partners = [
    {
      name: "Smallcase",
      logo: "smallcaseLogo.png",
      description: "Thematic investment platform",
      url: "https://smallcase.zerodha.com"
    },
    {
      name: "Streak",
      logo: "streakLogo.png",
      description: "Algo trading platform",
      url: "https://streak.zerodha.com"
    },
    {
      name: "Sensibull",
      logo: "sensibullLogo.svg",
      description: "Options trading platform",
      url: "https://sensibull.com"
    },
    {
      name: "Ditto",
      logo: "dittoLogo.png",
      description: "Insurance advisory",
      url: "https://joinditto.in"
    },
    {
      name: "Zerodha Fund House",
      logo: "zerodhaFundhouse.png",
      description: "Asset management",
      url: "https://zerodhamf.com"
    },
    {
      name: "Golden Pi",
      logo: "goldenpiLogo.png",
      description: "Bond investing platform",
      url: "https://goldenpi.com"
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">The Zerodha Universe</h2>
          <p className="section-subtitle">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="partner-card text-center hover-lift p-4"
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}
                >
                  <div
                    className="partner-logo mb-3"
                    style={{
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={`media/images/${partner.logo}`}
                      alt={partner.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: '0.85rem',
                      color: '#666'
                    }}
                  >
                    {partner.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <Link to="/signup" className="btn-primary-custom">
            <i className="fas fa-rocket me-2"></i>
            Sign up now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Universe;