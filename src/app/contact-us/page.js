"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent! (Simulation)");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-2xl relative"
            >
                {/* Back Link */}
                <Link
                    href="/"
                    className="absolute top-8 left-8 text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                    title="Back to Home"
                >
                    <IoIosArrowBack size={24} />
                </Link>

                <div className="text-center mb-8 pt-6">
                    <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">Get in Touch</h1>
                    <p className="text-gray-500">We'd love to hear from you</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            rows="4"
                            className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                            placeholder="How can we help?"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-900/20"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
