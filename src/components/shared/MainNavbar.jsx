"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const MainNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to handle Home click
  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  // Helper to handle About click
  const handleAboutClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#about");
    }
    setIsMobileMenuOpen(false);
  };

  const courses = [
    { name: "Graphics Design", slug: "graphics-design" },
    { name: "T-Shirt Design", slug: "t-shirt-design" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "WordPress Development", slug: "wordpress-development" },
    { name: "Frontend Development", slug: "frontend-development" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100" // Scrolled state
          : "bg-transparent border-transparent" // Top state
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={handleHomeClick} className="flex-shrink-0">
            <div className="">
              <Image
                src="/asset/SEF_Logo-01.svg"
                width={160}
                height={50}
                alt="Shah Emdadia Freelancers' logo"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 group-hover:text-[var(--color-primary)] transition-colors py-4">
                Courses
                <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/${course.slug}`}
                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="/#about"
              onClick={handleAboutClick}
              className="font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </a>

            <Link
              href="/contact-us"
              className="px-6 py-2.5 bg-[var(--color-primary)] text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-green-900/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                handleHomeClick(e);
                setIsMobileMenuOpen(false);
              }}
              className="font-medium text-gray-700 hover:text-[var(--color-primary)]"
            >
              Home
            </Link>

            <div className="space-y-2">
              <p className="font-medium text-gray-900">Courses</p>
              <div className="pl-4 border-l-2 border-gray-100 flex flex-col space-y-2">
                {courses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/${course.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-gray-600 hover:text-[var(--color-primary)]"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="/#about"
              onClick={handleAboutClick}
              className="font-medium text-gray-700 hover:text-[var(--color-primary)]"
            >
              About
            </a>

            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-opacity-90"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
