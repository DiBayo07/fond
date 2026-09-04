export default function Volunteer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-dark-blue mb-4 text-center">Become a Volunteer</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">Your time, skills and energy can make a real difference.</p>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-dark-blue mb-6 text-center">Volunteer Application</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="w-full p-3 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg" />
          </div>
          <button type="button" className="w-full bg-dark-blue text-white px-6 py-3 rounded-full font-bold mt-4">
            APPLY TO VOLUNTEER
          </button>
        </form>
      </div>
    </div>
  );
}
