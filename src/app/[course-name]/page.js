"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
    FaClipboardList, FaUserGraduate, FaStar, FaClock, FaSignal, FaLaptop, 
    FaVideo, FaCertificate, FaBriefcase, FaUsers, FaChalkboardTeacher, 
    FaCheckCircle, FaArrowRight, FaChevronDown, FaChevronUp
} from "react-icons/fa";
import { motion } from "framer-motion";

// Enhanced Course Data
const courseData = {
    "graphics-design": {
        name: "Graphics Design",
        description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visuals.",
        fullDescription: "Transform your creative vision into professional designs. This comprehensive course covers everything from fundamental design principles to advanced techniques in Adobe Creative Suite. Learn to create logos, brand identities, marketing materials, and digital artwork that stands out.",
        image: "/asset/courses/graphics.jpg",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        modules: [
            { title: "Introduction to Design", description: "Understanding design principles, color theory, and visual communication" },
            { title: "Photoshop Mastery", description: "Advanced photo editing, manipulation, and digital painting techniques" },
            { title: "Illustrator Basics", description: "Vector graphics, logo design, and scalable artwork creation" },
            { title: "Logo Design", description: "Creating memorable logos and brand identities" },
            { title: "Branding Identity", description: "Complete brand identity design and application" }
        ],
        forWhom: "Beginners interested in design, marketing professionals, freelancers, and entrepreneurs looking to create their own branding.",
        careerOutcomes: ["Graphic Designer", "Brand Identity Designer", "Digital Illustrator", "Marketing Designer", "Freelance Designer"],
    },
    "t-shirt-design": {
        name: "T-Shirt Design",
        description: "Learn print-on-demand strategies and create best-selling t-shirt designs.",
        fullDescription: "Master the art and business of t-shirt design. Learn specialized techniques for print-on-demand businesses, understand fabric constraints, color separation, and trendy aesthetics to launch your own apparel line.",
        image: "/asset/courses/tshirt.jpg",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        modules: [
            { title: "Typography for Tees", description: "Text design that works on fabric and appeals to customers" },
            { title: "Vector Art", description: "Creating scalable designs perfect for printing" },
            { title: "Print Preparation", description: "Color separation, file formats, and print-ready artwork" },
            { title: "Market Research", description: "Finding profitable niches and trending designs" },
            { title: "POD Platforms", description: "Setting up on platforms like Redbubble, Teespring, and more" }
        ],
        forWhom: "Aspiring apparel designers, entrepreneurs wanting to start a t-shirt business, graphic designers looking to expand their skills.",
        careerOutcomes: ["T-Shirt Designer", "POD Business Owner", "Apparel Designer", "Print Designer"],
    },
    "digital-marketing": {
        name: "Digital Marketing",
        description: "Comprehensive guide to SEO, SMM, Email Marketing, and more.",
        fullDescription: "Develop comprehensive strategies for SEO, social media, and content marketing. Learn to analyze data and optimize campaigns for maximum ROI. Master the tools and techniques used by top digital marketers.",
        image: "/asset/courses/dm.jpg",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        modules: [
            { title: "SEO Fundamentals", description: "Search engine optimization strategies and best practices" },
            { title: "Social Media Strategy", description: "Building and managing effective social media campaigns" },
            { title: "Content Marketing", description: "Creating content that engages and converts" },
            { title: "PPC Advertising", description: "Google Ads, Facebook Ads, and paid advertising strategies" },
            { title: "Analytics", description: "Data analysis, reporting, and campaign optimization" }
        ],
        forWhom: "Marketing professionals, business owners, content creators, and anyone wanting to grow their online presence.",
        careerOutcomes: ["Digital Marketing Specialist", "SEO Expert", "Social Media Manager", "PPC Specialist", "Marketing Analyst"],
    },
    "wordpress-development": {
        name: "WordPress Development",
        description: "Build dynamic websites with WordPress themes and plugins.",
        fullDescription: "Build custom, responsive websites without writing complex code. Master theme customization, plugin integration, and e-commerce solutions with WooCommerce. Create professional websites for clients or your own business.",
        image: "/asset/courses/wordpress.jpg",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        modules: [
            { title: "WP Installation", description: "Setting up WordPress locally and on hosting servers" },
            { title: "Theme Customization", description: "Customizing themes and creating child themes" },
            { title: "Elementor Page Builder", description: "Building beautiful pages with drag-and-drop" },
            { title: "WooCommerce", description: "Creating fully functional e-commerce stores" },
            { title: "Site Optimization", description: "Speed optimization, SEO, and performance tuning" }
        ],
        forWhom: "Beginners wanting to build websites, freelancers, entrepreneurs, and small business owners.",
        careerOutcomes: ["WordPress Developer", "Web Developer", "E-commerce Developer", "Website Designer"],
    },
    "frontend-development": {
        name: "Frontend Development",
        description: "Become a frontend engineer with React, Next.js, and modern CSS.",
        fullDescription: "Master modern frontend development with React, Next.js, and Tailwind CSS. Learn to build fast, responsive, and interactive web applications. From basics to advanced concepts, this course prepares you for a career in frontend development.",
        image: "/asset/courses/uiux.jpg",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        modules: [
            { title: "HTML/CSS/JS", description: "Fundamentals of web development and modern JavaScript" },
            { title: "React Basics", description: "Component-based development and React hooks" },
            { title: "Next.js Framework", description: "Server-side rendering and modern React framework" },
            { title: "Tailwind CSS", description: "Utility-first CSS for rapid UI development" },
            { title: "State Management", description: "Managing complex application state" }
        ],
        forWhom: "Aspiring developers, career changers, and anyone wanting to build modern web applications.",
        careerOutcomes: ["Frontend Developer", "React Developer", "Web Developer", "UI Developer"],
    },
};

