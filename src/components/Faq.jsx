export default function FAQ() {
  const faqs = [
    {
    q: "Is it free?",
    a: "Yes, all our offers are completely free.",
    },
    {
     q: "When will I get my reward?",
a: "Usually immediately, sometimes within 24 hours.",
    },
  ];

  return (
    <div>
      <h1 className=" text-center text-3xl font-bold mb-6">FAQ</h1>
      {faqs.map((item, index) => (
        <div key={index} className="hover:shadow-2xl p-4 border-green-400 bg-gray-200/50 border rounded mb-3">
          <h2 className="font-semibold">{item.q}</h2>
          <p className="text-gray-800">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
