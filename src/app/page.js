"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')", // Achtergrondafbeelding
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay voor verduistering */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Hero-content en tekst */}
      <div className="relative z-10 text-white px-6">
        <div
          className="container mx-auto max-w-7xl text-left"
          style={{ marginTop: "calc(95vh - 300px)" }} // Zorgt dat de tekst omlaag gaat
        >
          {/* Titel */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
            Transportoplossingen
            <br />
            zonder zorgen<strong>.</strong>
          </h1>
          {/* Ondertekst */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Wij zijn uw partner in logistiek succes.
          </p>
        </div>
      </div>

      {/* Informatie en formuliersectie */}
      <div className="relative z-10 bg-black/ text-white">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-stretch h-auto lg:h-[160px] gap-4 lg:gap-0">
          {/* Linker sectie - Contactinformatie */}
          <div className="flex-1 bg-black/80 p-5 flex flex-col justify-center rounded-md lg:rounded-l-md">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Vraagsectie */}
              <div className="flex-1">
                <h2 className="text-base md:text-lg font-bold text-white mb-1">
                  <img
                    src="/assets/images/vraag.svg"
                    alt="vraag"
                    className="h-6 w-6 mr-2 inline-block"
                  />
                  Heeft u een vraag?
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Wij staan voor u klaar:
                  <br />
                  <a
                    href="mailto:info@duranlogistiek.nl"
                    className="text-blue-400 hover:underline"
                  >
                    info@duranlogistiek.nl
                  </a>
                </p>
              </div>

              {/* Adressectie */}
              <div className="flex-1">
                <h2 className="text-base md:text-lg font-bold text-white mb-1">
                  <img
                    src="/assets/images/loc.svg"
                    alt="loc"
                    className="h-6 w-6 mr-2 inline-block"
                  />
                  Duran Logistiek
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  Uraniumweg 13
                  <br />
                  3542 AK - Utrecht
                </p>
              </div>
            </div>
          </div>

          {/* Rechter sectie - Formulier */}
          <div
            className="flex-1 p-5 flex items-center justify-center rounded-md lg:rounded-r-md"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Witte achtergrond met transparantie
            }}
          >
            <form action="#" className="w-full max-w-lg flex flex-col lg:flex-row items-center gap-2">
              {/* Inputbox */}
              <input
                type="tel"
                placeholder="Voer uw nummer in voor een terugbelverzoek."
                className="flex-grow p-3 bg-transparent text-black border border-black rounded-md placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
                style={{ height: "48px" }} // Zorgt voor gelijke hoogte
              />
              {/* Knop */}
              <button
                type="submit"
                className="flex items-center px-6 rounded-md text-white text-sm"
                style={{
                  height: "48px", // Zorgt voor gelijke hoogte
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // Zwarte achtergrond met transparantie
                }}
              >
                <img
                  src="/assets/images/phone.svg"
                  alt="Phone Icon"
                  className="h-4 w-4 mr-2"
                />
                Bel mij terug
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


