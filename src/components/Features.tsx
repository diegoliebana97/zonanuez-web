import { ShieldCheck, Truck, Leaf, Heart } from 'lucide-react';

const features = [
  {
    name: 'Calidad Premium',
    description: 'Seleccionamos cada fruto seco para asegurar que recibas solo lo mejor.',
    icon: ShieldCheck,
  },
  {
    name: 'Envío Rápido',
    description: 'Entregamos tus pedidos directamente a tu puerta en tiempo récord.',
    icon: Truck,
  },
  {
    name: '100% Natural',
    description: 'Sin conservantes ni añadidos artificiales. Puro sabor natural.',
    icon: Leaf,
  },
  {
    name: 'Salud y Bienestar',
    description: 'Ricos en grasas saludables, proteínas y vitaminas esenciales.',
    icon: Heart,
  },
];

export default function Features() {
  return (
    <div id="beneficios" className="py-16 bg-brand-light overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-brand-brown sm:text-4xl">
            ¿Por qué elegir Zona Nuez?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-stone-500">
            Nos apasiona ofrecerte productos que no solo sean deliciosos, sino que también aporten a tu salud diaria.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-brand-brown tracking-tight sm:text-3xl">
              Del campo a tu mesa
            </h3>
            <p className="mt-3 text-lg text-stone-500">
              Trabajamos con productores locales para garantizar que cada nuez, almendra y semilla conserve su frescura y propiedades nutricionales intactas.
            </p>

            <dl className="mt-10 space-y-10">
              {features.map((item) => (
                <div key={item.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-green text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-brand-brown">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-stone-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto rounded-2xl shadow-xl border-4 border-brand-cream"
              width={490}
              src="https://images.unsplash.com/photo-1560594030-41f72a9fb96f?auto=format&fit=crop&q=80&w=800"
              alt="Árbol de nueces"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
