import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  const specialties = [
    {
      title: 'Cucina Locale',
      description: 'Piatti tradizionali realizzati con ingredienti a km 0 e tecniche moderne.',
      icon: '🍽️'
    },
    {
      title: 'Vini Selezionati',
      description: 'Una cantina con oltre 200 etichette, accuratamente selezionate dai nostri sommelier.',
      icon: '🍷'
    },
    {
      title: 'Dolci Artigianali',
      description: 'Dessert fatti in casa che chiudono in dolcezza la tua esperienza culinaria.',
      icon: '🍰'
    }
  ];

  const testimonials = [
    {
      quote: "Una cena indimenticabile! Il pesce era fresco e cucinato alla perfezione.",
      author: "Marco R.",
      rating: 5
    },
    {
      quote: "Atmosfera accogliente e personale cordiale. Tornerò sicuramente!",
      author: "Giulia M.",
      rating: 5
    },
    {
      quote: "La migliore carbonara che abbia mai mangiato fuori Roma. Complimenti allo chef!",
      author: "Luca P.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Ristorante Esempio • Cucina Contemporanea</title>
        <meta name="description" content="Ristorante elegante con cucina stagionale. Prenota il tuo tavolo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <Hero
          title="Un'esperienza gastronomica autentica"
          subtitle="Cucina stagionale, ingredienti selezionati e un'atmosfera raffinata. Prenota il tuo tavolo."
        />

        {/* Specialties Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-oro font-medium tracking-wider">LE NOSTRE SPECIALITÀ</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">Scopri la nostra cucina</h2>
              <div className="w-20 h-1 bg-oro mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialties.map((item, index) => (
                <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-grigio">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-ivory">
          <div className="max-w-6xl mx-auto px-6">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <img 
                    src="/images/chef.png" 
                    alt="Il nostro chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-oro font-medium tracking-wider">CHI SIAMO</span>
                <h2 className="font-serif text-3xl mt-2 mb-4">La nostra storia</h2>
                <p className="text-grigio mb-6 leading-relaxed">
                  Fondato nel 1995, il Ristorante Esempio è diventato un punto di riferimento per gli amanti della buona cucina. 
                  La nostra filosofia si basa sul rispetto per la tradizione, la ricerca della qualità e l'attenzione al dettaglio.
                </p>
                <p className="text-grigio mb-8 leading-relaxed">
                  Ogni piatto che serviamo racconta una storia, fatta di ingredienti selezionati, tecniche raffinate e tanta passione.
                </p>
                <Link 
                  href="/chi-siamo" 
                  className="inline-block bg-bosco text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-oro font-medium tracking-wider">DICONO DI NOI</span>
              <h2 className="font-serif text-3xl mt-2 mb-4">Le recensioni dei nostri clienti</h2>
              <div className="w-20 h-1 bg-oro mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-ivory p-6 rounded-lg shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-oro' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-grigio italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="https://www.tripadvisor.it/Restaurant_Review-g187791-d12345678-Reviews-Ristorante_Esempio-Rome_Lazio.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-bosco hover:text-oro transition"
              >
                Leggi tutte le recensioni
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-bosco text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="font-serif text-3xl mb-6">Pronto per un'esperienza culinaria indimenticabile?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Prenota il tuo tavolo e vieni a trovarci per assaporare i nostri piatti.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/prenota" 
                className="bg-oro text-bosco font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition"
              >
                Prenota un tavolo
              </Link>
              <Link 
                href="/contatti" 
                className="border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
