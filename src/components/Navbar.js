import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-primary text-textLight z-10 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Glowmoree By Hawwa</Link>
        </h1>

        <button
          className="md:hidden text-textLight focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/new-booking"
            className={`font-bold ${
              isActive("/new-booking")
                ? "text-accent"
                : "hover:text-accent hover:font-bold"
            }`}
          >
            New Booking
          </Link>
          <Link
            to="/show-all-bookings"
            className={`font-bold ${
              isActive("/show-all-bookings")
                ? "text-accent"
                : "hover:text-accent hover:font-bold"
            }`}
          >
            Show All Bookings
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden">
          <Link
            to="/new-booking"
            className={`block ${
              isActive("/new-booking")
                ? "text-accent underline"
                : "hover:text-accent"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            New Booking
          </Link>
          <Link
            to="/show-all-bookings"
            className={`block ${
              isActive("/show-all-bookings")
                ? "text-accent underline"
                : "hover:text-accent"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Show All Bookings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
