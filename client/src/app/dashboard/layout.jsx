"use client";

import RoleGuard from "./components/RoleGuard";
import DashboardSidebar from "./components/DashboardSidebar";
import { AuthProvider } from "@/context/AuthContext";

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex bg-gray-50">
        <DashboardSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <RoleGuard>{children}</RoleGuard>
        </main>
      </div>
    </AuthProvider>
  );
}


