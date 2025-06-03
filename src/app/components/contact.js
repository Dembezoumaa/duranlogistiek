"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Hier kan je integreren met bijv. Formspree, Nodemailer, etc.
    console.log("Formulier verzonden:", formData);

    setSubmitted(true);
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Neem contact met ons op</h2>
        {submitted ? (
          <div className="text-center text-green-400 text-xl font-medium">
            Bedankt voor uw bericht! We nemen spoedig contact met u op.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="naam" className="block mb-2 text-sm font-medium">
                Naam
              </label>
              <input
                type="text"
                id="naam"
                name="naam"
                required
                onChange={handleChange}
                className="w-full bg-black border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-white"
                placeholder="Uw naam"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full bg-black border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-white"
                placeholder="uw@email.nl"
              />
            </div>

            <div>
              <label htmlFor="telefoon" className="block mb-2 text-sm font-medium">
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="telefoon"
                name="telefoon"
                onChange={handleChange}
                className="w-full bg-black border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-white"
                placeholder="0612345678"
              />
            </div>

            <div>
              <label htmlFor="bericht" className="block mb-2 text-sm font-medium">
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows="5"
                required
                onChange={handleChange}
                className="w-full bg-black border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-white"
                placeholder="Uw vraag of bericht"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300 w-full"
            >
              ➤ Verstuur bericht
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
