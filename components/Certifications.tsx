'use client';

import React from 'react';
import Image from 'next/image';

const Certifications = () => {
  const certifications = [
    { name: 'ISO 9001:2015 Certified', logo: '/images/certifications/1.png', width: 160 },
    { name: 'Made Safe', logo: '/images/certifications/2.png', width: 150 },
    { name: 'AWIQME', logo: '/images/certifications/3.png', width: 170 },
    { name: 'CropLife Canada', logo: '/images/certifications/4.png', width: 160 },
    { name: 'RDC | DRC', logo: '/images/certifications/5.png', width: 180 },
  ];

  const loopedCertifications = [...certifications, ...certifications, ...certifications];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#dce9ef] via-[#e8f4f8] to-white relative overflow-hidden">
      {/* Background pattern lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="25%" y2="100%" stroke="#3b7ba6" strokeWidth="3" />
          <line x1="100%" y1="0" x2="75%" y2="100%" stroke="#3b7ba6" strokeWidth="3" />
          <circle cx="20%" cy="50%" r="4" fill="#3b7ba6" />
          <circle cx="80%" cy="50%" r="4" fill="#3b7ba6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center mb-4">
            <span className="h-px bg-[#4a7ba7] w-24 md:w-40"></span>
            <div className="mx-4 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#4a7ba7] animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#4a7ba7]">
                Our Certifications
              </h2>
              <div className="w-3 h-3 rounded-full bg-[#4a7ba7] animate-pulse" />
            </div>
            <span className="h-px bg-[#4a7ba7] w-24 md:w-40"></span>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Recognized and trusted by industry-leading organizations worldwide.
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#e8f4f8] via-[#e8f4f8]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#e8f4f8] via-[#e8f4f8]/80 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <div className="flex items-center animate-infinite-scroll hover:animation-pause">
              {loopedCertifications.map((cert, index) => (
                <div
                  key={`cert-${index}`}
                  className="flex-shrink-0 px-6 md:px-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-28 md:h-36 flex items-center justify-center">
                    <div className="relative flex items-center justify-center" style={{ width: `${cert.width}px`, height: '70px' }}>
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 150px, 250px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by global brands • {certifications.length} Certifications
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
          width: max-content;
        }

        .animation-pause:hover {
          animation-play-state: paused;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Faster scroll on mobile */
        @media (max-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
