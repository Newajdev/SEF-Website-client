"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
    FaHome,
    FaBook,
    FaStar,
    FaBuilding,
    FaEnvelope,
    FaCalendarCheck,
    FaComments,
    FaChartBar,
    FaInfoCircle,
    FaBars,
    FaTimes,
    FaSignOutAlt,
    FaGraduationCap,
} from "react-icons/fa";

const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/admin" },
    { icon: <FaBook />, label: "Courses", path: "/admin/courses" },
    { icon: <FaStar />, label: "Reviews", path: "/admin/reviews" },
    { icon: <FaBuilding />, label: "Facilities", path: "/admin/facilities" },
    { icon: <FaGraduationCap />, label: "Admissions", path: "/admin/admissions" },
    { icon: <FaEnvelope />, label: "Contact Messages", path: "/admin/contact" },
    { icon: <FaCalendarCheck />, label: "Seminar Registrations", path: "/admin/seminars" },
    { icon: <FaComments />, label: "Consultancy Bookings", path: "/admin/consultancy" },
    { icon: <FaChartBar />, label: "Statistics", path: "/admin/statistics" },
    { icon: <FaInfoCircle />, label: "About Content", path: "/admin/about" },
];

const DashboardSidebar = () => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleLogout = () => {
        // Handle logout logic
        if (typeof window !== "undefined") {
            localStorage.removeItem("adminToken");
            window.location.href = "/auth/login";
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--color-primary)] text-white rounded-lg"
            >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <aside
                className={`h-full w-64 bg-[var(--color-primary)] text-white transform transition-transform duration-300 ${
                    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10">
                        <Link href="/admin" className="flex items-center gap-3">
                            <Image
                                src="/asset/logo.png"
                                width={40}
                                height={40}
                                alt="SEF Logo"
                                className="h-auto"
                            />
                            <div>
                                <h2 className="text-xl font-bold">SEF Admin</h2>
                                <p className="text-xs text-white/70">Dashboard</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsMobileOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                                isActive
                                                    ? "bg-white/20 text-white font-semibold"
                                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                            }`}
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/10">
                        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm">
                            <span>←</span> Back to Website
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                        >
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
};

export default DashboardSidebar;

