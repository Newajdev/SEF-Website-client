"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    FaBook,
    FaStar,
    FaEnvelope,
    FaCalendarCheck,
    FaComments,
    FaUsers,
    FaGraduationCap,
    FaArrowRight,
} from "react-icons/fa";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalCourses: 0,
        totalReviews: 0,
        totalMessages: 0,
        totalRegistrations: 0,
        totalBookings: 0,
        totalAdmissions: 0,
    });

    useEffect(() => {
        // TODO: Fetch real statistics from API
        // fetchStats();
        setStats({
            totalCourses: 4,
            totalReviews: 150,
            totalMessages: 25,
            totalRegistrations: 45,
            totalBookings: 30,
            totalAdmissions: 120,
        });
    }, []);

    const statCards = [
        {
            title: "Total Courses",
            value: stats.totalCourses,
            icon: <FaBook className="text-3xl" />,
            color: "bg-blue-500",
            link: "/admin/courses",
        },
        {
            title: "Total Reviews",
            value: stats.totalReviews,
            icon: <FaStar className="text-3xl" />,
            color: "bg-yellow-500",
            link: "/admin/reviews",
        },
        {
            title: "Contact Messages",
            value: stats.totalMessages,
            icon: <FaEnvelope className="text-3xl" />,
            color: "bg-green-500",
            link: "/admin/contact",
        },
        {
            title: "Seminar Registrations",
            value: stats.totalRegistrations,
            icon: <FaCalendarCheck className="text-3xl" />,
            color: "bg-purple-500",
            link: "/admin/seminars",
        },
        {
            title: "Consultancy Bookings",
            value: stats.totalBookings,
            icon: <FaComments className="text-3xl" />,
            color: "bg-orange-500",
            link: "/admin/consultancy",
        },
        {
            title: "Total Admissions",
            value: stats.totalAdmissions,
            icon: <FaGraduationCap className="text-3xl" />,
            color: "bg-indigo-500",
            link: "/admin/admissions",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your website.</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statCards.map((stat, index) => (
                    <Link
                        key={index}
                        href={stat.link}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.color} text-white p-3 rounded-xl`}>
                                {stat.icon}
                            </div>
                            <FaArrowRight className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-gray-600">{stat.title}</p>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link
                        href="/admin/courses/new"
                        className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all text-center group"
                    >
                        <FaBook className="text-2xl text-gray-400 group-hover:text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="font-semibold text-gray-700 group-hover:text-[var(--color-primary)]">Add New Course</p>
                    </Link>
                    <Link
                        href="/admin/facilities/new"
                        className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all text-center group"
                    >
                        <FaUsers className="text-2xl text-gray-400 group-hover:text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="font-semibold text-gray-700 group-hover:text-[var(--color-primary)]">Add Facility</p>
                    </Link>
                    <Link
                        href="/admin/statistics"
                        className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all text-center group"
                    >
                        <FaUsers className="text-2xl text-gray-400 group-hover:text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="font-semibold text-gray-700 group-hover:text-[var(--color-primary)]">Update Statistics</p>
                    </Link>
                    <Link
                        href="/admin/about"
                        className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all text-center group"
                    >
                        <FaUsers className="text-2xl text-gray-400 group-hover:text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="font-semibold text-gray-700 group-hover:text-[var(--color-primary)]">Edit About Page</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

