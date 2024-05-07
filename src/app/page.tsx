import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
      {/* Navbar y Hero ocupan toda la pantalla */}
      <div className="flex flex-col h-screen">
        <Navbar2 />
        <Hero />
      </div>

      {/* Servicios ocupa toda la pantalla */}
      <div className="flex flex-col h-screen">
        <Servicios />
      </div>

      {/* Contacto ocupa toda la pantalla */}
      <div className="flex flex-col h-screen">
      </div>

      <Footer />
    </div>
  );
}
