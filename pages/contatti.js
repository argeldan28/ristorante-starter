import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
    alert('Il tuo messaggio è stato inviato con successo! Ti risponderemo al più presto.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contatti • Ristorante Esempio</title>
        <meta name="description" content="Contattaci per prenotazioni, informazioni o richieste speciali" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-ivory">
        {/* Hero Section */}
        <div className="bg-bosco text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Contattaci</h1>
            <p className="text-xl max-w-2xl mx-auto">Siamo qui per rispondere alle tue domande e rendere la tua esperienza indimenticabile.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-serif text-2xl text-bosco mb-6">Invia un messaggio</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-grigio mb-1">
                    Oggetto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-grigio mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bosco focus:border-bosco"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-bosco text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition w-full sm:w-auto"
                  >
                    Invia messaggio
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-bosco mb-6">Informazioni di contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-bosco bg-opacity-10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-bosco" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Indirizzo</h3>
                    <p className="text-grigio mt-1">Via Roma 123, 00100 Roma, Italia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-bosco bg-opacity-10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-bosco" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Telefono</h3>
                    <p className="text-grigio mt-1">
                      <a href="tel:+390123456789" className="hover:text-bosco transition">+39 012 345 6789</a>
                    </p>
                    <p className="text-sm text-grigio mt-1">Lun-Dom: 12:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-bosco bg-opacity-10 p-3 rounded-full">
                    <svg className="h-6 w-6 text-bosco" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-grigio mt-1">
                      <a href="mailto:info@ristoranteesempio.it" className="hover:text-bosco transition">info@ristoranteesempio.it</a>
                    </p>
                    <p className="text-grigio mt-1">
                      <a href="mailto:prenotazioni@ristoranteesempio.it" className="hover:text-bosco transition">prenotazioni@ristoranteesempio.it</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Seguici sui social</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-grigio hover:text-bosco transition">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-grigio hover:text-bosco transition">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-grigio hover:text-bosco transition">
                    <span className="sr-only">TripAdvisor</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 1.2c6 0 10.8 4.8 10.8 10.8S18 22.8 12 22.8 1.2 18 1.2 12 6 1.2 12 1.2zM8.4 7.2c-1.2 0-2.4 1.2-2.4 3.6 0 2.4 1.2 3.6 2.4 3.6 1.2 0 2.4-1.2 2.4-3.6 0-2.4-1.2-3.6-2.4-3.6zm0 5.4c-.6 0-.9-.6-.9-1.8s.3-1.8.9-1.8.9.6.9 1.8-.3 1.8-.9 1.8zm7.2-5.4c-1.2 0-2.4 1.2-2.4 3.6 0 2.4 1.2 3.6 2.4 3.6 1.2 0 2.4-1.2 2.4-3.6 0-2.4-1.2-3.6-2.4-3.6zm0 5.4c-.6 0-.9-.6-.9-1.8s.3-1.8.9-1.8.9.6.9 1.8-.3 1.8-.9 1.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-bosco mb-6">Dove siamo</h2>
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19002.98447729539!2d12.4922309!3d41.8902512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUzJzI0LjkiTiAxMsKwMjknMzIuMCJF!5e0!3m2!1sen!2sit!4v1620000000000!5m2!1sen!2sit" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mappa del ristorante"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
