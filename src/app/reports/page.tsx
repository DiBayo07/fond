'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, DollarSign, Users, FileText, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Report {
  id: number;
  category: 'all' | 'fundraising' | 'aid' | 'events' | 'education';
  categoryLabel: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  targetAmount?: string;
  raisedAmount?: string;
  spentAmount?: string;
  beneficiary: string;
  details: string;
  receipts: string[];
}

const REPORTS: Report[] = [
  {
    id: 1,
    category: 'aid',
    categoryLabel: 'Переданная помощь',
    title: 'Передача школьных принадлежностей',
    date: '20 мая 2024',
    image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop',
    summary: 'Передали канцелярские товары и 35 школьных рюкзаков детскому дому «Свет» (Ош).',
    targetAmount: '120 000 сом',
    raisedAmount: '120 000 сом',
    spentAmount: '118 450 сом',
    beneficiary: 'Детский дом «Свет», г. Ош',
    details:
      'Благодаря вашей поддержке мы полностью укомплектовали школьников к завершению учебного года и подготовке к летним занятиям. Были закуплены тетради, ручки, альбомы для рисования, краски и ортопедические рюкзаки.',
    receipts: ['Чек №48291 от 18.05.2024 (ОсОО Канцелярия КГ) — 118 450 сом'],
  },
  {
    id: 2,
    category: 'fundraising',
    categoryLabel: 'Сборы средств',
    title: 'Благотворительный сбор на средства гигиены',
    date: '10 мая 2024',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    summary: 'Собрали и передали базовые наборы гигиены для 3 детских учреждений Чуйской области.',
    targetAmount: '85 000 сом',
    raisedAmount: '92 300 сом',
    spentAmount: '92 300 сом',
    beneficiary: 'Детские дома Чуйской области (105 детей)',
    details:
      'Были закуплены зубные пасты, щетки, гипоаллергенное мыло, шампуни и стиральные порошки на 3 месяца вперед. Остаток переведен на сбор зимней одежды.',
    receipts: ['Накладная №1029 от 08.05.2024 — 92 300 сом'],
  },
  {
    id: 3,
    category: 'education',
    categoryLabel: 'Образовательные занятия',
    title: 'Образовательное занятие по английскому языку',
    date: '15 мая 2024',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    summary: 'Провели интерактивное занятие и разговорный клуб для воспитанников детского дома «Надежда».',
    beneficiary: 'Детский дом «Надежда», г. Бишкек',
    details:
      'Наши волонтёры-преподаватели провели серию практических занятий с карточками и играми. В занятиях приняли участие 24 ребенка в возрасте от 10 до 16 лет.',
    receipts: ['Волонтёрская программа без привлечения денежных средств (In-kind donation)'],
  },
  {
    id: 4,
    category: 'aid',
    categoryLabel: 'Переданная помощь',
    title: 'Передача зимней теплой одежды',
    date: '2 апреля 2024',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop',
    summary: 'Доставили зимние куртки, шапки и теплую обувь в детский дом «Ак-Жол» (Нарын).',
    targetAmount: '200 000 сом',
    raisedAmount: '200 000 сом',
    spentAmount: '198 000 сом',
    beneficiary: 'Детский дом «Ак-Жол», г. Нарын',
    details:
      'Суровый климат Нарына требует надежной одежды. Все 35 воспитанников получили индивидуально подобранные куртки и обувь высокого качества.',
    receipts: ['Акт приема-передачи №14 от 02.04.2024 с подписью директора детского дома'],
  },
  {
    id: 5,
    category: 'events',
    categoryLabel: 'Мероприятия',
    title: 'Весенний творческий праздник в детском доме «Свет»',
    date: '28 марта 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    summary: 'Организовали мастер-классы по рисованию, концерт и сладкий стол для 38 воспитанников.',
    targetAmount: '35 000 сом',
    raisedAmount: '35 000 сом',
    spentAmount: '34 200 сом',
    beneficiary: 'Детский дом «Свет», г. Ош',
    details:
      'Волонтёры подготовили праздничную интерактивную программу, конкурсы с подарками и угощения. Дети нарисовали свои мечты на холстах.',
    receipts: ['Товарный чек №77 от 27.03.2024 — 34 200 сом'],
  },
  {
    id: 6,
    category: 'fundraising',
    categoryLabel: 'Сборы средств',
    title: 'Благотворительный сбор на продукты питания',
    date: '18 марта 2024',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
    summary: 'Закупка свежих фруктов, круп, масел и молочной продукции для реабилитационного центра.',
    targetAmount: '60 000 сом',
    raisedAmount: '60 000 сом',
    spentAmount: '59 600 сом',
    beneficiary: 'Реабилитационный центр «Умут», г. Бишкек',
    details:
      'Ежемесячная закупка качественного питания для ослабленных детей, проходящих курс физической реабилитации.',
    receipts: ['Накладная оптовой закупки продуктов №419 — 59 600 сом'],
  },
];

