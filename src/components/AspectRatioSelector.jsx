// src/components/AspectRatioSelector.jsx
import React from 'react';
import Button from './ui/Button';

const AspectRatioSelector = ({ aspectRatio, onAspectRatioChange }) => (
  <div className="flex justify-center space-x-3">
    {['16:9', '4:3', '1:1'].map((ratio) => (
      <Button
        key={ratio}
        onClick={() => onAspectRatioChange(ratio)}
        variant={aspectRatio === ratio ? 'default' : 'outline'}
      >
        {ratio}
      </Button>
    ))}
  </div>
);

export default AspectRatioSelector;
