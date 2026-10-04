'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ variant = 'dark', size = 'md', showText = true }: LogoProps) {
  // Dimension mappings
  const imgSize = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const subTextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px]';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Logo Graphic Container with Starry Border */}
      <div
        className={`relative rounded-xl overflow-hidden shadow-md flex-shrink-0 group-hover:scale-105 transition duration-300 border ${
          variant === 'light'
            ? 'border-gray-200 bg-[#070d1e]'
            : 'border-[#e5b958]/30 bg-[#070d1e] shadow-[#070d1e]/50'
        }`}
        style={{ width: imgSize, height: imgSize }}
      >
        {/* We use both Next.js Image with /fond/logo.jpg and fallback */}
        <img
          src="/fond/logo.jpg"
          onError={(e) => {
            // Fallback for local development or alternative root hosting
            if (e.currentTarget.src.indexOf('/fond/logo.jpg') !== -1) {
              e.currentTarget.src = '/logo.jpg';
            }
          }}
          alt="Project Sky Logo"
          className="w-full h-full object-cover"
        />
        {/* Subtle celestial sparkle overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none"></div>
      </div>

      {showText && (
        <div className="flex flex-col select-none">
          {/* Main Logo Title "SKY" */}
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif font-bold tracking-[0.18em] leading-none uppercase ${textSize} ${
                variant === 'light' ? 'text-dark-blue' : 'text-white'
              }`}
            >
              S<span className="relative inline-block">K<span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#e5b958] rounded-full"></span></span>Y
            </span>
            <span className="text-[#e5b958] text-xs font-serif animate-pulse">✦</span>
          </div>

          {/* Subtitle "SUPPORTING KIDS & YOUTH" */}
          <span
            className={`uppercase tracking-[0.22em] font-medium leading-tight mt-1 ${subTextSize} ${
              variant === 'light' ? 'text-gray-500' : 'text-[#f3c68f]/80'
            }`}
          >
            Supporting Kids & Youth
          </span>
        </div>
      )}
    </Link>
  );
}
