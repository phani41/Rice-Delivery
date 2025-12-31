import { useState, useEffect } from 'react';
import RiceCard from './RiceCard';
import { api } from '../../services/api';

const RiceList = () => {
  const [riceProducts, setRiceProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRiceProducts = async () => {
      try {
        const products = await api.getRiceProducts();
        setRiceProducts(products);
      } catch (err) {
        setError('Failed to load rice products');
        console.error('Error fetching rice products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRiceProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {riceProducts.map((rice) => (
        <RiceCard key={rice.id} rice={rice} />
      ))}
    </div>
  );
};

export default RiceList;