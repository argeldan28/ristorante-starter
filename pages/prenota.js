import Head from 'next/head';
import ReservationForm from '../components/ReservationForm';

export default function Prenota() {
  return (
    <div className="min-h-screen bg-ivory">
      <Head>
        <title>Prenota un tavolo • Ristorante Esempio</title>
        <meta name="description" content="Prenota il tuo tavolo per una serata indimenticabile nel nostro ristorante" />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-bosco mb-4">Prenota un tavolo</h1>
          <p className="text-grigio max-w-2xl mx-auto">
            Compila il modulo qui sotto per prenotare il tuo tavolo. Ti confermeremo la disponibilità al più presto.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <ReservationForm />
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="font-serif text-2xl text-bosco mb-4">Informazioni sulla prenotazione</h2>
          <ul className="space-y-3 text-grigio">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-bosco mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Orari di apertura: da martedì a domenica, 12:00 - 15:00 e 19:00 - 23:00</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-bosco mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Per prenotazioni telefoniche: <a href="tel:+390123456789" className="text-bosco hover:underline">+39 012 345 6789</a></span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-bosco mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Per gruppi numerosi (oltre 8 persone) si prega di contattarci telefonicamente</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
