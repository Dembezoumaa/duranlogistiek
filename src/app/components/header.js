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
      setIsScrolled(window.scrollY > 100);
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
          ? "bg-black text-white shadow-md"
          : "bg-gradient-to-b from-black/50 to-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/images/DURAN.svg"
            alt="Duran Logistiek Logo"
            style={{ height: "155px" }} 
            className="w-auto drop-shadow-md"
          />
        </Link>

        {/* Desktop navigatie */}
        <nav className="flex-grow hidden md:flex justify-center space-x-12 text-lg">
          <Link
            href="/"
            className={`hover:text-gray-300 ${
              pathname === "/" ? "font-bold" : "font-light"
            }`}
          >
            Home
          </Link>
          <Link
            href="/Transport"
            className={`hover:text-gray-300 ${
              pathname === "/Transport" ? "font-bold" : "font-light"
            }`}
          >
            Transport
          </Link>
          <Link
            href="/over-ons"
            className={`hover:text-gray-300 ${
              pathname === "/over-ons" ? "font-bold" : "font-light"
            }`}
          >
            Over ons
          </Link>
          <Link
            href="/Contact"
            className={`hover:text-gray-300 ${
              pathname === "/Contact" ? "font-bold" : "font-light"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/Kom-werken-bij"
            className={`hover:text-gray-300 ${
              pathname === "/Kom-werken-bij" ? "font-bold" : "font-light"
            }`}
          >
            Kom werken bij
          </Link>
        </nav>

        {/* Mobile menu knop */}
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

      {/* Onderlijn */}
      <div className="border-t border-white mt-2"></div>

      {/* Mobiele dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white w-full py-4 px-6">
          <nav>
            <ul className="space-y-4 text-lg">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block ${
                    pathname === "/" ? "font-bold" : "font-light"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Transport"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block ${
                    pathname === "/Transport" ? "font-bold" : "font-light"
                  }`}
                >
                  Transport
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block ${
                    pathname === "/over-ons" ? "font-bold" : "font-light"
                  }`}
                >
                  Over ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block ${
                    pathname === "/contact" ? "font-bold" : "font-light"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Kom-werken-bij"
                  onClick={closeMenu}
                  className={`hover:text-gray-300 block ${
                    pathname === "/Kom-werken-bij" ? "font-bold" : "font-light"
                  }`}
                >
                  Kom werken bij
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

