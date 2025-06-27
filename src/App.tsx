import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import { Product } from './types';
import { useCart } from './context/CartContext';
import { openWhatsApp } from './utils/whatsapp';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  
  const { items, getTotalPrice, clearCart } = useCart();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleCheckout = () => {
    if (items.length > 0) {
      openWhatsApp(items, getTotalPrice());
      clearCart();
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onProductSelect={handleProductSelect} />;
      case 'products':
        return <Products onProductSelect={handleProductSelect} />;
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-100 mb-6">
                  <img 
                    src="https://yt3.googleusercontent.com/lOZ2T66sWR4FIjYLMPDDX0evru1Eb8zCWhk3x9r4C4q9lKn5IbS8PvSJaJig2_FvFVfTKPs8=s900-c-k-c0x00ffffff-no-rj"
                    alt="Dompers Boards Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-4">
                  About Dompers Boards
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-roboto max-w-3xl mx-auto leading-relaxed">
                  Leading supplier of high-quality boards and doors, serving contractors, carpenters, 
                  interior designers, and homeowners across Kenya.
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                {/* Story Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-6">Our Story</h2>
                  <div className="space-y-4 text-gray-600 font-roboto leading-relaxed">
                    <p>
                      At Dompers Boards, we are a leading supplier of high-quality boards and doors, serving contractors, 
                      carpenters, interior designers, and homeowners across Kenya. With a commitment to quality, affordability, 
                      and customer satisfaction, we provide the best materials for furniture, construction, and interior design projects.
                    </p>
                    <p>
                      Our journey began with a simple mission: to provide solutions that bring your projects to life! 
                      We don't just sell boards and doors—we provide comprehensive solutions backed by expertise and dedication.
                    </p>
                    <p>
                      Our commitment to sustainable and responsible sourcing practices ensures that you're not only getting quality 
                      materials but also supporting eco-friendly initiatives that benefit our environment and communities.
                    </p>
                  </div>
                </div>

                {/* Mission & Vision */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-4">Our Mission</h3>
                    <p className="font-roboto leading-relaxed">
                      To provide premium quality boards and doors at affordable prices while delivering exceptional 
                      customer service and supporting sustainable practices across Kenya.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-4">Our Vision</h3>
                    <p className="font-roboto leading-relaxed">
                      To be Kenya's most trusted supplier of construction materials, known for quality, 
                      reliability, and innovation in serving our customers' diverse needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat text-center mb-8">What We Offer</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Boards */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <div className="w-6 h-6 bg-primary-600 rounded"></div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-montserrat">Boards</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        'MDF Boards (Various finishes)',
                        'Chipboards',
                        'Block-boards',
                        'Plywood',
                        'Marine Boards',
                        'Ceiling Boards',
                        'Hard Boards',
                        'Bluegum Timber'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 font-roboto text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Doors */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <div className="w-6 h-8 bg-primary-600 rounded border-2 border-primary-300"></div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-montserrat">Doors</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        'Melamine Doors',
                        'Panel Doors',
                        'Custom Orders Available'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 font-roboto">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-primary-800 font-roboto text-sm">
                        <strong>Custom Orders:</strong> We specialize in creating doors tailored to your exact specifications and design requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat text-center mb-8">Why Choose Dompers Boards?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: 'trophy',
                      title: 'Premium Quality',
                      description: 'Our products are carefully selected to ensure durability and reliability.',
                      color: 'from-blue-500 to-blue-600'
                    },
                    {
                      icon: 'dollar-sign',
                      title: 'Affordable Prices',
                      description: 'Get the best value without compromising on quality.',
                      color: 'from-green-500 to-green-600'
                    },
                    {
                      icon: 'map-pin',
                      title: 'Wide Availability',
                      description: 'Find us in Nakuru, Nyahururu, Narok, Kisii & Bomet for convenient access.',
                      color: 'from-purple-500 to-purple-600'
                    },
                    {
                      icon: 'handshake',
                      title: 'Excellent Service',
                      description: 'We are dedicated to helping you find the right materials for your needs.',
                      color: 'from-orange-500 to-orange-600'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full text-white mb-4`}>
                        {feature.icon === 'trophy' && <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-yellow-500 rounded-full"></div></div>}
                        {feature.icon === 'dollar-sign' && <div className="text-2xl font-bold">$</div>}
                        {feature.icon === 'map-pin' && <div className="w-2 h-6 bg-white rounded-full"></div>}
                        {feature.icon === 'handshake' && <div className="w-6 h-4 bg-white rounded"></div>}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-3">{feature.title}</h3>
                      <p className="text-gray-600 font-roboto text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability */}
              <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-6 sm:p-8 lg:p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-300 rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
                    Sustainable & Responsible
                  </h2>
                  <p className="text-lg text-gray-700 font-roboto max-w-3xl mx-auto leading-relaxed">
                    We support eco-friendly and responsible sourcing practices, ensuring that our materials 
                    not only meet your quality standards but also contribute to environmental sustainability. 
                    When you choose Dompers Boards, you're making a choice that benefits both your project and our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 sm:px-8 py-8 sm:py-12">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white font-montserrat text-center mb-4">Contact Us</h1>
                  <p className="text-primary-100 font-roboto text-center max-w-2xl mx-auto">
                    We're here to help you with all your board and door needs. Reach out to us through any of our convenient locations.
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                      {/* Business Hours */}
                      <div className="bg-primary-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-primary-900 font-montserrat mb-4 flex items-center">
                          <div className="w-6 h-6 border-2 border-primary-600 rounded-full mr-3 flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          </div>
                          Business Hours
                        </h3>
                        <p className="text-primary-800 font-roboto text-lg">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      </div>

                      {/* Locations */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900 font-montserrat flex items-center">
                          <div className="w-6 h-6 bg-primary-600 rounded-full mr-3 flex items-center justify-center">
                            <div className="w-2 h-4 bg-white rounded-full"></div>
                          </div>
                          Our Locations
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                          {[
                            { city: 'Nakuru', address: 'Freehold, next to Abbey Resort', phone: '0794817881', badge: 'Main Branch', color: 'primary' },
                            { city: 'Nyahururu', address: 'Opposite Thompson Falls, next to Hippos Hotel', phone: '0723616962', badge: 'Service Center', color: 'green' },
                            { city: 'Narok', address: 'Along Nyawira Road', phone: '0727872217', badge: 'Sales Office', color: 'blue' },
                            { city: 'Kisii', address: 'Next to Hema Hospital', phone: '0727251691', badge: 'Distribution Point', color: 'purple' },
                            { city: 'Bomet', address: 'Matui Plaza', phone: '0726771225', badge: 'Service Center', color: 'orange' }
                          ].map((location, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-gray-900 font-montserrat text-lg">{location.city}</h4>
                                <span className={`text-xs bg-${location.color}-100 text-${location.color}-800 px-3 py-1 rounded-full font-roboto font-medium`}>
                                  {location.badge}
                                </span>
                              </div>
                              <p className="text-gray-600 font-roboto mb-3 text-sm">{location.address}</p>
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <a href={`tel:${location.phone}`} className="font-semibold text-primary-600 font-roboto hover:text-primary-700 transition-colors">
                                  {location.phone}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Contact */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-bold text-gray-900 font-montserrat mb-4 text-lg">Quick Contact</h4>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 font-roboto">WhatsApp</p>
                              <a href="https://wa.me/254794817881" className="text-green-600 font-roboto hover:text-green-700 transition-colors">
                                0794817881
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-6 h-4 bg-blue-600 rounded"></div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 font-roboto">Email</p>
                              <a href="mailto:info@dompersboards.co.ke" className="text-blue-600 font-roboto hover:text-blue-700 transition-colors">
                                info@dompersboards.co.ke
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-4 flex items-center">
                          <div className="w-6 h-6 bg-primary-600 rounded mr-3"></div>
                          Find Us - Nakuru Main Branch
                        </h3>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.230813154405!2d36.031108007916785!3d-0.29780629062717434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dfbc6888269%3A0xedb35dd9d12becb3!2sDompers%20Boards!5e0!3m2!1sen!2ske!4v1750972432701!5m2!1sen!2ske" 
                            width="100%" 
                            height="400" 
                            style={{border:0}} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                          ></iframe>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div className="bg-primary-50 p-6 rounded-xl">
                        <h4 className="font-bold text-primary-900 font-montserrat mb-4 text-lg">Follow Us</h4>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.facebook.com/dompersboards" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                          >
                            <div className="w-6 h-6 bg-white rounded"></div>
                          </a>
                          <a 
                            href="https://www.instagram.com/dompersboards/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                          >
                            <div className="w-6 h-6 bg-white rounded-full border-2 border-pink-600"></div>
                          </a>
                          <a 
                            href="https://x.com/DompersBoards" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                          >
                            <div className="w-6 h-6 bg-white rounded"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={handleNavigate} onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onCartToggle={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />
      <ScrollToTop />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
      
      <ProductDetail
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;