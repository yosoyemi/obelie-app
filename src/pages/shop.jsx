import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Pastel de Guayaba',
    href: '/pg',
    imageSrc: './pg9.png',
    imageAlt: 'Pastel de Guayaba',
  },
  {
    id: 2,
    name: 'Pastel de Dulce de Leche',
    href: '/pdl',
    imageSrc: './pdl1.png',
    imageAlt: 'Pastel de Dulce de Leche',
  },
  {
    id: 3,
    name: 'Pastel de Cajeta',
    href: '/pc',
    imageSrc: './pc.png',
    imageAlt: 'Pastel de Cajeta',
  },
  {
    id: 4,
    name: 'Pastel de Cereza',
    href: '/pce',
    imageSrc: './pce1.png',
    imageAlt: 'Pastel de Cereza',
  },
  {
    id: 5,
    name: 'Pastel de Elote',
    href: '/pe',
    imageSrc: './pe.png',
    imageAlt: 'Pastel de Elote',
  },
  {
    id: 6,
    name: 'Pastel de Oreo',
    href: '/po',
    imageSrc: './po3.png',
    imageAlt: 'Pastel de Oreo',
  },
  {
    id: 7,
    name: 'Pastel de Quesopiña',
    href: '/pq',
    imageSrc: './pq.png',
    imageAlt: 'Pastel de Quesopiña',
  },
  {
    id: 8,
    name: 'Pastel de Zanahoria',
    href: '/pz',
    imageSrc: './pz.png',
    imageAlt: 'Pastel de Zanahoria',
  },
  {
    id: 9,
    name: 'Pastel de Fresa',
    href: '/pf',
    imageSrc: './pfe13.png',
    imageAlt: 'Pastel de Fresa',
  },
  {
    id: 10,
    name: 'Pastel de Tequila',
    href: '/pt',
    imageSrc: './pte12.png',
    imageAlt: 'Pastel de Tequila',
  },
  {
    id: 11,
    name: 'Pastel de Coco',
    href: '/pco',
    imageSrc: './pco12.png',
    imageAlt: 'Pastel de Coco',
  },
  {
    id: 12,
    name: 'Pastel Delirio de Chocolate',
    href: '/pch',
    imageSrc: './pch31.png',
    imageAlt: 'Pastel Delirio de Chocolate',
  },
  {
    id: 13,
    name: 'Pastel de Rompope',
    href: '/prp',
    imageSrc: './prp12.png',
    imageAlt: 'Pastel de Rompope',
  },
  {
    id: 14,
    name: 'Pastel de Selva Negra',
    href: '/psn',
    imageSrc: './psn12.png',
    imageAlt: 'Pastel de Selva Negra',
  },
  {
    id: 15,
    name: 'Pastel de Baileys',
    href: '/pby',
    imageSrc: './pby12.png',
    imageAlt: 'Pastel de Baileys',
  },
];

export default function Shop() {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleSpecialOrderClick = () => {
    navigate('/special-order');
  };

  return (
    <div className="bg-white mt-40 md:mt-60">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-6xl font-serif tracking-tight text-gray-900 sm:text-6xl text-center mb-16" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Nuestro catálogo de pasteles
        </h1>
        
        <div className="flex justify-center mb-16 space-x-4">
          <button
            onClick={handleQuizClick}
            className="rounded-md border border-transparent bg-[#5da559] px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#5da559] focus:ring-offset-2"
          >
            ¿No sabes qué pastel elegir?
          </button>
        </div>

        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="aspect-w-1 aspect-h-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>{product.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
