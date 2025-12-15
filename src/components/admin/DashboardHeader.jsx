"use client";
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
    return (
        <header className="bg-white border-b border-gray-200 z-30">
            <div className="px-6 py-4 flex items-center justify-end">
                
                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <FaBell className="text-xl" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    
                    {/* User Profile */}
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">Admin User</p>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                        <FaUserCircle className="text-3xl text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

