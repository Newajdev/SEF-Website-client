"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const DashboardContent = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className="lg:pl-64 pt-20">
            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="p-6 lg:p-8"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </div>
    );
};

export default DashboardContent;
