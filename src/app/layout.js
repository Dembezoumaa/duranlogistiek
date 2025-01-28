"use client"; // Zorg dat dit bestand als clientcomponent werkt (indien nodig)

import './globals.css'; // Tailwind CSS of andere stijlen
import Header from './components/header'; // Importeer de Header-component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Voeg de Header toe */}
        {children} {/* Hier komen de rest van je pagina's */}
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



