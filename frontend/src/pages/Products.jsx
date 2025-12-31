import RiceList from '../components/rice/RiceList';

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Our Rice Products
        </h1>
        <p className="text-lg text-gray-600">
          Choose from our premium selection of rice varieties
        </p>
      </div>
      
      <RiceList />
    </div>
  );
};

export default Products;