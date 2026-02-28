import { ShoppingCart, Plus, Check } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  {
    name: 'Frutos Secos y Disecados',
    products: [
      {
        id: 1,
        name: 'Maní con Sal',
        description: 'Maní tostado y salado, ideal para picadas.',
        prices: [
          { size: '1/2 kg', price: '$2.600' },
          { size: '1 kg', price: '$5.000' },
        ],
        image: 'https://images.unsplash.com/photo-1552391204-718d75030222?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    name: 'Mix de Frutos Secos',
    products: [
      {
        id: 2,
        name: 'Mix Premium',
        description: 'Almendras, castañas, maní, nueces y pasas negras.',
        prices: [
          { size: '1/2 kg', price: '$7.000' },
          { size: '1 kg', price: '$13.000' },
        ],
        image: 'https://images.unsplash.com/photo-1603404456534-190b200b372f?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 3,
        name: 'Mix Fruto Sport',
        description: 'Almendra, banana, castaña, maní, nueces, pasas negras y rubias.',
        prices: [
          { size: '1/2 kg', price: '$7.500' },
          { size: '1 kg', price: '$14.500' },
        ],
        image: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    name: 'Cereales e Inflados',
    products: [
      {
        id: 4,
        name: 'Almohaditas',
        description: 'Deliciosas almohaditas rellenas de avellana, frutilla o limón.',
        prices: [
          { size: '1/2 kg', price: '$5.000' },
          { size: '1 kg', price: '$9.500' },
        ],
        image: 'https://images.unsplash.com/photo-1592176372045-2139bcadd885?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    name: 'Barras de Cereal Muecas',
    products: [
      {
        id: 5,
        name: 'Barritas Cacao y Avellanas',
        description: 'Barras de cereal nutritivas sabor cacao y avellanas.',
        prices: [
          { size: '8 barras', price: '$9.900' },
          { size: '16 barras', price: '$19.500' },
        ],
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 6,
        name: 'Barritas Pasas y Arándanos',
        description: 'Barras de cereal nutritivas con pasas y arándanos.',
        prices: [
          { size: '8 barras', price: '$9.900' },
          { size: '16 barras', price: '$19.500' },
        ],
        image: 'https://images.unsplash.com/photo-1622329971360-63ce71d10e8d?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    name: 'Pasta de Maní',
    products: [
      {
        id: 7,
        name: 'Pasta de Maní Clásica',
        description: 'Pasta de maní pura y natural, 400 gramos.',
        prices: [
          { size: '400g', price: '$4.500' },
        ],
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    name: 'Avena, Harinas y Semillas',
    products: [
      {
        id: 8,
        name: 'Avena Instantánea',
        description: 'Avena precocida para un desayuno rápido y nutritivo.',
        prices: [
          { size: '1 kg', price: '$3.800' },
        ],
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 9,
        name: 'Mix de Semillas',
        description: 'Combinación de chía, lino, girasol y sésamo.',
        prices: [
          { size: '1 kg', price: '$5.000' },
        ],
        image: 'https://images.unsplash.com/photo-1544833316-600371a7428f?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
];

export default function Products() {
  const addItem = useCartStore((state) => state.addItem);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAdd = (product: any, priceOption: any) => {
    const itemKey = `${product.id}-${priceOption.size}`;
    addItem({
      id: product.id,
      name: product.name,
      size: priceOption.size,
      price: priceOption.price,
      image: product.image
    });

    setAddedItems((prev) => [...prev, itemKey]);
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== itemKey));
    }, 2000);
  };

  return (
    <div id="productos" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-green tracking-wide uppercase">Catálogo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-brown sm:text-4xl">
            Nuestros Productos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-stone-500 mx-auto">
            Calidad premium en cada selección. Precios actualizados por cantidad.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-20">
            <h3 className="text-2xl font-bold text-brand-brown border-b-2 border-brand-cream pb-2 mb-8 inline-block">
              {category.name}
            </h3>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-lg font-bold text-brand-brown">{product.name}</h4>
                    <p className="mt-2 text-sm text-stone-500 line-clamp-2">{product.description}</p>

                    <div className="mt-6 space-y-3">
                      {product.prices.map((priceOption, index) => {
                        const isAdded = addedItems.includes(`${product.id}-${priceOption.size}`);

                        return (
                          <div key={index} className="flex items-center justify-between bg-brand-light/50 p-3 rounded-xl border border-stone-50 group/price hover:bg-brand-cream/20 transition-colors">
                            <span className="text-sm font-medium text-stone-600">{priceOption.size}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-extrabold text-brand-green">{priceOption.price}</span>
                              <button
                                onClick={() => handleAdd(product, priceOption)}
                                disabled={isAdded}
                                className={`p-2 rounded-full transition-all transform hover:scale-110 active:scale-95 flex items-center gap-1 group/btn relative overflow-hidden ${isAdded
                                  ? 'bg-brand-brown text-white'
                                  : 'bg-brand-green text-white hover:bg-[#467326]'
                                  }`}
                                aria-label="Agregar al carrito"
                              >
                                <AnimatePresence mode="wait">
                                  {isAdded ? (
                                    <motion.div
                                      key="check"
                                      initial={{ y: 20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -20, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="flex items-center gap-1"
                                    >
                                      <Check className="h-4 w-4" />
                                      <span className="text-xs font-bold pr-1">¡Listo!</span>
                                    </motion.div>
                                  ) : (
                                    <motion.div
                                      key="plus"
                                      initial={{ y: 20, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      exit={{ y: -20, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="flex items-center gap-1"
                                    >
                                      <Plus className="h-4 w-4" />
                                      <ShoppingCart className="h-4 w-4" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
