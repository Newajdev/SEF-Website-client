"use client";

import { useAuth } from "@/context/AuthContext";

/**
 * RoleGuard – development mode
 *
 * In development we don&apos;t enforce role-based redirects so you can
 * freely navigate the dashboard while wiring up APIs and auth.
 *
 * When you&apos;re ready to enforce access control, replace this implementation
 * with one that uses `useRouter`, `usePathname`, and `canAccessPath(...)`
 * to redirect unauthorized users.
 */
const RoleGuard = ({ children }) => {
  // Access to `useAuth` is kept so that wiring in real checks later is easy.
  // const { role, isAuthenticated } = useAuth();
  return children;
};

export default RoleGuard;
