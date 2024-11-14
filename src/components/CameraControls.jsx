// src/components/camera/CameraControls.jsx
import React from 'react';
import { Camera, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const CameraControls = ({ onCapture, onToggleCamera, onZoom }) => (
  <div className="absolute bottom-4 left-0 right-0 px-4">
    <div className="flex items-center justify-between max-w-sm mx-auto">
      {/* Left - Flip Camera */}
      <button 
        onClick={onToggleCamera}
        className="p-2.5 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 transition-all"
      >
        <RotateCcw className="h-5 w-5" />
      </button>

      {/* Center - Capture Button */}
      <button 
        onClick={onCapture}
        className="p-1 rounded-full bg-white border-4 border-gray-800/50 hover:bg-gray-200 transition-transform duration-200 hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
          <Camera className="h-6 w-6 text-gray-800" />
        </div>
      </button>

      {/* Right - Zoom Controls */}
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => onZoom('in')}
          className="p-2.5 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 transition-all"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button 
          onClick={() => onZoom('out')}
          className="p-2.5 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 transition-all"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default CameraControls;