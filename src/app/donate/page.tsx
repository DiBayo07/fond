import Link from 'next/link';
import { CreditCard, Landmark, QrCode, Wallet, Box, Lock } from 'lucide-react';

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/" className="text-[11px] text-gray-500 hover:text-dark-blue font-bold tracking-wider mb-6 inline-block">&larr; НАЗАД</Link>
      
      <h1 className="text-4xl font-bold text-dark-blue mb-3">Пожертвовать</h1>
      <p className="text-[13px] text-gray-500 mb-10 max-w-2xl leading-relaxed">
        Ваша помощь очень важна. Вы можете поддержать конкретный детский дом или проект Project Sky в целом.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Left Column: Specific Home */}
        <div className="flex-[3] bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
          <h2 className="text-lg font-bold text-dark-blue mb-6">Пожертвовать конкретному детскому дому</h2>
          
          <div className="mb-6">
            <label className="block text-[11px] font-bold text-dark-blue mb-2 uppercase tracking-wider">Выберите детский дом</label>
            <select className="w-full p-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-sky-blue bg-white text-gray-700">
              <option>Детский дом «Надежда», г. Бишкек</option>
              <option>Детский дом «Свет», Чуйская обл.</option>
              <option>Детский дом «Достук», г. Бишкек</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[11px] font-bold text-dark-blue mb-2 uppercase tracking-wider">Сумма пожертвования</label>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <button className="py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-accent hover:text-accent transition">500 сом</button>
              <button className="py-2.5 border border-accent bg-accent/5 text-accent rounded-lg text-sm font-medium">1000 сом</button>
              <button className="py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-accent hover:text-accent transition">2000 сом</button>
            </div>
            <input type="number" placeholder="Другая сумма (сом)" className="w-full p-3.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-sky-blue text-gray-700" />
          </div>

          <div className="mb-8">
            <label className="block text-[11px] font-bold text-dark-blue mb-3 uppercase tracking-wider">Способ оплаты</label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border border-accent rounded-lg cursor-pointer bg-accent/5">
                <input type="radio" name="payment" className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent" defaultChecked />
                <CreditCard className="w-5 h-5 ml-3 mr-3 text-dark-blue" />
                <span className="text-sm font-bold text-dark-blue">Банковская карта</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input type="radio" name="payment" className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent" />
                <Landmark className="w-5 h-5 ml-3 mr-3 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Перевод на счет</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input type="radio" name="payment" className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent" />
                <Wallet className="w-5 h-5 ml-3 mr-3 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Элсом / MegaPay / MBank</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-accent text-white py-4 rounded-lg font-bold text-[12px] uppercase tracking-wider hover:bg-orange-500 transition shadow-sm mb-4">
            ПРОДОЛЖИТЬ
          </button>
          
          <div className="flex items-center justify-center text-gray-400 text-[11px]">
            <Lock className="w-3.5 h-3.5 mr-1.5" />
            <span>Платежи безопасны и защищены.</span>
          </div>
        </div>

        {/* Right Column: Project Sky */}
        <div className="flex-[2]">
          <div className="bg-[#fff8f5] p-8 rounded-2xl border border-[#fee2d5] h-full flex flex-col relative overflow-hidden">
            <h2 className="text-xl font-bold text-dark-blue mb-4 relative z-10">Пожертвовать для<br/>Project Sky</h2>
            <p className="text-[13px] text-gray-600 mb-8 leading-relaxed relative z-10">
              Ваша поддержка помогает нам проводить сборы, занятия и помогать большему количеству детей.
            </p>
            <button className="mt-auto w-full bg-white border-2 border-accent text-accent py-4 rounded-lg font-bold text-[12px] uppercase tracking-wider hover:bg-accent hover:text-white transition relative z-10">
              ПОДДЕРЖАТЬ ПРОЕКТ
            </button>
            <Heart className="absolute -bottom-10 -right-10 w-48 h-48 text-accent opacity-5" />
          </div>
        </div>
      </div>

      {/* Other ways to help */}
      <div>
        <h3 className="text-[13px] font-bold text-dark-blue mb-4">Другие способы помощи</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer">
            <Landmark className="w-6 h-6 text-gray-400 mb-3" />
            <span className="text-[11px] font-bold text-dark-blue uppercase tracking-wider mb-1">Банковский перевод</span>
            <span className="text-[10px] text-gray-400">Реквизиты для перевода</span>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer">
            <QrCode className="w-6 h-6 text-gray-400 mb-3" />
            <span className="text-[11px] font-bold text-dark-blue uppercase tracking-wider mb-1">MBank QR</span>
            <span className="text-[10px] text-gray-400">Быстрая оплата</span>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer">
            <Wallet className="w-6 h-6 text-gray-400 mb-3" />
            <span className="text-[11px] font-bold text-dark-blue uppercase tracking-wider mb-1">PayPal</span>
            <span className="text-[10px] text-gray-400">Онлайн-перевод</span>
          </div>
          <Link href="/contact" className="p-6 border border-gray-100 rounded-xl flex flex-col items-center justify-center text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer">
            <Box className="w-6 h-6 text-gray-400 mb-3" />
            <span className="text-[11px] font-bold text-dark-blue uppercase tracking-wider mb-1">Передача вещей</span>
            <span className="text-[10px] text-gray-400">Свяжитесь с нами</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
