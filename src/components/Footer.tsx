import { Leaf, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-brand-green" />
              <span className="font-bold text-2xl text-white tracking-tight">Zona Nuez</span>
            </a>
            <p className="text-brand-cream/80 text-sm leading-relaxed max-w-xs">
              Tu fuente confiable de frutos secos premium. Calidad, frescura y sabor natural directo a tu hogar.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-brand-green transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-brand-green transition-colors">Productos</a></li>
              <li><a href="#beneficios" className="hover:text-brand-green transition-colors">Beneficios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-brand-green" />
                <a
                  href="https://wa.me/54922363955644?text=Hola,%20tengo%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  +54 9 223 639-5564
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-brand-cream/60">
            &copy; {new Date().getFullYear()} Zona Nuez. Todos los derechos reservados.
          </p>
          <p className="text-sm text-brand-cream/60 mt-2 md:mt-0">
            Diseñado con <span className="text-brand-green">&hearts;</span> para amantes de lo natural.
          </p>
        </div>
      </div>
    </footer>
  );
}
