import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ChiSiamo() {
  const teamMembers = [
    {
      name: 'Marco Bianchi',
      role: 'Executive Chef',
      bio: 'Con oltre 20 anni di esperienza nella cucina italiana, lo Chef Marco porta avanti la tradizione con un tocco di innovazione.',
      image: '/images/chef-marco.jpg'
    },
    {
      name: 'Laura Rossi',
      role: 'Pastry Chef',
      bio: 'Specializzata in pasticceria francese e italiana, Laura crea dolci capolavori che deliziano il palato e la vista.',
      image: '/images/chef-laura.jpg'
    },
    {
      name: 'Giovanni Verdi',
      role: 'Maître & Sommelier',
      bio: 'La sua profonda conoscenza dei vini e la passione per l\'ospitalità rendono ogni cena un\'esperienza indimenticabile.',
      image: '/images/maitre-giovanni.jpg'
    }
  ];

  const milestones = [
    { year: '1995', title: 'Fondazione', description: 'Apertura del ristorante nel cuore di Roma' },
    { year: '2002', title: 'Prima Stella', description: 'Assegnazione della prima stella Michelin' },
    { year: '2010', title: 'Ristrutturazione', description: 'Ampliamento della sala e rinnovamento della cucina' },
    { year: '2018', title: 'Seconda Stella', description: 'Riconoscimento della seconda stella Michelin' },
    { year: '2023', title: 'Nuovo Menu', description: 'Introduzione di un menu stagionale a km 0' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Chi Siamo • Ristorante Esempio</title>
        <meta name="description" content="Scopri la nostra storia, la filosofia e il team che rende unico il nostro ristorante" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img 
              src="/images/ristorante-interno.jpg" 
              alt="Interno del ristorante" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="text-white max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">La Nostra Storia</h1>
              <p className="text-xl">Tradizione, passione e innovazione nella cucina romana dal 1995</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-oro font-medium tracking-wider">LA NOSTRA FILOSOFIA</span>
              <h2 className="font-serif text-3xl mt-2 mb-4">Eccellenza nella Semplicità</h2>
              <div className="w-20 h-1 bg-oro mx-auto"></div>
            </div>

            <div className="prose max-w-3xl mx-auto text-grigio">
              <p className="mb-6">
                Fondato nel cuore di Roma nel 1995, il Ristorante Esempio nasce dalla passione per la cucina tradizionale italiana, 
                reinterpretata con creatività e rispetto per gli ingredienti di qualità.
              </p>
              <p className="mb-6">
                La nostra filosofia si basa su tre principi fondamentali: la selezione accurata delle materie prime, 
                la maestria nella preparazione e l'attenzione al dettaglio nel servizio. Crediamo che la vera cucina 
                sia un'arte che unisce tradizione e innovazione, dove ogni piatto racconta una storia di sapori autentici.
              </p>
              <p>
                Oggi, sotto la guida dello Chef Marco Bianchi, il nostro ristorante è diventato un punto di riferimento 
                per chi cerca un'esperienza gastronomica raffinata in un'atmosfera accogliente ed elegante.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-oro font-medium tracking-wider">IL NOSTRO TEAM</span>
              <h2 className="font-serif text-3xl mt-2 mb-4">Incontra i Nostri Chef</h2>
              <div className="w-20 h-1 bg-oro mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="h-64 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-chef.jpg'; // Fallback image
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-oro mb-4">{member.role}</p>
                    <p className="text-grigio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-oro font-medium tracking-wider">LA NOSTRA STORIA</span>
              <h2 className="font-serif text-3xl mt-2 mb-4">Tappe Fondamentali</h2>
              <div className="w-20 h-1 bg-oro mx-auto"></div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-oro -ml-px"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    <div className="hidden md:block md:w-1/2 px-8 py-4">
                      {index % 2 === 0 ? (
                        <div className="text-right">
                          <h3 className="text-xl font-medium">{milestone.title}</h3>
                          <p className="text-grigio">{milestone.description}</p>
                        </div>
                      ) : (
                        <div>
                          <h3 className="text-xl font-medium">{milestone.title}</h3>
                          <p className="text-grigio">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-oro border-4 border-white"></div>
                      <div className="md:hidden absolute left-0 w-6 h-6 rounded-full bg-oro border-4 border-white -ml-3"></div>
                      <div className="text-2xl font-serif text-oro px-4 py-2 bg-white md:bg-transparent rounded-full z-10">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <div className="md:hidden w-full mt-4 pl-12">
                      <h3 className="text-xl font-medium">{milestone.title}</h3>
                      <p className="text-grigio">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-bosco text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="font-serif text-3xl mb-6">Vieni a Trovarci</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Prenota il tuo tavolo e vieni a vivere un'esperienza culinaria indimenticabile nel cuore di Roma.
            </p>
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
