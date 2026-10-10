'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Award,
  BookOpen,
  Sparkles,
  Camera,
  Laptop,
  CheckCircle2,
  Send,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Volunteer() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '16',
    city: 'Бишкек',
    phone: '',
    email: '',
    occupation: '',
    directions: [] as string[],
    availability: 'Выходные',
    motivation: '',
    parentName: '',
    parentPhone: '',
    agreeData: false,
    parentConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleDirection = (dir: string) => {
    setFormData((prev) => ({
      ...prev,
      directions: prev.directions.includes(dir)
        ? prev.directions.filter((d) => d !== dir)
        : [...prev.directions, dir],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните имя, телефон и email');
      return;
    }
    if (!formData.agreeData) {
      alert('Необходимо согласие на обработку данных');
      return;
    }

    // Save into Admin storage
    try {
      const newVolunteer = {
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        age: formData.age,
        city: formData.city,
        phone: formData.phone,
        email: formData.email,
        parentName: formData.parentName || '-',
        parentPhone: formData.parentPhone || '-',
        directions: formData.directions.length > 0 ? formData.directions : ['Общая помощь'],
        motivation: formData.motivation || 'Желание помогать детям',
        status: 'New',
        date: new Date().toLocaleDateString('ru-RU'),
      };
      const existing = JSON.parse(localStorage.getItem('sky_admin_volunteers') || '[]');
      localStorage.setItem('sky_admin_volunteers', JSON.stringify([newVolunteer, ...existing]));
      window.dispatchEvent(new Event('sky_volunteers_updated'));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
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
          <span className="text-dark-blue font-bold">Волонтёрство</span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-4 font-serif">
            Стать волонтёром
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
            Волонтёры — это сердце Project Sky. Вы можете помочь своим временем, знаниями и навыками, чтобы изменить жизнь детей к лучшему.
          </p>
        </div>

        {/* Hero banner */}
        <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-12 h-64 md:h-80 relative">
          <img
            src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1200&auto=format&fit=crop"
            alt="Волонтёры команды"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/20 to-transparent flex flex-col justify-end p-8 text-white">
            <span className="bg-green-btn text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-2">
              Сообщество 14+
            </span>
            <p className="text-lg md:text-xl font-bold font-serif max-w-lg">
              Более 330 активных волонтёров уже с нами по всему Кыргызстану.
            </p>
          </div>
        </div>

        {/* 4 Benefits Cards (Matching Mockup Image 2, Bottom Left) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs text-center">
            <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
            <h4 className="text-xs font-bold text-dark-blue mb-1">Личностный рост</h4>
            <p className="text-[10px] text-gray-400 leading-tight">Уверенность в себе и опыт лидерства</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs text-center">
            <BookOpen className="w-6 h-6 text-sky-blue mx-auto mb-2" />
            <h4 className="text-xs font-bold text-dark-blue mb-1">Развитие навыков</h4>
            <p className="text-[10px] text-gray-400 leading-tight">Организация и менторство детей</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs text-center">
            <Users className="w-6 h-6 text-green-btn mx-auto mb-2" />
            <h4 className="text-xs font-bold text-dark-blue mb-1">Новые друзья</h4>
            <p className="text-[10px] text-gray-400 leading-tight">Круг единомышленников</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs text-center">
            <Award className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <h4 className="text-xs font-bold text-dark-blue mb-1">Сертификаты</h4>
            <p className="text-[10px] text-gray-400 leading-tight">Официальное портфолио волонтёра</p>
          </div>
        </div>

        {/* Requirements and Directions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="text-base font-bold text-dark-blue mb-3 font-serif">
                Требования к кандидатам
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-btn mt-0.5 flex-shrink-0" />
                  <span>Возраст волонтёров — от 14 лет и старше.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-btn mt-0.5 flex-shrink-0" />
                  <span>Ответственность, пунктуальность и доброжелательность к детям.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-btn mt-0.5 flex-shrink-0" />
                  <span>Для несовершеннолетних — согласие родителей или опекунов.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-btn mt-0.5 flex-shrink-0" />
                  <span>Готовность уделять от 2-4 часов в неделю.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f0f5f8] p-6 rounded-2xl border border-sky-blue/20">
              <h4 className="text-sm font-bold text-dark-blue mb-2">Направления помощи:</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Помощь в организации благотворительных акций</li>
                <li>• Преподавание и проведение занятий в детдомах</li>
                <li>• Сбор, сортировка и доставка гуманитарной помощи</li>
                <li>• SMM, фото, видеосъёмка и написание текстов</li>
                <li>• IT, дизайн и техническая поддержка сайта</li>
              </ul>
            </div>
          </div>

          {/* Volunteer Application Form (Matching Mockup Image 2) */}
          <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-dark-blue font-serif">Заявка принята!</h3>
                <p className="text-xs md:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Спасибо за ваше неравнодушие! Наш координатор волонтёров свяжется с вами по указанному номеру телефона в течение 1-2 дней.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-dark-blue text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition"
                >
                  Заполнить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-dark-blue font-serif mb-1">
                  Анкета волонтёра
                </h3>
                <p className="text-xs text-gray-400 mb-4">
                  Заполните поля ниже, чтобы присоединиться к команде Project Sky.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Айдар"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      placeholder="Касымов"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Возраст *
                    </label>
                    <select
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue bg-white"
                    >
                      <option>14 – 16 лет</option>
                      <option>17 – 18 лет</option>
                      <option>19 – 25 лет</option>
                      <option>26+ лет</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Город / Регион *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Бишкек"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Телефон / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+996 709 809 017"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aidar@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                    />
                  </div>
                </div>

                {/* Родительские контакты */}
                <div className="bg-[#f0f6fa] p-4 rounded-2xl border border-sky-blue/20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck size={16} className="text-sky-blue flex-shrink-0" />
                    <h4 className="text-[11px] font-bold text-dark-blue uppercase tracking-wider">
                      Контакты родителей / опекунов (для волонтёров до 18 лет)
                    </h4>
                  </div>
                  <p className="text-[10px] text-gray-500 mb-3">
                    Укажите контакты одного из родителей или опекуна для подтверждения участия.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                        ФИО родителя / опекуна
                      </label>
                      <input
                        type="text"
                        placeholder="ФИО родителя"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full p-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                        Телефон родителя *
                      </label>
                      <input
                        type="tel"
                        placeholder="+996 ..."
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                        className="w-full p-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Checkboxes: Чем могу заниматься? */}
                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-2 uppercase tracking-wider">
                    Чем вы хотите заниматься?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Помощь на мероприятиях',
                      'Образовательные занятия',
                      'Сбор и сортировка помощи',
                      'SMM и видео/фотосъёмка',
                      'IT и дизайн',
                      'Административная помощь',
                    ].map((item) => (
                      <label
                        key={item}
                        className={`flex items-center p-2.5 rounded-xl border cursor-pointer transition ${
                          formData.directions.includes(item)
                            ? 'border-green-btn bg-green-50/50 text-dark-blue font-semibold'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.directions.includes(item)}
                          onChange={() => toggleDirection(item)}
                          className="mr-2 text-green-btn accent-green-btn rounded"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-dark-blue mb-1 uppercase tracking-wider">
                    Почему вы хотите стать волонтёром Project Sky?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите коротко о себе и своей мотивации..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-sky-blue"
                  ></textarea>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeData}
                      onChange={(e) => setFormData({ ...formData, agreeData: e.target.checked })}
                      className="mt-0.5 accent-dark-blue"
                    />
                    <span>
                      Я согласен на обработку персональных данных в целях рассмотрения заявки.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.parentConsent}
                      onChange={(e) =>
                        setFormData({ ...formData, parentConsent: e.target.checked })
                      }
                      className="mt-0.5 accent-dark-blue"
                    />
                    <span>
                      Для кандидатов до 18 лет: у меня есть устное согласие родителей на участие.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark-blue text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 active:scale-98 transition shadow-sm cursor-pointer"
                >
                  ОТПРАВИТЬ АНКЕТУ ВОЛОНТЁРА
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
