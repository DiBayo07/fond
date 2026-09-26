'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Compass, Target, BookOpen, Users, Package, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-dark-blue">
            Главная
          </Link>
          <span>/</span>
          <span className="text-dark-blue font-bold">О проекте</span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-4 font-serif">
            О проекте
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl leading-relaxed">
            Project Sky — Supporting Kids & Youth — это благотворительный проект, созданный для поддержки детей и молодёжи Кыргызстана и объединения неравнодушных людей, которые хотят внести реальный вклад в их будущее.
          </p>
        </div>

        {/* Hero banner image */}
        <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-12 h-64 md:h-80 relative">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
            alt="Команда Project Sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-transparent to-transparent flex items-end p-8">
            <p className="text-white text-base md:text-xl font-serif italic max-w-xl">
              «Мы верим, что вместе мы можем создать лучшее будущее для каждого ребёнка.»
            </p>
          </div>
        </div>

        {/* Mission, Vision, Goal Cards (Matching Mockup Image 2, Top Left) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent flex items-center justify-center mb-4">
              <Heart size={20} />
            </div>
            <h3 className="text-base font-bold text-dark-blue mb-2">Наша миссия</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Поддерживать детей и молодёжь Кыргызстана, предоставляя необходимую помощь, создавая возможности для развития и объединяя волонтёров, доноров и организации.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-blue flex items-center justify-center mb-4">
              <Compass size={20} />
            </div>
            <h3 className="text-base font-bold text-dark-blue mb-2">Наше видение</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Мы хотим видеть Кыргызстан, в котором каждый ребёнок и молодой человек имеет возможность развиваться, получать качественные знания и искреннюю заботу.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-btn flex items-center justify-center mb-4">
              <Target size={20} />
            </div>
            <h3 className="text-base font-bold text-dark-blue mb-2">Наша цель</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Создать устойчивую систему шефской и образовательной помощи каждому подопечному учреждению, обеспечивая прозрачность каждого сома.
            </p>
          </div>
        </div>

        {/* Чем занимается Project Sky? */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-blue mb-8 font-serif">
            Чем занимается Project Sky?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex gap-4 items-start">
              <div className="p-3 bg-sky-blue/10 text-sky-blue rounded-xl flex-shrink-0">
                <Heart size={22} />
              </div>
              <div>
                <h4 className="font-bold text-dark-blue text-sm mb-1.5">
                  Поддержка детских домов
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Мы регулярно посещаем детские дома и интернаты, выявляем их насущные нужды (одежда, обувь, средства гигиены, ремонт) и оперативно доставляем необходимую помощь.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex gap-4 items-start">
              <div className="p-3 bg-orange-100 text-accent rounded-xl flex-shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className="font-bold text-dark-blue text-sm mb-1.5">
                  Образовательная поддержка
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Проводим бесплатные занятия по английскому языку, компьютерной грамотности и математике непосредственно в детских домах. Это не публичные курсы, а адресные программы.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex gap-4 items-start">
              <div className="p-3 bg-green-100 text-green-btn rounded-xl flex-shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-bold text-dark-blue text-sm mb-1.5">Волонтёрство</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Формируем активное сообщество волонтёров от 14 лет, развиваем лидерские качества молодёжи и обучаем организации благотворительных мероприятий.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex gap-4 items-start">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
                <Package size={22} />
              </div>
              <div>
                <h4 className="font-bold text-dark-blue text-sm mb-1.5">
                  Благотворительные сборы
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Организуем целевые сборы средств и гуманитарной помощи к началу учебного года, зиме и праздникам, с публикацией подробных финансовых отчетов и чеков.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Наши ценности */}
        <div className="mb-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-xs">
          <h2 className="text-2xl font-bold text-dark-blue mb-8 font-serif text-center">
            Наши ценности
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-accent flex items-center justify-center mb-3">
                <Heart size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Забота</h4>
              <p className="text-[10px] text-gray-400">Понимать реальные потребности людей</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-sky-blue flex items-center justify-center mb-3">
                <BookOpen size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Образование</h4>
              <p className="text-[10px] text-gray-400">Создавать возможности для развития</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-green-btn flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Сообщество</h4>
              <p className="text-[10px] text-gray-400">Объединять людей ради общей цели</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
                <Eye size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Прозрачность</h4>
              <p className="text-[10px] text-gray-400">Открыто рассказывать о результатах</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3">
                <Sparkles size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Развитие</h4>
              <p className="text-[10px] text-gray-400">Раскрывать потенциал каждого</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-bold text-dark-blue text-xs mb-1">Действие</h4>
              <p className="text-[10px] text-gray-400">Превращать желание помочь в результат</p>
            </div>
          </div>
        </div>

        {/* Как мы работаем */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-blue mb-8 font-serif">
            Как мы работаем?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-3xl font-bold text-sky-blue/30 font-serif block mb-2">01</span>
              <h4 className="font-bold text-dark-blue text-xs mb-2">Определяем потребности</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Напрямую связываемся с администрацией детских домов и составляем точный список нужд.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-3xl font-bold text-sky-blue/30 font-serif block mb-2">02</span>
              <h4 className="font-bold text-dark-blue text-xs mb-2">Объединяем людей</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Привлекаем доноров, компании-партнёров и волонтёров для решения задачи.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-3xl font-bold text-sky-blue/30 font-serif block mb-2">03</span>
              <h4 className="font-bold text-dark-blue text-xs mb-2">Оказываем помощь</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Закупаем товары, проводим мастер-классы и лично доставляем помощь воспитанникам.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <span className="text-3xl font-bold text-sky-blue/30 font-serif block mb-2">04</span>
              <h4 className="font-bold text-dark-blue text-xs mb-2">Отчитываемся</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Публикуем прозрачные фотоотчеты, акты передачи и финансовые чеки на сайте.
              </p>
            </div>
          </div>
        </div>

        {/* Наша команда */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-dark-blue mb-8 font-serif">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs text-center p-5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                alt="Айпери Н."
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
              />
              <h4 className="font-bold text-dark-blue text-sm">Айпери Н.</h4>
              <p className="text-[11px] text-accent font-semibold mb-1">Руководитель проекта</p>
              <p className="text-[10px] text-gray-400">Координация проектов и партнёрств</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs text-center p-5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                alt="Эрмек Т."
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
              />
              <h4 className="font-bold text-dark-blue text-sm">Эрмек Т.</h4>
              <p className="text-[11px] text-sky-blue font-semibold mb-1">Координатор волонтёров</p>
              <p className="text-[10px] text-gray-400">Работа с молодёжью 14+ и тренинги</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs text-center p-5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                alt="Чолпон М."
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
              />
              <h4 className="font-bold text-dark-blue text-sm">Чолпон М.</h4>
              <p className="text-[11px] text-green-btn font-semibold mb-1">Координатор мероприятий</p>
              <p className="text-[10px] text-gray-400">Организация сборов и поездок</p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs text-center p-5">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                alt="Азат С."
                className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
              />
              <h4 className="font-bold text-dark-blue text-sm">Азат С.</h4>
              <p className="text-[11px] text-purple-600 font-semibold mb-1">Образовательное направление</p>
              <p className="text-[10px] text-gray-400">Учебные программы и преподаватели</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-dark-blue text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">
              Присоединяйтесь к нашей миссии
            </h3>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl">
              Мы работаем, чтобы каждый ребёнок чувствовал заботу и имел шанс на лучшее будущее.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/volunteer"
              className="bg-white text-dark-blue px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition shadow-sm"
            >
              Стать волонтёром
            </Link>
            <Link
              href="/donate"
              className="bg-accent text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition shadow-sm"
            >
              Пожертвовать
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
