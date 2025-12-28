'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const Locations = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
    { name: 'Victoria', region: 'West', x: '8%', y: '45%' },
    { name: 'Calgary', region: 'West', x: '22%', y: '38%' },
    { name: 'Edmonton', region: 'West', x: '24%', y: '25%' },
    { name: 'Saskatoon', region: 'Central', x: '38%', y: '30%' },
    { name: 'Winnipeg', region: 'Central', x: '48%', y: '42%' },
    { name: 'London', region: 'East', x: '68%', y: '55%' },
    { name: 'Tillsonburg', region: 'East', x: '70%', y: '57%' },
    { name: 'Brampton', region: 'East', x: '72%', y: '52%' },
    { name: 'Toronto Area', region: 'East', x: '74%', y: '54%' },
    { name: 'Montreal', region: 'East', x: '85%', y: '50%' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Header - contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="text-[#1e88e5] font-medium text-lg mb-2">Our Footprint</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a2951] mb-4 tracking-tight">
            Coast to Coast Coverage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serving customers across Canada with strategically located facilities.
          </p>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="w-full bg-[#E4F3F8] relative overflow-hidden py-8 px-4">
        <div className="relative w-full max-w-7xl mx-auto aspect-[16/9]">
          <img
            src="images/Map.svg"
            alt="Canada Map"
            className="w-full h-full object-contain opacity-90"
          />

          {/* Pins */}
          {locations.map((loc, index) => (
            <div
              key={index}
              className="absolute group cursor-pointer"
              style={{
                left: loc.x,
                top: loc.y,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredLocation(loc.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pin Icon */}
              <div className="relative animate-bounce-slow">
                <MapPin
                  className={`drop-shadow-md transition-transform duration-300 ${hoveredLocation === loc.name
                    ? 'text-[#1e88e5] scale-125'
                    : 'text-[#0a2951]'
                    }`}
                  size={32}
                  fill={hoveredLocation === loc.name ? '#1e88e5' : '#0a2951'}
                />
                <div className="absolute inset-0 rounded-full bg-[#0a2951] opacity-20 animate-ping"></div>
              </div>

              {/* Tooltip */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 transition-all duration-300 ${hoveredLocation === loc.name
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-3 min-w-[130px] border border-[#0a2951]/30">
                  <div className="font-semibold text-[#0a2951] text-sm">{loc.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{loc.region} Region</div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Grid - contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div>
          <h3 className="text-2xl font-bold text-[#0a2951] mb-8 text-center">
            All Locations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {locations.map((loc, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border cursor-pointer ${hoveredLocation === loc.name
                  ? 'border-[#1e88e5] bg-[#e3f2fd]'
                  : 'border-transparent'
                  }`}
                onMouseEnter={() => setHoveredLocation(loc.name)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div className="flex items-start space-x-3">
                  <MapPin
                    className={`mt-1 ${hoveredLocation === loc.name
                      ? 'text-[#1e88e5]'
                      : 'text-[#0a2951]'
                      }`}
                    size={20}
                  />
                  <div>
                    <div className="font-semibold text-[#0a2951] text-sm leading-tight">
                      {loc.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{loc.region}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Locations;
