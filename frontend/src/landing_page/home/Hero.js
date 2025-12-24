import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <img
              src="media/images/homeHero.png"
              alt="Zerodha Trading Platform"
              className="hero-image"
              style={{ maxWidth: "70%", height: "auto" }}
            />
            <h1 className="hero-title">Invest in everything</h1>
            <p className="hero-subtitle">
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <Link to="/signup">
              <button className="btn-primary-custom">
                <i className="fas fa-rocket me-2"></i>
                Sign up for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;