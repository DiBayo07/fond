'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Landmark, HeartHandshake } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0e387a] transition">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[#0e387a] font-bold">Публичная оферта</span>
        </div>

        {/* Header Banner */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0e387a] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FileText size={14} className="text-[#f26a21]" />
            Официальный документ
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#0e387a] mb-4 font-serif leading-tight">
            Публичная оферта о добровольном благотворительном пожертвовании
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl">
            Настоящий документ является официальным предложением (публичной офертой) благотворительного проекта 
            <strong> «Project Sky»</strong> в лице <strong>ИП Токтоналиева А. Т.</strong> заключить договор добровольного пожертвования на условиях, изложенных ниже, в соответствии с Гражданским кодексом Кыргызской Республики.
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
              Общие положения
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                1.1. В соответствии со статьями Гражданского кодекса Кыргызской Республики данный документ признается официальной публичной офертой.
              </p>
              <p>
                1.2. <strong>Получатель пожертвования</strong> — Индивидуальный предприниматель Токтоналиева А. Т., действующая в рамках благотворительного проекта «Project Sky» (далее — «Получатель»).
              </p>
              <p>
                1.3. <strong>Жертвователь (Благотворитель)</strong> — любое дееспособное физическое или юридическое лицо, совершившее акцепт настоящей оферты путем внесения добровольного пожертвования.
              </p>
              <p>
                1.4. <strong>Сайт проекта</strong> — официальный веб-ресурс в сети Интернет по адресу: <Link href="/" className="text-[#f26a21] hover:underline font-semibold">https://projectsky.kg</Link>.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">2</span>
              Предмет договора
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                2.1. Жертвователь добровольно и безвозмездно передает Получателю денежные средства в качестве благотворительного пожертвования на осуществление целей проекта «Project Sky».
              </p>
              <p>
                2.2. Средства направляются на:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Материальную, гуманитарную, медицинскую и образовательную помощь детям-сиротам и детям, оставшимся без попечения родителей в детских домах и интернатах Кыргызской Республики;</li>
                <li>Оснащение и ремонт детских комнат, приобретение теплой одежды, обуви, развивающих материалов, школьных принадлежностей и оргтехники;</li>
                <li>Организацию развивающих, спортивных и культурных мероприятий для детей.</li>
              </ul>
              <p>
                2.3. Пожертвование признается благотворительным и не предполагает встречного обязательства или материальной выгоды для Жертвователя.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">3</span>
              Порядок заключения договора (Акцепт оферты)
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                3.1. Факт внесения Жертвователем денежных средств любым из доступных способов (через форму онлайн-оплаты на сайте, банковским переводом, по QR-коду либо через платёжные терминалы/агрегаторы) является полным и безоговорочным акцептом условий настоящей Оферты.
              </p>
              <p>
                3.2. Договор пожертвования считается заключенным в письменной форме с момента успешного зачисления денежных средств на расчетный счет Получателя.
              </p>
              <p>
                3.3. Сумма пожертвования определяется Жертвователем самостоятельно.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">4</span>
              Способы внесения пожертвования и безопасность платежей
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                4.1. Пожертвование может быть осуществлено следующими способами:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Банковскими картами Visa, MasterCard, Элкарт через сертифицированный платежный шлюз интернет-эквайринга;</li>
                <li>Через мобильное приложение MBank, Optima, Бакай, О!Деньги и других банков КР по QR-коду или расчетному счету;</li>
                <li>Прямым межбанковским переводом по банковским реквизитам Получателя.</li>
              </ul>
              <p>
                4.2. <strong>Безопасность транзакций:</strong> Все операции с банковскими картами осуществляются через защищенные каналы связи с использованием шифрования SSL/TLS и технологии 3D-Secure. Сайт <strong>не собирает, не обрабатывает и не сохраняет данные банковских карт</strong> (номер карты, срок действия, CVV/CVC коды) — обработка происходит строго на стороне авторизованного банка-эквайера или лицензированного платёжного агрегатора.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">5</span>
              Отчетность и прозрачность
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                5.1. Получатель обязуется использовать все полученные пожертвования строго по целевому назначению.
              </p>
              <p>
                5.2. Информация о реализованных инициативах, фотоотчеты и финансовая отчетность регулярно публикуются в открытом доступе на сайте проекта в разделе <Link href="/reports" className="text-[#f26a21] hover:underline font-semibold">«Отчёты» (projectsky.kg/reports)</Link>.
              </p>
              <p>
                5.3. Жертвователь вправе запросить информацию о целевом использовании направленных им средств по контактам Получателя.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-[#0e387a] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0e387a] text-xs flex items-center justify-center font-bold">6</span>
              Порядок возврата пожертвований
            </h2>
            <div className="space-y-2 pl-8">
              <p>
                6.1. В соответствии с законодательством Кыргызской Республики о благотворительности, переданные средства не подлежат возврату, за исключением случаев ошибочного перевода либо невозможности использования средств на заявленные благотворительные цели.
              </p>
              <p>
                6.2. В случае ошибочного платежа Жертвователь может направить письменное заявление на электронную почту <a href="mailto:info@projectsky.kg" className="text-[#f26a21] font-semibold hover:underline">info@projectsky.kg</a> в течение 7 календарных дней с момента перечисления с приложением квитанции об оплате.
              </p>
            </div>
          </section>

          {/* Section 7 - Requisites */}
          <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-bold text-[#0e387a] mb-4 flex items-center gap-2">
              <Landmark size={18} className="text-[#f26a21]" />
              7. Официальные реквизиты Получателя
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-gray-600">
              <div className="space-y-1.5">
                <p><strong>Наименование:</strong> ИП Токтоналиева А. Т.</p>
                <p><strong>Проект:</strong> Project Sky (Благотворительность)</p>
                <p><strong>Банк:</strong> ОАО «Коммерческий банк КЫРГЫЗСТАН» (MBank)</p>
                <p><strong>БИК:</strong> 103001</p>
              </div>
              <div className="space-y-1.5">
                <p><strong>Расчетный счет (KGS):</strong> <span className="text-[#0e387a] font-bold">1033020001504962</span></p>
                <p><strong>Адрес:</strong> Кыргызстан, г. Бишкек</p>
                <p><strong>Телефон:</strong> +996 709 809 017</p>
                <p><strong>Email:</strong> info@projectsky.kg</p>
              </div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-[#f26a21] hover:bg-[#d95813] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm"
          >
            <HeartHandshake size={16} />
            Перейти к пожертвованию
          </Link>
        </div>
      </div>
    </div>
  );
}
