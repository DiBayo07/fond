'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ variant = 'light', size = 'md', showText = true }: LogoProps) {
  const imgSize = size === 'sm' ? 38 : size === 'lg' ? 56 : 46;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subTextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Brand Logo Image (Matching the official SKY artwork) */}
      <div
        className={`relative rounded-xl overflow-hidden shadow-sm flex-shrink-0 group-hover:scale-105 transition duration-300 border ${
          variant === 'dark'
            ? 'border-white/20 bg-[#070d1e] shadow-md'
            : 'border-gray-200 bg-[#070d1e]'
        }`}
        style={{ width: imgSize, height: imgSize }}
      >
        <img
          src="/fond/logo.jpg"
          onError={(e) => {
            if (e.currentTarget.src.indexOf('/fond/logo.jpg') !== -1) {
              e.currentTarget.src = '/logo.jpg';
            }
          }}
          alt="SKY — Supporting Kids & Youth"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col select-none">
          {/* Main Logo Title "SKY" with underline under K */}
          <div className="flex items-center">
            <span
              className={`font-serif font-bold tracking-[0.16em] leading-none uppercase ${textSize} ${
                variant === 'dark' ? 'text-white' : 'text-[#0e387a]'
              }`}
            >
              S<span className="relative inline-block">K<span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#f26a21] rounded-full"></span></span>Y
            </span>
          </div>

          {/* Subtitle "SUPPORTING KIDS & YOUTH" */}
          <span
            className={`uppercase tracking-[0.22em] font-semibold leading-tight mt-1 ${subTextSize} ${
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


