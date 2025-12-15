"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

export default function EditFacilityPage() {
    const router = useRouter();
    const params = useParams();
    const facilityId = params.id;
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        icon: "FaVideo",
        color: "from-blue-500 to-cyan-500",
        order: 1,
        isActive: true,
    });

    useEffect(() => {
        fetchFacility();
    }, [facilityId]);

    const fetchFacility = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get(`/api/admin/facilities/${facilityId}`);
            // setFormData(response.data);
            
            // Mock data
            const mockFacility = {
                title: "Live Interactive Classes",
                description: "Join real-time sessions with industry experts",
                icon: "FaVideo",
                color: "from-blue-500 to-cyan-500",
                order: 1,
                isActive: true,
            };
            
            setFormData(mockFacility);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch facility data", "error");
            router.push("/admin/facilities");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            // TODO: Replace with actual API call
            // await axios.put(`/api/admin/facilities/${facilityId}`, formData);
            
            Swal.fire({
                title: "Success!",
                text: "Facility updated successfully",
                icon: "success",
                confirmButtonColor: "#00280b",
            });

            router.push("/admin/facilities");
        } catch (error) {
            Swal.fire("Error!", "Failed to update facility", "error");
        } finally {
            setSaving(false);
        }
    };

    const iconOptions = [
        "FaVideo", "FaChalkboardTeacher", "FaLaptopCode", "FaHandsHelping",
        "FaCertificate", "FaUserFriends", "FaNetworkWired", "FaBriefcase",
        "FaUsers", "FaCode", "FaGraduationCap"
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-gray-500">Loading facility data...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/facilities"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <FaArrowLeft />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Edit Facility</h1>
                    <p className="text-gray-600">Update facility information</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Icon Name (React Icons)
                        </label>
                        <select
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                        >
                            {iconOptions.map((icon) => (
                                <option key={icon} value={icon}>
                                    {icon}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all resize-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Gradient Color Classes (Tailwind)
                        </label>
                        <input
                            type="text"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            placeholder="from-blue-500 to-cyan-500"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Display Order
                        </label>
                        <input
                            type="number"
                            name="order"
                            value={formData.order}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                id="isActive"
                                className="w-5 h-5 accent-[var(--color-primary)]"
                            />
                            <label htmlFor="isActive" className="text-sm font-semibold text-gray-700">
                                Active (Facility will be visible on website)
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSave />
                        <span>{saving ? "Saving..." : "Update Facility"}</span>
                    </button>
                    <Link
                        href="/admin/facilities"
                        className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

