"use client";
import React from "react";
import DashboardSidebar from "@/components/admin/DashboardSidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardContent from "@/components/admin/DashboardContent";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar - No animation */}
      <div className="fixed inset-y-0 left-0 z-40">
        <DashboardSidebar />
      </div>

      {/* Fixed Header - No animation */}
      <div className="lg:pl-64 fixed top-0 right-0 left-0 z-30">
        <DashboardHeader />
      </div>

      {/* Animated Content Area Only */}
      <DashboardContent>{children}</DashboardContent>
    </div>
  );
}