export default function Reports() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = REPORTS.filter((rep) => {
    if (activeTab === 'all') return true;
    return rep.category === activeTab;
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
          <span className="text-dark-blue font-bold">Отчёты</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-3 font-serif">
            Отчёты
          </h1>
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Мы открыто рассказываем о нашей работе, собранных средствах и результатах помощи. Каждый сом имеет подтверждающий документ.
          </p>
        </div>

        {/* Categories Tabs (Matching Mockup Image 2, Bottom Center) */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          {[
            { id: 'all', label: 'Все отчёты' },
            { id: 'fundraising', label: 'Сборы средств' },
            { id: 'aid', label: 'Переданная помощь' },
            { id: 'events', label: 'Мероприятия' },
            { id: 'education', label: 'Образовательные занятия' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-sky-blue text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReports.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xs overflow-hidden border border-gray-100 hover:shadow-md transition flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-dark-blue text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] text-gray-400 font-medium mb-1 flex items-center gap-1">
                  <Calendar size={12} /> {item.date}
                </span>
                <h3 className="font-bold text-dark-blue text-sm mb-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                  {item.summary}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400">
                    {item.beneficiary.split(',')[0]}
                  </span>
                  <button
                    onClick={() => setSelectedReport(item)}
                    className="text-xs font-bold text-sky-blue hover:text-dark-blue transition cursor-pointer"
                  >
                    ЧИТАТЬ →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setActiveTab('all')}
            className="bg-white border border-gray-200 text-dark-blue px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:border-dark-blue transition cursor-pointer shadow-xs"
          >
            Показать ещё
          </button>
        </div>
      </div>

      {/* Report Details Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 bg-dark-blue/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-dark-blue transition rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X size={20} />
            </button>

            <span className="inline-block bg-sky-blue/10 text-sky-blue text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              {selectedReport.categoryLabel}
            </span>

            <h2 className="text-2xl font-bold text-dark-blue font-serif mb-2">
              {selectedReport.title}
            </h2>
            <p className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
              <Calendar size={13} /> {selectedReport.date} • {selectedReport.beneficiary}
            </p>

            <img
              src={selectedReport.image}
              alt={selectedReport.title}
              className="w-full h-52 object-cover rounded-2xl mb-6 shadow-xs"
            />

            <div className="space-y-4 text-xs text-gray-600 leading-relaxed mb-6">
              <h3 className="text-sm font-bold text-dark-blue uppercase tracking-wider">
                О проделанной работе
              </h3>
              <p>{selectedReport.details}</p>
            </div>

            {selectedReport.spentAmount && (
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                <h4 className="font-bold text-dark-blue text-xs uppercase tracking-wider mb-2">
                  Финансовый баланс:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 text-[11px] block">Собрано:</span>
                    <span className="font-bold text-dark-blue">{selectedReport.raisedAmount}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] block">Израсходовано:</span>
                    <span className="font-bold text-accent">{selectedReport.spentAmount}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h4 className="font-bold text-dark-blue text-xs uppercase tracking-wider mb-2">
                Подтверждающие документы:
              </h4>
              <ul className="space-y-1 text-xs text-gray-500">
                {selectedReport.receipts.map((rec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FileText size={14} className="text-sky-blue" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedReport(null)}
              className="w-full bg-dark-blue text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 transition cursor-pointer"
            >
              Закрыть отчет
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
