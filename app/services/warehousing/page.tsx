'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Package, Warehouse, Truck } from 'lucide-react';

export default function WarehousingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-[#0a2951] text-white pt-32 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                            Storage and Shipping Designed for You
                        </h1>
                        <p className="text-xl text-[#90caf9] font-light tracking-wide animate-slide-in-left-delayed-1">
                            Secure, Scalable, and Strategic
                        </p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e4a7a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a2951] to-transparent"></div>
            </section>

            {/* Intro Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <p className="text-[#1e88e5] font-semibold mb-3 tracking-wider text-sm uppercase">Our Facilities</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0a2951] mb-6">
                        Future-Ready Warehousing For Efficient Distribution
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our strategically located warehousing facilities offer more than just storage. They are dynamic distribution hubs designed to optimize your inventory management and speed up market delivery.
                    </p>
                </div>

                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-20 bg-gray-100 flex items-center justify-center">
                    <Image
                        src="/images/services/w1.png"
                        alt="Future Group Logistics"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Process Flow */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-[#0a2951]">Integrated Logistics Flow</h3>
                        <p className="text-gray-600 mt-4">Seamlessly managing your inventory from arrival to departure.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-[#1e88e5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-[#0a2951] mb-4">Receive</h4>
                            <p className="text-gray-600">
                                Efficient unloading, inspection, and systematic logging of your incoming goods using advanced WMS technology.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 relative z-10">
                            <div className="w-16 h-16 bg-blue-100 text-[#1e88e5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Warehouse size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-[#0a2951] mb-4">Store</h4>
                            <p className="text-gray-600">
                                Secure storage in our climate-controlled environment with 24/7 monitoring and optimized racking systems.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-[#1e88e5] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Truck size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-[#0a2951] mb-4">Ship</h4>
                            <p className="text-gray-600">
                                Rapid order picking, packing, and dispatch via our reliable transportation network for timely delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <p className="text-[#1e88e5] font-medium mb-2">Flexibility</p>
                        <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Variable Services</h3>
                        <p className="text-gray-600 mb-6">
                            We understand that business needs fluctuate. Our flexible warehousing agreements allow you to scale space and labor up or down based on your seasonal demands or growth trajectory.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center space-x-2 text-[#0a2951]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1e88e5]"></div>
                                <span>Short-term and long-term storage</span>
                            </li>
                            <li className="flex items-center space-x-2 text-[#0a2951]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1e88e5]"></div>
                                <span>Seasonal overflow management</span>
                            </li>
                            <li className="flex items-center space-x-2 text-[#0a2951]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1e88e5]"></div>
                                <span>Cross-docking and transloading</span>
                            </li>
                        </ul>
                        <button className="bg-[#0a2951] text-white px-8 py-3 rounded-full hover:bg-[#1e4a7a] transition-all flex items-center space-x-2">
                            <span>Contact Us</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                        <Image
                            src="/images/services/w2.png"
                            alt="Future Group Logistics"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 relative h-[350px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                        <Image
                            src="/images/services/w7.png"
                            alt="Future Group Logistics"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-[#1e88e5] font-medium mb-2">More Than Storage</p>
                        <h3 className="text-3xl font-bold text-[#0a2951] mb-6">Expanded Services</h3>
                        <p className="text-gray-600 mb-6">
                            Add value to your supply chain with our comprehensive suite of expanded services. We act as an extension of your business, handling critical tasks so you don't have to.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h5 className="font-bold text-[#0a2951] mb-1">Inventory Management</h5>
                                <p className="text-sm text-gray-500">Real-time visibility & control</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h5 className="font-bold text-[#0a2951] mb-1">Order Fulfillment</h5>
                                <p className="text-sm text-gray-500">Pick, pack, and ship</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h5 className="font-bold text-[#0a2951] mb-1">Kitting & Assembly</h5>
                                <p className="text-sm text-gray-500">Custom packing solutions</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h5 className="font-bold text-[#0a2951] mb-1">Return Logistics</h5>
                                <p className="text-sm text-gray-500">Efficient returns processing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0a2951] py-16">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h3 className="text-3xl font-bold mb-6">Ready to Optimize Your Storage?</h3>
                    <p className="text-[#90caf9] text-lg mb-8">
                        Contact our warehousing experts today to discuss a solution tailored to your business needs.
                    </p>
                    <button className="bg-white text-[#0a2951] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
                        Get a Space Quote
                    </button>
                </div>
            </section>
        </main>
    );
}
