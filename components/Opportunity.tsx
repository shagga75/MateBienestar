import React from 'react';
import { Button } from './Button';
import { TrendingUp, Users, Repeat, Award } from 'lucide-react';

interface OpportunityProps {
  onOpenAmbassadorModal: () => void;
}

export const Opportunity: React.FC<OpportunityProps> = ({ onOpenAmbassadorModal }) => {
  const benefits = [
    {
      icon: <Repeat className="w-8 h-8 text-brand-green" />,
      title: "Consumo Diario",
      text: "Productos que se acaban y se reponen. Clientes recurrentes mes a mes."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-green" />,
      title: "Resultados Reales",
      text: "El bienestar se siente. Los testimonios se generan solos de forma natural."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Comunidad",
      text: "No estás solo. Crecimiento acompañado por mentores y un sistema probado."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-green" />,
      title: "Duplicable",
      text: "Fácil de explicar, fácil de compartir. Un modelo simple para todos."
    }
  ];

  return (
    <section id="opportunity" className="py-24 bg-brand-green relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Tu bienestar puede convertirse en tu negocio.
            </h2>
            <p className="text-lg text-green-100 max-w-xl">
              Únete a un movimiento que combina salud natural con libertad financiera. Conviértete en embajador/a y construye un futuro a tu medida.
            </p>
            <div className="pt-4">
               <Button 
                onClick={onOpenAmbassadorModal}
                className="bg-white text-brand-green hover:bg-green-50 shadow-xl px-10 py-4 text-lg"
               >
                 Quiero ser Embajador/a
               </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="bg-white p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};