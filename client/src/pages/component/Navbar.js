import React, { useState } from "react";
import "../../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/constant/Images";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="header-topbar-main">
        <div className="header-topbar-sections">
          <div>
            <NavLink to="tel:7383294925">
              <i className="fa-solid fa-phone me-2"></i>
              <span>فون: 7383294925</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="mailto:ahmadpadarwala4@gmail.com">
              <i className="fa-solid fa-envelope me-2"></i>
              <span>ای میل: ahmadpadarwala4@gmail.com</span>
            </NavLink>
          </div>
        </div>
        <div className="header-topbar-sections">
          <span> فالو کریں: </span>
          <span className="topbar-icons">
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-x-twitter"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-10">
        <nav className="w-full bg-white shadow-md lg:px-10 px-4">
          <div className="lg:flex block items-center lg:py-4 py-2 justify-between">
            <div>
              <NavLink to="/">
                <img src={Logo} alt="logo" width="144px" height="auto" />
              </NavLink>
            </div>
            <ul
              className={`lg:space-y-0 space-y-2 lg:mt-0 mt-5 font-semibold navbar-menu lg:flex ${
                openMenu ? "" : "hidden"
              }`}
            >
              <li>
                <NavLink to="/" className="nav-link">
                  مرکزی صفحہ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  بارے میں
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  رابطہ کریں
                </NavLink>
              </li>
            </ul>
            <div className="lg:block hidden">
              <NavLink to="/" id="navbar-button">
                دورہ کرنا چاہتے ہے؟
              </NavLink>
            </div>
            <div className="toggle-btn">
              <button
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
