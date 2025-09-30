export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 text-white px-6  text-center py-4">
      <p>
      © {year} Free Reward Hub .Com
      </p>
    </footer>
  );
}
