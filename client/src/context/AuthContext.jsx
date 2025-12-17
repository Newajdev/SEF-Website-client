"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Supported role values for the client side.
export const ROLE = {
  SYSTEM_ADMIN: "systemAdmin",
  ADMIN: "admin",
  TEACHER: "teacher",
  STUDENT: "student",
  INVESTIGATOR: "investigator",
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Optional: hydrate from localStorage so login implementation can persist user.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("authUser");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // Ignore malformed data
    }
  }, []);

  const updateUser = (nextUser) => {
    setUser(nextUser);
    if (typeof window !== "undefined") {
      if (nextUser) {
        window.localStorage.setItem("authUser", JSON.stringify(nextUser));
      } else {
        window.localStorage.removeItem("authUser");
      }
    }
  };

  const value = {
    user,
    role: user?.role ?? null,
    isAuthenticated: Boolean(user),
    setUser: updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
