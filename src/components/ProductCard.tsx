import React from 'react';
import { ShoppingCart, Eye, Star, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium font-roboto
                     opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                     transition-all duration-300 flex items-center space-x-2 hover:bg-gray-100"
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>

        {/* Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium font-roboto">
            Featured
          </div>
        )}

        {/* Stock Status */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium font-roboto ${
          product.inStock 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-600 font-medium font-roboto capitalize">
            {product.category} - {product.subCategory}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 font-roboto">4.8</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 font-montserrat line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 font-roboto line-clamp-2">
          {product.description}
        </p>

        {/* Specifications */}
        <div className="flex flex-wrap gap-1">
          {product.specifications.slice(0, 2).map((spec, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-roboto">
              {spec}
            </span>
          ))}
          {product.specifications.length > 2 && (
            <span className="text-xs text-gray-500 font-roboto">
              +{product.specifications.length - 2} more
            </span>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary-600 font-montserrat">
              Price on Request
            </span>
            <span className="text-xs text-gray-500 font-roboto flex items-center">
              <MessageCircle className="h-3 w-3 mr-1" />
              Chat for pricing
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-lg font-medium font-roboto transition-all duration-200 flex items-center space-x-2 ${
              product.inStock
                ? 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;