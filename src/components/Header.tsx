'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Sparkles } from 'lucide-react';
import { useLanguage, Language } from '@/context/LanguageContext';
import Logo from '@/components/Logo';

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
    <header className="sticky top-0 z-50 w-full bg-[#070d1e]/95 backdrop-blur-md border-b border-[#e5b958]/20 shadow-lg shadow-[#070d1e]/40 transition-all text-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        {/* Brand Logo with exact starry styling */}
        <Logo variant="dark" size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-[12px] font-bold tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition pb-1 border-b-2 flex items-center gap-1 ${
                isActive(link.href)
                  ? 'text-[#e5b958] border-[#e5b958] font-black'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-[#e5b958]/60'
              }`}
            >
              <span>{link.label}</span>
              {isActive(link.href) && <span className="text-[10px] text-[#e5b958]">✦</span>}
            </Link>
          ))}
        </nav>

        {/* Actions & Language Switcher */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {(['ru', 'kg', 'en'] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-gray-600">|</span>}
                <button
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`transition px-1.5 py-0.5 rounded cursor-pointer ${
                    language === lang
                      ? 'text-[#070d1e] font-extrabold bg-[#e5b958] shadow-xs'
                      : 'hover:text-white text-gray-300'
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
              className="bg-gradient-to-r from-accent via-accent to-[#e5b958] text-white px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:brightness-110 active:scale-95 transition shadow-md shadow-accent/20 flex items-center gap-1.5"
            >
              <Sparkles size={13} className="text-yellow-200" />
              <span>{t.navDonate}</span>
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-gray-200 px-4 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:border-[#e5b958] hover:text-[#e5b958] active:scale-95 transition bg-white/5"
            >
              {t.navContact}
            </Link>
            {/* Admin Panel Quick Link */}
            <Link
              href="/admin"
              title="Административная панель"
              className="p-2.5 rounded-lg text-gray-400 hover:text-[#e5b958] hover:bg-white/5 transition border border-white/10"
            >
              <Shield size={16} />
            </Link>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center space-x-1 text-[11px] font-bold text-gray-300 uppercase bg-white/10 px-2 py-1 rounded-md border border-white/10">
            {(['ru', 'kg', 'en'] as Language[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-gray-600">|</span>}
                <button
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-1 ${language === lang ? 'text-[#e5b958] font-extrabold' : 'text-gray-400'}`}
                >
                  {lang.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d1e] border-b border-[#e5b958]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 text-white">
          <nav className="flex flex-col space-y-4 mb-6 text-sm font-bold tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-white/5 flex items-center justify-between ${
                  isActive(link.href) ? 'text-[#e5b958]' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="text-xs text-[#e5b958]">✦</span>}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-gray-300"
            >
              {t.navContact}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-sky-blue flex items-center gap-2"
            >
              <Shield size={16} />
              <span>Админ-панель</span>
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-accent to-[#e5b958] text-white text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5"
            >
              <Sparkles size={14} />
              <span>{t.navDonate}</span>
            </Link>
            <Link
              href="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white/10 border border-white/20 text-white text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition"
            >
              {t.heroVolunteerBtn}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
