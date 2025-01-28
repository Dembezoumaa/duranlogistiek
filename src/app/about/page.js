"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')", // Vervang dit met je achtergrondafbeelding
      }}
    >
      {/* Overlay om de afbeelding donkerder te maken */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{ zIndex: 1 }}
      ></div>

      {/* Content bovenop de achtergrond */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welkom bij Daan Logistiek</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          Uw betrouwbare partner in transport en logistiek.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition"
        >
          Neem contact op
        </a>
      </div>
    </div>
  );
}

  