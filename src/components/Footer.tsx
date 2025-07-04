import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const locations = [
    'Nakuru - Main Branch',
    'Nyahururu - Service Center',
    'Narok - Sales Office',
    'Kisii - Distribution Point',
    'Bomet - Service Center'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <img 
                  src="https://yt3.googleusercontent.com/lOZ2T66sWR4FIjYLMPDDX0evru1Eb8zCWhk3x9r4C4q9lKn5IbS8PvSJaJig2_FvFVfTKPs8=s900-c-k-c0x00ffffff-no-rj"
                  alt="Dompers Boards Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-montserrat">Dompers Boards</h3>
                <p className="text-gray-400 text-sm font-roboto">Premium Quality Materials</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-roboto leading-relaxed">
              Leading supplier of high-quality boards and doors, serving contractors, carpenters, 
              interior designers, and homeowners across Kenya.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/dompersboards" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/dompersboards/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/DompersBoards" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-montserrat">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400 font-roboto">0794817881 (Main)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400 font-roboto">dompersboardslogistics@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-gray-400 font-roboto">Mon-Sat: 8AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-montserrat">Service Areas</h4>
            <div className="space-y-2">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="text-sm text-gray-400 font-roboto">{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-montserrat">Our Products</h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-400 font-roboto">
                <div className="font-medium text-white mb-1">Boards:</div>
                <div className="text-xs space-y-1">
                  <div>• MDF & Chipboards</div>
                  <div>• Plywood & Marine Boards</div>
                  <div>• Ceiling Boards & Block Boards</div>
                  <div>• Hard Boards & Bluegum</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 font-roboto">
                <div className="font-medium text-white mb-1">Doors:</div>
                <div className="text-xs space-y-1">
                  <div>• Melamine & Panel Doors</div>
                  <div>• Custom Orders Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 font-roboto">
              © 2024 Dompers Boards. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-roboto">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-roboto">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;