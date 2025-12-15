"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaArrowRight } from "react-icons/fa";

const courses = [
    {
        id: 1,
        name: "Graphics Design",
        description: "Master the art of visual layout, typography, and color theory using industry-standard tools like Adobe Photoshop and Illustrator. Create stunning visuals for brands and marketing.",
        image: "/asset/courses/graphics.jpg",
        slug: "graphics-design",
        careerFocus: "Become a professional Graphic Designer",
        gradient: "from-indigo-900 via-purple-900 to-indigo-800"
    },
    {
        id: 2,
        name: "T-Shirt Design",
        description: "Learn specialized techniques for print-on-demand businesses. Understand fabric constraints, color separation, and trendy aesthetics to launch your own apparel line.",
        image: "/asset/courses/tshirt.jpg",
        slug: "t-shirt-design",
        careerFocus: "Build your own apparel business",
        gradient: "from-orange-900 via-red-900 to-orange-800"
    },
    {
        id: 3,
        name: "Digital Marketing",
        description: "Develop comprehensive strategies for SEO, social media, and content marketing. Learn to analyze data and optimize campaigns for maximum ROI.",
        image: "/asset/courses/dm.jpg",
        slug: "digital-marketing",
        careerFocus: "Excel as a Digital Marketing Specialist",
        gradient: "from-blue-900 via-cyan-900 to-blue-800"
    },
    {
        id: 4,
        name: "WordPress Development",
        description: "Build custom, responsive websites without writing complex code. Master theme customization, plugin integration, and e-commerce solutions with WooCommerce.",
        image: "/asset/courses/wordpress.jpg",
        slug: "wordpress-development",
        careerFocus: "Launch your web development career",
        gradient: "from-teal-900 via-green-900 to-teal-800"
    },
];

const CoursesSection = () => {
    const [visibleCourses, setVisibleCourses] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const courseId = entry.target.dataset.courseId;
                        setVisibleCourses((prev) => [...prev, courseId]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const courseElements = sectionRef.current?.querySelectorAll("[data-course-id]");
        courseElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="courses" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
            </div>

            <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
                        Our Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Premium courses designed to transform your career and unlock your potential
                    </p>
                </div>

                {/* Courses List */}
                <div className="space-y-32">
                    {courses.map((course, index) => {
                        const isEven = index % 2 === 0;
                        const isVisible = visibleCourses.includes(course.id.toString());
                        const gradientClass = course.gradient || "from-gray-900 via-gray-800 to-gray-900";

                        return (
                            <div
                                key={course.id}
                                data-course-id={course.id}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                                    isEven ? "" : "lg:flex-row-reverse"
                                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}
                            >
                                {/* Premium Course Card */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${gradientClass} transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]`}>
                                        {/* Image Overlay with Gradient */}
                                        <div className="relative h-[400px] w-full">
                                            <Image
                                                src={course.image}
                                                fill
                                                className="object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                                                alt={course.name}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-90`}></div>
                                            
                                            {/* Play Icon / Visual Element */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500"></div>
                                                    <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                                        <FaPlay className="text-white text-2xl ml-1" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Course Title Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                                                    {course.name}
                                                </h3>
                                                
                                                {/* Primary CTA Button */}
                                                <Link
                                                    href={`/${course.slug}`}
                                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-secondary)] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#e6651f] transform transition-all duration-300 group/btn"
                                                >
                                                    <span>Let's Code</span>
                                                    <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </Link>
                                            </div>

                                            {/* Decorative Corner Element */}
                                            <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white/20 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                                            <div className="absolute top-12 right-12 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Content (Text Side) */}
                                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                                    <div className="inline-block px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-2">
                                        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                            Course {index + 1}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                        {course.name}
                                    </h3>
                                    
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        {course.description}
                                    </p>

                                    <div className="pt-4">
                                        <p className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                                            {course.careerFocus}
                                        </p>
                                        
                                        {/* Secondary CTA */}
                                        <Link
                                            href={`/${course.slug}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 group/link"
                                        >
                                            <span>Explore Details</span>
                                            <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;

