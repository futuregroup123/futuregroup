'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            About Our Company
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Future Group, we deliver fully integrated supply chain solutions—from manufacturing and packaging to warehousing and logistics—tailored to your needs. Since 1980, we've grown into Canada's service-driven leader, operating 14 warehouse facilities and over 2.5 million square feet of space. With advanced automation, 25+ packaging lines, and deep sector expertise, we support industries from Agriculture to Consumer Goods.
            </p>
            <p>
              Our flexible warehousing and owned logistics assets ensure fast, traceable movement across Canada and into the U.S. We combine scalable 3PL/4PL services with a commitment to safety, quality, and compliance—especially with high-hazard materials. At our core, it's our people who drive smarter, safer, and better outcomes every day.
            </p>
          </div>
          <button className="mt-8 flex items-center space-x-2 bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition-all duration-200 mx-auto group">
            <span>Explore More</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          {/* Watermark Logo - positioned after button */}
          <div className="mt-16 flex items-center justify-center">
            <Image
              src="/images/FutureLo.png"
              alt="Future Group Watermark"
              width={900}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;
