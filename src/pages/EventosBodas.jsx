import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventosBodas = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-16 mt-32 md:mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200">
            <img src="/boda1.png" alt="Bodas" className="h-full w-full object-cover object-center" />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Bodas</h2>
            <p className="text-gray-700 mb-4">
              Nos enorgullece ser parte de eventos tan emocionantes y únicos. Queremos hacerlo con el mayor de los compromisos y la mejor calidad.
            </p>
            <button
              onClick={() => handleNavigate('/bodas')}
              className="bg-[#dd4a8e] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              Cotizar mi Boda
            </button>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200">
            <img src="/evento1.png" alt="Eventos" className="h-full w-full object-cover object-center" />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>Eventos</h2>
            <p className="text-gray-700 mb-4">
              Nos encanta ser parte de los momentos y celebraciones más felices. Queremos que su evento sea inolvidable.
            </p>
            <button
              onClick={() => handleNavigate('/eventos')}
              className="bg-[#dd4a8e] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              Cotizar mi Evento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventosBodas;
