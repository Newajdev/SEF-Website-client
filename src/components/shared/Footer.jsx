import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/asset/logo.png"
                width={160}
                height={50}
                alt="Shah Emdadia Freelancers logo"
                loading="lazy"
                className="h-auto w-[140px] md:w-[160px]"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of digital professionals with
              industry-leading courses and mentorship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/graphics-design"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-marketing"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/wordpress-development"
                  className="text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  WordPress Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                6/G, Zakir Hossain Society, South Khulshi, Chittagong,
                Chittagong, Bangladesh
              </li>
              <li>shahemdadiafreelancers@gmail.com</li>
              <li>+880 1817-121469</li>
              <li>+880 1316-765066</li>
              <li>+880 1757-549926</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shah Emdadia Freelancers. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
