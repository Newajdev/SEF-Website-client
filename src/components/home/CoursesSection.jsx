import React from "react";
import Link from "next/link";
import Image from "next/image";

const courses = [
    {
        id: 1,
        name: "Graphics Design",
        description: "Master the art of visual layout, typography, and color theory using industry-standard tools like Adobe Photoshop and Illustrator. Create stunning visuals for brands and marketing.",
        image: "/asset/courses/graphics.jpg",
        slug: "graphics-design"
    },
    {
        id: 2,
        name: "T-Shirt Design",
        description: "Learn specialized techniques for print-on-demand businesses. Understand fabric constraints, color separation, and trendy aesthetics to launch your own apparel line.",
        image: "/asset/courses/tshirt.jpg",
        slug: "t-shirt-design"
    },
    {
        id: 3,
        name: "Digital Marketing",
        description: "Develop comprehensive strategies for SEO, social media, and content marketing. Learn to analyze data and optimize campaigns for maximum ROI.",
        image: "/asset/courses/dm.jpg",
        slug: "digital-marketing"
    },
    {
        id: 4,
        name: "WordPress Development",
        description: "Build custom, responsive websites without writing complex code. Master theme customization, plugin integration, and e-commerce solutions with WooCommerce.",
        image: "/asset/courses/wordpress.jpg",
        slug: "wordpress-development"
    },
];

const CoursesSection = () => {
    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] text-center mb-16">
                    Our Courses
                </h2>

                <div className="space-y-20">
                    {courses.map((course, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={course.id} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>

                                {/* Image/Card Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                                        <div className="relative h-[300px] w-full">
                                            <Image
                                                src={course.image}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                alt={course.name}
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Link
                                                    href={`/${course.slug}`}
                                                    className="px-8 py-3 bg-[var(--color-secondary)] text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                >
                                                    View Course
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800">{course.name}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        {course.description}
                                    </p>
                                    <div className="pt-2">
                                        <Link
                                            href={`/${course.slug}`}
                                            className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-secondary)] transition-colors inline-flex items-center gap-2"
                                        >
                                            Learn More &rarr;
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
