import Servicios  from "../components/Servicios";
import Navbar2  from "../components/Navbar2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-slate-500 to-slate-600 text-lg  text-white">
      <Navbar2/>
      <section className="h-screen max-w-7xl mx-auto pt-20 px-6 ">
      <Hero/>
      
      <Servicios/>
      </section>
      <Footer/>
    </div>
  );
}
