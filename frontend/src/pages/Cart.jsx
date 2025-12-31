import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <p className="text-gray-600 mb-8">Your cart is empty</p>
          <Link 
            to="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <CartItem key={`${item.id}-${Date.now()}`} item={item} />
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Total: ₹{getTotalPrice().toFixed(2)}</span>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800"
          >
            Clear Cart
          </button>
        </div>
        
        <div className="flex gap-4">
          <Link 
            to="/products"
            className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-center hover:bg-gray-300"
          >
            Continue Shopping
          </Link>
          <Link 
            to="/checkout"
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg text-center hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
