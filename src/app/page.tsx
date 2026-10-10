'use client';

import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Hero slides data
  const heroSlides = [
    {
      title: 'Каждый вклад имеет значение: меняем жизнь детей к лучшему',
      subtitle:
        'Наша миссия — открывать новые возможности для детей и молодёжи Кыргызстана через образование, заботу и системную поддержку.',
      bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Образование и развитие для каждого воспитанника',
      subtitle:
        'Организуем регулярные мастер-классы, языковые курсы и профориентацию для подготовки ребят к самостоятельной жизни.',
      bg: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Системная помощь детским домам Кыргызстана',
      subtitle:
        'Обеспечиваем учреждения сезонной теплой одеждой, обувью, средствами гигиены и учебными принадлежностями.',
      bg: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  // 3 Featured Causes / Video Story Cards matching the mockup
  const causeCards = [
    {
      id: 'water',
      date: '2024/20/05',
      title: 'Сбор на чистую воду и базовые средства гигиены для детских домов',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      desc: 'Обеспечение воспитанников фильтрами для питьевой воды, зубными пастами, мылом и средствами индивидуальной гигиены.',
      goal: '85 000 сом',
      raised: '62 000 сом',
    },
    {
      id: 'clothes',
      date: '2024/18/05',
      title: 'Теплая зимняя одежда и обувь для 45 воспитанников детского дома',
      img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop',
      desc: 'Закупка качественных зимних курток, теплых ботинок и свитеров по индивидуальным размерам для детей детского дома «Надежда».',
      goal: '120 000 сом',
      raised: '78 500 сом',
    },
    {
      id: 'education',
      date: '2024/15/05',
      title: 'Школьные принадлежности, учебные наборы и книги к новому году',
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
      desc: 'Оснащение школьников рюкзаками, тетрадями, канцелярскими наборами и учебной литературой для успешного учебного процесса.',
      goal: '95 000 сом',
      raised: '81 000 сом',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* 1. HERO SECTION: Grayscale full-width photo with centered Serif headline */}
      <section className="relative min-h-[520px] md:min-h-[580px] flex items-center justify-center overflow-hidden bg-gray-950 text-white">
        {/* Grayscale background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[activeSlide].bg}
            alt="Children"
            className="w-full h-full object-cover img-documentary opacity-45 scale-100 transition-all duration-700"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5 leading-tight tracking-tight">
            {heroSlides[activeSlide].title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
            {heroSlides[activeSlide].subtitle}
          </p>

          {/* Action Buttons: Blue and Orange */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/volunteer"
              className="w-full sm:w-auto bg-[#0e387a] hover:bg-[#0a2a5e] text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              {t.heroVolunteerBtn}
            </Link>
            <Link
              href="/donate"
              className="w-full sm:w-auto bg-[#f26a21] hover:bg-[#d95813] text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              {t.heroDonateBtn}
            </Link>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  activeSlide === idx
                    ? 'w-7 h-2.5 bg-[#f26a21]'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURE / STORY CARDS ROW (Exact match to the mockup cards with arrows) */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl relative">
          {/* Arrow navigation buttons on the sides */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:text-[#0e387a] hover:border-[#0e387a] items-center justify-center transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:text-[#0e387a] hover:border-[#0e387a] items-center justify-center transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causeCards.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 bg-gray-900 cursor-pointer aspect-[16/10]"
                onClick={() => setActiveVideoModal(card.id)}
              >
                {/* Grayscale background image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover img-documentary group-hover:scale-105 transition-transform duration-500 opacity-80"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20"></div>

                {/* Central Play/Info Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-black/40 border border-white/60 flex items-center justify-center text-white backdrop-blur-xs group-hover:scale-110 group-hover:bg-[#f26a21] group-hover:border-[#f26a21] transition-all duration-300 shadow-md">
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Dark Banner with Date and Title */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[10px] uppercase font-bold text-gray-300 tracking-wider block mb-1">
                    {card.date}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP BLUE BANNER SECTION: ("We believe in a world where every single person has fun and study") */}
      <section className="bg-[#0e387a] text-white py-16 md:py-24 px-4 overflow-visible relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Vertical photo of children playing jumping rope, with white border and offset */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-lg overflow-hidden border-4 border-white shadow-2xl bg-white lg:-my-8 transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=900&auto=format&fit=crop"
                  alt="Happy kids playing"
                  className="w-full h-[380px] md:h-[440px] object-cover img-documentary"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs p-3 rounded text-white text-[11px] font-medium border border-white/10">
                  <span>✦ Программа поддержки детских домов Кыргызстана</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Headline & Text without fluff */}
            <div className="lg:col-span-7 lg:pl-6 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Мы верим в мир, где у каждого ребёнка есть возможность учиться и развиваться.
              </h2>

              <p className="text-sm md:text-base text-gray-100 mb-5 leading-relaxed font-normal">
                Благотворительный проект Project Sky работает системно и без посредников. Мы помогаем воспитанникам детских учреждений получать всё необходимое: от сезонной обуви и теплой одежды до компьютеров, учебных пособий и развивающих занятий.
              </p>

              <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed font-normal">
                Мы объединяем доноров, волонтеров и экспертов, чтобы дать детям уверенность в завтрашнем дне. 100% поступивших целевых пожертвований направляются на закупку помощи, а все чеки и акты публикуются в открытых отчетах.
              </p>

              <div>
                <Link
                  href="/about"
                  className="inline-block bg-[#f26a21] hover:bg-[#d95813] text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  УЗНАТЬ БОЛЬШЕ О НАС
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY IMPACT NUMBERS: Honest, transparent metrics ("Без воды") */}
      <section className="bg-white py-14 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl border border-gray-100 bg-[#f0f4fa]/40">
              <Heart className="w-7 h-7 text-[#0e387a] mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0e387a] mb-1">
                1 250+
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">
                {t.statKids}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-[#f0f4fa]/40">
              <Users className="w-7 h-7 text-[#f26a21] mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0e387a] mb-1">
                330+
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">
                {t.statVolunteers}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-[#f0f4fa]/40">
              <Calendar className="w-7 h-7 text-[#0e387a] mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0e387a] mb-1">
                120+
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">
                {t.statEvents}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 bg-[#f0f4fa]/40">
              <DollarSign className="w-7 h-7 text-[#f26a21] mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0e387a] mb-1">
                2.45M+
              </div>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">
                {t.statRaised}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL WAYS TO HELP: 4 Clear Actions */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e387a] mb-3">
              Как вы можете помочь
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Помощь не всегда измеряется деньгами. Выберите формат, который подходит именно вам.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/donate"
              className="p-6 rounded-xl border border-gray-200 hover:border-[#f26a21] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#f26a21] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-[#0e387a] text-base mb-2 group-hover:text-[#f26a21] transition">
                  {t.helpDonateMoney}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {t.helpDonateMoneyDesc} Любая сумма имеет значение.
                </p>
              </div>
              <span className="text-xs font-bold text-[#f26a21] flex items-center gap-1">
                Сделать взнос <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="p-6 rounded-xl border border-gray-200 hover:border-[#0e387a] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0e387a] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Package size={24} />
                </div>
                <h3 className="font-bold text-[#0e387a] text-base mb-2 group-hover:text-[#0e387a] transition">
                  {t.helpDonateItems}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {t.helpDonateItemsDesc}
                </p>
              </div>
              <span className="text-xs font-bold text-[#0e387a] flex items-center gap-1">
                Узнать пункты сбора <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              href="/volunteer"
              className="p-6 rounded-xl border border-gray-200 hover:border-[#0e387a] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0e387a] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Users size={24} />
                </div>
                <h3 className="font-bold text-[#0e387a] text-base mb-2 group-hover:text-[#0e387a] transition">
                  {t.helpVolunteer}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {t.helpVolunteerDesc}
                </p>
              </div>
              <span className="text-xs font-bold text-[#0e387a] flex items-center gap-1">
                Заполнить анкету <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              href="/volunteer"
              className="p-6 rounded-xl border border-gray-200 hover:border-[#f26a21] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#f26a21] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-[#0e387a] text-base mb-2 group-hover:text-[#f26a21] transition">
                  {t.helpTeach}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {t.helpTeachDesc}
                </p>
              </div>
              <span className="text-xs font-bold text-[#f26a21] flex items-center gap-1">
                Предложить урок <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. URGENT CAMPAIGNS & TRANSPARENCY SECTION */}
      <section className="bg-[#f0f4fa]/50 py-16 px-4 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Urgent Need Card (Span 7) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-[11px] font-bold rounded-full uppercase">
                  Срочный сбор
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin size={13} className="text-[#f26a21]" /> Бишкек
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0e387a] mb-2 font-serif">
                Детский дом «Надежда» — подготовка к холодному сезону
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                В учреждении проживают 45 детей в возрасте от 3 до 18 лет. Срочно необходимы теплые куртки, зимняя обувь и средства личной гигиены.
              </p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-[#0e387a]">Собрано: 78 500 сом (65%)</span>
                  <span className="text-gray-500">Цель: 120 000 сом</span>
                </div>
                <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#f26a21] h-full rounded-full transition-all duration-500"
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/donate?home=nadezhda"
                  className="bg-[#f26a21] hover:bg-[#d95813] text-white text-center py-3 px-6 rounded-md font-bold text-xs uppercase tracking-wider transition shadow-xs flex-1"
                >
                  Помочь этому сбору
                </Link>
                <Link
                  href="/homes"
                  className="border border-[#0e387a] text-[#0e387a] hover:bg-[#0e387a] hover:text-white text-center py-3 px-6 rounded-md font-bold text-xs uppercase tracking-wider transition flex-1"
                >
                  Все детские дома
                </Link>
              </div>
            </div>

            {/* Transparency & Reports (Span 5) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0e387a] flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0e387a] mb-2 font-serif">
                  100% прозрачность и отчётность
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  Мы регулярно публикуем банковские выписки, товарные чеки, фотоотчеты и акты приема-передачи с подписями руководства детских домов.
                </p>
                <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f26a21]"></span>
                    Публикация финансовых отчетов каждый месяц
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f26a21]"></span>
                    Прямая адресная передача без посредников
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f26a21]"></span>
                    Открытость для доноров и аудита
                  </li>
                </ul>
              </div>

              <Link
                href="/reports"
                className="bg-[#0e387a] hover:bg-[#0a2a5e] text-white text-center py-3 px-6 rounded-md font-bold text-xs uppercase tracking-wider transition shadow-xs"
              >
                {t.transparencyBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cause / Story Detail Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X size={20} />
            </button>

            {(() => {
              const card = causeCards.find((c) => c.id === activeVideoModal);
              if (!card) return null;
              return (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#f26a21] tracking-wider block mb-1">
                    {card.date} • Благотворительный сбор
                  </span>
                  <h3 className="text-lg font-bold text-[#0e387a] font-serif mb-3">
                    {card.title}
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover img-documentary"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                  <div className="bg-[#f0f4fa] p-3 rounded-lg mb-5 flex justify-between text-xs font-bold text-[#0e387a]">
                    <span>Собрано: {card.raised}</span>
                    <span className="text-gray-500">Цель: {card.goal}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/donate"
                      onClick={() => setActiveVideoModal(null)}
                      className="flex-1 bg-[#f26a21] hover:bg-[#d95813] text-white text-center py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition"
                    >
                      Помочь этому сбору
                    </Link>
                    <button
                      type="button"
                      onClick={() => setActiveVideoModal(null)}
                      className="px-4 py-2.5 rounded-md border border-gray-300 text-gray-700 font-bold text-xs uppercase hover:bg-gray-100"
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
