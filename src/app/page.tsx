import Link from 'next/link';
import { Heart, BookOpen, Users, Package, GraduationCap, Globe, MapPin, Calendar, DollarSign, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="bg-white pt-10 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-[45%] pr-0 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark-blue mb-2 tracking-tight">
              Project Sky
            </h1>
            <p className="text-2xl text-sky-blue italic mb-6 font-serif tracking-wide">
              Supporting Kids & Youth
            </p>
            <p className="text-[13px] text-gray-500 mb-8 leading-relaxed max-w-sm">
              Благотворительный проект, направленный на поддержку детей и молодёжи Кыргызстана через помощь детским домам, образовательные занятия, волонтёрство и благотворительные инициативы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/donate" className="bg-accent text-white px-6 py-3 rounded text-center font-bold text-[11px] uppercase tracking-wider hover:bg-orange-500 transition shadow-sm">
                ПОЖЕРТВОВАТЬ
              </Link>
              <Link href="/volunteer" className="bg-green-btn text-white px-6 py-3 rounded text-center font-bold text-[11px] uppercase tracking-wider hover:bg-opacity-90 transition shadow-sm">
                СТАТЬ ВОЛОНТЁРОМ
              </Link>
              <Link href="/homes" className="border border-gray-200 text-gray-500 px-6 py-3 rounded text-center font-bold text-[11px] uppercase tracking-wider hover:border-gray-300 transition">
                УЗНАТЬ, КОМУ НУЖНА ПОМОЩЬ
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[55%] relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
              alt="Kids forming hearts"
              className="rounded-3xl object-cover h-[380px] w-full shadow-md"
            />
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <div className="container mx-auto max-w-6xl px-4 relative z-20 -mt-12">
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border border-gray-50">
          <FeatureItem icon={<Heart className="text-sky-blue w-6 h-6"/>} title="Поддержка детских домов" desc="Помощь организациям в соответствии с их потребностями." />
          <FeatureItem icon={<BookOpen className="text-orange-400 w-6 h-6"/>} title="Образовательные занятия" desc="Проведение занятий для детей в детских домах, которые поддерживает Project Sky." />
          <FeatureItem icon={<Users className="text-accent w-6 h-6"/>} title="Волонтёрство" desc="Привлечение людей, готовых помогать своим временем и навыками." />
          <FeatureItem icon={<Package className="text-green-btn w-6 h-6"/>} title="Благотворительные сборы" desc="Организация сборов на конкретные нужды." />
          <FeatureItem icon={<GraduationCap className="text-sky-blue w-6 h-6"/>} title="Образовательная поддержка" desc="Занятия для детей в детских домах (Не публичные курсы)." />
          <FeatureItem icon={<Globe className="text-orange-400 w-6 h-6"/>} title="Сообщество" desc="Объединяем людей ради общей цели и лучшего будущего." />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* COL 1: Urgent Needs & Help (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-dark-blue">Срочные потребности</h2>
                <Link href="/homes" className="text-[10px] text-gray-500 hover:text-sky-blue uppercase font-bold tracking-wider">СМОТРЕТЬ ВСЕ &rarr;</Link>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 pb-4">
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400&auto=format&fit=crop" alt="Детский дом" className="w-full h-32 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-dark-blue text-sm mb-1">Детский дом «Надежда»</h3>
                  <p className="text-[11px] text-gray-500 flex items-center mb-4"><MapPin className="w-3 h-3 mr-1 text-accent"/> Бишкек</p>
                  
                  <div className="flex items-start gap-1.5 mb-2">
                    <Activity className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0"/>
                    <p className="text-[11px] font-bold text-dark-blue">Срочно необходимо:</p>
                  </div>
                  <ul className="text-[11px] text-gray-500 list-disc pl-5 mb-5 space-y-1">
                    <li>школьные принадлежности</li>
                    <li>средства гигиены</li>
                    <li>одежда</li>
                  </ul>
                  <Link href="/donate" className="block w-full bg-accent text-white text-center py-2.5 rounded font-bold text-[11px] tracking-wider hover:bg-orange-500 transition">ПОМОЧЬ &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f4f2] p-5 rounded-xl border border-[#e1e9e5] mt-auto">
              <h2 className="text-sm font-bold text-dark-blue mb-2">Каждый может помочь</h2>
              <p className="text-[11px] text-gray-600 mb-4 leading-relaxed">Иногда помощь — это пожертвование, вещи, знания или несколько часов своего времени.</p>
              <div className="flex flex-col gap-2">
                <Link href="/donate" className="bg-accent text-white px-4 py-2.5 rounded font-bold text-[10px] uppercase tracking-wider hover:bg-orange-500 transition text-center">ПОЖЕРТВОВАТЬ</Link>
                <Link href="/volunteer" className="bg-green-btn text-white px-4 py-2.5 rounded font-bold text-[10px] uppercase tracking-wider hover:bg-opacity-90 transition text-center">СТАТЬ ВОЛОНТЁРОМ</Link>
              </div>
            </div>
          </div>

          {/* COL 2: Our Impact & Help cards (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold text-dark-blue mb-4">Наш вклад</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center h-28">
                  <Heart className="w-5 h-5 text-sky-blue mb-2"/>
                  <p className="text-xl font-bold text-dark-blue leading-none mb-1">1 250+</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-tight">детей получили<br/>помощь</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center h-28">
                  <Users className="w-5 h-5 text-accent mb-2"/>
                  <p className="text-xl font-bold text-dark-blue leading-none mb-1">330+</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-tight">волонтёров</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center h-28">
                  <Calendar className="w-5 h-5 text-gray-400 mb-2"/>
                  <p className="text-xl font-bold text-dark-blue leading-none mb-1">120+</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-tight">проведённых<br/>мероприятий</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-center h-28">
                  <DollarSign className="w-5 h-5 text-gray-400 mb-2"/>
                  <p className="text-xl font-bold text-dark-blue leading-none mb-1">2.45M+</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-tight">сом собрано</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
               <HelpItem icon={<Heart/>} title="Пожертвовать деньги" desc="Поддержать детский дом или Project Sky." />
               <HelpItem icon={<Package/>} title="Передать вещи" desc="Одежда, книги, канцтовары, средства гигиены..." />
               <HelpItem icon={<Users/>} title="Стать волонтёром" desc="Помогать в мероприятиях и деятельности..." />
               <HelpItem icon={<BookOpen/>} title="Помочь с занятиями" desc="Помогать в проведении занятий для детей..." />
            </div>
          </div>

          {/* COL 3: Recent Events & Transparency (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-dark-blue">Последние мероприятия</h2>
                <Link href="/reports" className="text-[10px] text-gray-500 hover:text-sky-blue uppercase font-bold tracking-wider">СМОТРЕТЬ ОТЧЁТЫ &rarr;</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <EventCard 
                  img="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=300&auto=format&fit=crop" 
                  title="Передача школьных принадлежностей" 
                  date="20 мая 2024" 
                  desc="Передали канцелярские товары детскому дому «Свет»." 
                />
                <EventCard 
                  img="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=300&auto=format&fit=crop" 
                  title="Образовательное занятие по английскому" 
                  date="15 мая 2024" 
                  desc="Провели занятие для детей из детского дома «Надежда»." 
                />
                <EventCard 
                  img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=300&auto=format&fit=crop" 
                  title="Благотворительный сбор на гигиену" 
                  date="10 мая 2024" 
                  desc="Собрали и передали средства гигиены 3 детским домам." 
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between mt-auto">
              <div className="max-w-sm">
                <h2 className="text-sm font-bold text-dark-blue mb-2">Прозрачность</h2>
                <p className="text-[11px] text-gray-500 mb-5 leading-relaxed">Мы стремимся открыто рассказывать о проведённой работе, собранных средствах и результатах помощи.</p>
                <Link href="/reports" className="bg-green-btn text-white px-6 py-2.5 rounded font-bold text-[10px] uppercase tracking-wider hover:bg-opacity-90 transition inline-block shadow-sm">
                  СМОТРЕТЬ ОТЧЁТЫ
                </Link>
              </div>
              <div className="hidden sm:block opacity-[0.03]">
                <Heart className="w-28 h-28" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col">
      <div className="mb-3">{icon}</div>
      <h4 className="font-bold text-dark-blue text-[11px] tracking-wide mb-1.5 leading-snug pr-2">{title}</h4>
      <p className="text-[10px] text-gray-500 leading-relaxed pr-2">{desc}</p>
    </div>
  );
}

function EventCard({ img, title, date, desc }: { img: string, title: string, date: string, desc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col pb-3 h-[260px]">
      <img src={img} alt={title} className="w-full h-28 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-bold text-dark-blue text-[12px] mb-1.5 leading-snug line-clamp-2">{title}</h4>
        <p className="text-[10px] text-gray-400 mb-2">{date}</p>
        <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-3">{desc}</p>
      </div>
    </div>
  );
}

function HelpItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-transparent flex flex-col h-[100px]">
      <div className="text-accent mb-2 w-5 h-5">{icon}</div>
      <h4 className="font-bold text-dark-blue text-[10px] mb-1 leading-tight">{title}</h4>
      <p className="text-[9px] text-gray-500 leading-relaxed line-clamp-3">{desc}</p>
    </div>
  );
}
