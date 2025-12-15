"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaBookOpen, FaClipboardList, FaUserGraduate, FaStar } from "react-icons/fa";

// Mock Data for courses (would ideally come from an API or shared constant)
const courseData = {
    "graphics-design": {
        name: "Graphics Design",
        description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visuals.",
        image: "/asset/courses/graphics.jpg",
        modules: ["Introduction to Design", "Photoshop Mastery", "Illustrator Basics", "Logo Design", "Branding Identity"],
    },
    "t-shirt-design": {
        name: "T-Shirt Design",
        description: "Learn print-on-demand strategies and create best-selling t-shirt designs.",
        image: "/asset/courses/tshirt.jpg",
        modules: ["Typography for Tees", "Vector Art", "Print Preparation", "Market Research", "POD Platforms"],
    },
    "digital-marketing": {
        name: "Digital Marketing",
        description: "Comprehensive guide to SEO, SMM, Email Marketing, and more.",
        image: "/asset/courses/dm.jpg",
        modules: ["SEO Fundamentals", "Social Media Strategy", "Content Marketing", "PPC Advertising", "Analytics"],
    },
    "wordpress-development": {
        name: "WordPress Development",
        description: "Build dynamic websites with WordPress themes and plugins.",
        image: "/asset/courses/wordpress.jpg",
        modules: ["WP Installation", "Theme Customization", "Elementor Page Builder", "WooCommerce", "Site Optimization"],
    },
    "frontend-development": {
        name: "Frontend Development",
        description: "Become a frontend engineer with React, Next.js, and modern CSS.",
        image: "/asset/courses/uiux.jpg",
        modules: ["HTML/CSS/JS", "React Basics", "Next.js Framework", "Tailwind CSS", "State Management"],
    },
};

export default function CoursePage() {
    const params = useParams();
    const slug = params["course-name"]; // Match the directory name [course-name]
    const course = courseData[slug];

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-500">Course Not Found</h1>
            </div>
        );
    }

    return (
        <div className="pb-16 bg-white">
            {/* Hero Section */}
            <section id="details" className="relative h-[60vh] flex items-end">
                <div className="absolute inset-0">
                    <Image src={course.image} fill className="object-cover" alt={course.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 z-10 pb-16 text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.name}</h1>
                    <p className="text-xl opacity-90 max-w-2xl">{course.description}</p>
                </div>
            </section>

            {/* Content Grid */}
            <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Modules & Feedback */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Modules Section */}
                    <section id="modules">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-3 bg-blue-100 text-blue-600 rounded-lg"><FaClipboardList size={24} /></span>
                            <h2 className="text-2xl font-bold text-gray-800">Course Modules</h2>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <ul className="space-y-4">
                                {course.modules.map((module, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[var(--color-primary)] text-white rounded-full font-bold text-sm">
                                            {idx + 1}
                                        </span>
                                        <span className="font-medium text-gray-700 mt-1">{module}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Students Feedback Section */}
                    <section id="feedback">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="p-3 bg-orange-100 text-[var(--color-secondary)] rounded-lg"><FaUserGraduate size={24} /></span>
                            <h2 className="text-2xl font-bold text-gray-800">Student Feedback</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2].map((review) => (
                                <div key={review} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex items-center gap-2 mb-4 text-yellow-400">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <p className="text-gray-600 mb-6 italic">"This course completely changed my career path. The instructors are amazing and the content is top-notch."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-gray-800">Student Name</p>
                                            <p className="text-xs text-gray-500">Alumni</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Enrollment Card (Sticky) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Enroll Now</h3>
                        <p className="text-gray-500 mb-6">Start your learning journey today</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Duration</span>
                                <span className="font-semibold text-gray-800">6 Months</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Lectures</span>
                                <span className="font-semibold text-gray-800">24+</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Level</span>
                                <span className="font-semibold text-gray-800">Beginner to Pro</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 transition-all mb-4">
                            Join Batch
                        </button>
                        <p className="text-center text-xs text-gray-400">30-Day Money-Back Guarantee</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
