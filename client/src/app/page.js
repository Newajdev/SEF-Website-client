import Image from "next/image";
import Link from "next/link";
import { SiReact, SiJavascript, SiWordpress, SiFigma } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import {
  SeminarsSection,
  ConsultancySection,
} from "@/components/home/CTASections";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Modern Tech Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/40 to-cyan-50/40 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
              <span className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                Unlock Your Potential
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Let’s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00be33] to-[#FF630A]">
                Build
              </span>{" "}
              <br />
              Your Career
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master the skills that drive the future. From coding to design, we
              provide the mentorship and resources you need to build a thriving
              career in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#courses"
                className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-gray-500">
                  Top Rated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-semibold text-gray-500">
                  Expert Mentors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm font-semibold text-gray-500">
                  Lifetime Access
                </span>
              </div>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute text-cyan-500 top-10 left-10 animate-fade-in-up delay-100 transform hover:scale-110 transition-transform">
              <SiReact size={64} />
            </div>
            <div className="absolute text-yellow-400 top-1/4 right-20 animate-fade-in-up delay-200 transform hover:scale-110 transition-transform">
              <SiJavascript size={56} />
            </div>
            <div className="absolute text-blue-600 bottom-1/3 left-20 animate-fade-in-up delay-300 transform hover:scale-110 transition-transform">
              <SiWordpress size={60} />
            </div>
            <div className="absolute text-purple-500 bottom-20 right-10 animate-fade-in-up delay-500 transform hover:scale-110 transition-transform">
              <SiFigma size={52} />
            </div>

            {/* Central Abstract Composition */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-white to-gray-50 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl flex items-center justify-center z-20">
              <div className="relative w-full h-full p-6 grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-2xl h-full w-full animate-pulse"></div>
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-2xl h-1/2 w-full"></div>
                  <div className="bg-blue-50 rounded-2xl h-2/5 w-full"></div>
                </div>
              </div>
              {/* Floating "Card" Overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-30">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <FaUsers size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">
                    Join Community
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    10k+ Learners
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent transform -translate-x-1/2 -rotate-45 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -translate-x-1/2 rotate-45 -z-10"></div>
          </div>
        </div>
      </section>

      <AboutSection />
      <CoursesSection />
      <FacilitiesSection />
      <SeminarsSection />
      <ConsultancySection />
    </div>
  );
}
