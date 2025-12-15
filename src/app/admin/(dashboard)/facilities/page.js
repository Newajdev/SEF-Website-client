"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function FacilitiesPage() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchFacilities();
    }, []);

    const fetchFacilities = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/facilities');
            
            // Mock data
            const mockFacilities = [
                {
                    id: 1,
                    title: "Live Interactive Classes",
                    description: "Join real-time sessions with industry experts",
                    icon: "FaVideo",
                    color: "from-blue-500 to-cyan-500",
                    order: 1,
                    isActive: true,
                },
            ];
            
            setFacilities(mockFacilities);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch facilities", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (facility) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete "${facility.title}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                // TODO: Replace with actual API call
                // await axios.delete(`/api/admin/facilities/${facility.id}`);
                
                setFacilities(facilities.filter((f) => f.id !== facility.id));
                Swal.fire("Deleted!", "Facility has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Failed to delete facility", "error");
            }
        }
    };

    const filteredFacilities = facilities.filter((facility) =>
        facility.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "title", label: "Title" },
        {
            key: "description",
            label: "Description",
            render: (value) => (
                <div className="max-w-xs truncate" title={value}>
                    {value}
                </div>
            ),
        },
        { key: "icon", label: "Icon" },
        { key: "order", label: "Order" },
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Facilities Management</h1>
                    <p className="text-gray-600">Manage facilities/services displayed on the website</p>
                </div>
                <Link
                    href="/admin/facilities/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg"
                >
                    <FaPlus />
                    <span>Add New Facility</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search facilities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading facilities...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredFacilities}
                    onEdit={(facility) => {
                        window.location.href = `/admin/facilities/${facility.id}/edit`;
                    }}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

