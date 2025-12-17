"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag("config", "G-K0ZT9GH5N9", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
