// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = "default", size = "md", className = "" }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded";
  const variantStyles = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
  };
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    icon: "p-2",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;