"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainNavbar from "./MainNavbar";
import CourseNavbar from "./CourseNavbar";

const NavbarManager = () => {
    const pathname = usePathname();

    // Hide Navbar on specific pages (forms, admin)
    if (
        ["/contact-us", "/free-seminar", "/free-consultancy"].includes(pathname) ||
        pathname.startsWith("/admin")
    ) {
        return null;
    }

    // Use MainNavbar for Home, CourseNavbar for others
    const isMainPage = pathname === "/";

    return isMainPage ? <MainNavbar /> : <CourseNavbar />;
};

export default NavbarManager;
