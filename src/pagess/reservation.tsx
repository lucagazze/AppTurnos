import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
      {/* Navbar y Hero ocupan toda la pantalla */}
      <div className="flex flex-col h-screen">
        <Navbar2 />
        <Contacto />
      </div>

      <Footer />
    </div>
  );
}
