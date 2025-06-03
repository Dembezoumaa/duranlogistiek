"use client";

import './globals.css'; // Tailwind CSS of andere stijlen
import Header from './components/header'; // Importeer de Header-component
import Footer from "./components/footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Zorg dat de viewport ingesteld is voor responsiviteit */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header /> {/* Voeg de Header toe */}
        {children} {/* Hier komen de rest van je pagina's */}
        <Footer /> {/* Footer komt op elke pagina */}
      </body>
    </html>

  );
}





