"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";
import Image from "next/image";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/courses');
            
            // Mock data
            const mockCourses = [
                {
                    id: 1,
                    name: "Graphics Design",
                    slug: "graphics-design",
                    duration: "6 Months",
                    level: "Beginner to Advanced",
                    isActive: true,
                    image: "/asset/courses/graphics.jpg",
                },
                {
                    id: 2,
                    name: "T-Shirt Design",
                    slug: "t-shirt-design",
                    duration: "6 Months",
                    level: "Beginner to Advanced",
                    isActive: true,
                    image: "/asset/courses/tshirt.jpg",
                },
            ];
            
            setCourses(mockCourses);
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to fetch courses",
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (course) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete "${course.name}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                // TODO: Replace with actual API call
                // await axios.delete(`/api/admin/courses/${course.id}`);
                
                setCourses(courses.filter((c) => c.id !== course.id));
                Swal.fire("Deleted!", "Course has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Failed to delete course.", "error");
            }
        }
    };

    const handleEdit = (course) => {
        // Use Next.js router for navigation
        window.location.href = `/admin/courses/${course.id}/edit`;
    };

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tableHeaders = [
        { key: "id", label: "ID" },
        {
            key: "image",
            label: "Image",
            render: (value) => (
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image
                        src={value || "/asset/placeholder.png"}
                        alt="Course"
                        fill
                        className="object-cover"
                    />
                </div>
            ),
        },
        { key: "name", label: "Course Name" },
        { key: "slug", label: "Slug" },
        { key: "duration", label: "Duration" },
        { key: "level", label: "Level" },
        {
            key: "isActive",
            label: "Status",
            render: (value) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        value
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                >
                    {value ? "Active" : "Inactive"}
                </span>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Courses Management</h1>
                    <p className="text-gray-600">Manage all courses on your website</p>
                </div>
                <Link
                    href="/admin/courses/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg"
                >
                    <FaPlus />
                    <span>Add New Course</span>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {/* Courses Table */}
            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading courses...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredCourses}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

