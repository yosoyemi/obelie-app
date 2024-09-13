import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const branches = [
  { name: 'Colosio', position: [21.927907923244483, -102.30928050081482], image: '/colosio.png', link: 'https://maps.app.goo.gl/JTYGpYmDSeZhh5eG9', hours: { open: '09:00', close: '21:00' }, description: 'Blvrd Juan Pablo II 1158, Canteras de San Javier, 20207 Aguascalientes, Ags.' },
  { name: 'Arboledas', position: [21.901152679826517, -102.30430232098163], image: '/arboledas.png', link: 'https://maps.app.goo.gl/L1u2ovYrzfRsp6gv5', hours: { open: '09:00', close: '21:00' }, description: 'Margil de Jesús 1905 Fracc, Las Arboledas, 20200 Aguascalientes, Ags.' },
  { name: 'Agostadero', position: [21.863069069172788, -102.31178952450884], image: '/agostadero.png', link: 'https://maps.app.goo.gl/xpaGhMs47f9EBLBE9', hours: { open: '09:00', close: '21:00' }, description: 'Av. de los Maestros 2208-A, El Dorado 2da Secc, 20235 Aguascalientes, Ags.' },
  { name: 'Central', position: [21.869040235778076, -102.29805195596605], image: '/central.png', link: 'https://maps.app.goo.gl/3n8GRyGQ5WcwCLKu6', hours: { open: '09:00', close: '21:00' }, description: 'Av de la Convención de 1914 Sur 310, Las Américas, 20230 Aguascalientes, Ags.' },
  { name: 'Jardines', position: [21.868705379802435, -102.28516509995613], image: '/jardines.png', link: 'https://maps.app.goo.gl/FaaDuPs36VRUmQzm7', hours: { open: '09:00', close: '21:00' }, description: 'Av de la Convención de 1914 Sur 1012, Jardines de Aguascalientes, 20270 Aguascalientes, Ags.' },
  { name: 'Ojocaliente', position: [21.89267573811549, -102.2567678992507], image: '/ojocaliente.png', link: 'https://maps.app.goo.gl/JqRsZVhatZw5Q92G9', hours: { open: '09:00', close: '21:00' }, description: 'Av. Ojocaliente 102, Ojocaliente I, 20196 Aguascalientes, Ags.' },
  { name: 'Canteras', position: [21.860811840146614, -102.33877951783309], image: '/pg5.png', link: 'https://maps.app.goo.gl/4Eq5vBVVDbUfd86v8', hours: { open: '09:00', close: '21:00' }, description: 'Blvrd Juan Pablo II 1158, Canteras de San Javier, 20207 Aguascalientes, Ags.' },
  { name: 'Calvillo', position: [21.84555591882853, -102.7173860746229], image: '/calvillo.png', link: 'https://maps.app.goo.gl/bqPA8wm5H9stpHFM9', hours: { open: '09:00', close: '21:00' }, description: 'C. Jesús Gómez Portugal 111, Zona Centro, 20800 Calvillo, Ags.' },
];

