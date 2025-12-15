"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaComments, FaUser, FaEnvelope, FaPhone, FaCalendarCheck, FaVideo, FaBuilding } from "react-icons/fa";
import Swal from "sweetalert2";

export default function FreeConsultancy() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        type: "Online",
        date: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        email: false,
        mobile: false,
        date: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (value) {
            setFocused((prev) => ({ ...prev, [name]: true }));
        }
    };

    const handleFocus = (field) => {
        setFocused((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setFocused((prev) => ({ ...prev, [field]: formData[field] !== "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Your API call here
            await new Promise((resolve) => setTimeout(resolve, 500));
            
            Swal.fire({
                title: "Booking Confirmed!",
                text: "We have received your consultancy request. Our team will contact you soon.",
                icon: "success",
                confirmButtonColor: "#f2762f",
                confirmButtonText: "Great!",
            }).then(() => {
                setFormData({ name: "", email: "", mobile: "", gender: "", type: "Online", date: "" });
                setFocused({ name: false, email: false, mobile: false, date: false });
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonColor: "#f2762f",
            });
        }
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50/30 p-4 relative overflow-hidden py-12">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
            </div>

            {/* Back Link */}
            <Link
                href="/"
                className="absolute top-8 left-8 text-gray-400 hover:text-[var(--color-secondary)] transition-colors z-10 flex items-center gap-2 group"
                title="Back to Home"
            >
                <IoIosArrowBack size={24} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline text-sm font-medium">Back</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden"
            >
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[#e6651f] p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <FaComments className="text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-1">Free Consultancy</h1>
                            <p className="text-gray-100 text-sm">Get expert advice for your career</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlur("name")}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-secondary)] transition-all"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.name || formData.name
                                    ? "top-2 text-xs text-[var(--color-secondary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Your Name
                        </label>
                        <FaUser className="absolute right-4 top-4 text-gray-400 text-sm" />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlur("email")}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-secondary)] transition-all"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.email || formData.email
                                    ? "top-2 text-xs text-[var(--color-secondary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Email Address
                        </label>
                        <FaEnvelope className="absolute right-4 top-4 text-gray-400 text-sm" />
                    </div>

                    {/* Mobile Number */}
                    <div className="relative">
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            onFocus={() => handleFocus("mobile")}
                            onBlur={() => handleBlur("mobile")}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-secondary)] transition-all"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 ${
                                focused.mobile || formData.mobile
                                    ? "top-2 text-xs text-[var(--color-secondary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Mobile Number
                        </label>
                        <FaPhone className="absolute right-4 top-4 text-gray-400 text-sm" />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleChange}
                                    checked={formData.gender === "Male"}
                                    className="w-5 h-5 accent-[var(--color-secondary)] cursor-pointer"
                                    required
                                />
                                <span className="text-gray-700 group-hover:text-[var(--color-secondary)] transition-colors font-medium">Male</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleChange}
                                    checked={formData.gender === "Female"}
                                    className="w-5 h-5 accent-[var(--color-secondary)] cursor-pointer"
                                    required
                                />
                                <span className="text-gray-700 group-hover:text-[var(--color-secondary)] transition-colors font-medium">Female</span>
                            </label>
                        </div>
                    </div>

                    {/* Consultancy Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Consultancy Type</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.type === "Online" 
                                    ? "border-[var(--color-secondary)] bg-orange-50" 
                                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                            }`}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Online"
                                    checked={formData.type === "Online"}
                                    onChange={handleChange}
                                    className="w-5 h-5 accent-[var(--color-secondary)] cursor-pointer"
                                />
                                <div className="flex items-center gap-2">
                                    <FaVideo className={`text-lg ${formData.type === "Online" ? "text-[var(--color-secondary)]" : "text-gray-400"}`} />
                                    <span className={`font-medium ${formData.type === "Online" ? "text-[var(--color-secondary)]" : "text-gray-700"}`}>Online</span>
                                </div>
                            </label>
                            <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.type === "Offline" 
                                    ? "border-[var(--color-secondary)] bg-orange-50" 
                                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                            }`}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Offline"
                                    checked={formData.type === "Offline"}
                                    onChange={handleChange}
                                    className="w-5 h-5 accent-[var(--color-secondary)] cursor-pointer"
                                />
                                <div className="flex items-center gap-2">
                                    <FaBuilding className={`text-lg ${formData.type === "Offline" ? "text-[var(--color-secondary)]" : "text-gray-400"}`} />
                                    <span className={`font-medium ${formData.type === "Offline" ? "text-[var(--color-secondary)]" : "text-gray-700"}`}>Offline</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="relative">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            onFocus={() => handleFocus("date")}
                            onBlur={() => handleBlur("date")}
                            min={today}
                            className="w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-[var(--color-secondary)] transition-all [color-scheme:light]"
                            required
                        />
                        <label
                            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                                focused.date || formData.date
                                    ? "top-2 text-xs text-[var(--color-secondary)] font-semibold"
                                    : "top-4 text-gray-500"
                            }`}
                        >
                            Preferred Date
                        </label>
                        <FaCalendarCheck className="absolute right-4 top-4 text-gray-400 text-sm pointer-events-none" />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-[var(--color-secondary)] to-[#e6651f] text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                    >
                        <span>Book Consultancy</span>
                        <FaCalendarCheck className="transform group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Helper Text */}
                    <p className="text-center text-xs text-gray-500">
                        100% Free • No obligations • Flexible scheduling
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
