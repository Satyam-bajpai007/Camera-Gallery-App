// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`p-4 rounded-lg shadow-lg bg-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;