'use client';

import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Locations', href: '/#locations' },
    { name: 'Careers', href: '/careers' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const serviceItems = [
    { name: 'Logistics & Transloading', href: '/services/logistics' },
    { name: 'Manufacturing & Packaging', href: '/services/manufacturing' },
    { name: 'Warehousing & Storage', href: '/services/warehousing' },
    { name: 'Solutions Overview', href: '/services/solutions' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 py-4 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo1.png"
                alt="Future Group Logo"
                width={140}
                height={45}
                className="h-10 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="text-[#0a2951] hover:text-secondary transition-colors duration-200 font-medium text-sm lg:text-base flex items-center space-x-1">
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64">
                        <div className="bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-[#0a2951] hover:bg-blue-50 hover:text-[#1e88e5] transition-colors duration-200 font-medium text-sm"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#0a2951] hover:text-secondary transition-colors duration-200 font-medium text-sm lg:text-base"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="px-4 py-1.5 text-[#0a2951] bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium text-sm flex items-center space-x-1">
              <span>FR</span>
              <ChevronDown size={14} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#0a2951] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full py-2 text-gray-700 hover:text-[#0a2951] transition-colors duration-200 font-medium flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#1e88e5] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#0a2951] transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="mt-2 px-4 py-2 text-[#0a2951] bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium text-sm w-full flex items-center justify-center space-x-1">
              <span>FR</span>
              <ChevronDown size={14} />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;