import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ReservationForm() {
  const location = useLocation();
  const { flavor, size } = location.state || { flavor: '', size: '' };

  const [formData, setFormData] = useState({
    name: '',
    order: `${flavor} - ${size}`,
    deliveryDate: '',
    time: '',
    tolerance: '',
    contact: '',
    reception: '',
  });

  const [showNotification, setShowNotification] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomOrderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderNumber(randomOrderNumber);
    setShowNotification(true);
    setFormData({
      name: '',
      order: `${flavor} - ${size}`,
      deliveryDate: '',
      time: '',
      tolerance: '',
      contact: '',
      reception: '',
    });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const validateTime = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour >= 11 && hour < 20;
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    if (validateTime(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      alert('Las reservas solo se pueden hacer entre las 11:00 AM y las 8:00 PM.');
    }
  };

  return (
    <div className="mt-40 md:mt-60 flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Reserva tu Pastel</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Por favor, proporciona la siguiente información para completar tu pedido. Solo se pueden reservar pasteles que estén en la vitrina.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre del Cliente
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="order" className="block text-sm font-medium leading-6 text-gray-900">
                    Pedido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="order"
                      id="order"
                      autoComplete="order"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.order}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="deliveryDate" className="block text-sm font-medium leading-6 text-gray-900">
                    Fecha de entrega
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="deliveryDate"
                      id="deliveryDate"
                      autoComplete="delivery-date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      min={getTomorrowDate()}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                    Hora
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      autoComplete="time"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.time}
                      onChange={handleTimeChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="tolerance" className="block text-sm font-medium leading-6 text-gray-900">
                    Tolerancia
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="tolerance"
                      id="tolerance"
                      autoComplete="tolerance"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.tolerance}
                      onChange={handleTimeChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                    Contacto
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="contact"
                      id="contact"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="reception" className="block text-sm font-medium leading-6 text-gray-900">
                    Obelie recepción
                  </label>
                  <div className="mt-2">
                    <select
                      id="reception"
                      name="reception"
                      autoComplete="reception"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5da559] sm:text-sm sm:leading-6"
                      value={formData.reception}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="jardines">Jardines</option>
                      <option value="canteras">Canteras</option>
                      <option value="arboledas">Arboledas</option>
                      <option value="agostadero">Agostadero</option>
                      <option value="colosio">Colosio</option>
                      <option value="ojocaliente">Ojocaliente</option>
                      <option value="central">Central</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#5da559] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5da559]"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-green-700">Pedido Levantado</h3>
            <p className="text-sm text-green-700">Tu pedido ha sido registrado con éxito.</p>
            <p className="text-sm text-green-700">Número de pedido: {orderNumber}</p>
            <p className="text-sm text-green-700">Detalles del pedido: {formData.order}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300"
                onClick={() => setShowNotification(false)}
              >
                Confirmar
              </button>
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                onClick={() => setShowNotification(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
