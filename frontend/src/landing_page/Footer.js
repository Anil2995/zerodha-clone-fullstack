import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Products", path: "/product" },
      { name: "Pricing", path: "/pricing" },
      { name: "Referral programme", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Zerodha.tech", path: "#" },
      { name: "Press & media", path: "#" },
      { name: "Zerodha Cares (CSR)", path: "#" }
    ],
    support: [
      { name: "Contact us", path: "/support" },
      { name: "Support portal", path: "#" },
      { name: "Z-Connect blog", path: "#" },
      { name: "List of charges", path: "/pricing" },
      { name: "Downloads & resources", path: "#" }
    ],
    account: [
      { name: "Open an account", path: "/signup" },
      { name: "Fund transfer", path: "#" },
      { name: "60 day challenge", path: "#" }
    ]
  };

  return (
    <footer>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <Link to="/">
              <img
                src="media/images/logo.svg"
                alt="Zerodha Logo"
                style={{ width: "160px" }}
                className="mb-4"
              />
            </Link>
            <p className="text-muted mb-4">
              © 2010 - {currentYear}, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <p className="footer-title">Company</p>
            {footerLinks.company.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
          </div>

          <div className="col-6 col-lg-3 mb-4 mb-lg-0">
            <p className="footer-title">Support</p>
            {footerLinks.support.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
          </div>

          <div className="col-6 col-lg-3">
            <p className="footer-title">Account</p>
            {footerLinks.account.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ & MCX – SEBI Registration no.:
            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
            – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details for filing complaints on SCORES: Name, PAN, Address,
            Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal
            of the grievances.
          </p>

          <p>
            <strong>Investments in securities market are subject to market risks;
              read all the related documents carefully before investing.</strong>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs
            with your stock brokers. Receive information of your transactions directly from Exchange
            on your mobile/email at the end of the day."
          </p>

          <div className="mt-4 d-flex flex-wrap gap-3">
            <a href="https://nseindia.com" target="_blank" rel="noopener noreferrer">NSE</a>
            <a href="https://bseindia.com" target="_blank" rel="noopener noreferrer">BSE</a>
            <a href="https://mcxindia.com" target="_blank" rel="noopener noreferrer">MCX</a>
            <span>|</span>
            <a href="#">Terms & conditions</a>
            <a href="#">Policies & procedures</a>
            <a href="#">Privacy policy</a>
            <a href="#">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;