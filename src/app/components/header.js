"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Voor detectie van de actieve pagina

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll-detectie voor het aanpassen van de achtergrond
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black text-white shadow-md"
          : "bg-gradient-to-b from-black/50 to-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo - Links */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/images/duran.svg"
            alt="Duran Logistiek Logo"
            style={{ height: "200px", width: "200px" }}
          />
        </a>

        {/* Navigatie - Midden */}
        <nav className="flex-grow hidden md:flex justify-center space-x-12 text-lg">
          <a
            href="/"
            className={`hover:text-gray-300 ${
              pathname === "/" ? "font-bold" : "font-light"
            }`}
          >
            Home
          </a>
          <a
            href="/transport"
            className={`hover:text-gray-300 ${
              pathname === "/transport" ? "font-bold" : "font-light"
            }`}
          >
            Transport
          </a>
          <a
            href="/over-ons"
            className={`hover:text-gray-300 ${
              pathname === "/over-ons" ? "font-bold" : "font-light"
            }`}
          >
            Over ons
          </a>
          <a
            href="/contact"
            className={`hover:text-gray-300 ${
              pathname === "/contact" ? "font-bold" : "font-light"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white hover:text-gray-300"
          >
            <img
              src="/assets/images/burger-menu.svg"
              alt="Menu icon"
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      {/* Witte lijn onderaan de header, met margin-top */}
      <div className="border-t border-white mt-2"></div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white w-full py-4 px-6">
          <nav>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                  href="/"
                  className={`hover:text-gray-300 block ${
                    pathname === "/" ? "font-bold" : "font-light"
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/transport"
                  className={`hover:text-gray-300 block ${
                    pathname === "/transport" ? "font-bold" : "font-light"
                  }`}
                  onClick={closeMenu}
                >
                  Transport
                </a>
              </li>
              <li>
                <a
                  href="/over-ons"
                  className={`hover:text-gray-300 block ${
                    pathname === "/over-ons" ? "font-bold" : "font-light"
                  }`}
                  onClick={closeMenu}
                >
                  Over ons
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`hover:text-gray-300 block ${
                    pathname === "/contact" ? "font-bold" : "font-light"
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

