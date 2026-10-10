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
    <footer className="bg-[#0e387a] text-white pt-14 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info with Logo */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="dark" size="md" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              {t.footerDesc}
            </p>
            <div className="flex items-center space-x-2.5">
              <a
                href="https://wa.me/996709809017"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f26a21] flex items-center justify-center transition text-white"
                aria-label="WhatsApp"
              >
                <Phone size={14} />
              </a>
              <a
                href="https://t.me/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f26a21] flex items-center justify-center transition text-white"
                aria-label="Telegram"
              >
                <Send size={14} />
              </a>
              <a
                href="https://instagram.com/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f26a21] flex items-center justify-center transition text-white"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="mailto:info@projectsky.kg"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f26a21] flex items-center justify-center transition text-white"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#f26a21] mb-4">
              {t.footerLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-200">
              <li><Link href="/" className="hover:text-white transition">{t.navHome}</Link></li>
              <li><Link href="/about" className="hover:text-white transition">{t.navAbout}</Link></li>
              <li><Link href="/homes" className="hover:text-white transition">{t.navHomes}</Link></li>
              <li><Link href="/volunteer" className="hover:text-white transition">{t.navVolunteer}</Link></li>
              <li><Link href="/reports" className="hover:text-white transition">{t.navReports}</Link></li>
              <li><Link href="/donate" className="hover:text-white transition">{t.navDonate}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#f26a21] mb-4">
              {t.footerContactsTitle}
            </h3>
            <ul className="space-y-3 text-xs text-gray-200">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-[#f26a21] mt-0.5 flex-shrink-0" />
                <a href="tel:+996709809017" className="hover:underline font-bold text-white transition">
                  +996 709 809 017
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#f26a21] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@projectsky.kg" className="hover:underline transition">
                  info@projectsky.kg
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#f26a21] mt-0.5 flex-shrink-0" />
                <span>Кыргызстан, г. Бишкек</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Send size={14} className="text-[#f26a21] mt-0.5 flex-shrink-0" />
                <span>Telegram / WhatsApp 24/7</span>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="bg-white/10 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#f26a21] tracking-wider block mb-1">
                Фонд Project Sky
              </span>
              <h4 className="text-sm font-bold text-white mb-2 font-serif">Каждый сом меняет жизнь</h4>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Помогите детям детских домов Кыргызстана получить необходимое и почувствовать заботу.
              </p>
            </div>
            <Link
              href="/donate"
              className="block w-full bg-[#f26a21] hover:bg-[#d95813] text-white text-center py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition shadow-sm"
            >
              {t.navDonate}
            </Link>
          </div>
        </div>

        {/* Bottom copyright & Admin Link */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-4">
          <p>© 2026 Project Sky. {t.footerRights}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition">Политика приватности</Link>
            <Link href="/terms" className="hover:text-white transition">Условия использования</Link>
            <Link href="/admin" className="text-gray-300 hover:text-white transition flex items-center gap-1 font-semibold">
              <Shield size={12} />
              <span>Админ-панель</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

