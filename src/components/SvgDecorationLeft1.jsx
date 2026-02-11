import React from 'react';

const SvgDecorationLeftBottom = () => (
  <svg
    className="absolute bottom-[-120px] left-[-70px] h-[360px] w-[360px] opacity-45 blur-[2px]"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gradientLeftBottom" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2e68d4" />
        <stop offset="100%" stopColor="#0d3f7b" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradientLeftBottom)"
      d="M40,-60C55,-50,70,-40,75,-25C80,-10,75,10,65,30C55,50,40,70,20,75C0,80,-20,70,-35,55C-50,40,-60,20,-65,0C-70,-20,-70,-40,-55,-55C-40,-70,-20,-80,0,-80C20,-80,40,-70,40,-60Z"
      transform="translate(100 100)"
    />
  </svg>
);

export default SvgDecorationLeftBottom;
