import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="path-to-logo.png" alt="Logo" className="h-8" />
          <span className="font-bold text-green-500">SAMANTHA</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-500">Home</a>
          <a href="#" className="hover:text-green-500">About</a>
          <div className="relative">
            <button className="hover:text-green-500">
              Pages
            </button>
            <div className="absolute left-0 hidden bg-white text-black mt-2 rounded shadow-lg md:w-40">
              <a href="#" className="block px-4 py-2">Subpage 1</a>
              <a href="#" className="block px-4 py-2">Subpage 2</a>
            </div>
          </div>
          <div className="relative">
            <button className="hover:text-green-500">
              Programs
            </button>
            <div className="absolute left-0 hidden bg-white text-black mt-2 rounded shadow-lg md:w-40">
              <a href="#" className="block px-4 py-2">Program 1</a>
              <a href="#" className="block px-4 py-2">Program 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-green-500">Blog</a>
          <a href="#" className="hover:text-green-500">Contact</a>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Buy Now
        </button>
        <div className="md:hidden">
          <button className="text-white">
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
    </nav>
  );
}

export default Navbar;
