import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { ArrowRight, Award, Users, MapPin, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onProductSelect: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onProductSelect }) => {
  const featuredProducts = products.filter(product => product.featured);
  
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: MapPin, label: 'Service Areas', value: '5' },
    { icon: Clock, label: 'Support Hours', value: '24/7' },
  ];

  const categories = [
    {
      name: 'Boards',
      description: 'MDF, Chipboards, Plywood, Marine Boards, Ceiling Boards, Block Boards, Hard Boards & Bluegum',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: products.filter(p => p.category === 'boards').length
    },
    {
      name: 'Doors',
      description: 'Melamine & Panel Doors, Custom Orders Available',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      count: products.filter(p => p.category === 'doors').length
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 font-montserrat">{stat.value}</div>
                <div className="text-sm text-gray-600 font-roboto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Discover our comprehensive range of premium boards and doors designed to meet all your construction and interior design needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold font-montserrat mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 font-roboto">{category.count} Products Available</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-roboto mb-4">{category.description}</p>
                  <button
                    onClick={() => onNavigate('products')}
                    className="flex items-center space-x-2 text-primary-600 font-semibold font-roboto hover:text-primary-700 transition-colors"
                  >
                    <span>Browse {category.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Hand-picked selection of our most popular and high-quality products trusted by professionals across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onProductSelect}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold font-roboto hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Why Choose Dompers Boards?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Our products are carefully selected to ensure durability and reliability.',
                icon: '🏆'
              },
              {
                title: 'Affordable Prices',
                description: 'Get the best value without compromising on quality.',
                icon: '💰'
              },
              {
                title: 'Wide Availability',
                description: 'Find us in Nakuru, Nyahururu, Narok, Kisii & Bomet for convenient access.',
                icon: '📍'
              },
              {
                title: 'Excellent Service',
                description: 'We are dedicated to helping you find the right materials for your needs.',
                icon: '🤝'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 font-montserrat mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-roboto text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;