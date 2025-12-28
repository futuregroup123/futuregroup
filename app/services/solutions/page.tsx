'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Truck, Users } from 'lucide-react';
import Contact from '@/components/Contact';

export default function SolutionsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#0a2951] text-white pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                            Solutions That Move Business Forward
                        </h1>
                        <p className="text-xl text-[#90caf9] font-light tracking-wide animate-slide-in-left-delayed-1">
                            Integrated. Innovative. Indispensable.
                        </p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e4a7a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a2951] to-transparent"></div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[#1e88e5] font-semibold mb-3 tracking-wider text-sm uppercase">Comprehensive</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0a2951] mb-6">
                    Optimized & Industry-Ready Solutions
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                    We don't just offer services; we provide complete, end-to-end solutions that solve complex supply chain challenges.
                    By integrating manufacturing, warehousing, and logistics, we create value that drives your business forward.
                </p>

                {/* Main Feature Image */}
                <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 font-medium text-xl">Integrated Solutions Diagram/Image</span>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Solution 1 */}
                        <Link href="/services/manufacturing" className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
                                    <span className="text-sm">Packaging Image</span>
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-[#1e88e5]">
                                        <Layers size={24} />
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#0a2951] mb-3 group-hover:text-[#1e88e5] transition-colors">
                                        Future Packaging
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-1">
                                        Advanced manufacturing and custom packaging solutions designed for flexibility and quality assurance.
                                    </p>
                                    <div className="flex items-center text-[#1e88e5] font-medium mt-auto">
                                        <span>Explore Manufacturing</span>
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Solution 2 */}
                        <Link href="/services/warehousing" className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
                                    <span className="text-sm">Logistics Flow Image</span>
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-[#1e88e5]">
                                        <Truck size={24} />
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#0a2951] mb-3 group-hover:text-[#1e88e5] transition-colors">
                                        Warehousing by Innovations
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-1">
                                        Strategic storage and distribution services ensuring your products are ready for market delivery.
                                    </p>
                                    <div className="flex items-center text-[#1e88e5] font-medium mt-auto">
                                        <span>Explore Warehousing</span>
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Solution 3 */}
                        <Link href="/#about" className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
                                    <span className="text-sm">Team Image</span>
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-[#1e88e5]">
                                        <Users size={24} />
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#0a2951] mb-3 group-hover:text-[#1e88e5] transition-colors">
                                        Affiliated Campaigns
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-1">
                                        Collaborative partnerships and dedicated account management to support your broader business goals.
                                    </p>
                                    <div className="flex items-center text-[#1e88e5] font-medium mt-auto">
                                        <span>Meet Our Team</span>
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Reuse Existing Contact Section */}
            <section className="">
                <Contact />
            </section>

        </main>
    );
}
