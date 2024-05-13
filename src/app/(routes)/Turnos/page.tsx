import Contacto from "@/components/Contacto";
import Navbar from "../../../components/Navbar";
import Footer from "@/components/Footer";
import TurnoSelect from "@/components/TurnoSelect";
import Availability from "@/components/Availability";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <div
      id="Sobre"
      className="flex flex-col bg-gradient-to-b from-slate-500 to-slate-600 text-lg text-white">
     
     <div className="flex flex-col min-h-screen ">
      <Navbar />

      <Reservation />
      </div>
      <Footer />
    </div>
  );
}
