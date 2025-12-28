'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Markets = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#f5f5f7] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80%" x2="20%" y2="0" stroke="#0a2951" strokeWidth="2"/>
          <circle cx="15%" cy="50%" r="3" fill="#0a2951"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-5">
            <div className="w-12 md:w-20 h-1 bg-[#4a7ba7] mr-3 md:mr-4"></div>
            <p className="text-[#4a7ba7] font-semibold text-sm md:text-base lg:text-lg tracking-wide">
              Our Services
            </p>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0a2951] mb-4 md:mb-6 leading-tight">
            The Markets We Serve
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl">
            We power supply chains across multiple industries
          </p>
        </div>

        {/* Top Grid - 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Agriculture - 1x1 on mobile, 2x2 on desktop */}
          <div
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-md hover:shadow-xl transition-all duration-500 h-[250px] md:h-[452px]"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/agry.png"
                alt="Agriculture"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 0 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 0 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 0 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-lg md:text-xl text-center">Agriculture</h3>
              </div>
            </div>
          </div>

          {/* Construction - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/const.png"
                alt="Construction"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 1 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 1 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 1 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Construction</h3>
              </div>
            </div>
          </div>

          {/* Food and Nutrition - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/food.png"
                alt="Food and Nutrition"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 2 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 2 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 2 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Food and Nutrition</h3>
              </div>
            </div>
          </div>

          {/* Mining - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/mining.png"
                alt="Mining"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 3 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 3 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 3 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Mining</h3>
              </div>
            </div>
          </div>

          {/* Oil & Gas - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/oil.png"
                alt="Oil & Gas"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 4 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 4 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 4 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Oil & Gas</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Personal Care - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/pcare.png"
                alt="Personal Care"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 5 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 5 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 5 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Personal Care</h3>
              </div>
            </div>
          </div>

          {/* Pharma - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(6)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/pharma.png"
                alt="Pharma"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 6 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 6 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 6 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Pharma</h3>
              </div>
            </div>
          </div>

          {/* Home Care - 1x1 on mobile, 2x2 on desktop */}
          <div
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[462px]"
            onMouseEnter={() => setHoveredIndex(7)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/care.png"
                alt="Home Care, Industrial & Institution"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 7 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 7 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 7 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Home Care, Industrial & Institution</h3>
              </div>
            </div>
          </div>

          {/* Pulp and Paper - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(8)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/pulp.png"
                alt="Pulp and Paper"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 8 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 8 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 8 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Pulp and Paper</h3>
              </div>
            </div>
          </div>

          {/* Water Treatment - 1x1 */}
          <div
            className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-[1rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-[250px] md:h-[220px]"
            onMouseEnter={() => setHoveredIndex(9)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/markets/water.png"
                alt="Water Treatment"
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === 9 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3a52]/75 via-[#1a3a52]/30 to-transparent transition-opacity duration-500 ${
              hoveredIndex === 9 ? 'opacity-100' : 'opacity-90'
            }`}></div>
            <div className="absolute inset-0 flex items-end p-4 md:p-6">
              <div className={`w-full bg-[#1a3a52]/95 backdrop-blur-sm rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-5 transition-all duration-500 ${
                hoveredIndex === 9 ? 'bg-[#1a3a52] transform scale-105' : ''
              }`}>
                <h3 className="text-white font-bold text-base md:text-lg text-center">Water Treatment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;