import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-soft-blue py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-blue mb-4">
            Supporting Kids & Youth in Kyrgyzstan
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8">
            We connect people who want to help with children and youth who need support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate" className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg">
              DONATE
            </Link>
            <Link href="/volunteer" className="bg-dark-blue text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-900 transition shadow-lg">
              BECOME A VOLUNTEER
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-soft-blue text-center shadow-sm">
              <h3 className="text-xl font-bold text-dark-blue mb-3">Support</h3>
              <p className="text-foreground">Помощь детским домам и социальным учреждениям.</p>
            </div>
            <div className="p-6 rounded-2xl bg-soft-blue text-center shadow-sm">
              <h3 className="text-xl font-bold text-dark-blue mb-3">Education</h3>
              <p className="text-foreground">Бесплатные образовательные занятия для детей и молодёжи.</p>
            </div>
            <div className="p-6 rounded-2xl bg-soft-blue text-center shadow-sm">
              <h3 className="text-xl font-bold text-dark-blue mb-3">Volunteering</h3>
              <p className="text-foreground">Возможность стать волонтёром Project Sky.</p>
            </div>
            <div className="p-6 rounded-2xl bg-soft-blue text-center shadow-sm">
              <h3 className="text-xl font-bold text-dark-blue mb-3">Youth Development</h3>
              <p className="text-foreground">Развитие навыков, возможностей и самостоятельности молодёжи.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-dark-blue text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><p className="text-5xl font-bold text-sky-blue mb-2">15+</p><p className="text-gray-300">Organizations supported</p></div>
            <div><p className="text-5xl font-bold text-sky-blue mb-2">100+</p><p className="text-gray-300">Children & youth reached</p></div>
            <div><p className="text-5xl font-bold text-sky-blue mb-2">50+</p><p className="text-gray-300">Volunteers</p></div>
            <div><p className="text-5xl font-bold text-sky-blue mb-2">20+</p><p className="text-gray-300">Educational sessions</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
