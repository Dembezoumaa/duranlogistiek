"use client";

export default function Footer() {
  return (
    <section className="relative">
      {/* Top section with background image */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/duran5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h3 className="text-base uppercase">Neem contact op</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 leading-snug">
              Wilt u dat wij u terugbellen? Vul dan het formulier hiernaast in.
            </h2>
          </div>
        </div>
      </div>

      {/* Form section (positioned absolutely on desktop, stacked on mobile) */}
      <div className="relative md:absolute md:top-[55%] md:left-3/4 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-black text-gray-300 p-6 sm:p-8 md:p-12 rounded-xl shadow-lg w-[90%] max-w-xl mx-auto mt-6 md:mt-0">
        <h3 className="uppercase mb-6 text-white text-center text-lg md:text-xl">
          Terugbelverzoek indienen
        </h3>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Volledige naam
          </label>
          <input
            className="w-full border-b-2 border-gray-700 bg-black text-white py-3 focus:outline-none focus:border-white"
            type="text"
            placeholder="Voornaam Achternaam"
            id="name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Telefoon
          </label>
          <input
            className="w-full border-b-2 border-gray-700 bg-black text-white py-3 focus:outline-none focus:border-white"
            type="text"
            placeholder="0612345678"
            id="phone"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Bericht
          </label>
          <textarea
            className="w-full border-b-2 border-gray-700 bg-black text-white py-3 focus:outline-none focus:border-white"
            placeholder="Waarover mogen wij u terugbellen?"
            id="message"
          ></textarea>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-md border-2 border-white hover:bg-white hover:text-black transition duration-300 w-full">
          ➤ Terugbelverzoek indienen
        </button>
      </div>

      {/* Bottom section */}
      <div className="bg-custom-dark-gray text-white py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="flex items-start space-x-4">
            <img src="/assets/images/map-icon.png" alt="Map Icoon" className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Onze vestiging:</h4>
              <p>Uraniumweg 13, 3542 AK Utrecht Nederland</p>
            </div>
          </div>

          {/* Info */}
          <div className="flex items-start space-x-4">
            <img src="/assets/images/info-icon.png" alt="Informatie Icoon" className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Informatie:</h4>
              <p>Info@duranlogistiek.nl</p>
              <p>KVK: 88146448</p>
            </div>
          </div>

          {/* Empty (used for layout spacing) */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
