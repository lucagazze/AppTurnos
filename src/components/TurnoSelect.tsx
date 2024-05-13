"use client"


const TurnoSelect = () => {


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        

      {/* Principio del widget integrado de Calendly */}
      <div className="calendly-inline-widget" data-url="https://calendly.com/lucagazze1/turno-con-natasha?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

    </div>
  );
};

export default TurnoSelect;