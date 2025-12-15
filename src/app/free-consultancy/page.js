"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Booking Confirmed!",
            text: "We have received your consultancy request.",
            icon: "success",
            confirmButtonColor: "#f2762f",
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
                    <h1 className="text-3xl font-bold text-[var(--color-secondary)] mb-2">
                        Free Consultancy
                    </h1>
                    <p className="text-gray-500">Get expert advice for your career</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="Male" onChange={handleChange} className="accent-[var(--color-secondary)]" required /> Male
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" value="Female" onChange={handleChange} className="accent-[var(--color-secondary)]" required /> Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Consultancy Type</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="type" value="Online" checked={formData.type === "Online"} onChange={handleChange} className="accent-[var(--color-secondary)]" /> Online
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="type" value="Offline" checked={formData.type === "Offline"} onChange={handleChange} className="accent-[var(--color-secondary)]" /> Offline
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-[var(--color-secondary)] text-white font-bold rounded-xl hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-orange-900/20 mt-4"
                    >
                        Book Consultancy
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
