import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  withIcon = false,
  className = '',
  ...props 
}) => {
  // Increased radius to rounded-full for a friendlier, modern look
  // Added hover:-translate-y-0.5 for subtle lift effect
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 rounded-full hover:-translate-y-1 hover:shadow-lg";
  
  const variants = {
    primary: "border border-transparent text-white bg-zinc-900 hover:bg-zinc-800",
    secondary: "border border-transparent text-zinc-900 bg-zinc-200 hover:bg-zinc-300",
    outline: "border border-zinc-300 text-zinc-700 bg-transparent hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-900"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};