export default function CoursePage() {
    const params = useParams();
    const slug = params["course-name"];
    const course = courseData[slug];
    const [expandedModules, setExpandedModules] = useState({});
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

    const toggleModule = (index) => {
        setExpandedModules((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-500">Course Not Found</h1>
            </div>
        );
    }

    const courseFeatures = [
        { icon: <FaVideo />, title: "Live Interactive Classes", desc: "Real-time sessions with expert instructors" },
        { icon: <FaChalkboardTeacher />, title: "Practical Projects", desc: "Build a portfolio while you learn" },
        { icon: <FaUsers />, title: "Mentor Support", desc: "Get personalized help from industry experts" },
        { icon: <FaCertificate />, title: "Certification", desc: "Earn a recognized certificate upon completion" },
        { icon: <FaBriefcase />, title: "Career Guidance", desc: "Resume building and job placement assistance" },
    ];

    const testimonials = [
        {
            name: "Rahman Ahmed",
            role: "Graphics Designer",
            image: "/asset/placeholder.png",
            rating: 5,
            text: "This course completely changed my career path. The instructors are amazing and the content is top-notch. I landed my dream job within 3 months of completing the course!"
        },
        {
            name: "Fatima Khan",
            role: "Freelancer",
            image: "/asset/placeholder.png",
            rating: 5,
            text: "The practical approach and real-world projects helped me build a strong portfolio. Now I'm earning well as a freelance designer. Highly recommended!"
        },
    ];

    return (
        <div ref={sectionRef} className="pb-16 bg-white">
            {/* Enhanced Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={course.image} fill className="object-cover" alt={course.name} priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                </div>
                <div className="container mx-auto px-4 lg:px-8 z-10 pb-12 relative w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">{course.name}</h1>
                        <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mb-8">{course.description}</p>
                        
                        {/* Key Highlights */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                                <FaClock className="text-white" />
                                <span className="text-white font-semibold">{course.duration}</span>
                            </div>
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                                <FaSignal className="text-white" />
                                <span className="text-white font-semibold">{course.level}</span>
                            </div>
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                                <FaLaptop className="text-white" />
                                <span className="text-white font-semibold">{course.mode}</span>
                            </div>
                        </div>

                        {/* Primary CTA */}
                        <Link
                            href="/students/admission-form"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-secondary)] text-white font-bold rounded-full hover:bg-[#e6651f] hover:scale-105 shadow-xl transition-all transform group"
                        >
                            <span>Enroll Now</span>
                            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Grid */}
            <div className="container mx-auto px-4 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Course Overview Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">{course.fullDescription}</p>
                            
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Who This Course Is For</h3>
                                <p className="text-gray-700">{course.forWhom}</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Outcomes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {course.careerOutcomes.map((outcome, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-white rounded-full text-gray-800 font-semibold shadow-sm">
                                            {outcome}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Course Modules / Curriculum */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                <FaClipboardList size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Course Curriculum</h2>
                        </div>
                        <div className="space-y-4">
                            {course.modules.map((module, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[var(--color-primary)] transition-all overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleModule(idx)}
                                        className="w-full p-6 flex items-center justify-between text-left group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[#003d14] rounded-xl flex items-center justify-center text-white font-bold">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                                                    {module.title}
                                                </h3>
                                                {expandedModules[idx] && (
                                                    <p className="text-gray-600 mt-1 text-sm">{module.description}</p>
                                                )}
                                            </div>
                                        </div>
                                        {expandedModules[idx] ? (
                                            <FaChevronUp className="text-gray-400" />
                                        ) : (
                                            <FaChevronDown className="text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Course Features & Benefits */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Get</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {courseFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[#003d14] rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Student Feedback / Success Stories */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-orange-100 text-[var(--color-secondary)] rounded-xl">
                                <FaUserGraduate size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-2 mb-4 text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                                            <FaUserGraduate className="text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Final Course CTA */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-r from-[var(--color-primary)] to-[#003d14] rounded-3xl p-12 text-center text-white"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful students who have transformed their careers with this course.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/students/admission-form"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-secondary)] text-white font-bold rounded-full hover:bg-[#e6651f] hover:scale-105 shadow-xl transition-all transform group"
                            >
                                <span>Enroll Now</span>
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/free-consultancy"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all"
                            >
                                <span>Get Free Consultation</span>
                            </Link>
                        </div>
                    </motion.section>
                </div>

                {/* Right Column: Enrollment Card (Sticky) */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="sticky top-24 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8"
                    >
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Enroll Now</h3>
                        <p className="text-gray-600 mb-8">Start your learning journey today</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-[var(--color-primary)]" />
                                    <span className="text-gray-600">Duration</span>
                                </div>
                                <span className="font-bold text-gray-900">{course.duration}</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <FaChalkboardTeacher className="text-[var(--color-primary)]" />
                                    <span className="text-gray-600">Lectures</span>
                                </div>
                                <span className="font-bold text-gray-900">{course.lectures}</span>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <FaSignal className="text-[var(--color-primary)]" />
                                    <span className="text-gray-600">Level</span>
                                </div>
                                <span className="font-bold text-gray-900">{course.level}</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-3">
                                    <FaLaptop className="text-[var(--color-primary)]" />
                                    <span className="text-gray-600">Mode</span>
                                </div>
                                <span className="font-bold text-gray-900">{course.mode}</span>
                            </div>
                        </div>

                        <Link
                            href="/students/admission-form"
                            className="block w-full py-4 bg-gradient-to-r from-[var(--color-primary)] to-[#003d14] text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all text-center mb-4 group"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Join Batch
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                            <FaCheckCircle className="text-green-500" />
                            30-Day Money-Back Guarantee
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
