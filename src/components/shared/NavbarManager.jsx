"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainNavbar from "./MainNavbar";
import CourseNavbar from "./CourseNavbar";

const NavbarManager = () => {
    const pathname = usePathname();

    // Hide Navbar on specific pages
    if (["/contact-us", "/free-seminar", "/free-consultancy"].includes(pathname)) {
        return null;
    }

    // Use MainNavbar for Home, CourseNavbar for others
    const isMainPage = pathname === "/";

    return isMainPage ? <MainNavbar /> : <CourseNavbar />;
};

export default NavbarManager;
