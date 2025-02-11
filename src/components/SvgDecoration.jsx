import React from 'react';

const SvgDecoration = () => (
  <svg
    className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#9013FE" />
      </linearGradient>
    </defs>
    <path
      fill="url(#blobGradient)"
      d="M60.1,-50.1C72.8,-35.4,72.3,-12.6,66.3,8.6C60.3,29.8,48.8,47,34.2,57.7C19.5,68.4,1.8,72.7,-15.7,74.1C-33.2,75.6,-49.6,74.1,-60.3,62.3C-71,50.6,-76,28.6,-73.4,9.8C-70.9,-8.9,-60.9,-22.5,-50.2,-36.8C-39.6,-51.1,-28.4,-66.2,-13.8,-73.5C0.8,-80.8,19.1,-80,60.1,-50.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

export default SvgDecoration;
