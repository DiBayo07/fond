'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ variant = 'light', size = 'md', showText = true }: LogoProps) {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 52 : 42;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subTextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Drop Colors Circle Badge matching the reference design */}
      <div
        className={`relative rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 border ${
          variant === 'dark'
            ? 'border-white/20 bg-white/10 shadow-md'
            : 'border-gray-200 bg-white shadow-xs'
        }`}
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[72%] h-[72%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke={variant === 'dark' ? '#ffffff' : '#0e387a'}
            strokeWidth="5"
            strokeOpacity={variant === 'dark' ? 0.35 : 0.85}
          />
          {/* Left half of droplet: Royal blue */}
          <path
            d="M50 18 C50 18 24 45 24 62 C24 76.36 35.64 88 50 88 Z"
            fill="#0e387a"
          />
          {/* Right half of droplet: Vibrant orange */}
          <path
            d="M50 18 C50 18 76 45 76 62 C76 76.36 64.36 88 50 88 Z"
            fill="#f26a21"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col select-none">
          {/* Brand Name */}
          <div className="flex items-center">
            <span
              className={`font-serif font-bold tracking-tight leading-none ${textSize} ${
                variant === 'dark' ? 'text-white' : 'text-dark-blue'
              }`}
            >
              Project <span className="text-[#f26a21]">Sky</span>
            </span>
          </div>

          {/* Subtitle */}
          <span
            className={`uppercase tracking-[0.2em] font-bold leading-tight mt-1 ${subTextSize} ${
              variant === 'dark' ? 'text-gray-300' : 'text-gray-500'
            }`}
          >
            Supporting Kids & Youth
          </span>
        </div>
      )}
    </Link>
  );
}

