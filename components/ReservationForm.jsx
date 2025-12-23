import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData);
    alert('La tua prenotazione è stata inviata con successo! Ti contatteremo per conferma.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  // Generate time options from 12:00 to 22:30 in 30-minute intervals
  const timeOptions = [];
  for (let hour = 12; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 22 && minute === 30) break; // Last slot at 22:00
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-grigio mb-1">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-grigio mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-grigio mb-1">
            Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-grigio mb-1">
            Numero di ospiti *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'persona' : 'persone'}
              </option>
            ))}
            <option value="9+">9+ persone (gruppi)</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-grigio mb-1">
            Data *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-grigio mb-1">
            Orario *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          >
            <option value="">Seleziona un orario</option>
            {timeOptions}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-grigio mb-1">
          Richieste speciali (opzionale)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          rows="3"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
          placeholder="Allergie, intolleranze, richieste particolari..."
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-bosco text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bosco"
        >
          Conferma Prenotazione
        </button>
      </div>

      <p className="text-xs text-grigio text-center">
        I campi contrassegnati con * sono obbligatori. Ti contatteremo per confermare la disponibilità.
      </p>
    </form>
  );
}
