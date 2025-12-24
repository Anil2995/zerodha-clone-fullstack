import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
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
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h2 className="section-title mb-3">{productName}</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {productDesription}
              </p>

              <div className="d-flex gap-3 mb-4 flex-wrap">
                {tryDemo && (
                  <a
                    href={tryDemo || "#"}
                    className="btn-secondary-custom"
                  >
                    <i className="fas fa-play me-2"></i>
                    Try Demo
                  </a>
                )}
                {learnMore && (
                  <a
                    href={learnMore || "#"}
                    className="text-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontWeight: '500'
                    }}
                  >
                    Learn More
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                )}
              </div>

              {(googlePlay || appStore) && (
                <div className="d-flex gap-3 flex-wrap">
                  {googlePlay && (
                    <a href={googlePlay || "#"} className="app-badge hover-lift">
                      <img
                        src="media/images/googlePlayBadge.svg"
                        alt="Get it on Google Play"
                        style={{ height: '45px' }}
                      />
                    </a>
                  )}
                  {appStore && (
                    <a href={appStore || "#"} className="app-badge hover-lift">
                      <img
                        src="media/images/appstoreBadge.svg"
                        alt="Download on App Store"
                        style={{ height: '45px' }}
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;