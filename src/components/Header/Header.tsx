// src/components/Header/Header.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Aquí iría la lógica de cierre de sesión
    navigate('/sign-in');
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link data-test-id="header-logo" to="/" className="header__logo">
          Travel App
        </Link>
        <nav data-test-id="header-nav" className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <Link
                data-test-id="header-bookings-link"
                to="/bookings"
                className="nav-header__inner"
              >
                <span className="visually-hidden">Bookings</span>
                <img src="../assets/images/briefcase.svg" alt="bookings" />
              </Link>
            </li>
            <li className="nav-header__item" title="Profile">
              <div
                data-test-id="header-profile-nav"
                className="nav-header__inner profile-nav"
                tabIndex={0}
              >
                <span className="visually-hidden">Profile</span>
                <img src="/assets/images/user.svg" alt="profile" />
                <ul
                  data-test-id="header-profile-nav-list"
                  className="profile-nav__list"
                >
                  <li
                    data-test-id="header-profile-nav-username"
                    className="profile-nav__item"
                  >
                    John Doe
                  </li>
                  <li className="profile-nav__item">
                    <button
                      data-test-id="header-profile-nav-sign-out"
                      className="profile-nav__sign-out button"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
