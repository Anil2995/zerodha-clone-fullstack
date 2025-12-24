import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #387ED1 0%, #5C9CE5 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%'
      }}></div>

      <div className="container position-relative">
        <div className="row text-center justify-content-center">
          <div className="col-lg-8">
            <h2 className="mb-3" style={{ color: 'white', fontWeight: '700', fontSize: '2.5rem' }}>
              Open a Zerodha account
            </h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>

            <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
              <div className="text-center" style={{ color: 'white' }}>
                <i className="fas fa-mobile-alt fa-2x mb-2"></i>
                <p className="mb-0 small">Modern Apps</p>
              </div>
              <div className="text-center" style={{ color: 'white' }}>
                <i className="fas fa-rupee-sign fa-2x mb-2"></i>
                <p className="mb-0 small">₹0 Account</p>
              </div>
              <div className="text-center" style={{ color: 'white' }}>
                <i className="fas fa-bolt fa-2x mb-2"></i>
                <p className="mb-0 small">Instant Trading</p>
              </div>
              <div className="text-center" style={{ color: 'white' }}>
                <i className="fas fa-headset fa-2x mb-2"></i>
                <p className="mb-0 small">24/7 Support</p>
              </div>
            </div>

            <Link to="/signup">
              <button
                className="btn btn-lg px-5 py-3"
                style={{
                  background: 'white',
                  color: '#387ED1',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
              >
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

export default OpenAccount;