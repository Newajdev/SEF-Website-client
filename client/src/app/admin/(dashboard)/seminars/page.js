"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function SeminarsPage() {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const fetchRegistrations = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/seminars/registrations');
            
            // Mock data
            const mockRegistrations = [
                {
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com",
                    mobile: "+8801700000000",
                    seminarTitle: "Web Development Career Path",
                    gender: "Male",
                    receiveOffers: true,
                    status: "confirmed",
                    createdAt: "2024-01-25",
                },
            ];
            
            setRegistrations(mockRegistrations);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch registrations", "error");
        } finally {
            setLoading(false);
        }
    };

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "mobile", label: "Mobile" },
        { key: "seminarTitle", label: "Seminar" },
        { key: "gender", label: "Gender" },
        {
            key: "status",
            label: "Status",
            render: (value) => (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {value}
                </span>
            ),
        },
        { key: "createdAt", label: "Date" },
    ];

    const filteredRegistrations = registrations.filter((reg) =>
        reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Seminar Registrations</h1>
                <p className="text-gray-600">View all seminar registration submissions</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search registrations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading registrations...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredRegistrations}
                    actions={false}
                />
            )}
        </div>
    );
}

