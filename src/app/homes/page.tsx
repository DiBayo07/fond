'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Users, Calendar, Search, Filter, Phone, Mail, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { fetchOrganizations, getOrganizations, DEFAULT_ORGANIZATIONS, Organization } from '@/data/homesData';

export default function Homes() {
  const { t } = useLanguage();
  const [orgsList, setOrgsList] = useState<Organization[]>(DEFAULT_ORGANIZATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Все города');
  const [selectedType, setSelectedType] = useState('Все типы');
  const [activeOrg, setActiveOrg] = useState<Organization | null>(null);

  useEffect(() => {
    // 1. Initial cached render
    setOrgsList(getOrganizations());

    // 2. Fetch fresh data from persistent Database API
    fetchOrganizations().then((data) => {
      if (data && data.length > 0) setOrgsList(data);
    });

    const handleUpdate = () => {
      fetchOrganizations().then((data) => {
        if (data && data.length > 0) setOrgsList(data);
      });
    };

    window.addEventListener('sky_homes_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('sky_homes_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const filteredOrgs = orgsList.filter((org) => {
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
              <option>Приют</option>
            </select>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOrgs.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl shadow-xs overflow-hidden border border-gray-100 hover:shadow-md transition flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={org.image || 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop'}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-dark-blue text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {org.type}
                </span>
                {org.status === 'Urgent Support Needed' && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-xs">
                    Срочно
                  </span>
                )}
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

      {/* Organization Details Modal */}
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
                  <MapPin size={14} className="mr-1 text-accent" /> {activeOrg.city} • {activeOrg.address || 'Адрес уточняется'}
                </p>
              </div>

              <Link
                href={`/donate?home=${activeOrg.id}`}
                className="bg-accent text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition shadow-sm text-center"
              >
                ПОЖЕРТВОВАТЬ ДЕТСКОМУ ДОМУ
              </Link>
            </div>

            {/* Photo gallery / Main image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {(activeOrg.gallery && activeOrg.gallery.length > 0 ? activeOrg.gallery : [activeOrg.image]).map((photo, i) => (
                <img
                  key={i}
                  src={photo || activeOrg.image}
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
                  {activeOrg.description || 'Учреждение оказывает помощь детям и подросткам.'}
                </p>

                <h3 className="text-sm font-bold text-dark-blue mb-3 uppercase tracking-wider">
                  Срочно необходимо
                </h3>
                {activeOrg.urgentNeeds && activeOrg.urgentNeeds.length > 0 ? (
                  <div className="space-y-3">
                    {activeOrg.urgentNeeds.map((need, idx) => {
                      const percent = Math.min(100, Math.round((need.received / need.needed) * 100));
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
                ) : (
                  <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">{activeOrg.needs || 'Список потребностей обновляется администрацией.'}</p>
                )}
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
                  <span className="font-bold text-dark-blue">{activeOrg.director || 'Не указан'}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Телефон</span>
                  <a href={`tel:${activeOrg.phone}`} className="font-bold text-sky-blue">
                    {activeOrg.phone || '+996 709 809 017'}
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Email</span>
                  <a href={`mailto:${activeOrg.email}`} className="font-bold text-sky-blue">
                    {activeOrg.email || 'info@projectsky.kg'}
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
