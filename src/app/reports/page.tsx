export default function Reports() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-dark-blue mb-4 text-center">Transparency & Reports</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">We believe that every donation deserves transparency.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl border-l-4 border-sky-blue shadow-sm">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Fundraising Reports</h2>
          <p className="text-gray-700">Detailed breakdown of collected funds.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border-l-4 border-accent shadow-sm">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Volunteer Reports</h2>
          <p className="text-gray-700">Overview of volunteer activities.</p>
        </div>
      </div>
    </div>
  );
}
