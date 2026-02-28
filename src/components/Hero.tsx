import { ShoppingBag, ArrowRight } from 'lucide-react';
import logoUrl from '../assets/logo.png';

export default function Hero() {
  return (
    <div className="relative bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-light sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-brand-brown sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Frutos secos</span>{' '}
                <span className="block text-brand-green xl:inline">frescos y naturales</span>
              </h1>
              <p className="mt-3 text-base text-stone-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lleva la mejor calidad a tu mesa. Seleccionamos cuidadosamente nuestras nueces, almendras y mixes para ofrecerte el mejor sabor y nutrición en cada bocado.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#productos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green hover:bg-[#467326] md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Ver Productos
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://wa.me/54922363955644?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20frutos%20secos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-green bg-brand-cream hover:bg-[#E8D5B7] md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Pedir por WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center bg-brand-cream/30 p-8 lg:p-12">
        <img
          className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          src={logoUrl}
          alt="Logo Zona Nuez"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1599577180579-755f5f534d1b?auto=format&fit=crop&q=80&w=1000";
            e.currentTarget.className = "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-3xl shadow-xl";
          }}
        />
      </div>
    </div >
  );
}
