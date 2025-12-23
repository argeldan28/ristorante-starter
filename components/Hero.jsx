import Link from 'next/link'

export default function Hero({ title, subtitle }) {
  return (
    <section className="bg-ivory text-antracite">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-grigio mb-6 max-w-xl">{subtitle}</p>
            <div className="flex gap-4">
              <Link
                href="/prenota"
                className="inline-block bg-bosco text-ivory font-semibold px-6 py-3 rounded-md transform transition duration-120 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-oro"
              >
                Prenota ora
              </Link>

              <Link
                href="/menu"
                className="inline-block border border-grigio px-6 py-3 rounded-md text-antracite transition duration-120 hover:border-bosco"
              >
                Scopri il menu
              </Link>

            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-sm">
              <img src="/images/hero-restaurant.png" alt="Sala del ristorante con luce calda" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
