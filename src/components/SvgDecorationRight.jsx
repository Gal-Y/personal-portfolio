import React from 'react';

const SvgDecorationRight = () => (
  <svg
    className="absolute right-[-90px] top-[44%] h-[320px] w-[320px] opacity-45 blur-[1.5px]"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ca0ff" />
        <stop offset="100%" stopColor="#1b548f" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradientRight)"
      d="M100,20 Q140,40,160,100 Q140,160,100,180 Q60,160,40,100 Q60,40,100,20Z"
    />
  </svg>
);

export default SvgDecorationRight;
