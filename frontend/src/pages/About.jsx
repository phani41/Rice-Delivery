const About = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-8">About Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Srinivas Rice Shop has been serving high-quality rice to families and businesses for over 15 years. 
            We specialize in premium varieties like Basmati, Sona Masoori, and Brown Rice. Our goal is to provide 
            fresh, affordable rice with a focus on customer satisfaction and timely delivery.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Located in Bhimavaram, Andhra Pradesh – we proudly support local farmers and ensure our customers 
            get the best grains every time. We believe in quality, trust, and building long-lasting relationships 
            with our valued customers.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌾</div>
              <h3 className="font-bold text-green-600">Premium Quality</h3>
              <p className="text-sm text-gray-600">Only the finest rice varieties</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-bold text-green-600">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Quick delivery across Bhimavaram</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-green-600">Best Prices</h3>
              <p className="text-sm text-gray-600">Competitive and fair pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;