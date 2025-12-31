import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'N/A';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your order. We'll deliver your rice soon!
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-sm text-gray-600 mb-2">Order ID:</p>
          <p className="text-xl font-semibold text-gray-900">{orderId}</p>
        </div>
        
        <div className="space-y-4 text-left bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-blue-900">What happens next?</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• We'll call you to confirm your order</li>
            <li>• Your rice will be prepared for delivery</li>
            <li>• We'll deliver within 2-4 hours</li>
            <li>• Pay on delivery (if COD selected)</li>
          </ul>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link 
            to="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Continue Shopping
          </Link>
          <Link 
            to="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;