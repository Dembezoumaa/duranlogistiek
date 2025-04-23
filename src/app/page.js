"use client";

import React from "react";

const WorkStep = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 border rounded-lg bg-white">
      <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
        <span className="text-2xl font-bold">{icon}</span>
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function HeroSection() {
  return (
    <>
      <div
        className="relative h-screen flex flex-col justify-between"
        style={{
          backgroundImage: "url('/assets/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 text-white px-6">
          <div
            className="container mx-auto max-w-7xl text-left"
            style={{ marginTop: "calc(95vh - 300px)" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
              Transportoplossingen
              <br />
              zonder zorgen<strong></strong>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Wij zijn uw partner in logistiek succes
            </p>
          </div>
        </div>

        <div className="relative z-10 bg-black/ text-white">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-stretch h-auto lg:h-[160px] gap-4 lg:gap-0">
            <div className="flex-1 bg-black/80 p-5 flex flex-col justify-center rounded-md lg:rounded-l-md">
              <div className="flex flex-col lg:flex-row gap-6">
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

            <div
              className="flex-1 p-5 flex items-center justify-center rounded-md lg:rounded-r-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <form action="#" className="w-full max-w-lg flex flex-col lg:flex-row items-center gap-2">
                <input
                  type="tel"
                  placeholder="Voer uw nummer in voor een terugbelverzoek."
                  className="flex-grow p-3 bg-transparent text-black border border-black rounded-md placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
                  style={{ height: "48px" }}
                />
                <button
                  type="submit"
                  className="flex items-center px-6 rounded-md text-white text-sm"
                  style={{
                    height: "48px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
          {/* Witte lijn toegevoegd hier */}
          <div className="container mx-auto max-w-7xl">
            <div className="h-px bg-white"></div>
          </div>
        </div>
      </div>

      <section className="bg-custom-dark-gray py-16 relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          
          {/* Verticale tekst */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center">
            <span className="vertical-text text-gray-600 font-bold">
              DURAN LOGISTIEK
            </span>
          </div>

          {/* Tekst aan de linkerkant */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="pl-12"> {/* Toegevoegde padding voor ruimte naast verticale tekst */}
              <h2 className="text-sm font-bold text-gray-400 mb-2">OVER DURANLOGISTIEK</h2>
              <h3 className="text-4xl font-bold text-white mb-10">Uw toonaangevende logistiek partner voor innovatieve en duurzame oplossingen.</h3>
              <p className="text-white font-bold text-base mb-5">
                Bij DURAN LOGISTIEK zijn we toegewijd aan het herdefiniëren van efficiëntie en verantwoordelijkheid in de transportsector.
              </p>
              <p className="text-gray-400 text-base mb-10">
                We omarmen de nieuwste technologieën en duurzame praktijken om uw logistieke operaties te optimaliseren. Ons team werkt nauw samen met klanten om maatwerkoplossingen te bieden die niet alleen voldoen aan de huidige behoeften, maar ook anticiperen op toekomstige uitdagingen en kansen.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md border-2 border-white hover:bg-white hover:text-black transition duration-300">
                Meer over ons
              </button>
            </div>
          </div>
          
          {/* Foto aan de rechterkant */}
          <div className="lg:w-1/2 bg-white p-1 rounded-lg">
            <img 
              src="/assets/images/testtt.jpg"
              alt="Transport vrachtwagen" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-custom-dark-gray py-16 relative">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">Hoe wij werken</h2>
      <p className="text-gray-300">
        Onze manier van werken is belangrijk voor zowel u als klant en voor ons als logistiek bedrijf.
      </p>
      <p className="text-gray-300">
        Daarom werken wij met 3 simpele, maar heldere stappen.
      </p>
    </div>

    <div className="flex justify-between items-stretch">
      {/* Eerste stap */}
      <div className="flex flex-col items-center text-center mx-8 w-1/3">
        <div className="flex items-center justify-center text-white w-16 h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
          💵
        </div>
        <h3 className="text-white font-bold text-lg mt-4">Offerte op maat</h3>
        <p className="mt-2 text-gray-300">
          Samen met uw wensen gaan wij een op maat gemaakte offerte opstellen.
        </p>
      </div>

      {/* Gestippelde lijn */}
      <div className="flex-grow h-0.5 border-t-2 border-dotted border-white mx-4"></div>

      {/* Tweede stap */}
      <div className="flex flex-col items-center text-center mx-8 w-1/3">
        <div className="flex items-center justify-center text-white w-16 h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
          📅
        </div>
        <h3 className="text-white font-bold text-lg mt-4">Planning op maat</h3>
        <p className="mt-2 text-gray-300">
          Nadat er een offerte is verstuurd en overeengekomen gaan we een planning maken. Om zo scherp mogelijk te handelen naar wens.
        </p>
      </div>

      {/* Gestippelde lijn */}
      <div className="flex-grow h-0.5 border-t-2 border-dotted border-white mx-4"></div>

      {/* Derde stap */}
      <div className="flex flex-col items-center text-center mx-8 w-1/3">
        <div className="flex items-center justify-center text-white w-16 h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
          ✅
        </div>
        <h3 className="text-white font-bold text-lg mt-4">Uitvoering op maat</h3>
        <p className="mt-2 text-gray-300">
          Met de afgesproken afspraken gaat Duran Logistiek de werkzaamheden uitvoeren.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <a
        href="mailto:info@duranlogistiek.nl"
        className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
      >
        Maak een afspraak
      </a>
    </div>
  </div>
</section>

    </>
  );
}