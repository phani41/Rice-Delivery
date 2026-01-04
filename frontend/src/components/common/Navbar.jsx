import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-green-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold mb-2">SRINIVASA RICE</h1>
        <p className="text-lg">Premium Quality Rice - Fresh & Affordable</p>
      </header>
      <nav className="bg-gray-200 py-3 text-center shadow-md">
        <div className="flex justify-center space-x-8">
          <Link to="/" className="text-green-600 font-bold hover:text-green-800 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-green-600 font-bold hover:text-green-800 transition-colors">
            Products
          </Link>
          <Link to="/about" className="text-green-600 font-bold hover:text-green-800 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-green-600 font-bold hover:text-green-800 transition-colors">
            Contact
          </Link>
          <Link to="/cart" className="text-green-600 font-bold hover:text-green-800 transition-colors">
            Cart ({getTotalItems()})
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
