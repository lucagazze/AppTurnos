"use client"

import React, { useState, useEffect } from 'react';
import { Calendar } from './ui/calendar';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';

interface Disponibilidad {
  [date: string]: number[];
}

const disponibilidad: Disponibilidad = {
  '2024-05-13': [9, 10, 11],
  '2024-05-14': [10, 11, 12],
};

const HourSelector: React.FC<{ onSelect: (hour: string) => void; selectedDate: Date | undefined }> = ({ onSelect, selectedDate }) => {
  const [selectedHour, setSelectedHour] = useState<number | undefined>(undefined);

  useEffect(() => {
    setSelectedHour(undefined);
  }, [selectedDate]);

  const handleHourSelect = (hour: number) => {
    setSelectedHour(prevHour => prevHour === hour ? undefined : hour);
    onSelect(`${hour.toString().padStart(2, '0')}:00`);
  };

  const availableHours = selectedDate ? disponibilidad[format(selectedDate, 'yyyy-MM-dd')] || [] : [];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {Array.from(Array(17 - 9 + 1).keys()).map((index) => {
        const hour = index + 9;
        const formattedHour = hour.toString().padStart(2, '0');
        const isSelected = selectedHour === hour;
        const isAvailable = availableHours.includes(hour);
        return (
          <button
            key={hour}
            onClick={() => handleHourSelect(hour)}
            className={`px-4 py-2 rounded-md ${
              isSelected ? 'bg-gray-500 text-white' : (isAvailable ? 'bg-gray-200 font-bold text-gray-800 hover:bg-gray-300' : 'bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none')
            }`}
            disabled={!isAvailable || isSelected}
          >
            {formattedHour}:00
          </button>
        );
      })}
    </div>
  );
};

const Availability: React.FC = () => {
  const [bookDate, setBookDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [isBooking, setIsBooking] = useState<boolean>(false);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(prevTime => prevTime === time ? undefined : time);
    setIsBooking(true);
  };

  const handleBooking = () => {
    alert(`¡Turno reservado para ${formattedDate} a las ${selectedTime}!`);
  };

  const formattedDate = bookDate ? format(bookDate, 'EEEE d MMMM y', { locale: es }) : '';

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-black">
      <h2 className="font-bold text-lg uppercase tracking-wider mb-4">Elige un día y hora</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-grow">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={date => {
              setSelectedTime(undefined);
              setBookDate(date);
            }}
            className="rounded-md border"
          />
        </div>
        <div className="flex-grow lg:pl-4 mt-4 lg:mt-0">
          {bookDate && (
            <div className="bg-gray-100 rounded-md p-4">
              <h2 className="text-lg font-semibold mb-2">Fecha seleccionada:</h2>
              <p>{formattedDate}</p>
              <h2 className="text-lg font-semibold mt-4">Selecciona una hora:</h2>
              <HourSelector onSelect={handleTimeSelect} selectedDate={bookDate} />
              {selectedTime && <p>Hora seleccionada: {selectedTime}</p>}
             
            </div>
          )}
        </div>
        
      </div>
      {selectedTime && isBooking && (
                <button
                  onClick={handleBooking}
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                >
                  Reservar turno
                </button>
              )}
    </div>
  );
};

export default Availability;
