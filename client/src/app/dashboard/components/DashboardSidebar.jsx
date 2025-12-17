"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getMenuForRole } from "@/lib/auth/permissions";
import { FaHome, FaUserShield } from "react-icons/fa";

const DashboardSidebar = () => {
  const { role } = useAuth();
  const pathname = usePathname();

  const menuItems = getMenuForRole(role);

  return (
    <aside className="w-64 bg-[var(--color-primary)] text-white flex flex-col min-h-screen">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <FaUserShield className="text-2xl" />
        <div>
          <h2 className="text-xl font-bold">Dashboard</h2>
          <p className="text-xs text-white/70">{role ? role : "Guest"}</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {/* Always show link to main dashboard */}
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === "/dashboard"
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <FaHome className="text-lg" />
              <span>Overview</span>
            </Link>
          </li>

          {menuItems.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(item.path + "/");
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
