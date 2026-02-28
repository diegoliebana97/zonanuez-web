import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'productos', 'beneficios'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClassName = (id: string) => {
    const isActive = activeSection === id;
    return `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive
      ? 'border-brand-green text-brand-brown'
      : 'border-transparent text-stone-500 hover:border-stone-300 hover:text-brand-brown'
      }`;
  };

  const getMobileLinkClassName = (id: string) => {
    const isActive = activeSection === id;
    return `block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${isActive
      ? 'bg-brand-cream/30 border-brand-green text-brand-green'
      : 'border-transparent text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-brand-brown'
      }`;
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#inicio" className="flex-shrink-0 flex items-center gap-2">
              <Leaf className="h-8 w-8 text-brand-green" />
              <span className="font-bold text-xl text-brand-brown tracking-tight">Zona Nuez</span>
            </a>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#inicio" className={getLinkClassName('inicio')}>
                Inicio
              </a>
              <a href="#productos" className={getLinkClassName('productos')}>
                Productos
              </a>
              <a href="#beneficios" className={getLinkClassName('beneficios')}>
                Beneficios
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a
              href="https://wa.me/5492234395644?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20de%20frutos%20secos."
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
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClassName('inicio')}
            >
              Inicio
            </a>
            <a
              href="#productos"
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClassName('productos')}
            >
              Productos
            </a>
            <a
              href="#beneficios"
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClassName('beneficios')}
            >
              Beneficios
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
