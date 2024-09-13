import React from 'react';

const Eventos = () => {
  const events = [
    {
      id: 1,
      imageSrc: '/evento1.png',
      imageAlt: 'Evento 1',
      description: 'Descripción del evento 1',
      personas: 50,
      sabor: 'Tres Leches',
      precio: '$3000',
      anticipacion: '2 semanas',
      extras: 'Decoración temática'
    },
    {
      id: 2,
      imageSrc: '/evento2.png',
      imageAlt: 'Evento 2',
      description: 'Descripción del evento 2',
      personas: 80,
      sabor: 'Chocolate',
      precio: '$5000',
      anticipacion: '3 semanas',
      extras: 'Decoración con globos'
    },
    // Añade más imágenes según sea necesario
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 mt-32 md:mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-serif tracking-tight text-gray-900 sm:text-7xl text-center mb-16" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Eventos
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
          Nos encanta ser parte de los momentos y celebraciones más felices. Queremos que su evento sea inolvidable.
        </p>
        <p className="text-center text-lg text-gray-700 mb-16" style={{ fontFamily: 'Arial, sans-serif' }}>
          A continuación, le mostramos algunas imágenes que son parte de nuestro catálogo. Si encuentra una opción que le guste, haga clic en "Usar como referencia".
        </p>
        <div className="text-center mb-16">
          <button className="bg-[#dd4a8e] text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300">
            Cotizar mi evento
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={event.imageSrc} alt={event.imageAlt} className="h-64 w-full object-cover rounded-md" />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">{event.description}</p>
                <p className="text-gray-600">Personas: {event.personas}</p>
                <p className="text-gray-600">Sabor: {event.sabor}</p>
                <p className="text-gray-600">Anticipación: {event.anticipacion}</p>
                <p className="text-gray-600">Extras: {event.extras}</p>
                <p className="text-gray-800 mt-2 font-bold">Precio: {event.precio}</p>
                <button className="mt-4 bg-[#5da559] text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                  Usar como referencia
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventos;
