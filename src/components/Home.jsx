export default function Home() {
  return (
    <div className="py-5 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6">
      {/* Hero Section */}
      <div className="mt-20 text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Unlock Free Rewards 🎁
        </h1>
        <p className="text-lg md:text-xl text-gray-100">
          Spin the wheel, complete offers, and grab exclusive rewards instantly.
        </p>
        <div className="space-x-4">
          <a
            href="/offers"
            className="px-6 py-3 bg-green-500 rounded-lg shadow-lg font-medium hover:bg-green-600 transition"
          >
            Get Started
          </a>
          <a
            href="/how-it-works"
            className="px-6 py-3 bg-white text-blue-700 rounded-lg shadow-lg font-medium hover:bg-gray-200 transition"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        <div className="p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2">💡 Easy to Use</h2>
          <p className="text-gray-200">
            Just sign up, choose an offer, and claim your reward effortlessly.
          </p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2">⚡ Instant Rewards</h2>
          <p className="text-gray-200">
            Complete offers or spin the wheel and get rewards instantly.
          </p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2">🔒 Secure & Trusted</h2>
          <p className="text-gray-200">
            We partner with trusted networks like AdBlueMedia to ensure safety.
          </p>
        </div>
      </div>

      {/* Preview Offers Section */}
      <div className="mt-20 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-6">🔥 Hot Offers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/10 rounded-xl shadow-lg text-left hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Spin & Win $5</h3>
            <p className="text-gray-200">
              Spin the lucky wheel and claim exciting prizes instantly.
            </p>
            <a
              href="/offers"
              className="mt-3 inline-block px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            >
              Claim Now
            </a>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow-lg text-left hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Complete a Survey</h3>
            <p className="text-gray-200">
              Share your opinion and earn instant gift cards & rewards.
            </p>
            <a
              href="/offers"
              className="mt-3 inline-block px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            >
              Claim Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
