import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nueces Mariposa',
    description: 'Nueces de la mejor calidad, enteras y frescas.',
    price: '$8.500',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1573411700683-120a11270278?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Almendras Nonpareil',
    description: 'Almendras crujientes, ideales para snacks o repostería.',
    price: '$12.000',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Mix Saludable',
    description: 'Mezcla perfecta de nueces, almendras, castañas y pasas.',
    price: '$10.500',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1603404456534-190b200b372f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Pistachos Tostados',
    description: 'Pistachos con sal, el snack perfecto para cualquier momento.',
    price: '$15.000',
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1563374885-304c4078c187?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Products() {
  return (
    <div id="productos" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-green tracking-wide uppercase">Catálogo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-brown sm:text-4xl">
            Nuestros Productos Estrella
          </p>
          <p className="mt-4 max-w-2xl text-xl text-stone-500 mx-auto">
            Seleccionamos los mejores frutos secos para garantizar frescura y calidad en cada entrega.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-brown">{product.name}</h3>
                <p className="mt-2 text-sm text-stone-500 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-extrabold text-brand-green">
                    {product.price} <span className="text-sm font-medium text-stone-400">/{product.unit}</span>
                  </p>
                  <a
                    href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20comprar%20${product.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-brand-cream/50 text-brand-green hover:bg-brand-cream transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
