"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaUsers, FaUserGraduate, FaAward, FaChalkboardTeacher, FaCode, FaBriefcase, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
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

    const statistics = [
        { icon: <FaUsers />, number: "10K+", label: "Total Students", color: "text-blue-600" },
        { icon: <FaUserGraduate />, number: "8.5K+", label: "Successful Students", color: "text-green-600" },
        { icon: <FaAward />, number: "95%", label: "Success Rate", color: "text-orange-600" },
        { icon: <FaChalkboardTeacher />, number: "50+", label: "Expert Mentors", color: "text-purple-600" },
    ];

    const features = [
        { icon: <FaChalkboardTeacher />, title: "Experienced Mentors", desc: "Learn from industry experts with years of real-world experience" },
        { icon: <FaCode />, title: "Practical Learning", desc: "Hands-on projects and real-world applications" },
        { icon: <FaBriefcase />, title: "Career-Focused", desc: "Training aligned with industry demands" },
        { icon: <FaHandsHelping />, title: "Strong Support", desc: "Lifetime support and community access" },
    ];

    return (
        <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
                        About Shah Emdadia Freelancers'
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Empowering individuals with expert-led skills for a successful career in tech
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                    {/* Left Side - Banner Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/asset/background.png"
                                fill
                                className="object-cover"
                                alt="SEF Learning Environment"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent"></div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                                <FaCode className="text-white text-3xl" />
                            </div>
                            <div className="absolute bottom-8 right-8 w-16 h-16 bg-[var(--color-secondary)]/80 backdrop-blur-md rounded-full border-2 border-white/30 flex items-center justify-center">
                                <FaUserGraduate className="text-white text-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
                                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                    Who We Are
                                </span>
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                IT Training Institute
                            </h3>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Shah Emdadia Freelancers (SEF) is a premier IT training institute dedicated to empowering individuals with expert-led skills. We bridge the gap between education and industry demands, ensuring our students are not just certified, but career-ready.
                            </p>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With a focus on practical learning and professional mentorship, we help you unlock your full potential in the digital world.
                            </p>
                        </div>

                        {/* Statistics Block */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className={`text-4xl mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.number}</div>
                                    <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Featured Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Why Choose Us
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
