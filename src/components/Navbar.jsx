import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProgramsMenu = () => setIsProgramsOpen(!isProgramsOpen);

  return (
    <nav className="bg-white text-black px-6 py-4 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="path-to-logo.png" alt="Logo" className="h-8" />
          <span className="font-bold text-[#67c2d5]">TOM-PT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-[#67c2d5]">Home</a>
          <a href="#" className="hover:text-[#67c2d5]">About</a>

          <div className="relative">
            <button className="hover:text-[#67c2d5]">
              Pages
            </button>
          </div>

          <div className="relative">
            <button
              onClick={toggleProgramsMenu}
              className="hover:text-[#67c2d5] flex items-center gap-1"
            >
              Programs
            </button>
            {/* Dropdown */}
            {isProgramsOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg md:w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Program 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Program 2</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[#67c2d5]">Blog</a>
          <a href="#" className="hover:text-[#67c2d5]">Contact</a>
        </div>

        {/* Desktop Buy Button */}
        <div className="hidden md:block">
          <button className="bg-[#67c2d5] text-black px-4 py-2 rounded-md hover:bg-red-600">
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 space-y-2 shadow-md">
          <a href="#" className="block py-2 hover:text-[#67c2d5]">Home</a>
          <a href="#" className="block py-2 hover:text-[#67c2d5]">About</a>
          <a href="#" className="block py-2 hover:text-[#67c2d5]">Pages</a>

          {/* Mobile Programs Dropdown */}
          <div className="space-y-1">
            <button
              onClick={toggleProgramsMenu}
              className="w-full text-left py-2 hover:text-[#67c2d5] flex justify-between items-center"
            >
              Programs
              <span>{isProgramsOpen ? "▲" : "▼"}</span>
            </button>
            {isProgramsOpen && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block py-1 hover:text-[#67c2d5]">Program 1</a>
                <a href="#" className="block py-1 hover:text-[#67c2d5]">Program 2</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-2 hover:text-[#67c2d5]">Blog</a>
          <a href="#" className="block py-2 hover:text-[#67c2d5]">Contact</a>
          <button className="w-full bg-[#67c2d5] hover:bg-black text-white px-4 py-2 rounded-md">
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
