// src/components/layout/AppLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
    <Navbar />
    <main className="container mx-auto p-2 md:p-4 h-[calc(100vh-8rem)]">
      <div className="h-full bg-gray-800/30 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default AppLayout;