import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <Leaf className="h-8 w-8 text-brand-green" />
              <span className="font-bold text-xl text-brand-brown tracking-tight">Zona Nuez</span>
            </a>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#inicio" className="border-brand-green text-brand-brown inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Inicio
              </a>
              <a href="#productos" className="border-transparent text-stone-500 hover:border-stone-300 hover:text-brand-brown inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Productos
              </a>
              <a href="#beneficios" className="border-transparent text-stone-500 hover:border-stone-300 hover:text-brand-brown inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Beneficios
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://wa.me/54922363955644?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20frutos%20secos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-green hover:bg-[#467326] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-colors"
            >
              Contacto
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white border-t border-stone-100">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#inicio" className="bg-brand-cream/30 border-brand-green text-brand-green block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Inicio
            </a>
            <a href="#productos" className="border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-brand-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Productos
            </a>
            <a href="#beneficios" className="border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-brand-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Beneficios
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
