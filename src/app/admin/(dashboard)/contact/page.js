"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaEye, FaCheck, FaTimes } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function ContactMessagesPage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/contact');
            
            // Mock data
            const mockMessages = [
                {
                    id: 1,
                    name: "John Doe",
                    mobile: "+8801700000000",
                    message: "I would like to know more about your courses.",
                    status: "pending",
                    createdAt: "2024-01-25",
                },
            ];
            
            setMessages(mockMessages);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch messages", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleView = (message) => {
        setSelectedMessage(message);
    };

    const handleStatusChange = async (message, newStatus) => {
        try {
            // TODO: Replace with actual API call
            // await axios.put(`/api/admin/contact/${message.id}`, { status: newStatus });
            
            setMessages(messages.map((m) => m.id === message.id ? { ...m, status: newStatus } : m));
            Swal.fire("Success!", "Status updated", "success");
        } catch (error) {
            Swal.fire("Error!", "Failed to update status", "error");
        }
    };

    const filteredMessages = messages.filter((msg) =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.mobile.includes(searchTerm)
    );

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "mobile", label: "Mobile" },
        {
            key: "message",
            label: "Message",
            render: (value) => (
                <div className="max-w-xs truncate" title={value}>
                    {value}
                </div>
            ),
        },
        {
            key: "status",
            label: "Status",
            render: (value) => {
                const statusColors = {
                    pending: "bg-yellow-100 text-yellow-800",
                    read: "bg-blue-100 text-blue-800",
                    replied: "bg-green-100 text-green-800",
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

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h1>
                <p className="text-gray-600">Manage contact form submissions</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading messages...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredMessages}
                    onView={handleView}
                    onEdit={(msg) => handleStatusChange(msg, msg.status === "pending" ? "read" : "replied")}
                />
            )}

            {/* Message Detail Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Message Details</h2>
                            <button
                                onClick={() => setSelectedMessage(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-600">Name</p>
                                <p className="text-lg font-semibold">{selectedMessage.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Mobile</p>
                                <p className="text-lg">{selectedMessage.mobile}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Message</p>
                                <p className="text-gray-900">{selectedMessage.message}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Date</p>
                                <p className="text-gray-900">{selectedMessage.createdAt}</p>
                            </div>
                            <div className="flex gap-3 pt-4 border-t">
                                <button
                                    onClick={() => handleStatusChange(selectedMessage, "read")}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Mark as Read
                                </button>
                                <button
                                    onClick={() => handleStatusChange(selectedMessage, "replied")}
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                >
                                    Mark as Replied
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

