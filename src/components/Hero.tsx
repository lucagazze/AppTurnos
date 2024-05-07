
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20  max-w-7xl mx-auto pt-20 px-6 h-full">
      <h1 className="bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Barberia 
        <span className="">
          {" "}
          313
        </span>
      </h1>
      <p className="mt-10 text-lg text-center  max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum, qui dolor quibusdam sint blanditiis distinctio quae perspiciatis nam quo?
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="text-black font-bold bg-gradient-to-r from-slate-200 to-slate-400 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 py-3 px-4 mx-3 rounded-md"
        >
          Reserva un turno
        </a>

      </div>
      <div className="flex mt-10 justify-center">
        
      </div>
    </div>
  );
};

export default HeroSection;
