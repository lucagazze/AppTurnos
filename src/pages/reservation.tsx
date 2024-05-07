

import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";

export default function Reservation() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
      <Navbar />
      <Hero />
      <div className="flex flex-col h-screen">
        <Servicios />
      </div>
      <div className="flex flex-col h-screen">
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

