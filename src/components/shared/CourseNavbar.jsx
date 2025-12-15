"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CourseNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/asset/logo.png"
                            width={150}
                            height={45}
                            alt="Shah Emdadia Freelancers logo"
                            className="h-auto w-[130px] md:w-[150px]"
                            loading="lazy"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("details")}
                            className="font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Course Details
                        </button>
                        <button
                            onClick={() => scrollToSection("modules")}
                            className="font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Modules
                        </button>
                        <button
                            onClick={() => scrollToSection("feedback")}
                            className="font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                        >
                            Students Feedback
                        </button>

                        <Link
                            href="/"
                            className="ml-4 px-4 py-2 text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <button
                            onClick={() => scrollToSection("details")}
                            className="text-left font-medium text-gray-700 hover:text-[var(--color-primary)]"
                        >
                            Course Details
                        </button>
                        <button
                            onClick={() => scrollToSection("modules")}
                            className="text-left font-medium text-gray-700 hover:text-[var(--color-primary)]"
                        >
                            Modules
                        </button>
                        <button
                            onClick={() => scrollToSection("feedback")}
                            className="text-left font-medium text-gray-700 hover:text-[var(--color-primary)]"
                        >
                            Students Feedback
                        </button>
                        <Link
                            href="/"
                            className="text-left font-medium text-gray-500 hover:text-[var(--color-primary)] pt-2 border-t border-gray-100"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CourseNavbar;
