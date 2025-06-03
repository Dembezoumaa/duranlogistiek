"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjusted threshold slightly
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black text-white shadow-lg" // Added shadow-lg for more depth
          : "bg-gradient-to-b from-black/70 to-transparent text-white" // Slightly more opaque gradient start
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="/assets/images/DURAN.svg"
            alt="Duran Logistiek Logo"
            // Responsive height for the logo
            className="w-auto drop-shadow-md h-[70px] md:h-[100px] lg:h-[120px]"
          />
        </Link>

        {/* Desktop navigatie */}
        <nav className="flex-grow hidden md:flex justify-center items-center space-x-6 lg:space-x-10 text-base lg:text-lg">
          <Link
            href="/"
            className={`hover:text-gray-300 transition-colors duration-200 ${
              pathname === "/" ? "font-semibold text-white" : "font-light"
            }`}
          >
            Home
          </Link>
          <Link
            href="/Transport"
            className={`hover:text-gray-300 transition-colors duration-200 ${
              pathname === "/Transport" ? "font-semibold text-white" : "font-light"
            }`}
          >
            Transport
          </Link>
          <Link
            href="/over-ons"
            className={`hover:text-gray-300 transition-colors duration-200 ${
              pathname === "/over-ons" ? "font-semibold text-white" : "font-light"
            }`}
          >
            Over ons
          </Link>
          <Link
            href="/Contact" // Ensure consistent casing with your routes
            className={`hover:text-gray-300 transition-colors duration-200 ${
              pathname === "/Contact" || pathname === "/contact" ? "font-semibold text-white" : "font-light"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/Kom-werken-bij"
            className={`hover:text-gray-300 transition-colors duration-200 ${
              pathname === "/Kom-werken-bij" ? "font-semibold text-white" : "font-light"
            }`}
          >
            Kom werken bij
          </Link>
        </nav>

        {/* Mobile menu knop */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="focus:outline-none text-white hover:text-gray-300 p-2" // Added padding for easier tap
          >
            {menuOpen ? (
              // X icon for close
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Burger icon
              <div className="space-y-1.5">
  <span
    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
      menuOpen ? "rotate-45 translate-y-1.5" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
      menuOpen ? "opacity-0" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
      menuOpen ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  ></span>
</div>

            )}
          </button>
        </div>
      </div>

      {/* Onderlijn - sits flush under the header bar */}
      <div className={`border-t ${isScrolled ? 'border-white/80' : 'border-white/40'} transition-colors duration-300`}></div>

      {/* Mobiele dropdown menu */}
      {/* Added transition for smoother open/close */}
      <div
        className={`md:hidden bg-black text-white w-full overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {menuOpen && ( // Still useful to conditionally render content for performance if complex
          <nav className="px-4 sm:px-6">
            <ul className="space-y-2 text-base"> {/* Adjusted space-y and text-size */}
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block py-3 transition-colors duration-200 ${
                    pathname === "/" ? "font-semibold text-white" : "font-light"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Transport"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block py-3 transition-colors duration-200 ${
                    pathname === "/Transport" ? "font-semibold text-white" : "font-light"
                  }`}
                >
                  Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block py-3 transition-colors duration-200 ${
                    pathname === "/over-ons" ? "font-semibold text-white" : "font-light"
                  }`}
                >
                  Over ons
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact" // Lowercase 'c' to match one of your conditions
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block py-3 transition-colors duration-200 ${
                    pathname === "/contact" || pathname === "/Contact" ? "font-semibold text-white" : "font-light"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Kom-werken-bij"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block py-3 transition-colors duration-200 ${
                    pathname === "/Kom-werken-bij" ? "font-semibold text-white" : "font-light"
                  }`}
                >
                  Kom werken bij
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}