import React from 'react';
import Availability from './Availability';

const Reservation: React.FC = () => {
  return (
    <div className="text-black min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full  lg:w-3/5">
        <h1 className="text-3xl font-semibold text-center mb-8">Reserva tu turno</h1>
        <div className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-xl font-semibold mb-4">Disponibilidad</h2>
          <Availability />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
