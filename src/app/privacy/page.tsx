'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0e387a] transition">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[#0e387a] font-bold">Политика конфиденциальности</span>
        </div>

        {/* Header Banner */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-green-600" />
            Защита персональных данных
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#0e387a] mb-4 font-serif leading-tight">
            Политика конфиденциальности и обработки данных
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl">
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сайта 
            <strong> projectsky.kg</strong>, принадлежащего благотворительному проекту «Project Sky» (ИП Токтоналиева А. Т.), в соответствии с Законом Кыргызской Республики «Об информации персонального характера».
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400">
            <span>Редакция от: 28 октября 2026 г.</span>
            <span>•</span>
            <span>Город: Бишкек, Кыргызская Республика</span>
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">1</span>
              Какие данные мы собираем
            </h2>
            <div className="space-y-2 pl-8">
              <p>Мы собираем только ту информацию, которую вы предоставляете добровольно при использовании сайта:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>При пожертвовании:</strong> имя, адрес электронной почты, сумму и назначение платежа (для отправки чека и отчетов о расходовании средств).</li>
                <li><strong>При заполнении анкеты волонтёра:</strong> ФИО, город, контактный телефон, Telegram/WhatsApp, информацию о навыках и опыте.</li>
                <li><strong>Технические данные:</strong> анонимные данные файлов cookie, IP-адрес и тип браузера для обеспечения стабильной работы и защиты сайта.</li>
              </ul>
              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-[#0e387a] mt-3">
                <strong>Важно о банковских картах:</strong> Сайт <strong>не собирает, не обрабатывает и не сохраняет</strong> полные номера карт, срок действия или CVV/CVC-коды. Все платежные транзакции осуществляются исключительно на защищенных страницах лицензированных банков-эквайеров и платежных систем, сертифицированных по стандарту безопасности PCI-DSS.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">2</span>
              Цели обработки информации
            </h2>
            <div className="space-y-2 pl-8">
              <p>Персональные данные используются исключительно в следующих целях:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Учет добровольных пожертвований и выполнение обязательств перед Жертвователями;</li>
                <li>Отправка подтверждений платежей и публичных отчетов о благотворительной деятельности;</li>
                <li>Связь с волонтерами для координации поездок в детские дома и благотворительных акций;</li>
                <li>Предотвращение мошеннических действий и обеспечение информационной безопасности.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">3</span>
              Защита и хранение данных
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                3.1. Мы принимаем все необходимые организационные и технические меры для защиты персональных данных пользователей от неправомерного доступа, уничтожения, изменения или распространения.
              </p>
              <p>
                3.2. Передача данных по сети осуществляется с применением протокола шифрования SSL/TLS.
              </p>
              <p>
                3.3. Мы <strong>ни при каких обстоятельствах не продаем, не передаем и не сдаем в аренду</strong> персональные данные третьим лицам, за исключением случаев, прямо предусмотренных законодательством Кыргызской Республики.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">4</span>
              Права пользователей
            </h2>
            <div className="space-y-2 pl-8">
              <p>Пользователь имеет право в любой момент:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Запросить информацию о том, какие его персональные данные хранятся;</li>
                <li>Потребовать уточнения, блокировки или полного удаления своих данных;</li>
                <li>Отозвать свое согласие на обработку персональных данных, направив письмо на <a href="mailto:info@projectsky.kg" className="text-[#f26a21] font-semibold hover:underline">info@projectsky.kg</a>.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">5</span>
              Контакты оператора данных
            </h2>
            <div className="space-y-1.5 pl-8 text-gray-600">
              <p><strong>Оператор:</strong> ИП Токтоналиева А. Т. (Project Sky)</p>
              <p><strong>Адрес:</strong> Кыргызская Республика, г. Бишкек</p>
              <p><strong>Телефон:</strong> +996 709 809 017</p>
              <p><strong>Email:</strong> <a href="mailto:info@projectsky.kg" className="text-[#f26a21] font-semibold hover:underline">info@projectsky.kg</a></p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0e387a] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
