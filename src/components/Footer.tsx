import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Project Sky</h2>
          <p className="text-sky-blue italic mb-4">Supporting Kids & Youth</p>
          <p className="text-sm text-gray-300">
            A bridge between people who want to help and children & youth who need support.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/homes" className="hover:text-white">Children's Homes</Link></li>
            <li><Link href="/education" className="hover:text-white">Education</Link></li>
            <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
            <li><Link href="/reports" className="hover:text-white">Reports</Link></li>
            <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm text-gray-300 mb-2">Email: info@projectsky.kg</p>
          <p className="text-sm text-gray-300 mb-4">Social media: <a href="#" className="hover:text-white text-sky-blue">@projectsky</a></p>
          <Link href="/donate" className="inline-block bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition">
            DONATE
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-blue-900 text-center text-sm text-gray-400">
        &copy; 2026 Project Sky. All rights reserved.
      </div>
    </footer>
  );
}
