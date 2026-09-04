import Link from 'next/link';

export default function Homes() {
  const homesList = [
    { id: 1, name: 'Детский дом «Надежда»', location: 'Bishkek', needs: ['School supplies', 'Hygiene products'] },
    { id: 2, name: 'Детский дом «Свет»', location: 'Chuy', needs: ['Winter clothing', 'Food'] },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark-blue mb-4">Children's Homes & Organizations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore children's homes and organizations across Kyrgyzstan and find out how you can help.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {homesList.map((home) => (
          <div key={home.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-dark-blue mb-2">{home.name}</h3>
            <p className="text-sm text-gray-500 mb-4">📍 {home.location}</p>
            <div className="flex gap-4 mt-auto">
              <Link href="/donate" className="w-full text-center bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 transition">
                DONATE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
