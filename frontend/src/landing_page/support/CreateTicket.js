import React from "react";

function CreateTicket() {
  const supportCategories = [
    {
      icon: "fa-user-plus",
      category: "Account Opening",
      color: "#387ED1",
      topics: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company/Partnership/HUF Account",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Getting Started"
      ]
    },
    {
      icon: "fa-exchange-alt",
      category: "Your Zerodha Account",
      color: "#11998e",
      topics: [
        "Login Credentials",
        "Your Profile",
        "Account Modification",
        "CMR & DP ID",
        "Nomination",
        "Transfer & Closure"
      ]
    },
    {
      icon: "fa-chart-bar",
      category: "Trading & Markets",
      color: "#FF5722",
      topics: [
        "Trading FAQs",
        "Kite Features",
        "Margins",
        "Product & Order Types",
        "Corporate Actions",
        "Intraday & F&O"
      ]
    },
    {
      icon: "fa-wallet",
      category: "Funds",
      color: "#9C27B0",
      topics: [
        "Add Funds",
        "Withdraw Funds",
        "Bank Account Addition",
        "Fund Issues",
        "UPI & Netbanking"
      ]
    },
    {
      icon: "fa-coins",
      category: "Mutual Funds",
      color: "#00BCD4",
      topics: [
        "Coin Web & App",
        "Transactions & NAV",
        "Redemptions",
        "SIP Management",
        "Coin Reports"
      ]
    },
    {
      icon: "fa-file-invoice",
      category: "Console",
      color: "#4CAF50",
      topics: [
        "IPO Applications",
        "Tax Reports",
        "Holdings & Portfolio",
        "Statements & Ledger",
        "Contract Notes"
      ]
    }
  ];

  return (
    <section id="createTicket" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Create a Support Ticket</h2>
          <p className="section-subtitle">
            Select a relevant topic to get help or create a ticket
          </p>
        </div>

        <div className="row g-4">
          {supportCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="support-card h-100 hover-lift"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  borderTop: `4px solid ${category.color}`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <i className={`fas ${category.icon}`} style={{ color: category.color, fontSize: '1.2rem' }}></i>
                  </div>
                  <h4 className="mb-0" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                    {category.category}
                  </h4>
                </div>

                <ul className="list-unstyled mb-0">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="mb-2">
                      <a
                        href="#"
                        style={{
                          textDecoration: 'none',
                          color: '#666',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '8px 0',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = category.color;
                          e.target.style.paddingLeft = '10px';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = '#666';
                          e.target.style.paddingLeft = '0';
                        }}
                      >
                        <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="row mt-5 g-4">
          <div className="col-12">
            <div style={{
              background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
              borderRadius: '20px',
              padding: '3rem'
            }}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h3 className="mb-3">Need to talk to us?</h3>
                  <p className="text-muted mb-4">
                    Our support team is available Monday to Friday, 9 AM to 6 PM
                  </p>

                  <div className="d-flex gap-3 flex-wrap">
                    <div className="d-flex align-items-center">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: '#e3f2fd',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px'
                      }}>
                        <i className="fas fa-phone" style={{ color: '#1565c0' }}></i>
                      </div>
                      <div>
                        <p className="mb-0 small text-muted">Call us</p>
                        <p className="mb-0" style={{ fontWeight: '600' }}>080-47181888</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: '#e8f5e9',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '12px'
                      }}>
                        <i className="fas fa-envelope" style={{ color: '#2e7d32' }}></i>
                      </div>
                      <div>
                        <p className="mb-0 small text-muted">Email us</p>
                        <p className="mb-0" style={{ fontWeight: '600' }}>support@zerodha.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 text-lg-end">
                  <a href="#" className="btn-primary-custom me-3 mb-2 d-inline-block">
                    <i className="fas fa-ticket-alt me-2"></i>
                    Create Ticket
                  </a>
                  <a href="#" className="btn-secondary-custom d-inline-block">
                    <i className="fas fa-comments me-2"></i>
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;