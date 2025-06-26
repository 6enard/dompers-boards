import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
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
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 font-montserrat mb-6">About Dompers Boards</h1>
                <div className="prose prose-lg font-roboto">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Dompers Boards, we are a leading supplier of high-quality boards and doors, serving contractors, 
                    carpenters, interior designers, and homeowners across Kenya. With a commitment to quality, affordability, 
                    and customer satisfaction, we provide the best materials for furniture, construction, and interior design projects.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-gray-900 font-montserrat mb-4">What We Offer</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 font-montserrat mb-2">Boards:</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• MDF Boards (Various finishes)</li>
                        <li>• Chipboards</li>
                        <li>• Block-boards</li>
                        <li>• Plywood</li>
                        <li>• Marine Boards</li>
                        <li>• Ceiling Boards</li>
                        <li>• Hard Boards</li>
                        <li>• Bluegum Timber</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-montserrat mb-2">Doors:</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Melamine Doors</li>
                        <li>• Panel Doors</li>
                        <li>• Custom Orders</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 font-montserrat mb-4">Why Choose Dompers Boards?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-900 mb-2">Premium Quality</h4>
                      <p className="text-primary-700 text-sm">Our products are carefully selected to ensure durability and reliability.</p>
                    </div>
                    <div className="bg-wood-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-wood-900 mb-2">Affordable Prices</h4>
                      <p className="text-wood-700 text-sm">Get the best value without compromising on quality.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Wide Availability</h4>
                      <p className="text-green-700 text-sm">Find us in Nakuru, Nyahururu, Narok, Kisii & Bomet for convenient access.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Excellent Customer Service</h4>
                      <p className="text-blue-700 text-sm">We are dedicated to helping you find the right materials for your needs.</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    At Dompers Boards, we don't just sell boards and doors—we provide solutions that bring your projects to life! 
                    Our commitment to sustainable and responsible sourcing practices ensures that you're not only getting quality 
                    materials but also supporting eco-friendly initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 font-montserrat mb-8">Contact Us</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-montserrat mb-4">Get in Touch</h3>
                      <p className="text-gray-600 font-roboto mb-6">
                        We're here to help you with all your board and door needs. Contact us through any of the following methods:
                      </p>
                    </div>
                    
                    {/* Business Hours */}
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary-900 font-montserrat mb-3">Business Hours</h4>
                      <p className="text-primary-800 font-roboto">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    </div>

                    {/* Locations with Phone Numbers */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-gray-900 font-montserrat">Our Locations</h4>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 font-montserrat">Nakuru</h5>
                            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full font-roboto">
                              Main Branch
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-roboto mb-2">Freehold, next to Abbey Resort</p>
                          <p className="text-sm font-medium text-primary-600 font-roboto">📞 0794817881</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 font-montserrat">Nyahururu</h5>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-roboto">
                              Service Center
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-roboto mb-2">Opposite Thompson Falls, next to Hippos Hotel</p>
                          <p className="text-sm font-medium text-primary-600 font-roboto">📞 0723616962</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 font-montserrat">Narok</h5>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-roboto">
                              Sales Office
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-roboto mb-2">Along Nyawira Road</p>
                          <p className="text-sm font-medium text-primary-600 font-roboto">📞 0727872217</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 font-montserrat">Kisii</h5>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-roboto">
                              Distribution Point
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-roboto mb-2">Next to Hema Hospital</p>
                          <p className="text-sm font-medium text-primary-600 font-roboto">📞 0727251691</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900 font-montserrat">Bomet</h5>
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-roboto">
                              Service Center
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-roboto mb-2">Matui Plaza</p>
                          <p className="text-sm font-medium text-primary-600 font-roboto">📞 0726771225</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 font-montserrat mb-4">Find Us - Nakuru Main Branch</h3>
                      <div className="rounded-lg overflow-hidden shadow-md">
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

                    {/* Quick Contact */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 font-montserrat mb-4">Quick Contact</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            💬
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 font-roboto">WhatsApp</p>
                            <p className="text-gray-600 font-roboto">0794817881</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            ✉️
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 font-roboto">Email</p>
                            <p className="text-gray-600 font-roboto">info@dompersboards.co.ke</p>
                          </div>
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