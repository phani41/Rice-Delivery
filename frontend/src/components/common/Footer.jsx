const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bhimavaram Rice Delivery</h3>
            <p className="text-gray-300">
              Fresh, quality rice delivered to your doorstep in Bhimavaram.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Delivery Areas</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Two Town</li>
              <li>One Town</li>
              <li>SRKR College Area</li>
              <li>Housing Board</li>
              <li>Gunupudi</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Phone: +91 XXXXX XXXXX<br />
              Email: info@bhimavaramrice.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Bhimavaram Rice Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;