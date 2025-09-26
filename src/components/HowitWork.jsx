export default function HowItWorks() {
  const steps = [
   "Open a free account",
   "Choose and complete the offer",
   "Claim your rewards instantly",
  ];

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-6">How It Works</h1>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="p-4 border rounded shadow">
            {index + 1}. {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
