import Link from "next/link";
import { Cloud, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Cloud className="text-sky-blue h-10 w-10" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-dark-blue tracking-tight leading-none uppercase font-serif">Project Sky</span>
            <span className="text-[11px] text-sky-blue italic tracking-wide mt-1">Supporting Kids & Youth</span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-[12px] font-bold text-dark-blue uppercase tracking-wider">
          <Link href="/" className="hover:text-accent">ГЛАВНАЯ</Link>
          <Link href="/about" className="hover:text-accent">О ПРОЕКТЕ</Link>
          <Link href="/homes" className="hover:text-accent text-sky-blue border-b-2 border-sky-blue pb-1">ДЕТСКИЕ ДОМА</Link>
          <Link href="/volunteer" className="hover:text-accent">ВОЛОНТЁРУ</Link>
          <Link href="/reports" className="hover:text-accent">ОТЧЁТЫ</Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            <button className="text-dark-blue border-b border-dark-blue">RU</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-dark-blue transition">KG</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-dark-blue transition">EN</button>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/donate" className="bg-accent text-white px-5 py-2.5 rounded font-bold text-[11px] uppercase tracking-wider hover:bg-orange-500 transition shadow-sm">
              ПОЖЕРТВОВАТЬ
            </Link>
            <Link href="/contact" className="border border-gray-200 text-dark-blue px-5 py-2.5 rounded font-bold text-[11px] uppercase tracking-wider hover:border-gray-300 transition">
              КОНТАКТЫ
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-dark-blue">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
