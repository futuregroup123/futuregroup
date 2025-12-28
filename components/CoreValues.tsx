'use client';

import React from 'react';
import Image from 'next/image';

const CoreValues = () => {
  const values = [
    'Safety',
    'People',
    'Customer',
    'Quality',
    'Entrepreneurial Spirit',
    'Customer',
    'Quality',
    'Sustainability',
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f5f7fa] py-16 md:py-24 overflow-hidden">
      {/* Light Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-[9rem] font-bold text-gray-400 whitespace-nowrap">
          FUTURE GROUP
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center mb-4 md:mb-5">
            <div className="w-12 md:w-20 h-1 bg-[#4a7ba7] mr-3 md:mr-4"></div>
            <p className="text-[#4a7ba7] font-semibold text-sm md:text-base lg:text-lg tracking-wide">
              The Foundation Of Everything We Do
            </p>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0a2951] mb-4 md:mb-6 leading-tight">
            Core Values
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Vision + Mission */}
          <div className="space-y-8">
            {/* Vision Card */}
            <div className="bg-[#e9ecef] rounded-[1.5rem] p-8 flex flex-col md:flex-row items-center gap-6 shadow-md">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a2951] mb-4">
                  Vision
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  To be the leading service provider, tailoring market-ready
                  solutions to solve tomorrow&apos;s problems today.
                </p>
              </div>
              <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/our_vision.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a2951]/70 flex items-center justify-center">
                  <span className="text-white font-bold text-lg text-center leading-tight">
                    OUR <br /> VISION
                  </span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-[#e9ecef] rounded-[1.5rem] p-8 flex flex-col md:flex-row items-center gap-6 shadow-md">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a2951] mb-4">
                  Mission
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  We provide reliable, efficient supply chain solutions through
                  expert manufacturing, warehousing, and logistics. By
                  simplifying processes and driving innovation with advanced
                  technology and skilled professionals, we empower our customers
                  to succeed.
                </p>
              </div>
              <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden">
                <Image
                  src="/images/our_mision.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a2951]/70 flex items-center justify-center">
                  <span className="text-white font-bold text-lg text-center leading-tight">
                    OUR <br /> MISSION
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Values and Quote */}
          <div className="relative bg-white rounded-[1.5rem] shadow-lg overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/think.png"
                alt="Person Thinking"
                fill
                className="object-cover object-right opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/90 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a2951] mb-6">
                Values
              </h3>
              <ul className="space-y-4 mb-8">
                {values.map((value, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-800 font-medium"
                  >
                    <div className="w-2.5 h-2.5 bg-[#0a2951] rounded-full"></div>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>

              {/* Quote Box */}
              <div className="bg-[#0a2951] rounded-xl p-6 text-center shadow-md">
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Your business is our priority. <br />
                  Your success is our shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
