import { Link } from 'react-router-dom';
import RiceList from '../components/rice/RiceList';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Fresh Rice Delivered to Your Doorstep
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Premium quality rice from Bhimavaram's trusted suppliers
        </p>
        <Link 
          to="/products"
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Shop Now
        </Link>
      </div>

      {/* Delivery Areas */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          We Deliver To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {['Two Town', 'One Town', 'SRKR College', 'Housing Board', 'Gunupudi'].map((area) => (
            <div key={area} className="bg-green-50 p-4 rounded-lg">
              <span className="text-green-800 font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Rice Varieties
        </h2>
        <RiceList />
      </div>
    </div>
  );
};

export default Home;