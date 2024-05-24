import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="header text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mt-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">
            Te<span className="primary">Fi</span>
          </span>
        </a>
        <ul className="nav-menu md:border-gray-400 flex flex-wrap items-center justify-center">
          <li>
            <a href="/" className="mr-5 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="mr-5 hover:text-gray-900">
              Featured
            </a>
          </li>
          <li>
            <a href="/" className="mr-5 hover:text-gray-900">
              Earn
            </a>
          </li>
          <li>
            <a href="/" className="mr-5 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
        <div className="wrapper">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Connect Wallet
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#333" }} />
            ) : (
              <FaBars size={30} style={{ color: "#333" }} />
            )}
          </div>
        </div>
        <div className="Mobmenu" style={{ display: click ? "flex" : "none" }}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Featured</a>
            </li>
            <li>
              <a href="/">Earn</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
