import Link from "next/link";
import React from "react";

export const SeminarsSection = () => {
    return (
        <section className="py-20 bg-[var(--color-primary)] text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Free Seminars</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                    Discover the latest trends and technologies in our interactive free seminars. Learn from industry leaders and get your questions answered.
                </p>
                <Link
                    href="/free-seminar"
                    className="inline-block px-10 py-4 bg-white text-[var(--color-primary)] font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                    Register for Free
                </Link>
            </div>
        </section>
    );
};

export const ConsultancySection = () => {
    return (
        <section className="py-20 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Take Free Consultancy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                    Confused about which career path to choose? Talk to our experts for personalized guidance and plan your future with confidence.
                </p>
                <Link
                    href="/free-consultancy"
                    className="inline-block px-10 py-4 bg-[var(--color-secondary)] text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                    Book A Session
                </Link>
            </div>
        </section>
    );
};
