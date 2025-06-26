import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const benefits = [
    'Premium Quality Materials',
    'Affordable Prices',
    'Wide Availability',
    'Excellent Customer Service'
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600 font-roboto">
                  Trusted by 1000+ Customers
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat leading-tight">
                Premium
                <span className="text-primary-600"> Boards</span> &
                <span className="text-wood-700"> Doors</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-roboto leading-relaxed">
                Leading supplier of high-quality materials for contractors, carpenters, 
                interior designers, and homeowners across Kenya.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-roboto">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="group bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold font-roboto
                         hover:bg-primary-700 transition-all duration-300 transform hover:scale-105
                         flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold font-roboto
                         hover:bg-primary-600 hover:text-white transition-all duration-300
                         flex items-center justify-center"
              >
                Learn More
              </button>
            </div>

            {/* Service Areas */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 font-montserrat mb-2">
                Available in:
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Nakuru', 'Nyahururu', 'Narok', 'Kisii', 'Bomet'].map((location) => (
                  <span key={location} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium font-roboto">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7046976/pexels-photo-7046976.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium boards and construction materials"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-bounce-subtle">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 font-montserrat">1000+</div>
                <div className="text-sm text-gray-600 font-roboto">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent-500 text-white rounded-lg shadow-lg p-4 animate-bounce-subtle" style={{animationDelay: '1s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold font-montserrat">24/7</div>
                <div className="text-sm font-roboto">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;