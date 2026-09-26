'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Users, Calendar, Search, Filter, Phone, Mail, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Organization {
  id: string;
  name: string;
  city: string;
  type: string;
  childrenCount: number;
  ageRange: string;
  address: string;
  phone: string;
  email: string;
  director: string;
  image: string;
  gallery: string[];
  description: string;
  urgentNeeds: { item: string; needed: number; received: number; unit: string }[];
}

const ORGANIZATIONS: Organization[] = [
  {
    id: 'nadezhda',
    name: 'Детский дом «Надежда»',
    city: 'Бишкек',
    type: 'Детский дом',
    childrenCount: 45,
    ageRange: '3 – 18 лет',
    address: 'г. Бишкек, ул. Жумабека 123',
    phone: '+996 312 12 34 56',
    email: 'nadejda@mail.kg',
    director: 'Асанова Гульнара Касымовна',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Детский дом «Надежда» заботится о детях, оставшихся без попечения родителей. Здесь дети получают уход, питание, обучение и поддержку. Учреждение нуждается в нашей помощи для создания более комфортных условий и развития детей.',
    urgentNeeds: [
      { item: 'Школьные принадлежности (тетради, ручки)', needed: 150, received: 105, unit: 'компл.' },
      { item: 'Средства личной гигиены (мыло, пасты)', needed: 80, received: 30, unit: 'наборов' },
      { item: 'Зимняя теплая одежда и куртки', needed: 45, received: 10, unit: 'шт.' },
      { item: 'Бытовая техника (стиральные машины)', needed: 2, received: 1, unit: 'шт.' },
    ],
  },
  {
    id: 'svet',
    name: 'Детский дом «Свет»',
    city: 'Ош',
    type: 'Детский дом',
    childrenCount: 38,
    ageRange: '2 – 18 лет',
    address: 'г. Ош, ул. Ленина 88',
    phone: '+996 322 23 45 67',
    email: 'svet-osh@mail.kg',
    director: 'Исмаилов Бакыт Токтогулович',
    image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Учреждение в южном регионе Кыргызстана, в котором воспитываются дети дошкольного и школьного возраста. В детском доме организованы кружки творчества и спортивные секции.',
    urgentNeeds: [
      { item: 'Зимняя теплая обувь (размеры 30-40)', needed: 38, received: 15, unit: 'пар' },
      { item: 'Учебники и художественная литература', needed: 120, received: 90, unit: 'книг' },
      { item: 'Продукты длительного хранения', needed: 50, received: 35, unit: 'упаковок' },
    ],
  },
  {
    id: 'dostuk',
    name: 'Детский дом «Достук»',
    city: 'Каракол',
    type: 'Детский дом',
    childrenCount: 30,
    ageRange: '5 – 18 лет',
    address: 'г. Каракол, ул. Гагарина 14',
    phone: '+996 392 24 56 78',
    email: 'dostuk-karakol@mail.kg',
    director: 'Мамытова Венера Султановна',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      '«Достук» находится в Иссык-Кульской области. Особое внимание здесь уделяется профориентации подростков, изучению иностранных языков и цифровой грамотности.',
    urgentNeeds: [
      { item: 'Ноутбуки для компьютерного класса', needed: 6, received: 2, unit: 'шт.' },
      { item: 'Спортивный инвентарь (мячи, сетки)', needed: 20, received: 12, unit: 'ед.' },
    ],
  },
  {
    id: 'aidanek',
    name: 'Детский дом «Айданэк»',
    city: 'Токмок',
    type: 'Детский дом',
    childrenCount: 28,
    ageRange: '4 – 17 лет',
    address: 'г. Токмок, ул. Дубовицкого 5',
    phone: '+996 313 85 12 34',
    email: 'aidanek@mail.kg',
    director: 'Кожоева Айнура Муратовна',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Уютный дом для 28 воспитанников в Чуйской области. Педагоги уделяют внимание социализации и подготовке выпускников к самостоятельной жизни.',
    urgentNeeds: [
      { item: 'Школьная форма', needed: 28, received: 18, unit: 'компл.' },
      { item: 'Канцтовары', needed: 50, received: 40, unit: 'наборов' },
    ],
  },
  {
    id: 'umut',
    name: 'Реабилитационный центр «Умут»',
    city: 'Бишкек',
    type: 'Центр',
    childrenCount: 22,
    ageRange: '2 – 16 лет',
    address: 'г. Бишкек, 7 мкр, 12/1',
    phone: '+996 312 51 09 87',
    email: 'umut-center@mail.kg',
    director: 'Садыков Эркин Жолдошевич',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Специализированный центр реабилитации для детей с ограниченными возможностями здоровья. Требуются развивающие тренажеры и квалифицированная помощь волонтеров.',
    urgentNeeds: [
      { item: 'Развивающие логопедические игры', needed: 15, received: 5, unit: 'наборов' },
      { item: 'Массажные коврики', needed: 10, received: 6, unit: 'шт.' },
    ],
  },
  {
    id: 'akzhol',
    name: 'Детский дом «Ак-Жол»',
    city: 'Нарын',
    type: 'Детский дом',
    childrenCount: 35,
    ageRange: '3 – 18 лет',
    address: 'г. Нарын, ул. Орозбакова 42',
    phone: '+996 352 25 67 89',
    email: 'akzhol-naryn@mail.kg',
    director: 'Темиров Азамат Керимович',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    ],
    description:
      'Высокогорный детский дом в Нарынской области. Суровый климат требует постоянной обеспеченности теплом, теплой одеждой и калорийным питанием.',
    urgentNeeds: [
      { item: 'Теплые зимние одеяла и пледы', needed: 35, received: 20, unit: 'шт.' },
      { item: 'Термобелье и шерстяные носки', needed: 70, received: 30, unit: 'пар' },
    ],
  },
];

