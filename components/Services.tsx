'use client';

import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Manufacturing & Packaging',
      description:
        'Flexible formulation and packaging options with a strong ability to customize for a wide variety of packing.',
      image: '/images/futureGroups/manufacture.jpg', // 🖼️ place your image in public/images/
    },
    {
      title: 'Warehousing & Transportation',
      description:
        '2+ million square feet of space offering a solution to customers who require bulk storage all the way to pick and pack operation.',
      image: '/images/futureGroups/wherehouse.jpg',
    },
    {
      title: 'Affiliated Companies',
      description:
        'Assets and services to deliver your product to market. The binding layer to our full-service model.',
      image: '/images/futureGroups/company.png',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Future Group
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Seamlessly connecting Contract Manufacturing, Packaging, Warehousing, and Transport
            to deliver tailored market-ready solutions coast to coast.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-4">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
