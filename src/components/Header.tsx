import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Products', href: 'products' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://yt3.googleusercontent.com/lOZ2T66sWR4FIjYLMPDDX0evru1Eb8zCWhk3x9r4C4q9lKn5IbS8PvSJaJig2_FvFVfTKPs8=s900-c-k-c0x00ffffff-no-rj"
                alt="Dompers Boards Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 font-montserrat">Dompers Boards</h1>
              <p className="text-xs text-gray-600 font-roboto">Premium Boards & Doors</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 font-roboto ${
                  currentPage === item.href
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Location */}
            <div className="hidden xl:flex items-center text-xs text-gray-600 font-roboto">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Nakuru, Nyahururu, Narok, Kisii, Bomet</span>
            </div>

            {/* Cart */}
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-roboto">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.href);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors font-roboto ${
                  currentPage === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center px-3 py-2 text-xs text-gray-600 font-roboto">
              <MapPin className="h-3 w-3 mr-2" />
              <span>Serving: Nakuru, Nyahururu, Narok, Kisii, Bomet</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;