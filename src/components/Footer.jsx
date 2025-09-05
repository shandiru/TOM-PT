import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="bg-white text-black">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + blurb + socials */}
          <div>
            {/* Logo text with underline */}
            <a href="/" className="inline-block">
              <span className="relative inline-block text-3xl font-extrabold tracking-[0.2em]">
                <span className="relative z-[1]">TOM-PT</span>
                <span className="absolute left-0 -bottom-1 h-2 w-24 bg-[#67c2d5]"></span>
              </span>
            </a>

            <p className="mt-8 max-w-md text-gray-800">
              Elementum facilisis leo vel fringilla est ullamcorper. Ac tortor
              vitae purus faucibus ornare suspendisse.
            </p>

            <ul className="mt-8 flex items-center gap-4">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-black/90 hover:border-[#67c2d5] transition"
                >
                  <FaFacebookF className="text-black text-lg" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-black/90 hover:border-[#67c2d5] transition"
                >
                  <FaTwitter className="text-black text-lg" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-black/90 hover:border-[#67c2d5] transition"
                >
                  <FaInstagram className="text-black text-lg" />
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div className="grid grid-cols-2 gap-x-12">
            <div>
              <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Menu
              </div>
              <ul className="space-y-5 text-black/90">
                <li>
                  <a href="/" className="hover:text-[#67c2d5]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-[#67c2d5]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/programs" className="hover:text-[#67c2d5]">
                    Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400 invisible md:visible">
                Menu
              </div>
              <ul className="space-y-5 text-black/90">
                <li>
                  <a href="/about" className="hover:text-[#67c2d5]">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#67c2d5]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/schedule" className="hover:text-[#67c2d5]">
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contacts
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-[#67c2d5] shrink-0">
                  <FaMapMarkerAlt className="text-black text-lg" />
                </span>
                <span className="text-black/90">
                  Themeforest, Envato HQ 24 Fifth st.,<br /> Los Angeles, USA
                </span>
              </li>

              <li className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-[#67c2d5] shrink-0">
                  <FaPhone className="text-black text-lg" />
                </span>
                <a
                  href="tel:+14952311782"
                  className="text-black/90 hover:text-[#67c2d5]"
                >
                  +1 (495) 23117 82
                </a>
              </li>

              <li className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-[#67c2d5] shrink-0">
                  <FaEnvelope className="text-black text-lg" />
                </span>
                <a
                  href="mailto:hana_evans@gmail.com"
                  className="text-black/90 hover:text-[#67c2d5]"
                >
                  hana_evans@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-16 border-t border-gray-400" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-gray-800 md:flex-row">
          <p>© 2025 TOM-PT. All rights reserved</p>
          <ul className="flex flex-wrap items-center gap-8">
            <li>
              <a href="/privacy-policy/" className="hover:text-[#67c2d5]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/privacy-policy/#terms" className="hover:text-[#67c2d5]">
                Term of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy/#legal-info" className="hover:text-[#67c2d5]">
                Legal Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
