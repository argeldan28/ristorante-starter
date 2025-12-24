import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero({ title, subtitle }) {
  return (
    <section className="bg-ivory text-antracite overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-grigio mb-6 max-w-xl">{subtitle}</p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/prenota"
                  className="inline-block bg-bosco text-ivory font-semibold px-6 py-3 rounded-md transition duration-120 focus:outline-none focus:ring-2 focus:ring-oro"
                >
                  Prenota ora
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/menu"
                  className="inline-block border border-grigio px-6 py-3 rounded-md text-antracite transition duration-120 hover:border-bosco"
                >
                  Scopri il menu
                </Link>
              </motion.div>

            </div>
          </motion.div>
          <motion.div 
            className="order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-sm relative">
              <Image 
                src="/images/hero-restaurant.png" 
                alt="Sala del ristorante con luce calda" 
                fill
                className="object-cover" 
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
