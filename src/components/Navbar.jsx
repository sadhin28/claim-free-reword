import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Active class function
  const activeClass = ({ isActive }) =>
    `hover:text-gray-200 ${isActive ? "font-bold underline" : ""}`;

  const activeClassMobile = ({ isActive }) =>
    `block px-2 py-1 rounded hover:bg-blue-500 ${isActive ? "font-bold underline" : ""}`;

  // Menu items
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Offers", to: "/offers" },
    { name: "How It Works", to: "/how-it-works" },
    { name: "FAQ", to: "/faq" },
    { name: "About", to: "/about" },
  ];

  return (
    <nav className="border-b-2 shadow-md bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700  sticky  top-0 z-30 backdrop-blur-2xl  text-white px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Free Reward Hub 🎁
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={activeClass}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <button className="hidden md:block bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">
          Login
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={activeClassMobile}>
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="w-full bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
