'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Cloud, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: '/', label: t.navHome },
    { href: '/about', label: t.navAbout },
    { href: '/homes', label: t.navHomes },
    { href: '/volunteer', label: t.navVolunteer },
    { href: '/reports', label: t.navReports },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl overflow-hidden shadow-xs border border-gray-200 flex-shrink-0 group-hover:scale-105 transition bg-[#0b132b]">
            <Image
              src="/logo.jpg"
              alt="Project Sky Logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-dark-blue tracking-wider leading-none uppercase font-serif">
              SKY
            </span>
            <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-semibold">
              Supporting Kids & Youth
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-[12px] font-bold tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition pb-1 border-b-2 ${
                isActive(link.href)
                  ? 'text-sky-blue border-sky-blue'
                  : 'text-dark-blue border-transparent hover:text-accent hover:border-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
            {(['ru', 'kg', 'en'] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-gray-300">|</span>}
                <button
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`transition px-1 py-0.5 rounded cursor-pointer ${
                    language === lang
                      ? 'text-dark-blue font-extrabold bg-white shadow-xs'
                      : 'hover:text-dark-blue text-gray-400'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/donate"
              className="bg-accent text-white px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-orange-600 active:scale-95 transition shadow-sm"
            >
              {t.navDonate}
            </Link>
            <Link
              href="/contact"
              className="border border-gray-200 text-dark-blue px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:border-gray-400 active:scale-95 transition"
            >
              {t.navContact}
            </Link>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center space-x-1 text-[11px] font-bold text-gray-400 uppercase bg-gray-100 px-2 py-1 rounded-md">
            {(['ru', 'kg', 'en'] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-gray-300">|</span>}
                <button
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-1 ${language === lang ? 'text-dark-blue font-extrabold' : 'text-gray-400'}`}
                >
                  {lang.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-dark-blue hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4 mb-6 text-sm font-bold tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-50 flex items-center justify-between ${
                  isActive(link.href) ? 'text-sky-blue' : 'text-dark-blue'
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-sky-blue"></span>}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-50 text-dark-blue"
            >
              {t.navContact}
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-accent text-white text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              {t.navDonate}
            </Link>
            <Link
              href="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-green-btn text-white text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              {t.heroVolunteerBtn}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
