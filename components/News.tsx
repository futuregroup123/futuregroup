'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/1.jpg',
      description: 'Discover the secrets and experiences from world-renowned adventure travelers.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/2.jpg',
      description: 'Expert advice on making the most of your business ventures and opportunities.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/3.jpg',
      description: 'Financial insights and investment strategies for sustainable growth.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/4.jpg',
      description: 'Latest trends in technology and digital transformation strategies.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/1.jpg',
      description: 'Innovation and sustainability in modern supply chain management.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/2.jpg',
      description: 'Best practices for logistics optimization and efficiency.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/3.jpg',
      description: 'Environmental responsibility and green supply chain initiatives.',
    },
    {
      title: 'Life Tips From Top Ten Adventure Travelers',
      image: '/images/news/4.jpg',
      description: 'Market trends and strategic insights for business growth.',
    },
  ];

  const itemsPerView = 4;
  const totalSlides = Math.ceil(newsItems.length / itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const startIndex = currentSlide * itemsPerView;
  const visibleItems = newsItems.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="25%" x2="20%" y2="0" stroke="#4a7ba7" strokeWidth="3"/>
          <line x1="100%" y1="75%" x2="80%" y2="100%" stroke="#4a7ba7" strokeWidth="3"/>
          <circle cx="10%" cy="50%" r="3" fill="#4a7ba7"/>
          <circle cx="90%" cy="50%" r="3" fill="#4a7ba7"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-[#4a7ba7] w-24 sm:w-40 md:w-56"></div>
            <div className="mx-4 flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a7ba7]"></div>
              <p className="text-[#4a7ba7] font-semibold text-base md:text-lg whitespace-nowrap">
                Latest News
              </p>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a7ba7]"></div>
            </div>
            <div className="h-px bg-[#4a7ba7] w-24 sm:w-40 md:w-56"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2951]">
            Future Group Latest News
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="relative mb-12">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {visibleItems.map((item, index) => (
              <div
                key={startIndex + index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2951]/95 via-[#0a2951]/60 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-4 leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <button className="bg-[#1e4a7a] hover:bg-[#2a5a8f] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform group-hover:scale-105 w-fit shadow-lg">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4a7ba7] focus:ring-offset-2 ${
                index === currentSlide 
                  ? 'bg-[#0a2951] w-10 h-3' 
                  : 'bg-[#b3cfe0] w-3 h-3 hover:bg-[#4a7ba7]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default News;