import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "bg-gray-900 shadow-lg"
            : "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/icon/LogoWK.svg" alt="Waspada-Ku" className="w-6 h-6" />
          <span className="text-lg font-semibold text-blue-700 dark:text-white">
            Waspada-Ku
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <a
            href="#cuaca"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition text-gray-800 dark:text-gray-100"
          >
            <img src="/assets/icon/cuaca.svg" alt="Cuaca" className="w-5 h-5" />
            Cuaca
          </a>
          <a
            href="#gempa"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition text-gray-800 dark:text-gray-100"
          >
            <img src="/assets/icon/gempa.svg" alt="Gempa" className="w-5 h-5" />
            Gempa
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="transition hover:opacity-80"
            title="Toggle Dark Mode"
          >
            <img
              src={isDarkMode ? "/assets/icon/sun.svg" : "/assets/icon/moon.svg"}
              alt="Toggle Dark Mode"
              className="w-5 h-5"
            />
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 transition text-sm font-medium"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 shadow-md transition bg-white dark:bg-gray-900">
          <a
            href="#cuaca"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/assets/icon/cuaca.svg" alt="Cuaca" className="w-5 h-5" />
            Cuaca
          </a>
          <a
            href="#gempa"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/assets/icon/gempa.svg" alt="Gempa" className="w-5 h-5" />
            Gempa
          </a>

          {/* Dark Mode Button */}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300"
          >
            <img
              src={isDarkMode ? "/assets/icon/sun.svg" : "/assets/icon/moon.svg"}
              alt="Toggle Dark Mode"
              className="w-5 h-5"
            />
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 transition text-sm font-medium"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;