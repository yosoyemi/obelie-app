import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Recommended() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recommendedCake } = location.state;

  return (
    <div className="bg-white mt-40 md:mt-60 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Te recomendamos el siguiente pastel</h2>
        <p className="mt-4 text-lg text-gray-700">Basado en tus respuestas, creemos que te encantará:</p>
        <p className="mt-8 text-3xl font-bold text-[#5da559]">{recommendedCake}</p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-8 flex items-center justify-center rounded-md border border-transparent bg-[#5da559] px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#5da559] focus:ring-offset-2"
        >
          Volver a la tienda
        </button>
      </div>
    </div>
  );
}
