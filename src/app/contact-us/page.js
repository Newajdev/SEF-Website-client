"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        message: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        mobile: false,
        message: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFocus = (field) => {
        setFocused((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setFocused((prev) => ({ ...prev, [field]: formData[field] !== "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simulate API call
        try {
            // Your API call here
            await new Promise((resolve) => setTimeout(resolve, 500));
            
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting us. We'll get back to you soon.",
                icon: "success",
                confirmButtonColor: "#00280b",
                confirmButtonText: "OK",
                timer: 3000,
                timerProgressBar: true,
            }).then(() => {
                setFormData({ name: "", mobile: "", message: "" });
                setFocused({ name: false, mobile: false, message: false });
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonColor: "#00280b",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
            </div>

            {/* Back Link */}
            <Link
                href="/"
                className="absolute top-8 left-8 text-gray-400 hover:text-[var(--color-primary)] transition-colors z-10 flex items-center gap-2 group"
                title="Back to Home"
            >
                <IoIosArrowBack size={24} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline text-sm font-medium">Back</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-lg w-full bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden"
            >
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#003d14] p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <FaEnvelope className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-1">Get in Touch</h1>
                            <p className="text-gray-200 text-sm">We'd love to hear from you</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name Field with Floating Label */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlur("name")}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] transition-all peer"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.name || formData.name
                                    ? "top-2 text-xs text-[var(--color-primary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Mobile Number Field with Floating Label */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            onFocus={() => handleFocus("mobile")}
                            onBlur={() => handleBlur("mobile")}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] transition-all peer"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.mobile || formData.mobile
                                    ? "top-2 text-xs text-[var(--color-primary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Mobile Number
                        </label>
                        <FaPhone className="absolute right-4 top-4 text-gray-400 text-sm" />
                    </div>

                    {/* Message Field with Floating Label */}
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus("message")}
                            onBlur={() => handleBlur("message")}
                            rows="4"
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] transition-all resize-none peer"
                            required
                        ></textarea>
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.message || formData.message
                                    ? "top-2 text-xs text-[var(--color-primary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Your Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-[var(--color-primary)] to-[#003d14] text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Send Message</span>
                        <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {/* Helper Text */}
                    <p className="text-center text-xs text-gray-500">
                        We typically respond within 24 hours
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
