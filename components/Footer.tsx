import React from 'react';
import { Leaf, Instagram, Facebook, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-brand-green text-white py-12 border-t border-green-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Leaf className="text-green-300" />
            <span className="font-bold text-xl tracking-tight">Mate Bienestar</span>
          </div>

          <div className="text-sm text-green-200 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Mate Bienestar. Todos los derechos reservados.</p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
              <span>Distribuidor Independiente Autorizado.</span>
              <button 
                onClick={onOpenAdmin}
                className="text-green-800 hover:text-green-600 transition-colors p-1"
                title="Acceso Administrativo"
              >
                <Lock size={12} />
              </button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-300 transition-colors"><Facebook size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};