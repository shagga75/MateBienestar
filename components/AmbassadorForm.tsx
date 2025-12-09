import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { leadService } from '../services/leadService';

interface AmbassadorFormProps {
  onCancel: () => void;
}

export const AmbassadorForm: React.FC<AmbassadorFormProps> = ({ onCancel }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await leadService.createLead(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', country: '', city: '', message: '' });
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Solicitud Recibida!</h3>
        <p className="text-gray-600 mb-6">
          Tus datos han sido guardados en nuestro sistema. Nos pondremos en contacto contigo en breve.
        </p>
        <Button onClick={onCancel} fullWidth>
          Volver al sitio
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
        <input 
          type="text" 
          id="name"
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.phone}
          onChange={handleChange}
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
            value={formData.country}
            onChange={handleChange}
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
            value={formData.city}
            onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
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
        Tus datos se guardarán de forma segura en nuestro sistema.
      </p>
    </form>
  );
};