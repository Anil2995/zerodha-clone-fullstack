import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Free and open market education</h2>
          <p className="section-subtitle">
            Learn everything about the stock market for free
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="feature-card h-100" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}>
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px'
                }}>
                  <i className="fas fa-graduation-cap fa-lg"></i>
                </div>
                <h3 className="mb-0" style={{ color: 'white' }}>Varsity</h3>
              </div>
              <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
                The largest online stock market education book in the world covering
                everything from the basics to advanced trading strategies.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  15+ modules covering all aspects of trading
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  Free for everyone, forever
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  Available in multiple languages
                </li>
              </ul>
              <a
                href="https://zerodha.com/varsity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                Start learning <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-card h-100" style={{
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              color: 'white'
            }}>
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px'
                }}>
                  <i className="fas fa-comments fa-lg"></i>
                </div>
                <h3 className="mb-0" style={{ color: 'white' }}>TradingQ&A</h3>
              </div>
              <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
                The most active trading and investment community in India for all
                your market related queries.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  Ask questions and get expert answers
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  Join discussions on market trends
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle me-2"></i>
                  Learn from experienced traders
                </li>
              </ul>
              <a
                href="https://tradingqna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
              >
                Join community <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <img
              src="media/images/education.svg"
              alt="Education"
              className="img-fluid hover-lift"
              style={{ maxWidth: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;