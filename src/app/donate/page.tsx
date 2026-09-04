export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-dark-blue mb-4">Donate to Project Sky</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Your donation helps us organize educational programs and humanitarian campaigns.</p>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <button className="w-full bg-accent text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-md">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}
