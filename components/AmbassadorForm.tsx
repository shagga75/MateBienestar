import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, Loader2 } from 'lucide-react';

interface AmbassadorFormProps {
  onCancel: () => void;
}

export const AmbassadorForm: React.FC<AmbassadorFormProps> = ({ onCancel }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Solicitud Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Gracias por tu interés en unirte al equipo. Hemos recibido tus datos y nos pondremos en contacto contigo vía WhatsApp en breve.
        </p>
        <Button onClick={onCancel} fullWidth>
          Volver al sitio
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
        <input 
          type="text" 
          id="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
          placeholder="Ej: María García"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input 
          type="email" 
          id="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
          placeholder="ejemplo@correo.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
        <input 
          type="tel" 
          id="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
          placeholder="+54 9 11..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">País</label>
          <input 
            type="text" 
            id="country"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
            placeholder="Tu país"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
          <input 
            type="text" 
            id="city"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
            placeholder="Tu ciudad"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿Por qué te gustaría unirte? (Opcional)</label>
        <textarea 
          id="message"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
          placeholder="Cuéntanos brevemente tus objetivos..."
        />
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          fullWidth 
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Enviando...
            </>
          ) : (
            'Enviar Solicitud'
          )}
        </Button>
      </div>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        Tus datos están seguros y serán utilizados únicamente para contactarte sobre esta oportunidad.
      </p>
    </form>
  );
};