import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pb-0">
          <button 
            onClick={onClose}
            className="p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="px-6 pb-8 pt-2">
          {title && (
            <h3 className="text-2xl font-bold text-brand-green mb-6 text-center">
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};