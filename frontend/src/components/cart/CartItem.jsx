import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-green-600 font-medium">₹{item.price}/kg</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <span className="bg-gray-100 px-4 py-1">{item.quantity}kg</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>
        
        <div className="text-right">
          <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;