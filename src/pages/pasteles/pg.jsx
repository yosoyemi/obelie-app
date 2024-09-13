import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';

const product = {
  name: 'Pastel de Guayaba',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Pasteles', href: '/shop' },
  ],
  images: [
    {
      src: '/pg6.png',
      alt: 'Imagen del pastel de guayaba.',
    },
    {
      src: '/pg9.png',
      alt: 'Otra vista del pastel de guayaba.',
    },
    {
      src: '/pg10.png',
      alt: 'Pastel de guayaba desde otra perspectiva.',
    },
    {
      src: '/pg12.png',
      alt: 'Vista adicional del pastel de guayaba.',
    },
  ],
  sizes: [
    { name: 'Individual', price: '$85', serves: '1 persona', inStock: true },
    { name: 'Mini', price: '$170', serves: '3 personas', inStock: true },
    { name: 'Extramini', price: '$300', serves: '5 personas', inStock: true },
    { name: 'Chico', price: '$400', serves: '10 personas', inStock: true },
    { name: 'Mediano', price: '$480', serves: '15 personas', inStock: true },
    { name: 'Grande', price: '$550', serves: '20 personas', inStock: true },
  ],
  description: 'Elaborado con pan de vainilla, bañado con crema de guayaba, relleno de mermelada de guayaba y betún de guayaba, cubierto de un delicioso betún de guayaba. Decorado de diversas formas con guayabas naturales.',
  highlights: [
    'Hecho a mano',
    'Ingredientes frescos',
    'Sabor tropical',
  ],
  details: {
    ingredients: [
      'Pan de vainilla',
      'Crema de guayaba',
      'Mermelada de guayaba',
      'Betún de guayaba',
      'Guayabas naturales',
    ],
    decoration: 'Decorado de diversas formas con guayabas naturales.',
    sizes: [
      'Individual (1 persona)',
      'Mini (3 personas)',
      'Extramini (5 personas)',
      'Chico (10 personas)',
      'Mediano (15 personas)',
      'Grande (20 personas)',
    ],
  },
  testimonials: [
    {
      name: 'Juan Pérez',
      review: 'El mejor pastel de guayaba que he probado, realmente delicioso y fresco.',
    },
    {
      name: 'María López',
      review: 'Perfecto para celebraciones, a todos les encantó el sabor y la textura.',
    },
    {
      name: 'Carlos Hernández',
      review: 'La calidad de los ingredientes se nota, definitivamente lo recomiendo.',
    },
  ],
};
const reviews = { href: '#', average: 4.5, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PG() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservation', { state: { flavor: product.name, size: selectedSize.name } });
  };

  return (
    <div className="bg-white mt-40 md:mt-60"> {/* Ajusta el margin-top según sea necesario */}
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center">
              <p className="text-3xl tracking-tight text-gray-900">{selectedSize.price}</p>
              <p className="text-sm text-gray-600 ml-4">{selectedSize.serves}</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-[#5da559] hover:text-green-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Tamaño</h3>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-3"
                >
                  {product.sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      className={({ focus }) =>
                        classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          focus ? 'ring-2 ring-[#5da559]' : '',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                        )
                      }
                    >
                      {({ checked, focus }) => (
                        <>
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                checked ? 'border-[#5da559]' : 'border-transparent',
                                focus ? 'border' : 'border-2',
                                'pointer-events-none absolute -inset-px rounded-md',
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-[#5da559] px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#5da559] focus:ring-offset-2"
                onClick={handleReserveClick}
              >
                Reservar Pastel
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Ingredientes</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.details.ingredients.map((ingredient) => (
                    <li key={ingredient} className="text-gray-400">
                      <span className="text-gray-600">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Decoración</h3>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details.decoration}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Tamaños disponibles</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.details.sizes.map((size) => (
                    <li key={size} className="text-gray-400">
                      <span className="text-gray-600">{size}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Testimonios</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {product.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex">
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                  <p className="mt-2 text-base text-gray-500">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
