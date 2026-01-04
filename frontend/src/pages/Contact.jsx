import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    order: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = 'Rice Order Inquiry';
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AOrder Details: ${formData.order}`;
    window.location.href = `mailto:suvvarinaga@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-600 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Address:</h3>
                <p className="text-gray-600">SRKR, Bhimavaram, Chinamiram, Andhra Pradesh, India</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Phone:</h3>
                <p className="text-gray-600">+91 8897563435</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Email:</h3>
                <p className="text-gray-600">suvvarinaga@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/918897563435?text=Hi%2C%20I%20want%20to%20inquire%20about%20your%20rice%20products." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Payment Methods:</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Google Pay / PhonePe / Paytm:</strong> +91 88975 63435</li>
                <li><strong>UPI ID:</strong> suvvarinaga@oksbi</li>
                <li><strong>Cash on Delivery:</strong> Available in Bhimavaram area</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-600 mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                  Order Details *
                </label>
                <textarea
                  id="order"
                  name="order"
                  value={formData.order}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Please describe your rice requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* QR Code Section */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-green-600 mb-4">Pay via QR Code</h2>
          <p className="text-gray-600 mb-4">Scan the QR code below to make payment:</p>
          <div className="inline-block bg-gray-100 p-4 rounded-lg">
            <div className="w-48 h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              QR Code Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;