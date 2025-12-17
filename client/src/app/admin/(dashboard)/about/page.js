"use client";
import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import Swal from "sweetalert2";
import ImageUpload from "@/components/admin/ImageUpload";

export default function AboutPage() {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState({
        title: "About SEF",
        subtitle: "Empowering individuals with expert-led skills for a successful career in tech",
        description: "Shah Emdadia Freelancers (SEF) is a premier IT training institute dedicated to empowering individuals with expert-led skills. We bridge the gap between education and industry demands, ensuring our students are not just certified, but career-ready. With a focus on practical learning and professional mentorship, we help you unlock your full potential in the digital world.",
        bannerImage: "/asset/background.png",
    });

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            // TODO: Replace with actual API call
            // const response = await axios.get('/api/admin/about');
            // setContent(response.data);
        } catch (error) {
            Swal.fire("Error!", "Failed to fetch content", "error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // TODO: Replace with actual API call
            // await axios.put('/api/admin/about', content);
            
            Swal.fire({
                title: "Success!",
                text: "About content updated successfully",
                icon: "success",
                confirmButtonColor: "#00280b",
            });
        } catch (error) {
            Swal.fire("Error!", "Failed to update content", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">About Content Management</h1>
                <p className="text-gray-600">Edit the About section content</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={content.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subtitle
                    </label>
                    <input
                        type="text"
                        name="subtitle"
                        value={content.subtitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={content.description}
                        onChange={handleChange}
                        rows="8"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:outline-none transition-all resize-none"
                        required
                    />
                </div>

                <div>
                    <ImageUpload
                        value={content.bannerImage}
                        onChange={(value) => setContent({ ...content, bannerImage: value })}
                        label="Banner Image"
                        required
                        maxSizeMB={5}
                    />
                </div>

                <div className="pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[#003d14] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaSave />
                        <span>{loading ? "Saving..." : "Save Content"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

