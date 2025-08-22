import React from "react";

const IntroSection = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Images */}
        <div className="relative w-110 h-full bg-lime-400">
          {/* Top-left image */}
          <img
            src="/photo-1.jpg"
            alt="Top Left"
            className="absolute top-0 left-0 w-30 h-30 object-cover border-b-10 border-r-10 border-white shadow-lg"
          />

          {/* Center image with lime background */}
          <div className="p-4 w-56 h-56 lg:w-72 lg:h-72 relative z-10 ml-60 -mt-15">
            <img
              src="/photo-3.jpg"
              alt="Main"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left image */}
          <div className="border-t-10 border-r-10 -mt-10 border-white shadow-lg w-60 h-64">
            <img
              src="/photo-2.jpg"
              alt="Bottom Left"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="text-center lg:text-left relative">
          {/* Dotted background */}
          <div className="absolute right-0 top-0 hidden lg:block opacity-20">
            <div className="w-40 h-40 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:10px_10px]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black leading-tight mb-4">
            HI! MY NAME IS <br />
            <span className="text-lime-500 inline-block mt-2">HANA EVANS</span>
          </h2>

          <p className="text-gray-700 mb-6 max-w-lg mx-auto lg:mx-0">
            Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut
            consequat semper viverra. Tellus id interdum velit laoreet id donec
            ultrices tincidunt. Tincidunt augue interdum velit euismod.
          </p>

          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 font-bold rounded transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
