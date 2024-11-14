// src/components/layout/MainContent.jsx
import React from 'react';

const MainContent = ({ title, onViewToggle, isCameraView, children }) => (
  <div className="h-full flex flex-col">
    <div className="flex justify-between items-center p-3">
      <h1 className="text-lg font-bold text-white">{title}</h1>
      <button 
        onClick={onViewToggle} 
        className="bg-blue-500 text-white rounded px-3 py-1.5 text-sm"
      >
        {isCameraView ? 'View Gallery' : 'Back to Camera'}
      </button>
    </div>
    <div className="flex-1 min-h-0">
      {children}
    </div>
  </div>
);

export default MainContent;