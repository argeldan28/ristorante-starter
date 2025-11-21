import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif text-bosco">
              Ristorante Esempio
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-grigio hover:text-bosco focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-grigio hover:text-bosco transition duration-300">
              Home
            </Link>
            <Link href="/menu" className="text-grigio hover:text-bosco transition duration-300">
              Menu
            </Link>
            <Link href="/chi-siamo" className="text-grigio hover:text-bosco transition duration-300">
              Chi Siamo
            </Link>
            <Link href="/contatti" className="text-grigio hover:text-bosco transition duration-300">
              Contatti
            </Link>
            <Link 
              href="/prenota" 
              className="bg-bosco text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Prenota
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-grigio hover:text-bosco py-2">
              Home
            </Link>
            <Link href="/menu" className="text-grigio hover:text-bosco py-2">
              Menu
            </Link>
            <Link href="/chi-siamo" className="text-grigio hover:text-bosco py-2">
              Chi Siamo
            </Link>
            <Link href="/contatti" className="text-grigio hover:text-bosco py-2">
              Contatti
            </Link>
            <Link 
              href="/prenota" 
              className="bg-bosco text-white px-4 py-2 rounded-md text-center hover:bg-opacity-90"
            >
              Prenota
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
