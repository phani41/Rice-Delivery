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
      image: rice.image,
      weight: rice.weight
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <img 
        src={rice.image} 
        alt={rice.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-600 mb-2">{rice.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{rice.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-800">₹{rice.price} / {rice.weight}</span>
          <span className="text-sm text-gray-500">Stock: {rice.stock}</span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center border rounded">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1 border-x">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={rice.stock === 0}
          className="w-full bg-orange-400 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {rice.stock === 0 ? 'Out of Stock' : 'ORDER NOW'}
        </button>
      </div>
    </div>
  );
};

export default RiceCard;