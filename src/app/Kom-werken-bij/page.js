export default function KomWerkenBij() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-16 px-4">
      <div className="bg-white/90 rounded-xl shadow-2xl max-w-2xl w-full p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-center drop-shadow">
          Kom werken bij&nbsp;
          <span className="text-black">Duran Logistiek</span>
        </h1>
        <p className="text-lg text-gray-800 text-center mb-8">
          Ben jij op zoek naar een dynamische en collegiale werkomgeving? Wil jij deel uitmaken van een groeiend, innovatief en betrouwbaar logistiek bedrijf waar mensen écht centraal staan?
          <br /><br />
          Bij Duran Logistiek investeren we in jouw ontwikkeling, bieden we ruimte voor eigen initiatief en krijg je de vrijheid om jezelf te bewijzen. Jij maakt dagelijks het verschil voor onze klanten en de maatschappij!
          <br /><br />
          Onze chauffeurs, logistiek medewerkers en stagiaires vormen samen het kloppend hart van onze organisatie. Of je nu ervaren bent of een leergierige starter: wij zijn altijd benieuwd naar jouw motivatie.
        </p>


        <div className="bg-gray-50 rounded-md p-4 mb-6 border border-gray-200">
          <p className="font-medium text-gray-800">
            Stuur jouw CV en motivatiebrief naar&nbsp;
            <a
              href="mailto:info@duranlogistiek.nl"
              className="underline text-gray-600 hover:text-gray-800 transition"
            >
              info@duranlogistiek.nl
            </a>
            . Vermeld daarbij duidelijk voor welke functie je solliciteert. <br />
            Wij nemen zo snel mogelijk contact met je op!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="mailto:info@duranlogistiek.nl?subject=Sollicitatie via website"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-800 transition mb-2"
          >
            Solliciteer nu
          </a>
          <span className="text-gray-500 text-sm">
            Of stuur je sollicitatie direct per e-mail
          </span>
        </div>
      </div>
    </main>
  );
}
