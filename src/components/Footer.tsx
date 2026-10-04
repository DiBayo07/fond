'use client';

import React from 'react';
import Link from 'next/link';
import { Send, Mail, MapPin, Phone, Shield } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#070d1e] text-white pt-16 pb-8 border-t border-[#e5b958]/20 relative overflow-hidden">
      {/* Subtle celestial stars background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5b958_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info with Logo */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="dark" size="md" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              {t.footerDesc}
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#e5b958] hover:text-[#070d1e] flex items-center justify-center transition text-gray-300 border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://wa.me/996709809017"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#e5b958] hover:text-[#070d1e] flex items-center justify-center transition text-gray-300 border border-white/10"
                aria-label="WhatsApp"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://t.me/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#e5b958] hover:text-[#070d1e] flex items-center justify-center transition text-gray-300 border border-white/10"
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
              <a
                href="mailto:info@projectsky.kg"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#e5b958] hover:text-[#070d1e] flex items-center justify-center transition text-gray-300 border border-white/10"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e5b958] mb-4 flex items-center gap-1.5">
              <span>✦</span> {t.footerLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><Link href="/" className="hover:text-[#e5b958] transition">{t.navHome}</Link></li>
              <li><Link href="/about" className="hover:text-[#e5b958] transition">{t.navAbout}</Link></li>
              <li><Link href="/homes" className="hover:text-[#e5b958] transition">{t.navHomes}</Link></li>
              <li><Link href="/volunteer" className="hover:text-[#e5b958] transition">{t.navVolunteer}</Link></li>
              <li><Link href="/reports" className="hover:text-[#e5b958] transition">{t.navReports}</Link></li>
              <li><Link href="/donate" className="hover:text-[#e5b958] transition">{t.navDonate}</Link></li>
              <li><Link href="/contact" className="hover:text-[#e5b958] transition">{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Contacts with +996 709 809 017 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e5b958] mb-4 flex items-center gap-1.5">
              <span>✦</span> {t.footerContactsTitle}
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-[#e5b958] mt-0.5 flex-shrink-0" />
                <a href="tel:+996709809017" className="hover:text-[#e5b958] font-bold text-white transition">
                  +996 709 809 017
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#e5b958] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@projectsky.kg" className="hover:text-[#e5b958] transition">
                  info@projectsky.kg
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#e5b958] mt-0.5 flex-shrink-0" />
                <span>Кыргызстан, г. Бишкек</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Send size={14} className="text-[#e5b958] mt-0.5 flex-shrink-0" />
                <span>Telegram / WhatsApp онлайн</span>
              </li>
            </ul>
          </div>

          {/* Call to action & Official Card Info */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#e5b958] tracking-wider block mb-1">
                ✦ Project Sky
              </span>
              <h4 className="text-sm font-bold text-white mb-2 font-serif">Каждый вклад имеет значение</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Помогите детям детских домов Кыргызстана получить лучшее будущее.
              </p>
            </div>
            <Link
              href="/donate"
              className="block w-full bg-gradient-to-r from-accent to-[#e5b958] text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition shadow-md"
            >
              {t.navDonate}
            </Link>
          </div>
        </div>

        {/* Bottom copyright & Admin Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Project Sky. {t.footerRights}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-[#e5b958] transition">Политика приватности</Link>
            <Link href="/terms" className="hover:text-[#e5b958] transition">Условия использования</Link>
            <Link href="/admin" className="text-gray-400 hover:text-[#e5b958] transition flex items-center gap-1 font-semibold">
              <Shield size={12} />
              <span>Админ-панель</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
