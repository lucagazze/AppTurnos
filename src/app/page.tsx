// Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Productos from "@/components/Productos";

const Home = () => {
  return (
    <div id="Sobre" className="flex flex-col min-h-screen bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
      {/* Sección Sobre */}      <Navbar2 />
      <div  className="flex flex-col min-h-screen ">
  
        <Hero />
      </div>

      {/* Sección Servicios */}
      <div id="Servicios" className="flex flex-col min-h-screen ">
        <Servicios />
      </div>

    {/* Sección Servicios */}
    <div id="Productos" className="flex flex-col min-h-screen ">
        <Productos />
      </div>

      {/* Sección Contacto */}
      <div id="Contacto" className="flex flex-col min-h-screen ">
        <Contacto />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
