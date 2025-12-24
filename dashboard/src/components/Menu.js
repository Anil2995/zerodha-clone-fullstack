import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem('zerodhaUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/orders", label: "Orders", icon: "📋" },
    { path: "/holdings", label: "Holdings", icon: "📈" },
    { path: "/positions", label: "Positions", icon: "📉" },
    { path: "/funds", label: "Funds", icon: "💰" },
    { path: "/apps", label: "Apps", icon: "📱" }
  ];

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('zerodhaUser');
    window.location.href = 'http://localhost:3000';
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getUserInitials = () => {
    if (user?.fullName) {
      const names = user.fullName.split(' ');
      if (names.length >= 2) {
        return names[0][0] + names[1][0];
      }
      return names[0].substring(0, 2);
    }
    return 'ZU';
  };

  return (
    <div className="menu-container">
      <a href="http://localhost:3000" className="logo-link">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha"
          className="logo"
          style={{ width: '120px', height: 'auto' }}
        />
      </a>

      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
              >
                <p className={`menu ${isActive(item.path) ? "selected" : ""}`}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar" style={{
            background: 'linear-gradient(135deg, #387ED1 0%, #5c9ce5 100%)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}>
            {getUserInitials().toUpperCase()}
          </div>
          <div className="user-info" style={{ marginLeft: '10px', cursor: 'pointer' }}>
            <p className="username" style={{
              margin: 0,
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>
              {user?.fullName || 'Guest User'}
            </p>
            <p style={{
              margin: 0,
              fontSize: '0.75rem',
              color: '#9E9E9E'
            }}>
              {user?.email || 'Not logged in'}
            </p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown" style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
              minWidth: '200px',
              zIndex: 1000,
              padding: '8px 0',
              marginTop: '12px'
            }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }}>
                <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>
                  {user?.fullName || 'Guest'}
                </p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#9E9E9E' }}>
                  Balance: ₹{user?.balance?.toLocaleString('en-IN') || '1,00,000'}
                </p>
              </div>
              <a href="#" style={{
                display: 'block',
                padding: '10px 16px',
                color: '#424242',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'background 0.2s ease'
              }}>
                <i className="fas fa-user me-2" style={{ width: '20px' }}></i>
                My Profile
              </a>
              <a href="#" style={{
                display: 'block',
                padding: '10px 16px',
                color: '#424242',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-cog me-2" style={{ width: '20px' }}></i>
                Settings
              </a>
              <a href="https://console.zerodha.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '10px 16px',
                color: '#424242',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                <i className="fas fa-external-link-alt me-2" style={{ width: '20px' }}></i>
                Console
              </a>
              <hr style={{ margin: '8px 0' }} />
              <button
                onClick={handleLogout}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 16px',
                  color: '#c62828',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <i className="fas fa-sign-out-alt me-2" style={{ width: '20px' }}></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;