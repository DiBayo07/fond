'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CreditCard,
  Landmark,
  QrCode,
  Wallet,
  Box,
  Lock,
  Heart,
  CheckCircle2,
  Share2,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HOMES = [
  { id: 'nadezhda', name: 'Детский дом «Надежда»', city: 'Бишкек' },
  { id: 'svet', name: 'Детский дом «Свет»', city: 'Ош' },
  { id: 'dostuk', name: 'Детский дом «Достук»', city: 'Каракол' },
  { id: 'aidanek', name: 'Детский дом «Айданэк»', city: 'Токмок' },
  { id: 'umut', name: 'Реабилитационный центр «Умут»', city: 'Бишкек' },
  { id: 'akzhol', name: 'Детский дом «Ак-Жол»', city: 'Нарын' },
];

function DonateContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const preselectedHome = searchParams.get('home');

  // State
  const [donationTarget, setDonationTarget] = useState<'home' | 'project_sky' | 'campaign'>('home');
  const [selectedHome, setSelectedHome] = useState(preselectedHome || 'nadezhda');
  const [amountType, setAmountType] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'qr'>('card');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);

  const handleCopyCard = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText('4169585357990323');
      setCopiedCard(true);
      setTimeout(() => setCopiedCard(false), 2500);
    }
  };

  useEffect(() => {
    if (preselectedHome) {
      setSelectedHome(preselectedHome);
      setDonationTarget('home');
    }
  }, [preselectedHome]);

  const activeHomeObj = HOMES.find((h) => h.id === selectedHome) || HOMES[0];

  const currentAmount = amountType === 'custom' ? Number(customAmount) || 0 : amountType;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) {
      alert('Пожалуйста, выберите или укажите сумму пожертвования');
      return;
    }
    setShowSuccessModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link
        href="/"
        className="text-[11px] text-gray-500 hover:text-dark-blue font-bold tracking-wider mb-6 inline-flex items-center gap-1.5 transition"
      >
        <span>←</span> НАЗАД НА ГЛАВНУЮ
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-blue mb-2 font-serif">
          Пожертвовать
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
          Ваша помощь очень важна. Вы можете поддержать конкретный детский дом или проект Project Sky в целом.
        </p>
      </div>

      {/* Target Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-gray-100/70 p-1.5 rounded-xl max-w-xl">
        <button
          type="button"
          onClick={() => setDonationTarget('home')}
          className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition cursor-pointer ${
            donationTarget === 'home'
              ? 'bg-white text-dark-blue shadow-xs'
              : 'text-gray-500 hover:text-dark-blue'
          }`}
        >
          Детскому дому
        </button>
        <button
          type="button"
          onClick={() => setDonationTarget('project_sky')}
          className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition cursor-pointer ${
            donationTarget === 'project_sky'
              ? 'bg-white text-dark-blue shadow-xs'
              : 'text-gray-500 hover:text-dark-blue'
          }`}
        >
          Project Sky
        </button>
        <button
          type="button"
          onClick={() => setDonationTarget('campaign')}
          className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition cursor-pointer ${
            donationTarget === 'campaign'
              ? 'bg-white text-dark-blue shadow-xs'
              : 'text-gray-500 hover:text-dark-blue'
          }`}
        >
          Целевые сборы
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Main Donation Form (Span 7) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Target Details */}
            {donationTarget === 'home' && (
              <div>
                <label className="block text-xs font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  Выберите детский дом
                </label>
                <select
                  value={selectedHome}
                  onChange={(e) => setSelectedHome(e.target.value)}
                  className="w-full p-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky-blue bg-white text-gray-700"
                >
                  {HOMES.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}, г. {h.city}
                    </option>
                  ))}
                </select>

                <div className="mt-3 p-3 bg-sky-blue/5 border border-sky-blue/20 rounded-lg flex items-center gap-2 text-xs text-dark-blue">
                  <CheckCircle2 size={16} className="text-sky-blue flex-shrink-0" />
                  <span>
                    Вы поддерживаете: <strong>{activeHomeObj.name} ({activeHomeObj.city})</strong>
                  </span>
                </div>
              </div>
            )}

            {donationTarget === 'project_sky' && (
              <div className="p-4 bg-orange-50/60 border border-orange-200 rounded-xl text-xs text-gray-700 leading-relaxed">
                <p className="font-bold text-dark-blue mb-1">Общий фонд Project Sky</p>
                Ваши средства пойдут на образовательные программы, покупку учебных материалов, организацию мероприятий и экстренную помощь подопечным учреждениям.
              </div>
            )}

            {donationTarget === 'campaign' && (
              <div>
                <label className="block text-xs font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  Выберите активную кампанию
                </label>
                <select className="w-full p-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky-blue bg-white text-gray-700">
                  <option>Сбор: Подготовка к зиме (теплая одежда и обувь)</option>
                  <option>Сбор: Канцелярия и учебники к новому семестру</option>
                  <option>Сбор: Средства личной гигиены для 3 детских домов</option>
                </select>
              </div>
            )}

            {/* Frequency (One-time / Monthly) */}
            <div>
              <label className="block text-xs font-bold text-dark-blue mb-2 uppercase tracking-wider">
                Тип пожертвования
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    frequency === 'once'
                      ? 'border-accent bg-accent/5 text-accent'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Разовое пожертвование
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    frequency === 'monthly'
                      ? 'border-accent bg-accent/5 text-accent'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  Ежемесячная помощь
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold text-dark-blue mb-2 uppercase tracking-wider">
                Сумма пожертвования
              </label>
              <div className="grid grid-cols-4 gap-2.5 mb-3">
                {[500, 1000, 2000, 5000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setAmountType(amt);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      amountType === amt
                        ? 'border-accent bg-accent text-white shadow-xs'
                        : 'border-gray-200 text-dark-blue hover:border-accent hover:text-accent'
                    }`}
                  >
                    {amt.toLocaleString()} сом
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="number"
                  placeholder="Или введите другую сумму (сом)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmountType('custom');
                  }}
                  className={`w-full p-3.5 border rounded-xl text-sm focus:outline-none transition ${
                    amountType === 'custom'
                      ? 'border-accent ring-1 ring-accent'
                      : 'border-gray-200 focus:border-sky-blue'
                  }`}
                />
                <span className="absolute right-4 top-3.5 text-xs text-gray-400 font-bold">KGS</span>
              </div>
            </div>

            {/* Donor info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-dark-blue mb-1 uppercase tracking-wider">
                  Ваше имя (необязательно)
                </label>
                <input
                  type="text"
                  placeholder="Айбек"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-dark-blue mb-1 uppercase tracking-wider">
                  Email для квитанции
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sky-blue"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-xs font-bold text-dark-blue mb-3 uppercase tracking-wider">
                Способ оплаты
              </label>
              <div className="space-y-2.5">
                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center p-3.5 border rounded-xl cursor-pointer transition ${
                    paymentMethod === 'card'
                      ? 'border-accent bg-accent/5'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="w-4 h-4 text-accent accent-accent"
                  />
                  <CreditCard className="w-5 h-5 ml-3 mr-3 text-dark-blue" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-dark-blue">Банковская карта</span>
                    <span className="text-[10px] text-gray-400">Visa, MasterCard, Элкарт</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('qr')}
                  className={`flex items-center p-3.5 border rounded-xl cursor-pointer transition ${
                    paymentMethod === 'qr'
                      ? 'border-accent bg-accent/5'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'qr'}
                    onChange={() => setPaymentMethod('qr')}
                    className="w-4 h-4 text-accent accent-accent"
                  />
                  <QrCode className="w-5 h-5 ml-3 mr-3 text-dark-blue" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-dark-blue">MBank QR / Elsom / MegaPay</span>
                    <span className="text-[10px] text-gray-400">Мгновенный перевод по QR-коду</span>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('bank')}
                  className={`flex items-center p-3.5 border rounded-xl cursor-pointer transition ${
                    paymentMethod === 'bank'
                      ? 'border-accent bg-accent/5'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="w-4 h-4 text-accent accent-accent"
                  />
                  <Landmark className="w-5 h-5 ml-3 mr-3 text-dark-blue" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-dark-blue">Перевод на расчетный счет</span>
                    <span className="text-[10px] text-gray-400">Для физических и юридических лиц</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-600 active:scale-[0.98] transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart size={16} />
              <span>
                ПОЖЕРТВОВАТЬ {currentAmount > 0 ? `${currentAmount.toLocaleString()} СОМ` : ''}
              </span>
            </button>

            <div className="flex items-center justify-center text-gray-400 text-xs gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Платежи безопасны и защищены SSL-шифрованием</span>
            </div>
          </form>
        </div>

        {/* Right Column: Information & Transparency (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Project Sky Banner */}
          <div className="bg-[#fff8f5] p-6 md:p-8 rounded-2xl border border-[#fee2d5] relative overflow-hidden">
            <h3 className="text-lg font-bold text-dark-blue mb-2 font-serif">
              Поддержите Project Sky
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Ваши пожертвования помогают нам покупать развивающие материалы, организовывать поездки в детские дома и привлекать лучших преподавателей.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>100% прозрачные ежемесячные финотчеты</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Официальные чеки и фотоотчеты по каждой закупке</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Прямая передача помощи детям</span>
              </div>
            </div>

            <Link
              href="/reports"
              className="inline-block text-xs font-bold text-accent hover:underline uppercase tracking-wider"
            >
              Смотреть отчеты о расходах →
            </Link>

            <Heart className="absolute -bottom-8 -right-8 w-40 h-40 text-accent opacity-5 pointer-events-none" />
          </div>

          {/* Direct Card Transfer (Client Requested) */}
          <div className="bg-gradient-to-br from-[#0b132b] via-[#101b3b] to-[#1e293b] text-white p-6 rounded-3xl shadow-lg border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5b958] flex items-center gap-1.5">
                <span>✦</span> Официальная карта проекта
              </span>
              <span className="text-[11px] font-mono text-gray-300">Visa / Элкарт / MBank</span>
            </div>

            <div className="mb-4">
              <span className="text-[10px] text-gray-400 block mb-1">Номер карты для прямых переводов:</span>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <span className="font-mono text-base sm:text-lg font-bold tracking-widest text-white">
                  4169 5853 5799 0323
                </span>
                <button
                  type="button"
                  onClick={handleCopyCard}
                  className="flex items-center gap-1.5 bg-[#e5b958] text-[#0b132b] px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-yellow-400 active:scale-95 transition cursor-pointer shadow-xs"
                >
                  {copiedCard ? (
                    <>
                      <Check size={14} className="text-green-800" />
                      <span>Скопировано!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Скопировать</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-gray-300 leading-relaxed">
              Вы можете сделать прямой перевод через любое банковское приложение (MBank, Optima, Demir, Бакай, О!Деньги) по номеру карты выше.
            </p>
          </div>

          {/* Quick Bank Details Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-xs space-y-3">
            <div className="flex items-center gap-2 text-dark-blue font-bold">
              <Landmark size={18} className="text-sky-blue" />
              <span>Банковские реквизиты (Кыргызстан):</span>
            </div>
            <div className="space-y-1.5 text-gray-600 bg-gray-50 p-3.5 rounded-xl font-mono text-[11px]">
              <p>Получатель: ОО "Project Sky Supporting Youth"</p>
              <p>БИК: 128001</p>
              <p>Расчетный счет (KGS): 1280012345678901</p>
              <p>Назначение: Благотворительное пожертвование</p>
            </div>
          </div>
        </div>
      </div>

      {/* Non-monetary donations */}
      <div>
        <h3 className="text-sm font-bold text-dark-blue mb-4 uppercase tracking-wider">
          Другие способы помочь проекту
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-xs hover:shadow-sm transition">
            <Landmark className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-xs font-bold text-dark-blue">Банковский перевод</span>
            <span className="text-[10px] text-gray-400 mt-0.5">По реквизитам выше</span>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-xs hover:shadow-sm transition">
            <QrCode className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-xs font-bold text-dark-blue">MBank QR</span>
            <span className="text-[10px] text-gray-400 mt-0.5">В приложении банка</span>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-xs hover:shadow-sm transition">
            <Wallet className="w-6 h-6 text-gray-400 mb-2" />
            <span className="text-xs font-bold text-dark-blue">Международный перевод</span>
            <span className="text-[10px] text-gray-400 mt-0.5">SWIFT / Visa</span>
          </div>
          <Link
            href="/contact"
            className="p-5 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-xs hover:shadow-sm transition group"
          >
            <Box className="w-6 h-6 text-sky-blue mb-2 group-hover:scale-110 transition" />
            <span className="text-xs font-bold text-dark-blue group-hover:text-sky-blue">Передать вещи</span>
            <span className="text-[10px] text-gray-400 mt-0.5">Одежда, книги, техника</span>
          </Link>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-dark-blue/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative text-center">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-dark-blue transition"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-2 font-serif">
              Спасибо за вашу помощь!
            </h3>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Ваше пожертвование на сумму{' '}
              <strong className="text-dark-blue font-bold">{currentAmount.toLocaleString()} сом</strong>{' '}
              {donationTarget === 'home' ? (
                <>в пользу <strong>{activeHomeObj.name}</strong></>
              ) : (
                <>в фонд <strong>Project Sky</strong></>
              )}{' '}
              оформлено. Средства направляются напрямую на нужды подопечных.
            </p>

            {/* Official Card Transfer Box in Modal */}
            <div className="p-3.5 bg-[#070d1e] text-white rounded-2xl mb-5 text-left border border-[#e5b958]/30">
              <span className="text-[10px] text-gray-400 block mb-1">Номер карты для прямого перевода:</span>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-white tracking-wider">
                  4169 5853 5799 0323
                </span>
                <button
                  type="button"
                  onClick={handleCopyCard}
                  className="bg-[#e5b958] text-[#070d1e] px-2.5 py-1 rounded text-[10px] font-bold hover:bg-yellow-400 transition"
                >
                  {copiedCard ? 'Скопировано!' : 'Скопировать'}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                Переведите через MBank, Оптима или Бакай.
              </p>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl mb-5 text-xs text-gray-500 space-y-1 text-left border border-gray-100">
              <p>ID транзакции: #SKY-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p>Статус: Выполнено</p>
              <p>Дата: {new Date().toLocaleDateString('ru-RU')}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 bg-dark-blue text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-blue-900 transition"
              >
                Закрыть
              </button>
              <Link
                href="/reports"
                className="flex-1 bg-gray-100 text-dark-blue py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition text-center"
              >
                Смотреть отчеты
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Donate() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Загрузка формы...</div>}>
      <DonateContent />
    </Suspense>
  );
}
