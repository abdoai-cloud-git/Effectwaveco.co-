
import React from 'react';

interface LogoProps {
  className?: string;
  glow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", glow = false }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {glow && (
        <div className="absolute inset-0 blur-2xl opacity-40 bg-white rounded-full scale-150"></div>
      )}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#A0A0A0" />
            <stop offset="100%" stopColor="#606060" />
          </linearGradient>
          <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* The tilted lozenge shape */}
        <rect 
          x="35" 
          y="15" 
          width="30" 
          height="70" 
          rx="15" 
          fill="url(#silverGrad)" 
          transform="rotate(35 50 50)"
          filter="url(#logoShadow)"
        />
      </svg>
    </div>
  );
};

export default Logo;
