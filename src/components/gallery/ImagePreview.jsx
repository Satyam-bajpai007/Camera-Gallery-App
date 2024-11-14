// ImagePreview.jsx
import React from 'react';
import { Trash2, Maximize2 } from 'lucide-react';

const ImagePreview = ({ image, onDelete, onOpen }) => (
  <div className="relative overflow-hidden rounded-lg border border-gray-700">
    <img 
      src={image} 
      alt="Captured" 
      className="w-full h-full object-cover cursor-pointer"
      onClick={onOpen}
    />
    <div className="absolute inset-0 bg-black/20">
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
      >
        <Trash2 className="h-4 w-4 text-white" />
      </button>
      <button
        onClick={onOpen}
        className="absolute bottom-2 right-2 p-2 bg-gray-800/70 rounded-full hover:bg-gray-700/70 transition-colors"
      >
        <Maximize2 className="h-4 w-4 text-white" />
      </button>
    </div>
  </div>
);

export default ImagePreview;