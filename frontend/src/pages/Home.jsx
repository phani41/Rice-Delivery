import RiceList from '../components/rice/RiceList';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Product Grid */}
      <div className="py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <RiceList />
        </div>
      </div>

      {/* Special Offers Section */}
      <section className="bg-yellow-50 py-8 px-6">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 shadow">
            <h3 className="font-bold text-lg mb-2">🎉 10% OFF on Basmati Rice</h3>
            <p>Order 5kg or more and get 10% off on India Gate Basmati Rice.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 shadow">
            <h3 className="font-bold text-lg mb-2">🚚 Free Delivery</h3>
            <p>Enjoy free delivery on all orders above ₹500 within Bhimavaram.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 shadow">
            <h3 className="font-bold text-lg mb-2">💥 Combo Offer</h3>
            <p>Buy 2kg Sona Masoori + 2kg Brown Rice and save ₹20 instantly!</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-50 py-8 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Srinivas Rice Shop has been serving high-quality rice to families and businesses for over 15 years. 
            We specialize in premium varieties like Basmati, Sona Masoori, and Brown Rice.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Located in Bhimavaram, Andhra Pradesh – we proudly support local farmers and ensure our customers 
            get the best grains every time.
          </p>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="bg-green-50 py-8 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Methods</h2>
        <p className="mb-4">We accept the following secure and convenient payment options:</p>
        <div className="max-w-2xl mx-auto">
          <ul className="text-left space-y-2 mb-6">
            <li><strong>Google Pay / PhonePe / Paytm:</strong> +91 88975 63435</li>
            <li><strong>UPI ID:</strong> suvvarinaga@oksbi</li>
            <li><strong>Cash on Delivery (COD):</strong> Available in Bhimavaram area</li>
          </ul>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Scan QR Code to Pay:</p>
            <div className="inline-block bg-white p-4 rounded-lg shadow">
              <div className="w-48 h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                QR Code Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-8 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Contact Us</h2>
        <div className="max-w-2xl mx-auto mb-6">
          <p><strong>Address:</strong> SRKR, Bhimavaram, Chinamiram, Andhra Pradesh, India</p>
          <p><strong>Phone:</strong> +91 8897563435</p>
          <p><strong>Email:</strong> suvvarinaga@gmail.com</p>
        </div>
        <a 
          href="https://wa.me/918897563435?text=Hi%2C%20I%20want%20to%20inquire%20about%20your%20rice%20products." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Home;