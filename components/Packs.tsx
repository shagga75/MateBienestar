import React from 'react';
import { Package } from 'lucide-react';

export const Packs: React.FC = () => {
  const packs = [
    {
      title: "Pack Esencial",
      items: ["Vital Energy", "Digest & Detox"],
      desc: "Lo básico para sentirte ligero y con energía todo el día.",
      color: "border-brand-sage",
      bg: "bg-white"
    },
    {
      title: "Pack Transformación",
      items: ["Lean Balance", "Vital Energy", "Digest & Detox"],
      desc: "El sistema completo para resultados máximos.",
      highlight: true,
      color: "border-brand-green",
      bg: "bg-brand-green text-white"
    },
    {
      title: "Pack Embajador",
      items: ["Stock Estratégico para Inicio"],
      desc: "Ideal para empezar a consumir, vender y generar testimonios rápidos.",
      color: "border-brand-earth",
      bg: "bg-white"
    }
  ];

  return (
    <section className="py-20 bg-brand-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-green mb-4">
            Programas diseñados para sentirse mejor y compartir
          </h2>
          <div className="w-20 h-1 bg-brand-earth mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packs.map((pack, idx) => (
            <div 
              key={idx}
              className={`relative rounded-2xl p-8 shadow-lg transition-transform hover:-translate-y-1 ${pack.bg} ${pack.highlight ? 'ring-4 ring-green-200 shadow-xl scale-105 md:scale-110 z-10' : ''}`}
            >
               {pack.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-earth text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              
              <div className="flex justify-center mb-4">
                <Package className={`w-12 h-12 ${pack.highlight ? 'text-green-100' : 'text-brand-green'}`} />
              </div>

              <h3 className={`text-2xl font-bold text-center mb-2 ${pack.highlight ? 'text-white' : 'text-gray-800'}`}>
                {pack.title}
              </h3>
              
              <p className={`text-center text-sm mb-6 ${pack.highlight ? 'text-green-50' : 'text-gray-500'}`}>
                {pack.desc}
              </p>

              <div className={`border-t pt-6 ${pack.highlight ? 'border-green-600' : 'border-gray-100'}`}>
                <ul className="space-y-2">
                  {pack.items.map((item, i) => (
                    <li key={i} className="text-center font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};