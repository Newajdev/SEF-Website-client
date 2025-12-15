"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";
import ImageUpload from "@/components/admin/ImageUpload";

export default function EditCoursePage() {
    const router = useRouter();
    const params = useParams();
    const courseId = params.id;
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        fullDescription: "",
        image: "",
        duration: "6 Months",
        level: "Beginner to Advanced",
        mode: "Online & Offline",
        lectures: "24+",
        careerFocus: "",
        gradient: "from-indigo-900 via-purple-900 to-indigo-800",
        forWhom: "",
        isActive: true,
        modules: [{ title: "", description: "", order: 1 }],
        careerOutcomes: [""],
    });

    useEffect(() => {
        fetchCourse();
    }, [courseId]);

    const fetchCourse = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await axios.get(`/api/admin/courses/${courseId}`);
            // setFormData(response.data);
            
            // Mock data for now
            const mockCourse = {
                name: "Graphics Design",
                slug: "graphics-design",
                description: "Master Adobe Photoshop, Illustrator, and InDesign",
                fullDescription: "Transform your creative vision into professional designs...",
                image: "/asset/courses/graphics.jpg",
                duration: "6 Months",
                level: "Beginner to Advanced",
                mode: "Online & Offline",
                lectures: "24+",
                careerFocus: "Become a professional Graphic Designer",
                gradient: "from-indigo-900 via-purple-900 to-indigo-800",
                forWhom: "Beginners interested in design...",
                isActive: true,
                modules: [
                    { title: "Introduction to Design", description: "Understanding design principles", order: 1 },
                    { title: "Photoshop Mastery", description: "Advanced photo editing", order: 2 },
                ],
                careerOutcomes: ["Graphic Designer", "Brand Identity Designer"],
            };
            
            setFormData(mockCourse);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch course data", "error");
            router.push("/admin/courses");
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

    const handleModuleChange = (index, field, value) => {
        const updatedModules = [...formData.modules];
        updatedModules[index] = { ...updatedModules[index], [field]: value };
        setFormData({ ...formData, modules: updatedModules });
    };

    const addModule = () => {
        setFormData({
            ...formData,
            modules: [
                ...formData.modules,
                { title: "", description: "", order: formData.modules.length + 1 },
            ],
        });
    };

    const removeModule = (index) => {
        setFormData({
            ...formData,
            modules: formData.modules.filter((_, i) => i !== index),
        });
    };

    const handleCareerOutcomeChange = (index, value) => {
        const updated = [...formData.careerOutcomes];
        updated[index] = value;
        setFormData({ ...formData, careerOutcomes: updated });
    };

    const addCareerOutcome = () => {
        setFormData({
            ...formData,
            careerOutcomes: [...formData.careerOutcomes, ""],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            // TODO: Replace with actual API call
            // await axios.put(`/api/admin/courses/${courseId}`, formData);
            
            Swal.fire({
                title: "Success!",
                text: "Course updated successfully",
                icon: "success",
                confirmButtonColor: "#00280b",
            });

            router.push("/admin/courses");
        } catch (error) {
            Swal.fire("Error!", "Failed to update course", "error");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-gray-500">Loading course data...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/courses"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <FaArrowLeft />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Edit Course</h1>
                    <p className="text-gray-600">Update course information</p>
                </div>
            </div>

            {/* Form - Same as new course form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-8">
                {/* Basic Information */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Course Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Slug *
                            </label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                                placeholder="graphics-design"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Short Description *
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
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Description *
                            </label>
                            <textarea
                                name="fullDescription"
                                value={formData.fullDescription}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all resize-none"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <ImageUpload
                                value={formData.image}
                                onChange={(value) => setFormData({ ...formData, image: value })}
                                label="Course Image"
                                required
                                maxSizeMB={5}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Career Focus
                            </label>
                            <input
                                type="text"
                                name="careerFocus"
                                value={formData.careerFocus}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Course Details */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Course Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Duration
                            </label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Level
                            </label>
                            <input
                                type="text"
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Mode
                            </label>
                            <input
                                type="text"
                                name="mode"
                                value={formData.mode}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Lectures
                            </label>
                            <input
                                type="text"
                                name="lectures"
                                value={formData.lectures}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Modules */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900">Course Modules</h2>
                        <button
                            type="button"
                            onClick={addModule}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Add Module
                        </button>
                    </div>
                    <div className="space-y-4">
                        {formData.modules.map((module, index) => (
                            <div key={index} className="p-4 border-2 border-gray-200 rounded-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-semibold text-gray-700">Module {index + 1}</span>
                                    {formData.modules.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeModule(index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Title *
                                        </label>
                                        <input
                                            type="text"
                                            value={module.title}
                                            onChange={(e) => handleModuleChange(index, "title", e.target.value)}
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[var(--color-primary)] focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Description *
                                        </label>
                                        <textarea
                                            value={module.description}
                                            onChange={(e) => handleModuleChange(index, "description", e.target.value)}
                                            rows="2"
                                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[var(--color-primary)] focus:outline-none resize-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Outcomes */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900">Career Outcomes</h2>
                        <button
                            type="button"
                            onClick={addCareerOutcome}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Add Outcome
                        </button>
                    </div>
                    <div className="space-y-3">
                        {formData.careerOutcomes.map((outcome, index) => (
                            <input
                                key={index}
                                type="text"
                                value={outcome}
                                onChange={(e) => handleCareerOutcomeChange(index, e.target.value)}
                                placeholder="Career outcome..."
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Who This Course Is For
                            </label>
                            <textarea
                                name="forWhom"
                                value={formData.forWhom}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all resize-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Gradient Classes (Tailwind)
                            </label>
                            <input
                                type="text"
                                name="gradient"
                                value={formData.gradient}
                                onChange={handleChange}
                                placeholder="from-indigo-900 via-purple-900 to-indigo-800"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                            />
                        </div>
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
                                Active (Course will be visible on website)
                            </label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSave />
                        <span>{saving ? "Saving..." : "Update Course"}</span>
                    </button>
                    <Link
                        href="/admin/courses"
                        className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

