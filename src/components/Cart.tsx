import React from 'react';
import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { items, updateQuantity, removeFromCart, getTotalItems } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onCheckout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-semibold text-gray-900 font-montserrat">
                Shopping Cart ({getTotalItems()})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-roboto">Your cart is empty</p>
                <p className="text-sm text-gray-400 font-roboto mt-2">
                  Add some products to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 font-montserrat truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-roboto">
                        {item.product.subCategory}
                      </p>
                      <p className="text-sm font-semibold text-primary-600 font-montserrat">
                        Price on Request
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="w-8 text-center text-sm font-medium font-roboto">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900 font-montserrat">Total:</span>
                  <span className="text-xl font-bold text-primary-600 font-montserrat">
                    Price on Request
                  </span>
                </div>
                <p className="text-xs text-primary-700 font-roboto">
                  Final pricing will be provided via WhatsApp
                </p>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold font-roboto
                         hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Quote via WhatsApp</span>
              </button>
              
              <p className="text-xs text-gray-500 text-center font-roboto">
                Contact us for current pricing and availability
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;