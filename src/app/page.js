"use client";

import React from "react";

const WorkStep = ({ icon, title, description }) => {
  return (
    <div className="text-center p-4 sm:p-6 border rounded-lg bg-white">
      <div className="inline-block p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600 mb-3 sm:mb-4">
        <span className="text-xl sm:text-2xl font-bold">{icon}</span>
      </div>
      <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h4>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default function HeroSection() {
  return (
    <>
      <div
        className="relative m:h-screen flex flex-col justify-between homebanner">
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 text-white px-4 sm:px-6">
          <div
            className="container mx-auto max-w-7xl text-left bannertitle"
            style={{ marginTop: "calc(90vh - 300px)" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-3">
              Transportoplossingen
              <br />
              zonder zorgen<strong></strong>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              Wij zijn uw partner in logistiek succes
            </p>
          </div>
        </div>

        <div className="relative z-10 bg-black/ text-white">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-stretch h-auto lg:h-[160px] gap-2 sm:gap-4 lg:gap-0">
            <div className="flex-1 bg-black/80 p-4 sm:p-5 flex flex-col justify-center rounded-md lg:rounded-l-md">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 flex items-center">
                    <img
                      src="/assets/images/vraag.svg"
                      alt="vraag"
                      className="h-5 w-5 sm:h-6 sm:w-6 mr-2 inline-block"
                    />
                    Heeft u een vraag?
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
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

                <div className="flex-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 flex items-center">
                    <img
                      src="/assets/images/loc.svg"
                      alt="loc"
                      className="h-5 w-5 sm:h-6 sm:w-6 mr-2 inline-block"
                    />
                    Duran Logistiek
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    Uraniumweg 13
                    <br />
                    3542 AK - Utrecht
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex-1 p-4 sm:p-5 flex items-center justify-center rounded-md lg:rounded-r-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <form action="#" className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="tel"
                  placeholder="Voer uw nummer in voor een terugbelverzoek."
                  className="w-full flex-grow p-2 sm:p-3 bg-transparent text-black border border-black rounded-md placeholder-black focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm"
                  style={{ height: "40px", minHeight: "40px" }}
                />
                <button
                  type="submit"
                  className="flex items-center px-4 sm:px-6 rounded-md text-white text-xs sm:text-sm w-full sm:w-auto justify-center"
                  style={{
                    height: "40px",
                    minHeight: "40px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    minWidth:"200px",
                  }}
                >
                  <img
                    src="/assets/images/phone.svg"
                    alt="Phone Icon"
                    className="h-3 w-3 sm:h-4 sm:w-4 mr-2"
                  />
                  Bel mij terug
                </button>
              </form>
            </div>
          </div>
          <div className="container mx-auto max-w-7xl">
            <div className="h-px bg-white"></div>
          </div>
        </div>
      </div>

      <section className="bg-custom-dark-gray py-12 sm:py-16 relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          
          {/* Verticale tekst - hidden on mobile */}
          <div className="hidden sm:flex absolute left-0 top-0 bottom-0 items-center">
            <span className="vertical-text text-gray-600 font-bold text-sm md:text-base">
              DURAN LOGISTIEK
            </span>
          </div>

          {/* Tekst aan de linkerkant */}
          <div className="lg:w-1/2 lg:pr-8 xl:pr-12 mb-8 lg:mb-0">
            <div className="sm:pl-12">
              <h2 className="text-xs sm:text-sm font-bold text-gray-400 mb-2">OVER DURANLOGISTIEK</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10">
                Uw toonaangevende logistiek partner voor innovatieve en duurzame oplossingen.
              </h3>
              <p className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-5">
                Bij DURAN LOGISTIEK zijn we toegewijd aan het herdefiniëren van efficiëntie en verantwoordelijkheid in de transportsector.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10">
                We omarmen de nieuwste technologieën en duurzame praktijken om uw logistieke operaties te optimaliseren. Ons team werkt nauw samen met klanten om maatwerkoplossingen te bieden die niet alleen voldoen aan de huidige behoeften, maar ook anticiperen op toekomstige uitdagingen en kansen.
              </p>
              <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md border-2 border-white hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base">
                Meer over ons
              </button>
            </div>
          </div>
          
          {/* Foto aan de rechterkant */}
          <div className="lg:w-1/2 bg-white p-1 rounded-lg mt-8 lg:mt-0">
            <img 
              src="/assets/images/testtt.jpg"
              alt="Transport vrachtwagen" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-custom-dark-gray py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Hoe wij werken</h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Onze manier van werken is belangrijk voor zowel u als klant en voor ons als logistiek bedrijf.
              <br className="hidden sm:block" />
              Daarom werken wij met 3 simpele, maar heldere stappen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-8 sm:gap-4">
            {/* Eerste stap */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
              <div className="flex items-center justify-center text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
                💵
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mt-3 sm:mt-4">Offerte op maat</h3>
              <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">
                Samen met uw wensen gaan wij een op maat gemaakte offerte opstellen.
              </p>
            </div>

            {/* Gestippelde lijn - horizontal on mobile, vertical on desktop */}
            <div className="sm:flex-grow h-px sm:h-auto sm:w-px border-t-2 sm:border-t-0 sm:border-l-2 border-dotted border-white mx-0 sm:mx-4"></div>

            {/* Tweede stap */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
              <div className="flex items-center justify-center text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
                📅
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mt-3 sm:mt-4">Planning op maat</h3>
              <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">
                Nadat er een offerte is verstuurd en overeengekomen gaan we een planning maken. Om zo scherp mogelijk te handelen naar wens.
              </p>
            </div>

            {/* Gestippelde lijn - horizontal on mobile, vertical on desktop */}
            <div className="sm:flex-grow h-px sm:h-auto sm:w-px border-t-2 sm:border-t-0 sm:border-l-2 border-dotted border-white mx-0 sm:mx-4"></div>

            {/* Derde stap */}
            <div className="flex flex-col items-center text-center w-full sm:w-1/3">
              <div className="flex items-center justify-center text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
                ✅
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mt-3 sm:mt-4">Uitvoering op maat</h3>
              <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">
                Met de afgesproken afspraken gaat Duran Logistiek de werkzaamheden uitvoeren.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="mailto:info@duranlogistiek.nl"
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-200 transition duration-300 inline-block text-sm sm:text-base"
            >
              Maak een afspraak
            </a>
          </div>
        </div>
      </section>
    </>
  );
}