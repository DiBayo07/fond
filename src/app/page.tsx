'use client';

import React from 'react';
import Link from 'next/link';
import {
  Heart,
  BookOpen,
  Users,
  Package,
  GraduationCap,
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="bg-white pt-10 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-[48%] pr-0 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark-blue mb-2 tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-2xl text-sky-blue italic mb-6 font-serif tracking-wide">
              {t.heroSubtitle}
            </p>
            <p className="text-[13px] md:text-sm text-gray-600 mb-8 leading-relaxed max-w-md">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/donate"
                className="bg-accent text-white px-6 py-3 rounded-lg text-center font-bold text-[11px] uppercase tracking-wider hover:bg-orange-600 active:scale-95 transition shadow-sm"
              >
                {t.heroDonateBtn}
              </Link>
              <Link
                href="/volunteer"
                className="bg-green-btn text-white px-6 py-3 rounded-lg text-center font-bold text-[11px] uppercase tracking-wider hover:bg-opacity-90 active:scale-95 transition shadow-sm"
              >
                {t.heroVolunteerBtn}
              </Link>
              <Link
                href="/homes"
                className="border border-gray-200 text-gray-600 px-5 py-3 rounded-lg text-center font-bold text-[11px] uppercase tracking-wider hover:border-gray-400 hover:text-dark-blue active:scale-95 transition"
              >
                {t.heroWhoNeedsBtn}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[52%] relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] max-h-[420px] w-full border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                alt="Children holding hands in heart shape"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-dark-blue">Project Sky Kyrgyzstan</p>
                  <p className="text-gray-500 text-[11px]">Бишкек • Ош • Чуй • Нарын</p>
                </div>
                <span className="px-2.5 py-1 bg-sky-blue/20 text-sky-blue font-bold rounded-full text-[10px] uppercase">
                  Активные программы
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <div className="container mx-auto max-w-6xl px-4 relative z-20 -mt-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border border-gray-100">
          <FeatureItem
            icon={<Heart className="text-sky-blue w-6 h-6" />}
            title={t.featSupport}
            desc={t.featSupportDesc}
          />
          <FeatureItem
            icon={<BookOpen className="text-orange-400 w-6 h-6" />}
            title={t.featEdu}
            desc={t.featEduDesc}
          />
          <FeatureItem
            icon={<Users className="text-accent w-6 h-6" />}
            title={t.featVolunteer}
            desc={t.featVolunteerDesc}
          />
          <FeatureItem
            icon={<Package className="text-green-btn w-6 h-6" />}
            title={t.featFundraising}
            desc={t.featFundraisingDesc}
          />
          <FeatureItem
            icon={<GraduationCap className="text-sky-blue w-6 h-6" />}
            title={t.featEduSupport}
            desc={t.featEduSupportDesc}
          />
          <FeatureItem
            icon={<Globe className="text-orange-400 w-6 h-6" />}
            title={t.featCommunity}
            desc={t.featCommunityDesc}
          />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COL 1: Urgent Needs & Help (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-dark-blue">{t.urgentNeedsTitle}</h2>
                <Link
                  href="/homes"
                  className="text-[11px] text-gray-500 hover:text-sky-blue uppercase font-bold tracking-wider flex items-center gap-1"
                >
                  {t.viewAll}
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop"
                    alt="Детский дом Надежда"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    Срочно
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-dark-blue text-base mb-1">
                    Детский дом «Надежда»
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center mb-4">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-accent" /> Бишкек
                  </p>

                  <div className="flex items-start gap-1.5 mb-2.5">
                    <Activity className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs font-bold text-dark-blue">{t.urgentItem}</p>
                  </div>
                  <ul className="text-xs text-gray-600 list-disc pl-5 mb-6 space-y-1.5">
                    <li>школьные принадлежности (70% собрано)</li>
                    <li>средства гигиены (35% собрано)</li>
                    <li>теплая зимняя одежда (20% собрано)</li>
                  </ul>

                  <Link
                    href="/donate?home=nadezhda"
                    className="block w-full bg-accent text-white text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-orange-600 active:scale-95 transition shadow-sm"
                  >
                    {t.urgentNeedsHelpBtn}
                  </Link>
                </div>
              </div>
            </div>

            {/* How can I help CTA */}
            <div className="bg-[#eef3f1] p-6 rounded-2xl border border-[#dce7e2] mt-auto">
              <h3 className="text-base font-bold text-dark-blue mb-2">{t.howCanIHelpTitle}</h3>
              <p className="text-xs text-gray-600 mb-5 leading-relaxed">{t.howCanIHelpDesc}</p>
              <div className="flex gap-3">
                <Link
                  href="/donate"
                  className="bg-accent text-white px-4 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-orange-600 active:scale-95 transition flex-1 text-center shadow-xs"
                >
                  {t.heroDonateBtn}
                </Link>
                <Link
                  href="/volunteer"
                  className="bg-green-btn text-white px-4 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-opacity-90 active:scale-95 transition flex-1 text-center shadow-xs"
                >
                  {t.heroVolunteerBtn}
                </Link>
              </div>
            </div>
          </div>

          {/* COL 2: Our Impact & 4 Help Options (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold text-dark-blue mb-4">{t.ourImpactTitle}</h2>
              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center">
                  <Heart className="w-6 h-6 text-sky-blue mb-2" />
                  <p className="text-2xl font-bold text-dark-blue leading-none mb-1">1 250+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                    {t.statKids}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center">
                  <Users className="w-6 h-6 text-accent mb-2" />
                  <p className="text-2xl font-bold text-dark-blue leading-none mb-1">330+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                    {t.statVolunteers}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-2xl font-bold text-dark-blue leading-none mb-1">120+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                    {t.statEvents}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center">
                  <DollarSign className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-2xl font-bold text-dark-blue leading-none mb-1">2.45M+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-tight">
                    {t.statRaised}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Help blocks */}
            <div className="grid grid-cols-2 gap-3.5 mt-auto">
              <Link
                href="/donate"
                className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:border-accent hover:shadow-sm transition flex flex-col justify-between group"
              >
                <div>
                  <Heart className="w-5 h-5 text-accent mb-2 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-dark-blue text-xs mb-1 group-hover:text-accent">
                    {t.helpDonateMoney}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2">{t.helpDonateMoneyDesc}</p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:border-sky-blue hover:shadow-sm transition flex flex-col justify-between group"
              >
                <div>
                  <Package className="w-5 h-5 text-sky-blue mb-2 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-dark-blue text-xs mb-1 group-hover:text-sky-blue">
                    {t.helpDonateItems}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2">{t.helpDonateItemsDesc}</p>
                </div>
              </Link>

              <Link
                href="/volunteer"
                className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:border-green-btn hover:shadow-sm transition flex flex-col justify-between group"
              >
                <div>
                  <Users className="w-5 h-5 text-green-btn mb-2 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-dark-blue text-xs mb-1 group-hover:text-green-btn">
                    {t.helpVolunteer}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2">{t.helpVolunteerDesc}</p>
                </div>
              </Link>

              <Link
                href="/volunteer"
                className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 hover:border-orange-400 hover:shadow-sm transition flex flex-col justify-between group"
              >
                <div>
                  <BookOpen className="w-5 h-5 text-orange-400 mb-2 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-dark-blue text-xs mb-1 group-hover:text-orange-400">
                    {t.helpTeach}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2">{t.helpTeachDesc}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* COL 3: Recent Events & Transparency (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-dark-blue">{t.recentEventsTitle}</h2>
                <Link
                  href="/reports"
                  className="text-[11px] text-gray-500 hover:text-sky-blue uppercase font-bold tracking-wider flex items-center gap-1"
                >
                  {t.viewReports}
                </Link>
              </div>

              <div className="space-y-3.5">
                <EventCard
                  img="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=400&auto=format&fit=crop"
                  title="Передача школьных принадлежностей"
                  date="20 мая 2024"
                  desc="Передали канцелярские товары и ранцы детскому дому «Свет»."
                />
                <EventCard
                  img="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop"
                  title="Образовательное занятие по английскому"
                  date="15 мая 2024"
                  desc="Провели интерактивное занятие по английскому языку для детей из детского дома «Надежда»."
                />
                <EventCard
                  img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop"
                  title="Благотворительный сбор на гигиену"
                  date="10 мая 2024"
                  desc="Собрали и передали средства гигиены 3 детским учреждениям Бишкека."
                />
              </div>
            </div>

            {/* Transparency card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between mt-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-base font-bold text-dark-blue mb-2">{t.transparencyTitle}</h3>
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">{t.transparencyDesc}</p>
                <Link
                  href="/reports"
                  className="bg-green-btn text-white px-5 py-2.5 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:bg-opacity-90 active:scale-95 transition inline-block shadow-xs"
                >
                  {t.transparencyBtn}
                </Link>
              </div>
              <Heart className="absolute -bottom-8 -right-8 w-32 h-32 text-sky-blue/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col group">
      <div className="mb-3 group-hover:scale-110 transition duration-300">{icon}</div>
      <h4 className="font-bold text-dark-blue text-[12px] tracking-tight mb-1.5 leading-snug">
        {title}
      </h4>
      <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function EventCard({ img, title, date, desc }: { img: string; title: string; date: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100 flex items-center p-3 gap-3.5 hover:shadow-sm transition">
      <img src={img} alt={title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
      <div className="flex flex-col flex-grow">
        <span className="text-[10px] text-gray-400 font-medium mb-0.5">{date}</span>
        <h4 className="font-bold text-dark-blue text-xs mb-1 line-clamp-1 leading-snug">{title}</h4>
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
