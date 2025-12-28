'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/footer-bg.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Contact Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Phone size={16} />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Instagram size={16} />
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white cursor-pointer">
                <Facebook size={16} />
                <span>Facebook</span>
              </li>
            </ul>
          </div>

          {/* Future Transfers */}
          <div>
            <h3 className="font-bold text-lg mb-4">Future Transfers</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Our Networks</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Manufacturing</li>
              <li className="hover:text-white cursor-pointer">Packaging</li>
              <li className="hover:text-white cursor-pointer">Warehousing</li>
              <li className="hover:text-white cursor-pointer">Transportation</li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h3 className="font-bold text-lg mb-4">News</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">News Letters</li>
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Tracking */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tracking</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Track your order</li>
              <li className="hover:text-white cursor-pointer">Calculate Fare</li>
              <li className="hover:text-white cursor-pointer">Transfer Policies</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Tagline */}
            <div>
              <div className="text-2xl font-bold mb-2">
                <div className="flex items-center">
                  <Image 
                    src="/images/logo1.png"
                    alt="Future Group Logo"
                    width={140}
                    height={45}
                    className="h-10 w-auto"
                    priority
                  />        
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Timely updates, just like our deliveries.
              </p>
            </div>
            {/* Subscribe Button */}
            <button className="bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe now →
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-300">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>careers@futuretransfer.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>50 Clearview Drive, Tillsonburg, ON N4G 4G8</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <span>Copyright © 2025 Future Transfer Co Inc. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