const formatTime = (time24) => {
  const [hour, minute] = time24.split(':');
  const hourNum = parseInt(hour, 10);
  const ampm = hourNum >= 12 ? 'pm' : 'am';
  const hour12 = hourNum % 12 || 12;
  return `${hour12}:${minute}${ampm}`;
};

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const isBranchOpen = (branch) => {
  const currentTime = getCurrentTime();
  return currentTime >= branch.hours.open && currentTime <= branch.hours.close;
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const Sucursales = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [distances, setDistances] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleFindNearest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const calculatedDistances = branches.map(branch => ({
          ...branch,
          distance: calculateDistance(latitude, longitude, branch.position[0], branch.position[1])
        }));
        const sortedBranches = calculatedDistances.sort((a, b) => a.distance - b.distance).slice(0, 3);
        setDistances(sortedBranches);
        setShowRecommendations(!showRecommendations);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleBranchSelect = (event) => {
    const branchName = event.target.value;
    const branch = branches.find(b => b.name === branchName);
    setSelectedBranch(branch);
  };

  return (
    <div className="mt-40 md:mt-60">
      <h1 className="text-5xl font-serif tracking-tight text-gray-900 sm:text-7xl text-center mb-16" style={{ fontFamily: 'Dancing Script, cursive' }}>
        Nuestras Sucursales
      </h1>
      <div className="text-center mb-8">
        <button
          onClick={handleFindNearest}
          className="rounded-md bg-[#5da559] px-4 py-2 text-white font-medium hover:bg-green-700"
        >
          Encontrar mi sucursal más cercana
        </button>
      </div>
      {showRecommendations && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-3xl font-semibold text-[#dd4a8e] mb-4 text-center">Sucursales más cercanas</h2>
          <ul className="space-y-4">
            {distances.map((branch, index) => (
              <li key={index} className="bg-[#5da559] shadow overflow-hidden rounded-md px-6 py-4 text-white text-center">
                <h2 className="text-2xl font-semibold">{branch.name}</h2>
                <p className="text-xl">{branch.distance.toFixed(2)} km</p>
                <img src={branch.image} alt={`Sucursal ${branch.name}`} className="w-full h-48 object-cover rounded-md mt-4" />
                <p className="text-white mt-2">{branch.description}</p>
                <div className="mt-4">
                  <a
                    href={branch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-[#dd4a8e] px-4 py-2 text-white font-medium hover:bg-pink-700"
                  >
                    Ir a Ubicación
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ul className="space-y-4">
          {branches.map((branch, index) => (
            <li key={index} className="bg-white shadow overflow-hidden rounded-md px-6 py-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">{branch.name}</h2>
              <img src={branch.image} alt={`Sucursal ${branch.name}`} className="w-full h-48 object-cover rounded-md mt-4" />
              <p className="text-gray-600 mt-2">{branch.description}</p>
              <div className="flex justify-center items-center mt-4">
                <span className={`inline-block w-3 h-3 rounded-full ${isBranchOpen(branch) ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
                <span className="text-gray-600">{isBranchOpen(branch) ? `Abierto hasta ${formatTime(branch.hours.close)}` : `Abre a las ${formatTime(branch.hours.open)}`}</span>
              </div>
              <div className="mt-4">
                <a
                  href={branch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-[#5da559] px-4 py-2 text-white font-medium hover:bg-green-700"
                >
                  Ir a Ubicación
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mb-8">
      <h1 className="text-5xl font-serif tracking-tight text-gray-900 sm:text-7xl text-center mb-16" style={{ fontFamily: 'Dancing Script, cursive' }}>
Bscas alguna sucursal?
      </h1>
      
      <select onChange={handleBranchSelect} className="rounded-md bg-white px-4 py-2 text-gray-700 font-medium border border-gray-300">
          <option value="">Selecciona una sucursal</option>
          {branches.map((branch, index) => (
            <option key={index} value={branch.name}>{branch.name}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mb-16 relative z-0">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-0">
          <MapContainer center={selectedBranch ? selectedBranch.position : [21.885, -102.291]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedBranch ? (
              <Marker position={selectedBranch.position}>
                <Popup>
                  <div className="text-center">
                    <h2 className="text-lg font-semibold">{selectedBranch.name}</h2>
                    <img src={selectedBranch.image} alt={`Sucursal ${selectedBranch.name}`} className="w-full h-32 object-cover rounded-md mt-2" />
                    <a
                      href={selectedBranch.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 rounded-md bg-[#5da559] px-4 py-2 text-white font-medium hover:bg-green-700"
                    >
                      Ir a Ubicación
                    </a>
                  </div>
                </Popup>
              </Marker>
            ) : (
              branches.map((branch, index) => (
                <Marker key={index} position={branch.position}>
                  <Popup>
                    <div className="text-center">
                      <h2 className="text-lg font-semibold">{branch.name}</h2>
                      <img src={branch.image} alt={`Sucursal ${branch.name}`} className="w-full h-32 object-cover rounded-md mt-2" />
                      <a
                        href={branch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 rounded-md bg-[#5da559] px-4 py-2 text-white font-medium hover:bg-green-700"
                      >
                        Ir a Ubicación
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Sucursales;
