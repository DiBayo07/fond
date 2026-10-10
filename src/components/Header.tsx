'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Phone, Mail, Send } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
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
    { href: '/contact', label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* 1. TOP BAR: Dark Blue Bar from Reference Mockup */}
      <div className="bg-[#0e387a] text-white text-[11px] font-medium py-2 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-5">
            <a
              href="tel:+996709809017"
              className="flex items-center gap-1.5 hover:text-orange-300 transition"
            >
              <Phone size={13} className="text-orange-400" />
              <span>+996 709 809 017</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href="mailto:info@projectsky.kg"
              className="hidden sm:flex items-center gap-1.5 hover:text-orange-300 transition"
            >
              <Mail size={13} className="text-orange-400" />
              <span>info@projectsky.kg</span>
            </a>
          </div>

          {/* Right: Social icons & Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2.5 text-white/80">
              <a
                href="https://wa.me/996709809017"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="WhatsApp"
              >
                <Phone size={13} />
              </a>
              <a
                href="https://t.me/projectsky"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Telegram"
              >
                <Send size={13} />
              </a>
              <a
                href="https://instagram.com/projectsky"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
            </div>

            <span className="hidden sm:inline text-white/30">|</span>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 font-bold text-[10px] tracking-wider uppercase">
              {(['ru', 'kg', 'en'] as Language[]).map((lang, idx) => (
                <React.Fragment key={lang}>
                  {idx > 0 && <span className="text-white/40">/</span>}
                  <button
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`transition px-1 py-0.5 rounded cursor-pointer ${
                      language === lang
                        ? 'text-white font-extrabold bg-[#f26a21] shadow-2xs'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Admin shortcut */}
            <Link
              href="/admin"
              title="Административная панель"
              className="text-white/60 hover:text-white transition pl-1"
            >
              <Shield size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV: Crisp White Bar with Orange Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[12px] font-bold tracking-wider uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-2 border-b-2 font-bold ${
                  isActive(link.href)
                    ? 'text-[#0e387a] border-[#0e387a]'
                    : 'text-gray-700 border-transparent hover:text-[#0e387a] hover:border-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Bold Orange Give Now Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/donate"
              className="bg-[#f26a21] hover:bg-[#d95813] text-white px-7 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              {t.navDonate}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              className="bg-[#f26a21] text-white px-3.5 py-2 rounded-md font-bold text-[11px] uppercase tracking-wider"
            >
              {t.navDonate}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 text-gray-900">
          <nav className="flex flex-col space-y-3 mb-6 text-sm font-bold tracking-wider uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-gray-100 flex items-center justify-between ${
                  isActive(link.href) ? 'text-[#0e387a]' : 'text-gray-700 hover:text-[#0e387a]'
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="text-[#f26a21]">●</span>}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 text-gray-500 flex items-center gap-2 text-xs normal-case"
            >
              <Shield size={15} />
              <span>Админ-панель</span>
            </Link>
          </nav>

          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full block bg-[#f26a21] hover:bg-[#d95813] text-white text-center py-3 rounded-md font-bold text-xs uppercase tracking-wider shadow-sm transition"
          >
            {t.navDonate}
          </Link>
        </div>
      )}
    </header>
  );
}

