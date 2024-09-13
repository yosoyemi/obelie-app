// src/pages/home.jsx
import React from 'react';
import WordSearchGame from '../components/WordSearchGame';

export default function Carrucel() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <div className="bg-white text-center">
          <h1 className="text-5xl font-serif tracking-tight text-gray-900 sm:text-7xl" style={{ fontFamily: 'Dancing Script, cursive' }}>
            El auténtico y tradicional pastel de guayaba
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "Con más de dos décadas de experiencia, Obelie se especializa en ofrecer pasteles de guayaba de la más alta calidad. ¡Ven y déjanos endulzar tus momentos especiales!"
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/shop"
              className="rounded-md bg-[#5da559] px-3.5 py-2.5 text-sm font-serif text-white shadow-lg hover:bg-[#df86a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Quiero mi pastel
            </a>
            <a
              href="/shop"
              className="rounded-md px-2.5 py-1.5 text-sm leading-6 text-gray-900 drop-shadow-md outline-dotted"
            >
              Pídelo ahora <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="overflow-hidden hidden sm:block">
          <div className="mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-auto lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-3/3 sm:top-0 sm:translate-x-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 overflow-hidden rounded-lg bg-white/50 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 drop-shadow-md">
                    <a href="/po" className="group">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 float float-delay-1">
                        <img
                          src="/po6.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                    <a href="/pz" className="group">
                      <div className="h-32 w-22 overflow-hidden rounded-lg drop-shadow-md float float-delay-2">
                        <img
                          src="/pz.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-9 drop-shadow-md">
                    <a href="/pq" className="group">
                      <div className="h-32 w-22 overflow-hidden rounded-lg float float-delay-3">
                        <img
                          src="/pq5.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                    <a href="/pg" className="group">
                      <div className="h-64 w-44 overflow-hidden rounded-lg drop-shadow-md float float-delay-4">
                        <img
                          src="/pg9.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                    <a href="/pdl" className="group">
                      <div className="h-32 w-22 overflow-hidden rounded-lg drop-shadow-md float float-delay-5">
                        <img
                          src="/pdl2.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 drop-shadow-md">
                    <a href="/pce" className="group">
                      <div className="h-32 w-22 overflow-hidden rounded-lg float float-delay-1">
                        <img
                          src="/pce4.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                    <a href="/pc" className="group">
                      <div className="h-64 w-44 overflow-hidden rounded-lg float float-delay-2">
                        <img
                          src="/pc.png"
                          alt=""
                          className="hover-effect h-full w-full object-cover object-center"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
