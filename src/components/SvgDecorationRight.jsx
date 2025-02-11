import React from 'react';

const SvgDecorationRight = () => (
    <svg
      className="absolute top-[600px] right-0 w-96 h-96 pointer-events-none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5fafff" />
          <stop offset="100%" stopColor="#9376ef" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradientRight)"
        d="M100,20 Q140,40,160,100 Q140,160,100,180 Q60,160,40,100 Q60,40,100,20Z"
      />
    </svg>
  );

export default SvgDecorationRight;