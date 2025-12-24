import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className="section-padding d-flex align-items-center justify-content-center"
      style={{ minHeight: 'calc(100vh - 300px)' }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div style={{ fontSize: '8rem', lineHeight: 1, marginBottom: '2rem' }}>
              🔍
            </div>
            <h1 style={{ fontSize: '6rem', fontWeight: '700', color: '#387ED1' }}>
              404
            </h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/" className="btn-primary-custom">
                <i className="fas fa-home me-2"></i>
                Go to Homepage
              </Link>
              <Link to="/support" className="btn-secondary-custom">
                <i className="fas fa-headset me-2"></i>
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;