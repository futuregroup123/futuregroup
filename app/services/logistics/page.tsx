'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LogisticsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#0a2951] text-white pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                            Logistics & Transloading Services
                        </h1>
                        <p className="text-xl text-[#90caf9] font-light tracking-wide animate-slide-in-left-delayed-1">
                            Moving Goods With Confidence
                        </p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e4a7a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a2951] to-transparent"></div>
            </section>

            {/* Main Image Banner */}
            <section className="relative -mt-16 px-4 mb-20 z-20">
                <div className="max-w-6xl mx-auto relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/truck.png"
                        alt="Future Group Truck"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 max-w-4xl mx-auto px-4 text-center">
                <p className="text-[#1e88e5] font-semibold mb-3 tracking-wider text-sm uppercase">
                    Our Services
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a2951] mb-8">
                    Powering Logistics Beyond Boundaries
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Our logistics and transportation services are designed to move your goods efficiently, safely, and seamlessly across borders. With a focus on reliability and speed, we ensure your supply chain operates without interruption.
                </p>
            </section>

            {/* Content Sections */}
            <div className="space-y-24 py-12">
                {/* Logistics Services */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <Image
                                src="/images/services/logistic1.png"
                                alt="Future Group Logistics"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <p className="text-[#1e88e5] font-medium mb-2">Our Capabilities</p>
                            <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Logistics Services</h3>
                            <p className="text-gray-600 mb-8">
                                Comprehensive logistics management solutions tailored to your specific needs. From route planning to carrier selection, we handle the complexities of transportation so you can focus on your business core.
                            </p>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>Contact Us</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Rail Transport */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1">
                            <p className="text-[#1e88e5] font-medium mb-2">Transport</p>
                            <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Efficient Rail Transport</h3>
                            <p className="text-gray-600 mb-8">
                                Leverage our strategic rail connections for cost-effective long-distance shipping. We provide seamless transloading between rail and truck to get your bulk commodities where they need to go.
                            </p>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>Learn More</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <Image
                                src="/images/services/logistic2.png"
                                alt="Future Group Logistics"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Fleet & Ground Shipping */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <Image
                                src="/images/services/logistic3.png"
                                alt="Future Group Logistics"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <p className="text-[#1e88e5] font-medium mb-2">Our Services</p>
                            <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Versatile Fleet & Ground Shipping</h3>
                            <p className="text-gray-600 mb-8">
                                Our modern fleet of vehicles ensures reliable ground transportation for all types of cargo. Whether LTL or FTL, our experienced drivers and well-maintained equipment guarantee safe delivery.
                            </p>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>View Options</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Custom Programs */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                        <p className="text-[#1e88e5] font-medium mb-2">Transport</p>
                        <h3 className="text-3xl font-bold text-[#0a2951]">Custom Tailored Freight Programs</h3>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center border border-gray-100">
                            < Image
                                src="/images/services/logistic4.png"
                                alt="Future Group Logistics"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-600 mb-6">
                                Every business has unique shipping requirements. We work closely with you to develop customized freight programs that optimize costs, improve transit times, and enhance overall supply chain visibility.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Dedicated account management', 'Real-time tracking solutions', 'Flexible scheduling options', 'Cross-border expertise'].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-[#0a2951]">
                                        <CheckCircle2 size={20} className="text-[#1e88e5]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>Get Started</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Complete Shipping */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
                    <div className="bg-[#0a2951] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-[#90caf9] font-medium mb-2">Our Services</p>
                                <h3 className="text-3xl font-bold mb-6">Complete Shipping Capabilities</h3>
                                <p className="text-gray-300 mb-8">
                                    From small parcels to oversized industrial equipment, we have the capabilities to handle it all. Trust Future Group to be your single-source partner for all your shipping and logistics needs.
                                </p>
                                <button className="bg-white text-[#0a2951] px-8 py-3 rounded-full hover:bg-gray-100 transition-all flex items-center space-x-2">
                                    <span>Get a Quote</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                            <div className="relative h-[300px] rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                                <Image
                                    src="/images/services/logistic5.png"
                                    alt="Future Group Logistics"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </section>

            </div>
        </main>
    );
}
