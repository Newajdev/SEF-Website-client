import { ROLE } from "@/context/AuthContext";

// Centralized role → access rules and dashboard menu configuration.

export const DASHBOARD_BASE_PATH = "/dashboard";

// Helpers to make it easy to allow all roles.
const ALL_ROLES = [
  ROLE.SYSTEM_ADMIN,
  ROLE.ADMIN,
  ROLE.TEACHER,
  ROLE.STUDENT,
  ROLE.INVESTIGATOR,
];

export const ROLE_CONFIG = {
  [ROLE.SYSTEM_ADMIN]: {
    label: "System Admin",
    // System admin has full access to everything under /dashboard
    allowedPrefixes: [DASHBOARD_BASE_PATH],
    menu: [
      { label: "Overview", path: "/dashboard" },
      { label: "System Admin Area", path: "/dashboard/systemAdmin" },
      { label: "Admin Area", path: "/dashboard/admin" },
      { label: "Teacher Area", path: "/dashboard/teacher" },
      { label: "Student Area", path: "/dashboard/student" },
      { label: "Investigator Area", path: "/dashboard/investigator" },
    ],
  },
  [ROLE.ADMIN]: {
    label: "Admin",
    // Admin can access general dashboard plus admin/student/investigator sections.
    allowedPrefixes: [
      "/dashboard",
      "/dashboard/admin",
      "/dashboard/student",
      "/dashboard/investigator",
    ],
    menu: [
      { label: "Overview", path: "/dashboard" },
      { label: "Admin Area", path: "/dashboard/admin" },
      { label: "Student Area", path: "/dashboard/student" },
      { label: "Investigator Area", path: "/dashboard/investigator" },
    ],
  },
  [ROLE.TEACHER]: {
    label: "Teacher",
    // Teacher can only see their own teaching area.
    allowedPrefixes: ["/dashboard", "/dashboard/teacher"],
    menu: [
      { label: "Overview", path: "/dashboard" },
      { label: "My Teaching", path: "/dashboard/teacher" },
    ],
  },
  [ROLE.STUDENT]: {
    label: "Student",
    // Student can only see their own profile / exam data area.
    allowedPrefixes: ["/dashboard", "/dashboard/student"],
    menu: [
      { label: "Overview", path: "/dashboard" },
      { label: "My Profile", path: "/dashboard/student" },
    ],
  },
  [ROLE.INVESTIGATOR]: {
    label: "Investigator",
    // Investigator can only see financial/queries area.
    allowedPrefixes: ["/dashboard", "/dashboard/investigator"],
    menu: [
      { label: "Overview", path: "/dashboard" },
      { label: "Financial & Queries", path: "/dashboard/investigator" },
    ],
  },
};

export const getRoleConfig = (role) => ROLE_CONFIG[role] ?? null;

export const getMenuForRole = (role) => {
  const cfg = getRoleConfig(role);
  return cfg?.menu ?? [];
};

/**
 * Returns true if a given role is allowed to access the provided pathname.
 * Uses prefix matching, so any nested routes under the allowed prefixes
 * will also be accessible.
 */
export const canAccessPath = (role, pathname) => {
  if (!pathname?.startsWith(DASHBOARD_BASE_PATH)) {
    // Non-dashboard routes are not handled here.
    return true;
  }

  if (!role) return false;

  const cfg = getRoleConfig(role);
  if (!cfg) return false;

  // System admin: full access if prefix is /dashboard.
  if (role === ROLE.SYSTEM_ADMIN) {
    return pathname.startsWith(DASHBOARD_BASE_PATH);
  }

  return cfg.allowedPrefixes.some((prefix) => pathname.startsWith(prefix));
};

export const getSupportedRoles = () => [...ALL_ROLES];


