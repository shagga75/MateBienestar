import React from 'react';
import { Button } from './Button';

interface FinalCTAProps {
  onOpenAmbassadorModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAmbassadorModal }) => {
  return (
    <section className="py-24 bg-brand-sand text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-brand-green">
            ¿Listo para empezar tu cambio?
          </h2>
          <p className="text-lg text-gray-600">
            Ya sea que busques transformar tu salud o tus finanzas, el momento es ahora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              className="bg-brand-green text-white hover:bg-green-800 px-8 py-4 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quiero mis productos
            </Button>
            <Button 
              className="bg-brand-earth text-white hover:bg-[#7a5c4f] px-8 py-4 text-lg"
              onClick={onOpenAmbassadorModal}
            >
              Quiero unirme al equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};