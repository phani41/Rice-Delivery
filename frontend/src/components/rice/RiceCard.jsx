import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const RiceCard = ({ rice }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: rice.id,
      name: rice.name,
      price: rice.price,
      quantity: quantity,
      image: rice.image
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={rice.image} 
        alt={rice.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{rice.name}</h3>
        <p className="text-gray-600 mb-4">{rice.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">₹{rice.price}/kg</span>
          <span className="text-sm text-gray-500">Stock: {rice.stock}kg</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 rounded-l"
            >
              -
            </button>
            <span className="bg-gray-100 px-4 py-1">{quantity}kg</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 rounded-r"
            >
              +
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={rice.stock === 0}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {rice.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiceCard;