// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import AppLayout from './components/layout/AppLayout';
import MainContent from './components/layout/MainContent';
import CameraComponent from './components/CameraComponent';
import GalleryComponent from './components/GalleryComponent';

const App = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeView, setActiveView] = useState('camera');

  useEffect(() => {
    if (activeView === 'camera') {
      initializeCamera();
    } else {
      // Stop the stream when switching to gallery
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
        if (videoRef.current) videoRef.current.srcObject = null;
      }
    }
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isFrontCamera, activeView]);

  const initializeCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      const constraints = {
        video: {
          facingMode: isFrontCamera ? 'user' : 'environment',
          zoom: true
        }
      };

      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        // Reset any previous transform when switching camera
        videoRef.current.style.transform = 'scale(1)';
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleCameraToggle = () => {
    // First stop the current stream
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
    setIsFrontCamera(!isFrontCamera);
  };

  const calculateDimensions = () => {
    const video = videoRef.current;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    
    let captureWidth, captureHeight;
    const [ratioWidth, ratioHeight] = aspectRatio.split(':').map(Number);
    
    if (ratioWidth / ratioHeight > videoWidth / videoHeight) {
      captureWidth = videoWidth;
      captureHeight = (videoWidth * ratioHeight) / ratioWidth;
    } else {
      captureHeight = videoHeight;
      captureWidth = (videoHeight * ratioWidth) / ratioHeight;
    }

    return { width: captureWidth, height: captureHeight };
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const dimensions = calculateDimensions();
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const sourceX = (video.videoWidth - (video.videoWidth / zoomLevel)) / 2;
    const sourceY = (video.videoHeight - (video.videoHeight / zoomLevel)) / 2;
    const sourceWidth = video.videoWidth / zoomLevel;
    const sourceHeight = video.videoHeight / zoomLevel;
    
    // Handle mirroring for front camera
    if (isFrontCamera) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    
    ctx.drawImage(
      video,
      sourceX, sourceY, sourceWidth, sourceHeight,
      0, 0, canvas.width, canvas.height
    );

    const imageData = {
      url: canvas.toDataURL('image/jpeg'),
      aspectRatio: aspectRatio,
      zoomLevel: zoomLevel,
      timestamp: Date.now()
    };

    setCapturedImages(prev => [...prev, imageData]);
  };

  const deleteImage = (index) => {
    setCapturedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleZoom = (direction) => {
    const newZoom = direction === 'in' ? zoomLevel + 0.1 : zoomLevel - 0.1;
    setZoomLevel(Math.max(1, Math.min(2, newZoom)));
  };

  return (
    <AppLayout>
      <MainContent
        title={activeView === 'camera' ? 'Camera View' : 'Gallery View'}
        onViewToggle={() => setActiveView(activeView === 'camera' ? 'gallery' : 'camera')}
        isCameraView={activeView === 'camera'}
      >
        {activeView === 'camera' ? (
          <CameraComponent
            videoRef={videoRef}
            isFrontCamera={isFrontCamera}
            aspectRatio={aspectRatio}
            zoomLevel={zoomLevel}
            onCaptureImage={captureImage}
            onToggleCamera={handleCameraToggle}
            onZoom={handleZoom}
            onAspectRatioChange={setAspectRatio}
          />
        ) : (
          <GalleryComponent 
            images={capturedImages.map(img => img.url)} 
            onDeleteImage={deleteImage} 
          />
        )}
      </MainContent>
    </AppLayout>
  );
};

export default App;