// src/components/GalleryComponent.jsx
import React, { useState } from 'react';
import ImagePreview from './gallery/ImagePreview';
import ImageViewer from './gallery/ImageViewer';

const GalleryComponent = ({ images, onDeleteImage }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {images.map((image, index) => (
          <ImagePreview
            key={index}
            image={image}
            onDelete={() => onDeleteImage(index)}
            onOpen={() => setSelectedImageIndex(index)}
          />
        ))}
        {images.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-400">
            <p className="text-lg">No images captured yet</p>
            <p className="text-sm">Switch to camera view to start capturing</p>
          </div>
        )}
      </div>

      <ImageViewer
        images={images}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={() => setSelectedImageIndex(prev => Math.min(prev + 1, images.length - 1))}
        onPrevious={() => setSelectedImageIndex(prev => Math.max(prev - 1, 0))}
      />
    </div>
  );
};

export default GalleryComponent;