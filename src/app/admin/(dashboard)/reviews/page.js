"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import DataTable from "@/components/admin/DataTable";
import Swal from "sweetalert2";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/reviews');
            
            // Mock data
            const mockReviews = [
                {
                    id: 1,
                    fullName: "Rahman Ahmed",
                    courseName: "Graphics Design",
                    review: "This course completely changed my career path...",
                    photoUrl: "/asset/placeholder.png",
                    rating: 5,
                    role: "Graphics Designer",
                    isApproved: false,
                    createdAt: "2024-01-20",
                },
            ];
            
            setReviews(mockReviews);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch reviews", "error");
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (review) => {
        try {
            // TODO: Replace with actual API call
            // await axios.put(`/api/admin/reviews/${review.id}/approve`);
            
            setReviews(reviews.map((r) => r.id === review.id ? { ...r, isApproved: true } : r));
            Swal.fire("Success!", "Review approved", "success");
        } catch (error) {
            Swal.fire("Error!", "Failed to approve review", "error");
        }
    };

    const handleDelete = async (review) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                // TODO: Replace with actual API call
                // await axios.delete(`/api/admin/reviews/${review.id}`);
                
                setReviews(reviews.filter((r) => r.id !== review.id));
                Swal.fire("Deleted!", "Review has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Failed to delete review", "error");
            }
        }
    };

    const filteredReviews = reviews.filter((review) =>
        review.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tableHeaders = [
        { key: "id", label: "ID" },
        { key: "fullName", label: "Name" },
        { key: "courseName", label: "Course" },
        {
            key: "review",
            label: "Review",
            render: (value) => (
                <div className="max-w-xs truncate" title={value}>
                    {value}
                </div>
            ),
        },
        {
            key: "rating",
            label: "Rating",
            render: (value) => (
                <span className="text-yellow-500">{"★".repeat(value)}</span>
            ),
        },
        {
            key: "isApproved",
            label: "Status",
            render: (value) => (
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        value
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                    }`}
                >
                    {value ? "Approved" : "Pending"}
                </span>
            ),
        },
        { key: "createdAt", label: "Date" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reviews Management</h1>
                <p className="text-gray-600">Manage student reviews and testimonials</p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search reviews..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                    />
                </div>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-12 text-center">
                    <p className="text-gray-500">Loading reviews...</p>
                </div>
            ) : (
                <DataTable
                    headers={tableHeaders}
                    data={filteredReviews}
                    onEdit={(review) => handleApprove(review)}
                    onDelete={handleDelete}
                    actions={true}
                />
            )}
        </div>
    );
}

