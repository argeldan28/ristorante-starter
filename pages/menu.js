import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';

const menuData = {
  antipasti: {
    title: 'Antipasti',
    items: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Pane tostato con pomodoro fresco, aglio e basilico',
        price: '8,00'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Sottili fette di manzo crudo con scaglie di parmigiano e rucola',
        price: '14,00'
      },
      {
        name: 'Antipasto della Casa',
        description: 'Selezione di salumi e formaggi locali con confetture fatte in casa',
        price: '16,00'
      }
    ]
  },
  primi: {
    title: 'Primi Piatti',
    items: [
      {
        name: 'Pasta al Tartufo Nero',
        description: 'Tagliatelle fresche con crema di tartufo nero e funghi',
        price: '18,00'
      },
      {
        name: 'Risotto allo Zafferano',
        description: 'Risotto cremoso allo zafferano con midollo e grana padano',
        price: '16,00'
      }
    ]
  },
  secondi: {
    title: 'Secondi Piatti',
    items: [
      {
        name: 'Filetto di Manzo',
        description: 'Con riduzione al vino rosso e patate al forno',
        price: '28,00'
      },
      {
        name: 'Branzino al Sale',
        description: 'Intero al forno con erbe aromatiche e verdure di stagione',
        price: '26,00'
      }
    ]
  },
  dolci: {
    title: 'Dolci',
    items: [
      {
        name: 'Tiramisù',
        description: 'Classico dolce al caffè con mascarpone e cacao',
        price: '7,00'
      },
      {
        name: 'Panna Cotta',
        description: 'Con salsa ai frutti di bosco',
        price: '6,50'
      }
    ]
  }
};

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Menu • Ristorante Esempio</title>
        <meta name="description" content="Scopri il nostro menu stagionale con ingredienti freschi e locali" />
      </Head>

      <Navbar />

      <main className="flex-grow py-16 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl text-bosco mb-4">Il Nostro Menu</h1>
            <p className="text-grigio max-w-2xl mx-auto">
              Scopri la nostra proposta gastronomica realizzata con ingredienti freschi e di stagione.
            </p>
            <div className="w-20 h-1 bg-oro mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {Object.values(menuData).map((section, index) => (
              <MenuSection 
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-ivory p-4 rounded-lg">
                <h3 className="font-medium text-center mb-2">Note importanti</h3>
                <p className="text-sm text-grigio text-center">
                  * I prezzi sono espressi in Euro e includono IVA.<br />
                  ** Il menu è soggetto a variazioni stagionali.<br />
                  *** Segnalaci eventuali allergie o intolleranze alimentari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
