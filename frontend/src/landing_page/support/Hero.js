import React, { useState } from "react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickLinks = [
    { icon: "fa-user-plus", text: "Track account opening", url: "#" },
    { icon: "fa-cog", text: "Track segment activation", url: "#" },
    { icon: "fa-chart-line", text: "Intraday margins", url: "#" },
    { icon: "fa-book", text: "Kite user manual", url: "#" }
  ];

  const featuredArticles = [
    { title: "Current Takeovers and Delisting - December 2024", url: "#" },
    { title: "Latest Intraday leverages - MIS & CO", url: "#" },
    { title: "New Peak Margin Requirements explained", url: "#" },
    { title: "How F&O margin calculations work", url: "#" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In production, this would trigger a search API call
    console.log("Searching for:", searchQuery);
  };

  return (
    <section id="supportHero">
      <div className="container-fluid">
        {/* Header Bar */}
        <div className="d-flex justify-content-between align-items-center p-4 px-5">
          <h4 className="mb-0" style={{ fontWeight: '600' }}>
            <i className="fas fa-headset me-2"></i>
            Support Portal
          </h4>
          <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
            <i className="fas fa-ticket-alt me-2"></i>
            Track Tickets
          </a>
        </div>

        {/* Hero Content */}
        <div className="row p-5 mx-lg-5 g-5">
          <div className="col-lg-7">
            <h1 className="mb-4" style={{ fontSize: '2rem', fontWeight: '600' }}>
              Search for an answer or browse help topics to create a ticket
            </h1>

            <form onSubmit={handleSearch}>
              <div className="input-group mb-4" style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
              }}>
                <span className="input-group-text bg-white border-0 ps-4">
                  <i className="fas fa-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Eg. how do I activate F&O, how to add funds, what are margins"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ fontSize: '1.1rem' }}
                />
                <button
                  type="submit"
                  className="btn px-4"
                  style={{
                    background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
                    color: 'white',
                    fontWeight: '600'
                  }}
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="quick-link"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
                >
                  <i className={`fas ${link.icon} me-2`}></i>
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h4 className="mb-4" style={{ fontWeight: '600' }}>
                <i className="fas fa-star me-2"></i>
                Featured Articles
              </h4>
              <ol className="ps-3">
                {featuredArticles.map((article, index) => (
                  <li key={index} className="mb-3">
                    <a
                      href={article.url}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '0.8'}
                      onMouseOut={(e) => e.target.style.opacity = '1'}
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <p className="mb-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  Can't find what you're looking for?
                </p>
                <a
                  href="#createTicket"
                  className="btn btn-light"
                  style={{ fontWeight: '500' }}
                >
                  Create a Support Ticket
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