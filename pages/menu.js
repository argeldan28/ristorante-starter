import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import AnimatedSection from '../components/AnimatedSection';

const menuData = {
  antipasti: {
    title: 'Antipasti',
    items: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Pane tostato con pomodoro fresco, aglio e basilico',
        price: '8,00',
        image: '/images/menu1.jpg'
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Sottili fette di manzo crudo con scaglie di parmigiano e rucola',
        price: '14,00',
        image: '/images/menu2.jpg'},
      {
        name: 'Antipasto della Casa',
        description: 'Selezione di salumi e formaggi locali con confetture fatte in casa',
        price: '16,00',
        image: '/images/menu3.jpg'}
    ]
  },
  primi: {
    title: 'Primi Piatti',
    items: [
      {
        name: 'Pasta al Tartufo Nero',
        description: 'Tagliatelle fresche con crema di tartufo nero e funghi',
        price: '18,00',
        image: '/images/menu4.jpg'
      },
      {
        name: 'Risotto allo Zafferano',
        description: 'Risotto cremoso allo zafferano con midollo e grana padano',
        price: '16,00',
        image: '/images/menu5.jpg'
      }
    ]
  },
  secondi: {
    title: 'Secondi Piatti',
    items: [
      {
        name: 'Filetto di Manzo',
        description: 'Con riduzione al vino rosso e patate al forno',
        price: '28,00',
        image: '/images/menu6.jpg'
      },
      {
        name: 'Branzino al Sale',
        description: 'Intero al forno con erbe aromatiche e verdure di stagione',
        price: '26,00',
        image: '/images/menu7.jpg'
      }
    ]
  },
  dolci: {
    title: 'Dolci',
    items: [
      {
        name: 'Tiramisù',
        description: 'Classico dolce al caffè con mascarpone e cacao',
        price: '7,00',
        image: '/images/menu8.jpg'
      },
      {
        name: 'Panna Cotta',
        description: 'Con salsa ai frutti di bosco',
        price: '6,50',
        image: '/images/menu9.jpg'
      }
    ]
  }
};

export default function Menu() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Menu • Ristorante Aura</title>
        <meta name="description" content="Scopri il nostro menu stagionale con ingredienti freschi e locali" />
      </Head>

      <div className={`fixed w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <Navbar />
      </div>
      <div className="h-20"></div>

      <main className="flex-grow py-16 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12" direction="up">
            <h1 className="font-serif text-4xl text-bosco mb-4">Il Nostro Menu</h1>
            <p className="text-grigio max-w-2xl mx-auto">
              Scopri la nostra proposta gastronomica realizzata con ingredienti freschi e di stagione.
            </p>
            <div className="w-20 h-1 bg-oro mx-auto mt-4"></div>
          </AnimatedSection>
          
          <AnimatedSection className="bg-white rounded-lg shadow-sm p-6 md:p-8" delay={0.2}>
            {Object.values(menuData).map((section, index) => (
              <MenuSection 
                key={index}
                title={section.title}
                items={section.items}
                onImageClick={setSelectedImage}
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
          </AnimatedSection>
        </div>
      </main>

      {/* Image Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              alt="Zoomed dish"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
