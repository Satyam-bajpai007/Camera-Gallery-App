// ImageViewer.jsx
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageViewer = ({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrevious 
}) => {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      {currentIndex > 0 && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-full"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}
      
      {currentIndex < images.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-full"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      {/* Main image */}
      <img
        src={images[currentIndex]}
        alt="Full size preview"
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
    </div>
  );
};

export default ImageViewer;