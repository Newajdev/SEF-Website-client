"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaUpload, FaTimes } from "react-icons/fa";

const ImageUpload = ({ 
    value, 
    onChange, 
    label = "Image",
    accept = "image/jpeg,image/jpg,image/png,image/webp",
    maxSizeMB = 5,
    required = false 
}) => {
    const [preview, setPreview] = useState(value || "");
    const [error, setError] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError("");

        // Validate file type
        const validTypes = accept.split(",").map(t => t.trim());
        if (!validTypes.some(type => file.type === type)) {
            setError(`Invalid file type. Please upload ${accept.split(",").map(t => t.split("/")[1]).join(", ")} only.`);
            return;
        }

        // Validate file size
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            setError(`File size must be less than ${maxSizeMB}MB.`);
            return;
        }

        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setPreview(result);
            // Pass base64 or File object to parent
            // For now, we'll use base64. In production, upload to server and get URL
            onChange(result);
        };
        reader.readAsDataURL(file);
    };

    const handleRemove = () => {
        setPreview("");
        setError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        onChange("");
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {preview ? (
                <div className="relative">
                    <div className="w-full h-64 border-2 border-gray-200 rounded-xl overflow-hidden relative bg-gray-50">
                        <Image
                            src={preview}
                            alt="Preview"
                            fill
                            className="object-cover"
                        />
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-10"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Click image to change</p>
                </div>
            ) : (
                <div
                    onClick={handleClick}
                    className="w-full h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[var(--color-primary)] hover:bg-gray-50 transition-all group"
                >
                    <FaUpload className="text-4xl text-gray-400 group-hover:text-[var(--color-primary)] mb-3 transition-colors" />
                    <p className="text-gray-600 font-medium mb-1">Click to upload image</p>
                    <p className="text-sm text-gray-500">
                        JPG, PNG, WEBP (Max {maxSizeMB}MB)
                    </p>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
            />

            {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
            )}

            {preview && (
                <input
                    type="hidden"
                    name="image"
                    value={preview}
                />
            )}
        </div>
    );
};

export default ImageUpload;

