import React from "react";
// import { NavLink } from "react-router-dom";
import "../../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="footer-title sm:text-4xl sm:leading-none">
                ہماری نیوز لیٹر کو سبسکرائب کریں
              </h2>
              <p className="footer-description">
                کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور
                جب کے بعد سے کبھی متن کیا گیا ہے… کی صنعت کی معیاری ڈمی ایک
                نامعلوم پرنٹر قسم کی ایک گیلی لیا اور جب کے بعد سے کبھی متن کیا
                گیا ہے… کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی
                لیا اور جب کے بعد سے کبھی متن کیا گیا ہے…
              </p>
              <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Enter Email Address"
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  className="footer-subscribe-button md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <p className="text-center font-bold text-md">
              2023
              <NavLink
                to="https://valudas.com/"
                target="_blank"
                className="me-1 hover:text-white"
              >
                Valuda's Tech Park
              </NavLink>
              ©
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
