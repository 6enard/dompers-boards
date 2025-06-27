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
      image: 'https://paintshardware.co.ke/wp-content/uploads/2020/08/pre-laminated-mdf-boards-500x500-1.jpg',
      count: products.filter(p => p.category === 'boards').length
    },
    {
      name: 'Doors',
      description: 'Melamine & Panel Doors, Custom Orders Available',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQqBrB1Fcxgd21B-Mn3g_2iWiEs4DbDncnQ&s',
      count: products.filter(p => p.category === 'doors').length
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg mb-3 sm:mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 font-montserrat">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-roboto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Our Product Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Discover our comprehensive range of premium boards and doors designed to meet all your construction and interior design needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-xl sm:text-2xl font-bold font-montserrat mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 font-roboto">{category.count} Products Available</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 font-roboto mb-4 text-sm sm:text-base">{category.description}</p>
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Featured Products
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Hand-picked selection of our most popular and high-quality products trusted by professionals across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onProductSelect}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold font-roboto hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Visit Our Main Branch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Located in Nakuru, Freehold next to Abbey Resort. Come visit us for personalized service and to see our products firsthand.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.230813154405!2d36.031108007916785!3d-0.29780629062717434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dfbc6888269%3A0xedb35dd9d12becb3!2sDompers%20Boards!5e0!3m2!1sen!2ske!4v1750972432701!5m2!1sen!2ske" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 sm:h-80 lg:h-96"
              ></iframe>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-bold font-montserrat flex items-center justify-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Address
                  </div>
                  <div className="text-sm sm:text-base font-roboto opacity-90">Freehold, next to Abbey Resort</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold font-montserrat flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    Phone
                  </div>
                  <div className="text-sm sm:text-base font-roboto opacity-90">0794817881</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold font-montserrat flex items-center justify-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Hours
                  </div>
                  <div className="text-sm sm:text-base font-roboto opacity-90">Mon-Sat: 8AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
              Why Choose Dompers Boards?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Our products are carefully selected to ensure durability and reliability.',
                icon: Award
              },
              {
                title: 'Affordable Prices',
                description: 'Get the best value without compromising on quality.',
                icon: () => <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center"><div className="text-xs font-bold">$</div></div>
              },
              {
                title: 'Wide Availability',
                description: 'Find us in Nakuru, Nyahururu, Narok, Kisii & Bomet for convenient access.',
                icon: MapPin
              },
              {
                title: 'Excellent Service',
                description: 'We are dedicated to helping you find the right materials for your needs.',
                icon: Users
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg mb-3 sm:mb-4">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-montserrat mb-2">
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