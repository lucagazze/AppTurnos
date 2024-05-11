"use client"


import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  const dataNavbar = [
  {
    id: 1,
    name: "Sobre mi",
    link: "/sobre-mi",
  },
  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    name: "Cursos",
    link: "/cursos",
  },
  {
    id: 4,
    name: "Recomendaciones",
    link: "/recomendaciones",
  },
];



  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-gray-400">
      <div className="container px-4 mx-auto relative lg:text-base">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <a
              href="/"
              className="text-2xl font-bold"
            >
              
    


              Logo
            </a>
          </div>
          <ul className="hidden lg:flex ml-16 space-x-10 ">
            <li>
              <a href="/" className="text-lg hover:text-slate-300 transition-all ">Inicio</a>
            </li>
          
          </ul>
        
          <div className="lg:hidden md:flex flex-col justify-end">
          <div className="flex flex-col md:flex-row md:space-x-6">
  <a
    href="/"
    className="text-lg hover:text-slate-300 transition-all"
  >
    Inicio
  </a>
</div>

           
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
