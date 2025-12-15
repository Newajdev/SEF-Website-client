"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function ConsultancyPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/consultancy/bookings');
            
            // Mock data
            const mockBookings = [
                {
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com",
                    mobile: "+8801700000000",
                    type: "Online",
                    preferredDate: "2024-02-20",
                    status: "pending",
                    createdAt: "2024-01-25",
                },
            ];
            
            setBookings(mockBookings);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch bookings", "error");
        } finally {
            setLoading(false);
        }
    };

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "mobile", label: "Mobile" },
        { key: "type", label: "Type" },
        { key: "preferredDate", label: "Preferred Date" },
        {
            key: "status",
            label: "Status",
            render: (value) => {
                const statusColors = {
                    pending: "bg-yellow-100 text-yellow-800",
                    confirmed: "bg-green-100 text-green-800",
                    completed: "bg-blue-100 text-blue-800",
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

    const filteredBookings = bookings.filter((booking) =>
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Consultancy Bookings</h1>
                <p className="text-gray-600">View all consultancy booking requests</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search bookings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading bookings...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredBookings}
                    actions={false}
                />
            )}
        </div>
    );
}

