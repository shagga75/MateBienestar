import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenAmbassadorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAmbassadorModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModalOpen = () => {
    setIsOpen(false);
    onOpenAmbassadorModal();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-2 text-brand-green font-bold text-xl cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Leaf size={24} className="text-brand-earth" />
            <span>Mate Bienestar</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('products')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Productos</button>
            <button onClick={() => scrollTo('opportunity')} className="text-gray-600 hover:text-brand-green font-medium transition-colors">Negocio</button>
            <Button variant="primary" onClick={handleModalOpen} className="text-sm px-5 py-2">
              Ser Embajador/a
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t">
          <button onClick={() => scrollTo('products')} className="text-lg font-medium text-gray-800">Productos</button>
          <button onClick={() => scrollTo('opportunity')} className="text-lg font-medium text-gray-800">Oportunidad</button>
          <Button fullWidth onClick={handleModalOpen}>
            Quiero ser Embajador/a
          </Button>
        </div>
      )}
    </nav>
  );
};