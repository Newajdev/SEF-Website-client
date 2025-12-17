"use client";
import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

export default function StatisticsPage() {
    const [loading, setLoading] = useState(false);
    const [statistics, setStatistics] = useState({
        totalStudents: 10000,
        successfulStudents: 8500,
        successRate: 95,
        expertMentors: 50,
    });

    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        try {
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/statistics');
            // setStatistics(response.data);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch statistics", "error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStatistics({
            ...statistics,
            [name]: parseInt(value) || 0,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Replace with actual API call
            // await axios.put('/api/admin/statistics', statistics);
            
            Swal.fire({
                title: "Success!",
                text: "Statistics updated successfully",
                icon: "success",
                confirmButtonColor: "#00280b",
            });
        } catch (error) {
            Swal.fire("Error!", "Failed to update statistics", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Statistics Management</h1>
                <p className="text-gray-600">Update website statistics displayed on the About section</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Total Students
                        </label>
                        <input
                            type="number"
                            name="totalStudents"
                            value={statistics.totalStudents}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Successful Students
                        </label>
                        <input
                            type="number"
                            name="successfulStudents"
                            value={statistics.successfulStudents}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Success Rate (%)
                        </label>
                        <input
                            type="number"
                            name="successRate"
                            value={statistics.successRate}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expert Mentors
                        </label>
                        <input
                            type="number"
                            name="expertMentors"
                            value={statistics.expertMentors}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSave />
                        <span>{loading ? "Saving..." : "Save Statistics"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

