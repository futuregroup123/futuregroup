'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function ManufacturingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#0a2951] text-white pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                            Manufacturing & Packaging Services
                        </h1>
                        <p className="text-xl text-[#90caf9] font-light tracking-wide animate-slide-in-left-delayed-1">
                            From Formulation to Final Pack
                        </p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e4a7a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a2951] to-transparent"></div>
            </section>

            {/* Main Banner / Intro */}
            <section className="relative -mt-16 px-4 mb-20 z-20">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 relative">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#1e88e5] font-semibold mb-3 tracking-wider text-sm uppercase">Our Services</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0a2951] mb-8">
                            Smart Manufacturing & Packaging, Made Flexible.
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            We offer state-of-the-art manufacturing and packaging solutions tailored to your industry's needs.
                            Our flexible production lines and rigorous quality control ensure your products are made to the
                            highest standards, efficiently and reliably.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="space-y-24 py-12">
                {/* Production Services */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Placeholder Image */}
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Production Machinery Image</span>
                        </div>
                        <div>
                            <p className="text-[#1e88e5] font-medium mb-2">Our Services</p>
                            <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Production Services</h3>
                            <p className="text-gray-600 mb-8">
                                Our facilities are equipped with versatile production lines capable of handling a wide range of liquids and powders. We specialize in custom blending and manufacturing, providing you with scalable solutions from pilot batches to full-scale commercial runs.
                            </p>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>View Capabilities</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Blending & Formulation */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1">
                            <p className="text-[#1e88e5] font-medium mb-2">High Volume</p>
                            <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Blending & Formulation Expertise</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Custom formulation development',
                                    'Precise automated blending',
                                    'Consistent quality monitoring',
                                    'Scalable batch processing'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                                        <div className="w-2 h-2 rounded-full bg-[#1e88e5]"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>See Details</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Blending Tanks Image</span>
                        </div>
                    </div>
                </section>

                {/* Testing & QA */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center border border-gray-100">
                                <span className="text-gray-400 font-medium">Lab/QA Image</span>
                            </div>
                            <div>
                                <p className="text-[#1e88e5] font-medium mb-2">Our Services</p>
                                <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Advanced Testing & Quality Assurance</h3>
                                <p className="text-gray-600 mb-8">
                                    Quality is paramount. Our on-site laboratories promote rigorous testing protocols at every stage of production. We ensure compliance with industry regulations and your specific quality standards for peace of mind.
                                </p>
                                <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                    <span>Quality Standards</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Packaging Solutions */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="text-center mb-12">
                        <p className="text-[#1e88e5] font-medium mb-2">Packaging</p>
                        <h3 className="text-3xl font-bold text-[#0a2951]">Packaging Solutions</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gray-600 mb-6">
                                From jugs and pails to drums and totes, we offer a diverse range of packaging options.
                                Our flexible lines can handle various container sizes and shapes, ensuring your product is presented exactly how you envision it.
                            </p>
                            <p className="text-gray-600 mb-8">
                                We also provide labeling, shrink-wrapping, and palletizing services to prepare your goods for immediate distribution.
                            </p>
                            <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                                <span>Get Packaging Quote</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Packaging Line Image</span>
                        </div>
                    </div>
                </section>

                {/* Feature Grid / Video Placeholders */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="relative h-[200px] rounded-xl overflow-hidden bg-[#0a2951] group cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <PlayCircle size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-medium">
                                    Capabilities Demo {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
