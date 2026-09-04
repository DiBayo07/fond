import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-dark-blue">Project Sky</span>
          <span className="text-xs text-sky-blue italic">Supporting Kids & Youth</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-foreground">
          <Link href="/about" className="hover:text-sky-blue">ABOUT US</Link>
          <Link href="/homes" className="hover:text-sky-blue">CHILDREN'S HOMES</Link>
          <Link href="/volunteer" className="hover:text-sky-blue">VOLUNTEER</Link>
          <Link href="/reports" className="hover:text-sky-blue">REPORTS</Link>
          <Link href="/contact" className="hover:text-sky-blue">CONTACT</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/donate" className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition">
            DONATE
          </Link>
          <Link href="/volunteer" className="bg-dark-blue text-white px-6 py-2 rounded-full font-bold hover:bg-blue-900 transition">
            BECOME A VOLUNTEER
          </Link>
        </div>

        <button className="md:hidden p-2 text-dark-blue">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
