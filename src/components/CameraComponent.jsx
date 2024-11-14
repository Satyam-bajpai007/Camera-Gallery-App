// src/components/camera/CameraComponent.jsx
import React, { useState, useEffect } from 'react';
import CameraControls from './CameraControls';
import AspectRatioSelector from './AspectRatioSelector';

const CameraComponent = ({
  videoRef,
  isFrontCamera,
  aspectRatio,
  zoomLevel,
  onCaptureImage,
  onToggleCamera,
  onZoom,
  onAspectRatioChange
}) => {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
      onCaptureImage();
    }, 200);
  };

  useEffect(() => {
    if (videoRef.current) {
      const [ratioWidth, ratioHeight] = aspectRatio.split(':').map(Number);
      videoRef.current.style.transform = `${isFrontCamera ? 'scaleX(-1)' : 'scaleX(1)'} scale(${zoomLevel})`;
      videoRef.current.style.aspectRatio = `${ratioWidth}/${ratioHeight}`;
    }
  }, [zoomLevel, isFrontCamera, aspectRatio]);

  return (
    <div className="h-full flex flex-col">
      {/* Top controls */}
      <div className="p-2">
        <AspectRatioSelector aspectRatio={aspectRatio} onAspectRatioChange={onAspectRatioChange} />
      </div>
      
      {/* Camera view - Dynamic sizing based on viewport */}
      <div className="relative flex-1 flex items-center justify-center bg-black overflow-hidden">
        {isCapturing && (
          <div className="absolute inset-0 bg-white animate-flash z-10" />
        )}
        
        <div className="relative w-full h-full flex items-center justify-center">
          <div 
            className={`relative ${
              aspectRatio === '16:9' ? 'w-full max-h-[56.25vw]' :
              aspectRatio === '4:3' ? 'w-full max-h-[75vw]' :
              'w-full max-h-[100vw]'
            } max-w-2xl`}
            style={{ aspectRatio: aspectRatio.replace(':', '/') }}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Camera controls - Always visible */}
        <CameraControls
          onCapture={handleCapture}
          onToggleCamera={onToggleCamera}
          onZoom={onZoom}
          zoomLevel={zoomLevel}
        />
      </div>
    </div>
  );
};

export default CameraComponent;