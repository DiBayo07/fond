'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0b132b] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-white/10 flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Project Sky Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider leading-none uppercase font-serif">SKY</span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest mt-1 font-medium">Supporting Kids & Youth</span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              {t.footerDesc}
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-sky-blue hover:text-white flex items-center justify-center transition text-gray-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://t.me/projectsky"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-sky-blue hover:text-white flex items-center justify-center transition text-gray-300"
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
              <a
                href="mailto:info@projectsky.kg"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-sky-blue hover:text-white flex items-center justify-center transition text-gray-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-blue mb-4">{t.footerLinksTitle}</h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-blue mb-4">{t.footerContactsTitle}</h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-sky-blue mt-0.5 flex-shrink-0" />
                <span>+996 777 123 456</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-sky-blue mt-0.5 flex-shrink-0" />
                <span>info@projectsky.kg</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-sky-blue mt-0.5 flex-shrink-0" />
                <span>Кыргызстан, г. Бишкек</span>
              </li>
              <li className="flex items-start gap-2.5">
                <InstagramIcon size={14} className="text-sky-blue mt-0.5 flex-shrink-0" />
                <span>@projectsky</span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-1">Project Sky</span>
              <h4 className="text-sm font-bold text-white mb-2">Каждый вклад имеет значение</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Помогите детям детских домов Кыргызстана получить лучшее будущее.
              </p>
            </div>
            <Link
              href="/donate"
              className="block w-full bg-accent text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition shadow-sm"
            >
              {t.navDonate}
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Project Sky. {t.footerRights}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition">Terms of Use</Link>
            <span>Bishkek, Kyrgyzstan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
