"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

export default function FreeSeminar() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        gender: "",
        email: "",
        seminar: "",
        offers: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Success!",
            text: "Your seminar booking has been confirmed.",
            icon: "success",
            confirmButtonColor: "#00280b",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-2xl relative"
            >
                <Link
                    href="/"
                    className="absolute top-8 left-8 text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                    title="Back to Home"
                >
                    <IoIosArrowBack size={24} />
                </Link>

                <div className="text-center mb-8 pt-6">
                    <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                        Join Free Seminar
                    </h1>
                    <p className="text-gray-500">Register now to secure your spot</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="Male" onChange={handleChange} className="accent-[var(--color-primary)]" required /> Male
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="Female" onChange={handleChange} className="accent-[var(--color-primary)]" required /> Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Seminar</label>
                        <select
                            name="seminar"
                            value={formData.seminar}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                            required
                        >
                            <option value="">Choose a topic...</option>
                            <option value="Web Development">Web Development Career Path</option>
                            <option value="Digital Marketing">Digital Marketing Strategies</option>
                            <option value="Graphic Design">Graphic Design & Freelancing</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="offers"
                            checked={formData.offers}
                            onChange={handleChange}
                            id="offers"
                            className="w-4 h-4 accent-[var(--color-primary)] rounded"
                        />
                        <label htmlFor="offers" className="text-sm text-gray-600">I want to receive future offers via email or message</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-900/20 mt-4"
                    >
                        Book Seminar
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
