'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/truck.png',
    '/images/hero.jpg',
  ];

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative bg-[#0a2951] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10 md:px-16 pt-32 md:pt-40 pb-24 md:pb-28 relative">

        {/* Top Section: Headline + Button with slide-in animations */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl animate-slide-in-left">
            Our People, Our <br className="hidden md:block" />
            Power, Our Promise
          </h1>

          <button className="mt-8 md:mt-0 flex items-center space-x-3 bg-[#1e4a7a] hover:bg-[#2d5b93] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg group animate-slide-in-left-delayed-2">
            <span className="text-lg">Explore More</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </button>
        </div>

        {/* Subtitle with animation */}
        <p className="text-xl md:text-xl text-[#bda983] font-light mb-12 tracking-wide animate-slide-in-left-delayed-1">
          Delivering Tailored Supply Chain Solutions
        </p>

        {/* Main Image Container with Slider */}
        <div className="relative w-full">
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-[2rem]">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
              >
                <Image
                  src={image}
                  alt={`Future Group Hero ${index + 1}`}
                  width={1216}
                  height={555}
                  className="object-cover w-full h-[500px] md:h-[600px]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Curved Blue Corner with Logo */}
          <div
            className="absolute bottom-0 right-0 bg-[#0a2951] flex items-center justify-center"
            style={{
              width: '380px',
              height: '180px',
              borderTopLeftRadius: '2rem',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Future Group Logo"
              width={400}
              height={200}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/10 to-transparent opacity-10"></div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-left-delayed-1 {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out 0.3s forwards;
        }

        .animate-slide-in-left-delayed-2 {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;