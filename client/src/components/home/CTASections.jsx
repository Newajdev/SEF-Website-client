"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaUsers, FaLightbulb, FaArrowRight, FaComments, FaUserTie, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export const SeminarsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[var(--color-primary)] via-[#003314] to-[var(--color-primary)] text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                            <span className="text-sm font-semibold text-white uppercase tracking-wide flex items-center gap-2 justify-center">
                                <FaCalendarAlt className="text-[var(--color-secondary)]" />
                                Free Learning Opportunity
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Join Our Free Seminars
                        </h2>
                        
                        {/* Description */}
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
                            Discover the latest trends and technologies in our interactive free seminars. Learn from industry leaders and get your questions answered live.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-200">
                            <div className="flex items-center gap-2">
                                <FaLightbulb className="text-[var(--color-secondary)] text-xl" />
                                <span className="font-medium">Industry Insights</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUsers className="text-[var(--color-secondary)] text-xl" />
                                <span className="font-medium">Expert Speakers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-[var(--color-secondary)] text-xl" />
                                <span className="font-medium">Interactive Q&A</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/free-seminar"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[var(--color-primary)] font-bold text-lg rounded-full hover:bg-gray-100 hover:scale-105 shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.3)] transition-all duration-300 transform group"
                        >
                            <span>Register for Free</span>
                            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <p className="text-sm text-gray-300 mt-6">
                            No credit card required • Limited seats available
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const ConsultancySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <div className="inline-block px-4 py-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/30 rounded-full mb-6">
                            <span className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wide flex items-center gap-2 justify-center">
                                <FaComments />
                                Expert Guidance
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Take Free Consultancy
                        </h2>
                        
                        {/* Description */}
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Confused about which career path to choose? Talk to our experts for personalized guidance and plan your future with confidence.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                                    <FaUserTie />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Expert Advisors</h3>
                                <p className="text-gray-600 text-sm">Talk to industry professionals</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                                    <FaLightbulb />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Personalized Plan</h3>
                                <p className="text-gray-600 text-sm">Customized career roadmap</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                                    <FaClock />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Flexible Timing</h3>
                                <p className="text-gray-600 text-sm">Schedule at your convenience</p>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/free-consultancy"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[var(--color-secondary)] to-[#e6651f] text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 shadow-lg transition-all duration-300 transform group"
                        >
                            <span>Book A Session</span>
                            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <p className="text-sm text-gray-500 mt-6">
                            100% Free • No obligations • Trusted by thousands
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
