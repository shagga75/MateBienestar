import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Packs } from './components/Packs';
import { Opportunity } from './components/Opportunity';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { AmbassadorForm } from './components/AmbassadorForm';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-brand-sand">
      <Navbar onOpenAmbassadorModal={openModal} />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Packs />
        <Opportunity onOpenAmbassadorModal={openModal} />
        <Testimonials />
        <FinalCTA onOpenAmbassadorModal={openModal} />
      </main>
      <Footer />

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Únete al Equipo"
      >
        <AmbassadorForm onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default App;