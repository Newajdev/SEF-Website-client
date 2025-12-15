"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function AdmissionsPage() {
    const [admissions, setAdmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchAdmissions();
    }, []);

    const fetchAdmissions = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/admissions');
            
            // Mock data
            const mockAdmissions = [
                {
                    id: 1,
                    englishName: "John Doe",
                    courseName: "Graphics Design",
                    email: "john@example.com",
                    phone: "+8801700000000",
                    status: "pending",
                    createdAt: "2024-01-25",
                },
            ];
            
            setAdmissions(mockAdmissions);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch admissions", "error");
        } finally {
            setLoading(false);
        }
    };

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "englishName", label: "Name" },
        { key: "courseName", label: "Course" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        {
            key: "status",
            label: "Status",
            render: (value) => {
                const statusColors = {
                    pending: "bg-yellow-100 text-yellow-800",
                    confirmed: "bg-green-100 text-green-800",
                    rejected: "bg-red-100 text-red-800",
                };
                return (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[value] || "bg-gray-100 text-gray-800"}`}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                );
            },
        },
        { key: "createdAt", label: "Date" },
    ];

    const filteredAdmissions = admissions.filter((admission) =>
        admission.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admission.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Admissions</h1>
                <p className="text-gray-600">Manage student admission applications</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search admissions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading admissions...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredAdmissions}
                    onView={(admission) => window.location.href = `/admin/admissions/${admission.id}`}
                    actions={true}
                />
            )}
        </div>
    );
}

