"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, ROLE } from "@/context/AuthContext";

const ROLE_DEFAULT_ROUTE = {
  [ROLE.SYSTEM_ADMIN]: "/dashboard/systemAdmin",
  [ROLE.ADMIN]: "/dashboard/admin",
  [ROLE.TEACHER]: "/dashboard/teacher",
  [ROLE.STUDENT]: "/dashboard/student",
  [ROLE.INVESTIGATOR]: "/dashboard/investigator",
};

export default function DashboardHomePage() {
  const router = useRouter();
  const { role, isAuthenticated } = useAuth();

  useEffect(() => {
    // If not logged in, send to login page
    if (!isAuthenticated) {
      router.replace("/auth/login");
      return;
    }

    // If logged in and we have a default route for this role, send them there
    const target = ROLE_DEFAULT_ROUTE[role];
    if (target) {
      router.replace(target);
    }
    // If no specific route is defined for the role, they will stay on this overview page
  }, [isAuthenticated, role, router]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-600">
        Redirecting you to the appropriate dashboard area based on your role...
      </p>
    </div>
  );
}
