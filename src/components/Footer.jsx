export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6  text-center py-4">
      <p>
        © {year} ফ্রি রিওয়ার্ড.COM
      </p>
    </footer>
  );
}
