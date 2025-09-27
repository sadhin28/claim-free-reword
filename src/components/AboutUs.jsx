export default function About() {
  return (
    <div className="space-y-4 flex flex-col justify-center items-center min-h-[calc(100vh-130px)] text-white px-6">
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <p className="py-10 text-justify px-10 rounded-2xl hover:shadow-2xl bg-gray-200/70  text-gray-700 border-l-4 border-blue-500 pl-4 border p-5 max-w-3xl mx-auto">
        We believe everyone deserves some free rewards online.
        That's why we created this platform in collaboration with AdBlueMedia and other trusted partner networks.
      </p>
    </div>
  );
}
