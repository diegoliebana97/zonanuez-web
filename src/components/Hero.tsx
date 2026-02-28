import { ShoppingBag, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoUrl from '../assets/logo.png';

export default function Hero() {
  return (
    <div className="relative bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-light sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-brand-brown sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Frutos secos</span>{' '}
                <span className="block text-brand-green xl:inline">frescos y naturales</span>
              </h1>
              <p className="mt-3 text-base text-stone-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Llevamos la mejor calidad a tu mesa. Seleccionamos cuidadosamente nuestras nueces, almendras y mixes para ofrecerte el mejor sabor y nutrición en cada bocado.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center sm:justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#productos"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-brand-green hover:bg-[#467326] shadow-xl transition-all gap-2"
                >
                  <ShoppingBag className="h-6 w-6" />
                  Ver Productos
                </motion.a>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/54922363955644?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20frutos%20secos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/zonanuez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white border border-stone-200 text-brand-brown shadow-lg hover:bg-stone-50 transition-all flex items-center justify-center group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-pink-600 group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center bg-brand-cream/30 p-8 lg:p-12"
      >
        <img
          className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          src={logoUrl}
          alt="Logo Zona Nuez"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1599577180579-755f5f534d1b?auto=format&fit=crop&q=80&w=1000";
            e.currentTarget.className = "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-3xl shadow-xl";
          }}
        />
      </motion.div>
    </div >
  );
}
