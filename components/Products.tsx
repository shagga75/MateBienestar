import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { Product } from '../types';

const productData: Product[] = [
  {
    id: 'lean-balance',
    title: 'Lean Balance',
    subtitle: 'Control de Peso',
    description: [
      'Blend con yerba mate, té verde, jengibre, menta, diente de león y naranja amarga.',
      'Apoya metabolismo, saciedad y depuración.',
      'Reduce hinchazón y mejora digestión.',
      'Ideal dentro de un plan equilibrado.'
    ],
    imageUrl: 'https://i.postimg.cc/6qHcJKmG/20251208-2223-Herbal-Tea-Blend-Display-simple-compose-01kbzxewmqf0p9nx1bvcw8q80n.png',
    cta: 'Quiero Lean Balance'
  },
  {
    id: 'vital-energy',
    title: 'Vital Energy',
    subtitle: 'Energía Natural',
    description: [
      'Energía limpia sin crash (efecto rebote).',
      'Yerba mate + té + ginseng + jengibre.',
      'Mejora concentración y productividad.',
      'Perfecto para iniciar el día o antes de entrenar.'
    ],
    imageUrl: 'https://i.postimg.cc/VLW1tVbJ/20251208-2226-Energizing-Herbal-Infusion-simple-compose-01kbzxk35yfj183jrkhcd8vg6y.png',
    cta: 'Quiero Vital Energy'
  },
  {
    id: 'digest-detox',
    title: 'Digest & Detox',
    subtitle: 'Digestión + Depuración',
    description: [
      'Yerba mate + menta + jengibre + diente de león.',
      'Reduce inflamación y sensación de pesadez.',
      'Apoya el funcionamiento de hígado y riñones.',
      'Ideal para consumir después de las comidas.'
    ],
    imageUrl: 'https://i.postimg.cc/Gp12RyYM/20251208-2228-Herbal-Detox-Tea-simple-compose-01kbzxqaprehwtzb90kbrtgtcc.png',
    cta: 'Quiero Digest & Detox'
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-green mb-4">
            Línea Mate Bienestar
          </h2>
          <p className="text-xl text-gray-600">
            Energía, digestión y control de peso en un mismo sistema. Los tres productos funcionan de manera individual o combinada, ofreciendo bienestar diario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div key={product.id} className="group bg-brand-sand/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                 <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-sm font-semibold tracking-wide text-brand-earth uppercase mb-1 block">
                    {product.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-brand-green">
                    {product.title}
                  </h3>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {product.description.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" fullWidth>
                  {product.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};