import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="section-padding" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <div className="product-image-wrapper hover-lift">
              <img
                src={imageURL}
                alt={productName}
                className="img-fluid"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pe-lg-4">
              <h2 className="section-title mb-3">{productName}</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {productDesription}
              </p>

              <a
                href={learnMore || "#"}
                className="btn-secondary-custom"
              >
                Learn More
                <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;