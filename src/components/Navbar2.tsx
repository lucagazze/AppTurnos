"use client"


import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-400">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl">Barberia 313</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
           <li>
            <a href="">Sobre</a>
           </li>
           <li>
            <a href="">Servicios</a>
           </li>
           <li>
            <a href="">Contacto</a>
           </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          
            <a
              href="#"
              className="text-black font-bold bg-gradient-to-r from-slate-200 to-slate-400 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 transition py-2 px-3 rounded-md"
            >
              Reserva un turno
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gradient-to-b from-slate-500 to-slate-600 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
             <li className="py-4">
                <a href="">Sobre</a>
             </li>
             <li className="py-4">
                <a href="">Servicios</a>
             </li>
             <li className="py-4">
                <a href="">Contacto</a>
             </li>
            </ul>
            <div className="flex space-x-6">
            <a
              href="#"
              className="bg-gradient-to-r from-slate-200 to-slate-400 py-2 px-3 rounded-md"
            >
              Reserva un turno
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
