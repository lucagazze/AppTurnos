"use client"


import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-gray-400">
      <div className="container px-4 mx-auto relative lg:text-base">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold">Barberia 313</span>
          </div>
          <ul className="hidden lg:flex ml-16 space-x-10">
            <li>
              <a href="#" className="text-lg hover:text-slate-300 transition-all">Sobre</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-slate-300 transition-all">Servicios</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-slate-300 transition-all">Contacto</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-8 items-center">
          <a
              href="#"
              className="text-black font-bold bg-gradient-to-r from-slate-200 to-slate-300 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-400 py-3 px-4 mx-3 rounded-md hover:shadow-black hover:shadow-2xl"
            >
              Reserva un turno
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gradient-to-b from-slate-600 to-slate-500 w-full p-8 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li className="py-4">
                <a href="#" className="text-lg hover:text-slate-300 transition-all">Sobre</a>
              </li>
              <li className="py-4">
                <a href="#" className="text-lg hover:text-slate-300 transition-all">Servicios</a>
              </li>
              <li className="py-4">
                <a href="#" className="text-lg hover:text-slate-300 transition-all">Contacto</a>
              </li>
            </ul>
            <div className="flex space-x-6">
            <a
              href="#"
              className="text-black font-bold bg-gradient-to-r from-slate-200 to-slate-300 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-400 py-3 px-4 mx-3 rounded-md hover:shadow-black hover:shadow-2xl"
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