export default function Homes() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Все города');
  const [selectedType, setSelectedType] = useState('Все типы');
  const [activeOrg, setActiveOrg] = useState<Organization | null>(null);

  const filteredOrgs = ORGANIZATIONS.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'Все города' || org.city === selectedCity;
    const matchesType = selectedType === 'Все типы' || org.type === selectedType;
    return matchesSearch && matchesCity && matchesType;
  });

  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-dark-blue">
            Главная
          </Link>
          <span>/</span>
          <span className="text-dark-blue font-bold">Детские дома</span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-blue mb-2 font-serif">
            Детские дома
          </h1>
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Мы сотрудничаем с детскими домами и организациями по всему Кыргызстану. Выберите организацию, чтобы узнать больше и помочь.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-gray-100 mb-8 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-grow w-full">
            <Search size={18} className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск по названию или городу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-xs md:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
            />
          </div>

          <div className="flex gap-2.5 w-full md:w-auto">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="py-2.5 px-3.5 border border-gray-200 rounded-xl text-xs bg-white text-gray-700 focus:outline-none focus:border-sky-blue w-1/2 md:w-auto"
            >
              <option>Все города</option>
              <option>Бишкек</option>
              <option>Ош</option>
              <option>Каракол</option>
              <option>Токмок</option>
              <option>Нарын</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="py-2.5 px-3.5 border border-gray-200 rounded-xl text-xs bg-white text-gray-700 focus:outline-none focus:border-sky-blue w-1/2 md:w-auto"
            >
              <option>Все типы</option>
              <option>Детский дом</option>
              <option>Центр</option>
            </select>
          </div>
        </div>

        {/* Organizations Grid (Matching Mockup Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOrgs.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl shadow-xs overflow-hidden border border-gray-100 hover:shadow-md transition flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-dark-blue text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {org.type}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-dark-blue text-base mb-1.5">{org.name}</h3>
                <p className="text-xs text-gray-500 flex items-center mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-accent flex-shrink-0" /> {org.city}
                </p>

                <div className="bg-gray-50 p-3 rounded-xl mb-4 text-xs space-y-1 text-gray-600">
                  <p>
                    Дети: <strong>{org.childrenCount}</strong>
                  </p>
                  <p>
                    Возраст: <strong>{org.ageRange}</strong>
                  </p>
                </div>

                <div className="mt-auto flex gap-2.5 pt-2">
                  <button
                    onClick={() => setActiveOrg(org)}
                    className="flex-1 bg-sky-blue/10 text-sky-blue hover:bg-sky-blue hover:text-white py-2.5 rounded-lg text-xs font-bold transition text-center cursor-pointer"
                  >
                    ПОДРОБНЕЕ
                  </button>
                  <Link
                    href={`/donate?home=${org.id}`}
                    className="flex-1 bg-accent text-white hover:bg-orange-600 py-2.5 rounded-lg text-xs font-bold transition text-center shadow-xs"
                  >
                    ПОЖЕРТВОВАТЬ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrgs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-sm">Организации по вашему запросу не найдены.</p>
          </div>
        )}
      </div>

      {/* Organization Details Modal / Drawer (Matching Mockup Image 2, Top Right) */}
      {activeOrg && (
        <div className="fixed inset-0 z-50 bg-dark-blue/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveOrg(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-dark-blue transition rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pr-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-blue font-serif mb-1">
                  {activeOrg.name}
                </h2>
                <p className="text-xs text-gray-500 flex items-center">
                  <MapPin size={14} className="mr-1 text-accent" /> {activeOrg.city} • {activeOrg.address}
                </p>
              </div>

              <Link
                href={`/donate?home=${activeOrg.id}`}
                className="bg-accent text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition shadow-sm text-center"
              >
                ПОЖЕРТВОВАТЬ ДЕТСКОМУ ДОМУ
              </Link>
            </div>

            {/* Photo gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {activeOrg.gallery.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={activeOrg.name}
                  className="h-32 w-full object-cover rounded-xl"
                />
              ))}
            </div>

            {/* Details and Description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
              <div className="md:col-span-7">
                <h3 className="text-sm font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  О детском доме
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {activeOrg.description}
                </p>

                <h3 className="text-sm font-bold text-dark-blue mb-3 uppercase tracking-wider">
                  Срочно необходимо
                </h3>
                <div className="space-y-3">
                  {activeOrg.urgentNeeds.map((need, idx) => {
                    const percent = Math.round((need.received / need.needed) * 100);
                    return (
                      <div key={idx} className="bg-gray-50 p-3 rounded-xl text-xs">
                        <div className="flex justify-between font-medium text-dark-blue mb-1">
                          <span>{need.item}</span>
                          <span className="text-accent font-bold">{percent}% собрано</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-1">
                          <div
                            className="bg-accent h-full rounded-full transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] text-gray-400">
                          {need.received} из {need.needed} {need.unit}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-5 bg-gray-50/70 p-5 rounded-2xl border border-gray-100 space-y-3 text-xs">
                <h4 className="font-bold text-dark-blue uppercase tracking-wider text-[11px] mb-2">
                  Паспорт учреждения
                </h4>
                <div>
                  <span className="text-gray-400 block text-[10px]">Тип</span>
                  <span className="font-bold text-dark-blue">{activeOrg.type}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Воспитанников</span>
                  <span className="font-bold text-dark-blue">{activeOrg.childrenCount} детей</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Возрастная категория</span>
                  <span className="font-bold text-dark-blue">{activeOrg.ageRange}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Директор</span>
                  <span className="font-bold text-dark-blue">{activeOrg.director}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Телефон</span>
                  <a href={`tel:${activeOrg.phone}`} className="font-bold text-sky-blue">
                    {activeOrg.phone}
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Email</span>
                  <a href={`mailto:${activeOrg.email}`} className="font-bold text-sky-blue">
                    {activeOrg.email}
                  </a>
                </div>
              </div>
            </div>

            {/* How can you help this home */}
            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-xs font-bold text-dark-blue mb-4 uppercase tracking-wider">
                Как вы можете помочь этому детскому дому?
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link
                  href={`/donate?home=${activeOrg.id}`}
                  className="p-3.5 bg-white border border-gray-200 rounded-xl text-center hover:border-accent hover:text-accent transition text-xs font-bold"
                >
                  Пожертвовать деньги
                </Link>
                <Link
                  href="/contact"
                  className="p-3.5 bg-white border border-gray-200 rounded-xl text-center hover:border-sky-blue hover:text-sky-blue transition text-xs font-bold"
                >
                  Передать вещи
                </Link>
                <Link
                  href="/volunteer"
                  className="p-3.5 bg-white border border-gray-200 rounded-xl text-center hover:border-green-btn hover:text-green-btn transition text-xs font-bold"
                >
                  Стать волонтёром
                </Link>
                <Link
                  href="/contact"
                  className="p-3.5 bg-white border border-gray-200 rounded-xl text-center hover:border-orange-400 hover:text-orange-400 transition text-xs font-bold"
                >
                  Помочь с занятиями
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
