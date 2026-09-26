'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const [feedback, setFeedback] = useState({ name: '', contact: '', subject: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const [partner, setPartner] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    type: 'Компания / Бизнес',
    proposal: '',
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.name || !feedback.contact) {
      alert('Пожалуйста, заполните имя и контактные данные');
      return;
    }
    setFeedbackSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partner.companyName || !partner.contactPerson) {
      alert('Пожалуйста, укажите название организации и контактное лицо');
      return;
    }
    setPartnerSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-dark-blue">
            Главная
          </Link>
          <span>/</span>
          <span className="text-dark-blue font-bold">Контакты</span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-3 font-serif">
            Контакты
          </h1>
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Если у вас есть вопросы, вы хотите стать волонтёром, партнером или знаете учреждение, которому требуется поддержка — свяжитесь с нами.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Official Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-dark-blue font-serif">
                Свяжитесь с нами
              </h2>

              <div className="space-y-4 text-xs text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-blue/10 text-sky-blue flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Телефон / WhatsApp</span>
                    <a href="tel:+996777123456" className="font-bold text-dark-blue hover:text-sky-blue text-sm">
                      +996 777 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-accent flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Email</span>
                    <a href="mailto:info@projectsky.kg" className="font-bold text-dark-blue hover:text-sky-blue text-sm">
                      info@projectsky.kg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-green-btn flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Офис</span>
                    <span className="font-bold text-dark-blue text-sm">
                      Кыргызстан, г. Бишкек, ул. Токтогула 125
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Instagram</span>
                    <a
                      href="https://instagram.com/projectsky"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-dark-blue hover:text-sky-blue text-sm"
                    >
                      @projectsky
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-[11px] text-gray-400">
                  Время работы координаторов: Пн – Сб, с 09:00 до 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Form (Span 7) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xs">
            <h2 className="text-xl font-bold text-dark-blue font-serif mb-2">
              Напишите нам
            </h2>
            <p className="text-xs text-gray-400 mb-6">
              Мы ответим вам в течение нескольких часов в рабочее время.
            </p>

            {feedbackSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark-blue font-serif">Сообщение отправлено!</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Спасибо за ваше обращение. Наш представитель свяжется с вами по указанным контактам.
                </p>
                <button
                  onClick={() => setFeedbackSubmitted(false)}
                  className="mt-2 text-xs font-bold text-sky-blue hover:underline cursor-pointer"
                >
                  Отправить ещё одно сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Алиса"
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Телефон или Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+996 ... / email"
                      value={feedback.contact}
                      onChange={(e) => setFeedback({ ...feedback, contact: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Тема обращения
                  </label>
                  <input
                    type="text"
                    placeholder="Хочу передать вещи / Предложить помощь"
                    value={feedback.subject}
                    onChange={(e) => setFeedback({ ...feedback, subject: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш вопрос или предложение..."
                    value={feedback.message}
                    onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark-blue text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 active:scale-98 transition shadow-sm cursor-pointer"
                >
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Partnership section (Matching TZ Item 7.4) */}
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xs mb-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-sky-blue font-bold text-xs uppercase tracking-widest block mb-2">
              Корпоративная социальная ответственность
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue font-serif mb-2">
              Хотите стать нашим партнёром?
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Мы открыты к сотрудничеству с коммерческими компаниями, международными организациями, НКО, школами и университетами.
            </p>
          </div>

          {partnerSubmitted ? (
            <div className="py-10 text-center space-y-3 bg-gray-50 rounded-2xl p-6 max-w-lg mx-auto">
              <CheckCircle2 size={32} className="text-green-btn mx-auto" />
              <h4 className="font-bold text-dark-blue text-sm">Заявка на партнёрство принята!</h4>
              <p className="text-xs text-gray-500">
                Руководитель направления свяжется с вами для обсуждения меморандума о сотрудничестве.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Название организации *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ОсОО / Фонд / Компания"
                    value={partner.companyName}
                    onChange={(e) => setPartner({ ...partner, companyName: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Контактное лицо *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ФИО, Должность"
                    value={partner.contactPerson}
                    onChange={(e) => setPartner({ ...partner, contactPerson: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+996 ..."
                    value={partner.phone}
                    onChange={(e) => setPartner({ ...partner, phone: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Корпоративный Email
                  </label>
                  <input
                    type="email"
                    placeholder="corp@domain.kg"
                    value={partner.email}
                    onChange={(e) => setPartner({ ...partner, email: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                  Предложение или вид сотрудничества
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишите, как вы хотите поддержать проект (финансовая помощь, товары, менторство)..."
                  value={partner.proposal}
                  onChange={(e) => setPartner({ ...partner, proposal: e.target.value })}
                  className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition shadow-sm cursor-pointer"
              >
                СТАТЬ ПАРТНЁРОМ
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
