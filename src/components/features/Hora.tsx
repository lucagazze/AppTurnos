"use client"
 
import { Calendar } from '../ui/calendar';
import React, { useState } from 'react';

const HourSelector: React.FC<{ onSelect: (hour: string) => void }> = ({ onSelect }) => {
  const hours = Array.from(Array(24).keys()).map((hour) => hour.toString().padStart(2, '0'));

  return (
    <div className="grid grid-cols-4 gap-2">
      {hours.map((hour) => (
        <button
          key={hour}
          onClick={() => onSelect(hour)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          {hour}:00
        </button>
      ))}
    </div>
  );
};

const Availability: React.FC = () => {
  const [bookDate, setBookDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  // Formatear la fecha seleccionada solo mostrando el día en español
  const formattedDate = bookDate ? format(bookDate, 'EEEE d MMMM y', { locale: es }) : '';

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-black">
      <h2 className="font-bold text-lg uppercase tracking-wider mb-4">Elige un día y hora</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div>
          {bookDate && (
            <div className="p-4 bg-gray-100 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Fecha seleccionada:</h2>
              <p>{formattedDate}</p>
              <h2 className="text-lg font-semibold mt-4">Selecciona una hora:</h2>
              <HourSelector onSelect={handleTimeSelect} />
              {selectedTime && <p>Hora seleccionada: {selectedTime}:00</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Availability;
