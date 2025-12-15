"use client";
import React, { useState } from "react";
import { FaChalkboardTeacher, FaVideo, FaLaptopCode, FaHandsHelping, FaCertificate, FaUserFriends, FaNetworkWired, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const facilitiesData = [
    { icon: <FaVideo />, title: "Live Interactive Classes", desc: "Join real-time sessions with experts." },
    { icon: <FaChalkboardTeacher />, title: "Recorded Class Access", desc: "Never miss a lesson with 24/7 access." },
    { icon: <FaLaptopCode />, title: "Industry Curriculum", desc: "Learn skills that truly actter." },
    { icon: <FaHandsHelping />, title: "Practical Projects", desc: "Build a portfolio while you learn." },
    { icon: <FaUserFriends />, title: "Mentor Support", desc: "Get help whenever you are stuck." },
    { icon: <FaCertificate />, title: "Certification", desc: "Earn a recognized certificate." },
    { icon: <FaBriefcase />, title: "Career Guidance", desc: "Resume building and job prep." },
    { icon: <FaNetworkWired />, title: "Community", desc: "Network with peers and alumni." },
];

const FacilitiesSection = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedFacilities = showAll ? facilitiesData : facilitiesData.slice(0, 4);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] text-center mb-12">
                    Our Facilities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedFacilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-[var(--color-secondary)] text-2xl shadow-sm mb-4 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                                    {facility.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                                <p className="text-gray-500 text-sm">{facility.desc}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {!showAll && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all"
                        >
                            View All Facilities
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FacilitiesSection;
