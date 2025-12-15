"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChalkboardTeacher, FaVideo, FaLaptopCode, FaHandsHelping, FaCertificate, FaUserFriends, FaNetworkWired, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const facilitiesData = [
    { icon: <FaVideo />, title: "Live Interactive Classes", desc: "Join real-time sessions with industry experts and get instant feedback.", color: "from-blue-500 to-cyan-500" },
    { icon: <FaChalkboardTeacher />, title: "Recorded Class Access", desc: "Never miss a lesson with 24/7 access to all recorded sessions.", color: "from-purple-500 to-pink-500" },
    { icon: <FaLaptopCode />, title: "Industry Curriculum", desc: "Learn skills that truly matter with updated, industry-relevant curriculum.", color: "from-indigo-500 to-purple-500" },
    { icon: <FaHandsHelping />, title: "Practical Projects", desc: "Build a professional portfolio while you learn with real-world projects.", color: "from-green-500 to-teal-500" },
    { icon: <FaUserFriends />, title: "Mentor Support", desc: "Get personalized help whenever you need it from experienced mentors.", color: "from-orange-500 to-red-500" },
    { icon: <FaCertificate />, title: "Certification", desc: "Earn a recognized certificate that validates your skills to employers.", color: "from-yellow-500 to-orange-500" },
    { icon: <FaBriefcase />, title: "Career Guidance", desc: "Resume building, interview prep, and job placement assistance.", color: "from-teal-500 to-blue-500" },
    { icon: <FaNetworkWired />, title: "Community", desc: "Network with peers, alumni, and industry professionals in our community.", color: "from-pink-500 to-rose-500" },
];

const FacilitiesSection = () => {
    const [showAll, setShowAll] = useState(false);
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const displayedFacilities = showAll ? facilitiesData : facilitiesData.slice(0, 4);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
                        Our Facilities
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to succeed in your learning journey
                    </p>
                </motion.div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedFacilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                    
                                    {/* Icon Container */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            {facility.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed relative z-10">
                                        {facility.desc}
                                    </p>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                {!showAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:bg-[#001f08] hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 transform"
                        >
                            <span>View All Facilities</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default FacilitiesSection;
