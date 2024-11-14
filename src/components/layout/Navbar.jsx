// src/components/layout/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <span className="text-xl font-bold text-white">CaptureX</span>
      </div>
    </div>
  </nav>
);

export default Navbar;
