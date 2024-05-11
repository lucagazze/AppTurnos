
const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 overflow-y-auto m-5  ">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <h1 className="bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-center lg:text-left tracking-wide">
          Logo <span className=""></span>
        </h1>
        <p className="mt-10 text-lg max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          rerum, qui dolor quibusdam sint blanditiis distinctio quae
          perspiciatis nam quo?
        </p>
        <div className="flex justify-center lg:justify-start my-10">
          <a
            href="#"
            className="text-black font-bold bg-gradient-to-r from-slate-200 to-slate-300 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-400 py-3 px-4 mx-3 rounded-md hover:shadow-black hover:shadow-2xl"
          >
            Reserva un turno
          </a>
        </div>
      </div>
      <div className="lg:w-2/3 flex justify-center">
        <img
          src="/assets/images/Default_haceme_un_buen_logo_que_diga_Algorithmia_que_sea_muy_l_2.png"
          alt="IMAGEN"
        />
      </div>
    </div>
  );
};

export default HeroSection;
