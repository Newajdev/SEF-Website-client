"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
    const pathname = usePathname();

    if (["/contact-us", "/free-seminar", "/free-consultancy"].includes(pathname)) {
        return null;
    }

    return <Footer />;
};

export default FooterWrapper;
