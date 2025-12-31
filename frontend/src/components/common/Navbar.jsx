import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-green-200">
            Bhimavaram Rice Delivery
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover:text-green-200 transition-colors">
              Products
            </Link>
            <Link to="/cart" className="hover:text-green-200 transition-colors flex items-center">
              Cart ({getTotalItems()})
            </Link>
            <Link to="/admin" className="hover:text-green-200 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
