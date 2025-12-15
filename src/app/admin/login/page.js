"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaLock, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AdminLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Replace with actual API call
            // const response = await axios.post('/api/admin/login', formData);
            
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Store token (in real app, use secure httpOnly cookies)
            if (typeof window !== "undefined") {
                localStorage.setItem("adminToken", "mock-token-123");
            }

            Swal.fire({
                title: "Success!",
                text: "Login successful",
                icon: "success",
                confirmButtonColor: "#00280b",
            });

            router.push("/admin");
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Invalid credentials. Please try again.",
                icon: "error",
                confirmButtonColor: "#00280b",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#003d14] to-[var(--color-primary)] p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Image
                            src="/asset/logo.png"
                            width={160}
                            height={50}
                            alt="SEF Logo"
                            className="mx-auto mb-4"
                        />
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
                        <p className="text-gray-600">Sign in to access the dashboard</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                                    placeholder="admin@sef.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-[var(--color-primary)] to-[#003d14] text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Logging in..." : "Sign In"}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Shah Emdadia Freelancers. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

