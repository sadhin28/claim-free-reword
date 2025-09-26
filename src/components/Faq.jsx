export default function FAQ() {
  const faqs = [
    {
      q: "এটা কি ফ্রি?",
      a: "হ্যাঁ, আমাদের সব অফার সম্পূর্ণ ফ্রি।",
    },
    {
      q: "রিওয়ার্ড কবে পাব?",
      a: "সাধারণত সাথে সাথেই, কখনো ২৪ ঘন্টার মধ্যে।",
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
