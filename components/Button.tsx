import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-green-800",
    secondary: "bg-brand-earth text-white hover:bg-[#7a5c4f]",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};