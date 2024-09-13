import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "Selecciona tus sabores favoritos",
    answers: [
      "Cajeta", "Zanahoria", "Guayaba", "Oreo", "Piña", "Fresa", "Rompope",
      "Café", "Delirio de chocolate", "Selva negra", "Baileys", "Quesopiña",
      "Coco", "Tres leches", "Tequila", "Flan", "Dulce de leche", "Plátano",
      "Frutos rojos", "Higo", "Ciruela pasa", "Almendra", "Durazno", "Cereza",
      "Arándano", "Frambuesa", "Mandarina", "Mora", "Naranja", "Tamarindo"
    ],
  },
  {
    question: "¿Te gustan los pasteles húmedos o ligeramente húmedos?",
    answers: ["Húmedos", "Ligeramente húmedos"],
  },
  {
    question: "¿Prefieres un pastel relleno?",
    answers: ["Sí", "No"],
  },
  {
    question: "¿Te gusta que los pasteles sean muy dulces?",
    answers: ["Sí", "No"],
  },
  {
    question: "¿Qué tamaño prefieres?",
    answers: ["Individual (1 persona)", "Mini (3 personas)", "Extra (5 personas)", "Chico (10 personas)", "Mediano (15 personas)", "Grande (20 personas)"],
  },
];

const cakes = [
  {
    name: 'Pastel de Guayaba',
    imageSrc: './pg9.png',
    imageAlt: 'Pastel de Guayaba',
    link: '/pg',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['guayaba'],
    },
  },
  {
    name: 'Pastel de Dulce de Leche',
    imageSrc: './pdl1.png',
    imageAlt: 'Pastel de Dulce de Leche',
    link: '/pdl',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['dulce de leche'],
    },
  },
  {
    name: 'Pastel de Cajeta',
    imageSrc: './pc.png',
    imageAlt: 'Pastel de Cajeta',
    link: '/pc',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['cajeta'],
    },
  },
  {
    name: 'Pastel de Cereza',
    imageSrc: './pce1.png',
    imageAlt: 'Pastel de Cereza',
    link: '/pce',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['cereza'],
    },
  },
  {
    name: 'Pastel de Elote',
    imageSrc: './pe.png',
    imageAlt: 'Pastel de Elote',
    link: '/pe',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['elote'],
    },
  },
  {
    name: 'Pastel de Oreo',
    imageSrc: './po3.png',
    imageAlt: 'Pastel de Oreo',
    link: '/po',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['oreo'],
    },
  },
  {
    name: 'Pastel de Quesopiña',
    imageSrc: './pq.png',
    imageAlt: 'Pastel de Quesopiña',
    link: '/pq',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['piña', 'queso'],
    },
  },
  {
    name: 'Pastel de Zanahoria',
    imageSrc: './pz.png',
    imageAlt: 'Pastel de Zanahoria',
    link: '/pz',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['zanahoria'],
    },
  },
  {
    name: 'Pastel de Rompope',
    imageSrc: './prp.png',
    imageAlt: 'Pastel de Rompope',
    link: '/prp',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['rompope'],
    },
  },
  {
    name: 'Pastel de Coco',
    imageSrc: './pco.png',
    imageAlt: 'Pastel de Coco',
    link: '/pco',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['coco'],
    },
  },
  {
    name: 'Pastel de Delirio de Chocolate',
    imageSrc: './pdc.png',
    imageAlt: 'Pastel de Delirio de Chocolate',
    link: '/pdc',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['chocolate'],
    },
  },
  {
    name: 'Pastel de Selva Negra',
    imageSrc: './psn.png',
    imageAlt: 'Pastel de Selva Negra',
    link: '/psn',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['cereza', 'chocolate'],
    },
  },
  {
    name: 'Pastel de Baileys',
    imageSrc: './pby.png',
    imageAlt: 'Pastel de Baileys',
    link: '/pby',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['baileys'],
    },
  },
  {
    name: 'Pastel de Tequila',
    imageSrc: './pt.png',
    imageAlt: 'Pastel de Tequila',
    link: '/pt',
    attributes: {
      humid: true,
      filling: true,
      verySweet: true,
      flavors: ['tequila'],
    },
  },
];

function getRecommendedCake(answers) {
  const preferences = {
    flavors: answers[0],
    humid: answers[1] === 'Húmedos',
    filling: answers[2] === 'Sí',
    verySweet: answers[3] === 'Sí',
    size: answers[4],
  };

  return cakes.find(cake =>
    preferences.flavors.some(flavor => cake.attributes.flavors.includes(flavor.toLowerCase())) &&
    cake.attributes.humid === preferences.humid &&
    cake.attributes.filling === preferences.filling &&
    cake.attributes.verySweet === preferences.verySweet
  ) || cakes[0];
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendedCake, setRecommendedCake] = useState(null);
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const cake = getRecommendedCake(newAnswers);
      setRecommendedCake(cake);
    }
  };

  const handleReserveClick = () => {
    navigate('/recommended', { state: { recommendedCake: recommendedCake.name } });
  };

  return (
    <div className="mt-40 md:mt-60 flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        {!recommendedCake ? (
          <>
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Encuentra el pastel perfecto para ti</h2>
            <div>
              <p className="mt-4 text-lg text-gray-700">{questions[currentQuestion].question}</p>
              <div className="mt-6 space-y-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    className="w-full rounded-md border border-transparent bg-[#5da559] px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#5da559] focus:ring-offset-2"
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">¡Tu pastel recomendado es!</h2>
            <img src={recommendedCake.imageSrc} alt={recommendedCake.imageAlt} className="w-full mt-4 rounded-lg" />
            <h3 className="mt-4 text-xl font-medium text-gray-900">{recommendedCake.name}</h3>
            <button
              onClick={handleReserveClick}
              className="mt-6 w-full rounded-md border border-transparent bg-[#5da559] px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#5da559] focus:ring-offset-2"
            >
              Reservar Ahora
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
