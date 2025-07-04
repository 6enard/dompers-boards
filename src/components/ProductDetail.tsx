import React, { useState } from 'react';
import { X, ShoppingCart, Star, Check, ArrowLeft, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-roboto">Back to Products</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Check className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-green-800 font-roboto">Quality Assured</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-blue-800 font-roboto">Premium Grade</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs text-purple-800 font-roboto">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium font-roboto capitalize">
                  {product.category} - {product.subCategory}
                </span>
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-roboto">(4.8)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 font-montserrat">
                {product.name}
              </h1>

              {/* Price */}
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-primary-600 font-montserrat">
                    Price on Request
                  </span>
                </div>
                <div className="flex items-center text-sm text-primary-700 font-roboto">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Contact us via WhatsApp for current pricing and availability</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 font-montserrat">Description</h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 font-montserrat">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700 font-roboto">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 font-roboto">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-center font-medium font-roboto min-w-[60px]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-6 rounded-lg font-semibold font-roboto transition-all duration-200 
                           flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add {quantity} to Cart</span>
                </button>

                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 font-roboto">
                    <strong>Note:</strong> Final pricing will be provided when you contact us via WhatsApp for your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;