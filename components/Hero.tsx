import React from 'react';
import { Button } from './Button';
import { ArrowRight, Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToOpportunity = () => {
    document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-sand to-green-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-brand-green px-4 py-1.5 rounded-full text-sm font-medium">
              <Leaf size={16} />
              <span>Natural & Funcional</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-green leading-tight">
              Bienestar que se siente. <br/>
              <span className="text-brand-earth">Oportunidad que transforma.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Tres blends funcionales con yerba mate para mejorar tu energía, digestión y control de peso… y una oportunidad real de construir ingresos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToProducts} className="flex items-center justify-center gap-2">
                Quiero probarlos
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" onClick={scrollToOpportunity}>
                Quiero ser embajador/a
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-sage/20 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-all duration-500 blur-lg"></div>
            <img 
              src="https://i.postimg.cc/28R8hW9D/20251208-2231-Herbal-Tea-Serenity-simple-compose-01kbzxxvg2ekvs5erbmm415gr6.png" 
              alt="Momentos de bienestar con té" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px] transform transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};