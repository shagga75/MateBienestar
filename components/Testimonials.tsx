import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Carolina M.",
    role: "Cliente Verificada",
    focus: "Energía",
    text: "Dejé el café por Vital Energy y la diferencia es increíble. Tengo energía estable todo el día sin sentir ansiedad. ¡Es mi ritual de cada mañana!"
  },
  {
    name: "Javier R.",
    role: "Embajador",
    focus: "Peso",
    text: "Lean Balance fue el complemento perfecto para mi cambio de hábitos. Me siento menos hinchado y con más control de mi apetito. He bajado 4kg en un mes."
  },
  {
    name: "Sofía L.",
    role: "Mamá y Emprendedora",
    focus: "Digestión",
    text: "Digest & Detox me salvó. Sentía pesadez después de cada comida, y ahora mi digestión fluye perfecto. Además, recomendarlo me genera un ingreso extra."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Lo que dicen quienes ya lo probaron</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 text-brand-sage/20 w-10 h-10" />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <div className="mb-4 inline-block px-3 py-1 bg-green-50 text-brand-green text-xs font-semibold rounded-full uppercase tracking-wider">
                {t.focus}
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t pt-4 border-gray-100">
                <div className="w-10 h-10 bg-brand-earth/20 rounded-full flex items-center justify-center text-brand-earth font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};