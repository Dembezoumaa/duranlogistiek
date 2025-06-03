export default function TransportPage() {
  return (
    <main className="bg-black text-white pt-32 pb-32 px-4 overflow-x-hidden">


      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Onze transportdiensten</h1>

        {/* Winkel distributie */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-semibold mb-4">Winkel distributie</h2>
              <p className="text-gray-300 mb-6">
                Onze winkeldistributiedienst levert efficiënt goederen vanuit een centraal distributiecentrum naar individuele winkels, met aandacht voor specifieke eisen en snelheid.
              </p>
              <p className="text-gray-300 font-semibold mb-2">
                Waarom kiezen voor Duran winkeldistributie?
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Altijd op tijd:</strong> Betrouwbare just-in-time levering, afgestemd op de winkelbehoefte</li>
                <li><strong>Professionele chauffeurs:</strong> Intern opgeleide vakmensen met kennis van stadslogistiek</li>
                <li><strong>Slimme oplossingen:</strong> Efficiënte routes en voertuigen, geschikt voor binnensteden</li>
                <li><strong>Dagranddistributie:</strong> Leveringen buiten piekuren voor minimale verstoring en maximale snelheid</li>
              </ul>
            </div>
            <div className="md:order-1">
            <img
  src="/assets/images/winkeldis.png.png"
  alt="Winkeldistributie illustratie"
  className="w-full h-auto"
/>

            </div>
          </div>
        </section>

        {/* Pallet vervoer */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Pallet vervoer</h2>
              <p className="text-gray-300 mb-6">
              Veel goederen of producten worden per pallet getransporteerd. Het gebruik van pallets heeft namelijk veel voordelen! Met de juiste organisatie en indeling kunnen er veel producten tegelijkertijd vervoerd worden. Een pallet heeft namelijk bepaalde standaard afmetingen, zodat de producten tactisch ingedeeld kunnen worden, bijvoorbeeld door de producten op elkaar te stapelen.
              En het transport van die volle pallets? Dat verzorgen wij natuurlijk!
              </p>
              <p className="text-gray-300">
              Onze chauffeurs hebben dagelijks te maken met de distributie van pallets. Deze ervaring komt goed van pas tijdens het indelen en transporteren van de verschillende pallets. Door kritisch te kijken naar de indeling en organisatie van de vracht, kan de laadruimte optimaal benut worden. Dit heeft niet alleen een positief effect op de veiligheid van het transport (juiste gewichtsverdeling) maar ook op de levertijd!
              </p>
            </div>
            <div>
            <img
  src="/assets/images/pallet.svg"
  alt="Pallet Vervoer"
  className="w-full h-auto"
/>
            </div>
          </div>
        </section>

        {/* B2B transport */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-semibold mb-4">B2B transport</h2>
              <p className="text-gray-300 mb-6">
              Optimaliseer uw zakelijke transport met onze B2B transportdiensten. Wij verzorgen het vervoer van goederen tussen bedrijven, van kleine pakketten tot grote ladingen.
              </p>
              <p className="text-gray-300">
              Onze professionele aanpak en persoonlijke service zorgen ervoor dat uw goederen veilig en op tijd geleverd worden, zodat u zich kunt concentreren op uw core business. Wij bieden maatwerkoplossingen die aansluiten bij uw logistieke uitdagingen en budget.
              </p>
            </div>
            <div className="md:order-1">
            <img
  src="/assets/images/b2b.svg"
  alt="B2B"
  className="w-full h-auto"
/>
            </div>
          </div>
        </section>

        {/* Bloemen/Sierteelt */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Bloemen/Sierteelt</h2>
              <p className="text-gray-300 mb-6">
              Transport van bloemen en sierteelt vereist specialisatie. Ons bedrijf zorgt ervoor dat deze delicate producten vers en in perfecte staat aankomen. Bloemen en planten zijn kwetsbare producten. Daarom worden ze vaak geconditioneerd vervoerd.
              </p>
              <p className="text-gray-300">
              Dankzij de geavanceerde transporttechnieken garanderen we optimale omstandigheden tijdens het transport, waardoor de kwaliteit en versheid van de bloemen behouden blijven. Of het nu gaat om lokale distributie of internationaal vervoer, wij hebben de expertise en middelen om uw bloemen en sierteelt veilig en efficiënt te transporteren.
              </p>
            </div>
            <div>
            <img
  src="/assets/images/bloemen.svg"
  alt="bloemen/sierteelt"
  className="w-full h-auto"
/>
            </div>
          </div>
        </section>

        {/* Koel/Vries transport */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-semibold mb-4">Koel/Vries transport</h2>
              <p className="text-gray-300 mb-6">
              Voor het vervoer van temperatuurgevoelige producten is koel- en vriestransport essentieel. Ons team staat garant voor een ononderbroken koelketen, zodat uw producten in optimale conditie aankomen.
              </p>
              <p className="text-gray-300">
              Met onze moderne koelwagens en ervaren chauffeurs bieden we betrouwbare oplossingen voor het transport van voedingsmiddelen, medicijnen en andere temperatuurgevoelige goederen. Wij voldoen aan de strengste eisen en garanderen dat uw producten veilig en conform de gestelde normen vervoerd worden.
              </p>
            </div>
            <div className="md:order-1">
            <img
  src="/assets/images/koeltruck.svg"
  alt="Koeltruck"
  className="w-full h-auto"
/>
            </div>
          </div>
        </section>

      </div>

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

    <div className="flex flex-col md:flex-row md:justify-between md:items-stretch gap-8">
      {/* Eerste stap */}
      <div className="flex flex-col items-center text-center md:w-1/3">
        <div className="flex items-center justify-center text-white w-16 h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
          💵
        </div>
        <h3 className="text-white font-bold text-lg mt-4">Offerte op maat</h3>
        <p className="mt-2 text-gray-300">
          Samen met uw wensen gaan wij een op maat gemaakte offerte opstellen.
        </p>
      </div>

      {/* Tweede stap */}
      <div className="flex flex-col items-center text-center md:w-1/3">
        <div className="flex items-center justify-center text-white w-16 h-16 rounded-full bg-custom-dark-gray border-2 border-gray-400">
          📅
        </div>
        <h3 className="text-white font-bold text-lg mt-4">Planning op maat</h3>
        <p className="mt-2 text-gray-300">
          Nadat er een offerte is verstuurd en overeengekomen gaan we een planning maken.
        </p>
      </div>

      {/* Derde stap */}
      <div className="flex flex-col items-center text-center md:w-1/3">
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

    </main>
  );
}
