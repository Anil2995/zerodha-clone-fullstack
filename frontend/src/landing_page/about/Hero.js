import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const stats = [
    { value: "1.6+", suffix: "Crore", label: "Happy Clients" },
    { value: "₹6+", suffix: "Lakh Cr", label: "Assets" },
    { value: "15%", suffix: "", label: "Daily Volume" },
    { value: "5000+", suffix: "", label: "Team Members" }
  ];

  return (
    <section className="about-hero">
      <div className="container">
        <div className="row py-5 text-center">
          <div className="col-12 col-lg-10 mx-auto">
            <h1 className="about-title mb-4">
              We pioneered the discount broking model in India.
              <br />
              <span className="text-primary">Now, we are breaking ground with our technology.</span>
            </h1>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row mb-5 g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="stat-card text-center hover-lift" style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#387ED1',
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}<span style={{ fontSize: '1rem', fontWeight: '400' }}>{stat.suffix}</span>
                </h2>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row py-5 border-top" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
          <div className="col-lg-6 p-4">
            <div className="pe-lg-4">
              <div className="d-flex align-items-center mb-4">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #387ED1 0%, #5c9ce5 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px'
                }}>
                  <i className="fas fa-rocket" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Our Story</h3>
              </div>
              <p className="text-muted">
                We kick-started operations on the 15th of August, 2010 with the goal
                of breaking all barriers that traders and investors face in India in
                terms of cost, support, and technology. We named the company
                Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
                barrier.
              </p>
              <p className="text-muted">
                Today, our disruptive pricing models and in-house technology have
                made us the biggest stock broker in India.
              </p>
              <p className="text-muted">
                Over 1.6+ Crore clients place millions of orders every day through our
                powerful ecosystem of investment platforms, contributing over 15% of
                all Indian retail trading volumes.
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="ps-lg-4">
              <div className="d-flex align-items-center mb-4">
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px'
                }}>
                  <i className="fas fa-lightbulb" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Our Mission</h3>
              </div>
              <p className="text-muted">
                In addition, we run a number of popular open online educational and
                community initiatives to empower retail traders and investors.
              </p>
              <p className="text-muted">
                <a href="https://rainmatter.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                  Rainmatter <i className="fas fa-external-link-alt small"></i>
                </a>
                , our fintech fund and incubator, has invested in several fintech
                startups with the goal of growing the Indian capital markets.
              </p>
              <p className="text-muted">
                And yet, we are always up to something new every day. Catch up on
                the latest updates on our{" "}
                <a href="https://zerodha.com/z-connect" target="_blank" rel="noopener noreferrer" className="text-primary">
                  blog <i className="fas fa-external-link-alt small"></i>
                </a>
                {" "}or see what the media is saying about us.
              </p>

              <div className="mt-4 d-flex gap-3">
                <a
                  href="https://zerodha.com/z-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-custom"
                >
                  Read Blog <i className="fas fa-arrow-right ms-2"></i>
                </a>
                <a
                  href="https://zerodha.com/media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-custom"
                >
                  Press & Media <i className="fas fa-arrow-right ms-2"></i>
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