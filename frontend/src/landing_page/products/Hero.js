import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        <div className="text-center">
          <h1 className="hero-title mb-3">Technology</h1>
          <p className="hero-subtitle mb-4">
            Sleek, modern and intuitive trading platforms
          </p>
          <Link
            to="/pricing"
            className="text-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: '500',
              fontSize: '1.1rem'
            }}
          >
            Check out our investment offerings
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;