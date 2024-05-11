// ScrollNavigation.jsx
import React from "react";

const ScrollNavigation = () => {
  return (
    <nav className="hidden lg:flex flex-col absolute justify-center transform -translate-y-1/2 z-50">
      <a href="#Sobre" className="my-2 text-white hover:text-gray-300">Sobre</a>
      <a href="#Servicios" className="my-2 text-white hover:text-gray-300">Servicios</a>
      <a href="#Contacto" className="my-2 text-white hover:text-gray-300">Contacto</a>
    </nav>
  );
};

export default ScrollNavigation;


