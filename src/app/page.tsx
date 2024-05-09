import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Navbar from "@/components/Navbar2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="Sobre" className="flex flex-col bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
  <Navbar />

<main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
    
        <Hero />
      </div>
      <div id="Servicios" className="flex flex-col h-screen">
        <Servicios />
      </div>
      <div id="Contacto" className="flex flex-col h-screen">
        <Contacto />
      </div>


      <Footer/>

    </main>

     

    </div>
  );
}
