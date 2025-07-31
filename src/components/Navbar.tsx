import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/icon/LogoWK.svg" alt="Logo" className="h-7 w-7" />
          <span className="text-xl font-semibold text-blue-700">Waspada-Ku</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#cuaca" className="text-gray-700 hover:text-blue-600 font-medium transition">Cuaca</a>
          <a href="#gempa" className="text-gray-700 hover:text-blue-600 font-medium transition">Gempa</a>
        </div>

        {/* Mobile Button pakai SVG lokal */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <img
              src={isOpen ? "/assets/icon/close.svg" : "/assets/icon/menu.svg"}
              alt="menu"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-4 py-2 space-y-2">
          <a href="#cuaca" className="block text-gray-700 hover:text-blue-600">Cuaca</a>
          <a href="#gempa" className="block text-gray-700 hover:text-blue-600">Gempa</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;