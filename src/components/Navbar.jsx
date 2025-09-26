
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
       Free Reward Hub 🎁
      </Link>

      {/* Menu */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/offers" className="hover:text-gray-200">
            Offers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
