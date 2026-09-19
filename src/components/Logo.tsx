import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark-only';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'light',
  size = 'md',
}) => {
  const markDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  const subtitleSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-xs',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Vector Emblem of Balanced Books */}
      <div className={`relative shrink-0 ${markDimensions}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circular green ring */}
          <circle
            cx="100"
            cy="100"
            r="94"
            stroke="#36A333"
            strokeWidth="7.5"
            fill="#FFFFFF"
          />

          {/* Inner dynamic deep teal crescent arc */}
          <path
            d="M 28 100 A 72 72 0 1 1 172 100 A 72 72 0 0 1 28 100"
            stroke="#05596A"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />

          {/* Three stylized book pages / leaves */}
          {/* Left Page: Neutral Gray */}
          <path
            d="M 86 158 C 84 150 72 110 56 70 C 65 35 73 34 76 40 C 85 65 97 105 102 124 C 98 140 92 153 86 158 Z"
            fill="#7F8485"
          />

          {/* Center Page: Deep Teal */}
          <path
            d="M 92 154 C 95 142 104 100 95 62 C 92 48 94 36 100 32 C 104 40 109 52 114 74 C 122 108 128 122 121 138 C 111 146 99 152 92 154 Z"
            fill="#05596A"
          />

          {/* Right Page: Fresh Brand Green */}
          <path
            d="M 106 150 C 112 144 122 128 125 116 C 132 88 126 62 120 48 C 124 39 127 36 130 36 C 134 46 142 66 145 92 C 148 116 142 134 135 142 C 126 147 114 150 106 150 Z"
            fill="#36A333"
          />
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5 font-extrabold tracking-tight">
            <span
              className={`${titleSizes} ${
                theme === 'dark' ? 'text-white' : 'text-[#05596A]'
              } font-['Manrope']`}
            >
              BALANCED
            </span>
            <span
              className={`${titleSizes} text-[#36A333] font-['Manrope'] font-bold`}
            >
              BOOKS
            </span>
          </div>
          <span
            className={`${subtitleSizes} font-medium tracking-wider uppercase mt-1 ${
              theme === 'dark' ? 'text-gray-300' : 'text-[#7F8485]'
            }`}
          >
            Financial Operations
          </span>
        </div>
      )}
    </div>
  );
};
