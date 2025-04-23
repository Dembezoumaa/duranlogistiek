"use client";

export default function Footer() {
  return (
    <section className="relative">
      {/* Bovenste sectie (met achtergrondfoto en overlay) */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/duran5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h3 className="text-base uppercase">Neem contact op</h3>
            <h2 className="text-4xl font-bold mt-4 leading-snug">
              Wilt u dat wij u terugbellen? Vul dan het formulier hiernaast in.
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute top-[55%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-black text-gray-300 p-12 rounded-xl shadow-lg w-full max-w-xl">
        <h3 className="uppercase mb-6 text-white text-center">Terugbelverzoek indienen</h3>
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
      <label className="block text-sm font-medium mb-2" htmlFor="message">Bericht</label>
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

 {/* Onderste sectie (zwart) */}
 <div className="bg-custom-dark-gray text-white py-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Vestiging */}
      <div className="md:col-span-1 flex items-center space-x-4">
        <img src="/assets/images/map-icon.png" alt="Map Icoon" className="w-8 h-8" /> {/* Map afbeelding */}
        <div>
          <h4 className="font-bold text-lg">Onze vestiging:</h4>
          <p>Uraniumweg 13, 3542 AK Utrecht Nederland</p>
        </div>
      </div>

      {/* Informatie */}
      <div className="md:col-span-1 flex items-center space-x-4">
        <img src="/assets/images/info-icon.png" alt="Informatie Icoon" className="w-8 h-8" /> {/* Info afbeelding */}
        <div>
          <h4 className="font-bold text-lg">Informatie:</h4>
          <p>Info@duranlogistiek.nl</p>
          <p>KVK: 88146448</p>
        </div>
      </div>

      {/* Lege ruimte voor formulier */}
      <div className="md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
}
