'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PlayCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function CareersPage() {
    const [openJob, setOpenJob] = useState<number | null>(0);

    const departments = [
        { title: 'Operations', image: '/images/careers/8125fd07a2a572afe6f247f446667215b606f053.jpg' }, // Placeholder
        { title: 'Business Services', image: '/images/careers/32310daf6dab633e91eacb70562f648d3182bc1c.jpg' }, // Placeholder
        { title: 'Commercial', image: '/images/careers/5075272def28e3c76b796873509637c796adf579.jpg' }, // Placeholder
        { title: 'Commercial', image: '/images/careers/fd7fe902cfea60176fbbfbb2153c57643532ffd7.png' }, // Placeholder
    ];

    const jobs = [
        {
            id: 0,
            title: 'Job Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        { id: 1, title: 'Job Title', description: 'Details about this job opportunity...' },
        { id: 2, title: 'Job Title', description: 'Details about this job opportunity...' },
        { id: 3, title: 'Job Title', description: 'Details about this job opportunity...' },
        { id: 4, title: 'Job Title', description: 'Details about this job opportunity...' },
        { id: 5, title: 'Job Title', description: 'Details about this job opportunity...' },
        { id: 6, title: 'Job Title', description: 'Details about this job opportunity...' },
    ];

    const toggleJob = (id: number) => {
        setOpenJob(openJob === id ? null : id);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#0a2951] text-white py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in-left">
                        Careers
                    </h1>
                    <p className="text-xl text-[#90caf9] font-light tracking-wide animate-slide-in-left-delayed-1">
                        Join the Team That Moves Business Forward
                    </p>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e4a7a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a2951] to-transparent"></div>
                {/* Hexagon shape overlay - abstract representation */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
            </section>

            {/* Expertise Meets Opportunity */}
            <section className="py-20 relative">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-2 text-[#1e88e5] font-medium mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e88e5]"></div>
                        <span className="uppercase tracking-wider text-sm">Careers</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e88e5]"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2951]">
                        Where Expertise Meets Opportunity
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {departments.map((dept, index) => (
                            <div key={index} className="relative h-[250px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                                {/* Image */}
                                <div className="absolute inset-0 bg-gray-800">
                                    {/* Use existing images as placeholders if available, otherwise graybg */}
                                    <Image
                                        src={dept.image}
                                        alt={dept.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                    />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="absolute top-6 left-6">
                                        <PlayCircle size={40} className="text-white/80 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-1">{dept.title}</h3>
                                    <p className="text-gray-300 text-xs">Lorem Ipsum Dolor</p>
                                    <p className="text-gray-400 text-[10px] uppercase tracking-wide">Lorem ipsum dolor set amet</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Build Your Future */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Image & Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2951] mb-6 leading-tight">
                            Build Your Future with Future Group
                        </h2>
                        <p className="text-gray-600 mb-8">
                            If the right role isn&apos;t listed today, check back soon or send us your application to be considered for upcoming openings.
                        </p>

                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                            {/* Placeholder for "Woman with laptop" from design */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                <Image
                                        src={'/images/careers/beaa77523b7d807c98b61f2c4d303224df50a49e.png'}
                                        alt={'Woman with laptop'}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                    />
                            </div>
                            {/* If you have the uploaded image, we could use that. For now, placeholder. */}
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {jobs.map((job) => (
                            <div key={job.id} className="border-b last:border-0 border-gray-100">
                                <button
                                    onClick={() => toggleJob(job.id)}
                                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openJob === job.id ? 'bg-white' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <span className={`font-bold text-lg ${openJob === job.id ? 'text-[#0a2951]' : 'text-gray-700'}`}>
                                        {job.title}
                                    </span>
                                    {openJob === job.id ? (
                                        <div className="bg-[#0a2951] text-white rounded-full p-1">
                                            <ChevronUp size={16} />
                                        </div>
                                    ) : (
                                        <div className="text-[#1e88e5]">
                                            <ChevronDown size={20} />
                                        </div>
                                    )}
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openJob === job.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                    <button className="bg-[#0a2951] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1e4a7a] transition-colors">
                                        Explore More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
