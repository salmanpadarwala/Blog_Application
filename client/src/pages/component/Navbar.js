import React, { useState } from "react";
import "../../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/constant/Images";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="header-topbar-main" dir="ltr">
        <div className="header-topbar-sections">
          <div>
            <NavLink to="tel:7383294925">
              <i className="fa-solid fa-phone me-2"></i>
              <span>Phone: 99742 41074</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="mailto:ahmadpadarwala4@gmail.com">
              <i className="fa-solid fa-envelope me-2"></i>
              <span>Email: ahmadpadarwala4@gmail.com</span>
            </NavLink>
          </div>
        </div>

        <div className="header-topbar-sections">
          <span> Follow </span>
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

      <header className="sticky top-0 z-10" dir="ltr">
        <nav className="w-full bg-white shadow-md lg:px-10 px-4">
          <div className="lg:flex block items-center lg:py-4 py-2 justify-between">
            <div>
              <NavLink to="/">
                <img src={Logo} alt="logo" width="80px" height="auto" />
              </NavLink>
            </div>
            <ul

              className={`lg:space-y-0 space-y-2 lg:mt-0 mt-5 font-semibold navbar-menu lg:flex ${openMenu ? "" : "hidden"
                }`}
            >
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              className={`lg:space-y-0 space-y-2 lg:mt-0 mt-5 font-semibold navbar-menu lg:flex mx-auto ${
                openMenu ? "" : "hidden"
              }`}
            >
              <div className="lg:flex gap-y-30">
                <li className="mb-3 lg:mb-0">
                  <NavLink to="/" className="nav-link">
                    مرکزی صفحہ
                  </NavLink>
                </li>
                <li className="mb-3 lg:mb-0">
                  <NavLink to="/about" className="nav-link">
                    بارے میں
                  </NavLink>
                </li>
                <li className="mb-3 lg:mb-0">
                  <NavLink to="/contact" className="nav-link">
                    رابطہ کریں
                  </NavLink>
                </li>
              </div>
              <div className="text-sm">
                <div className="relative text-gray-600">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Search"
                    className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-2.5 mr-4"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>

            </ul>
            {/* <div>
              <div className="relative text-gray-600">
                <input

                  className="search-input focus:outline-none mx-auto"
                  type="search"
                  name="search"
                  placeholder="search here..."

                  type="search"
                  name="serch"
                  placeholder="Search"
                  className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"

                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2.5 mr-4"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>


            </div>

            </div> */}

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
