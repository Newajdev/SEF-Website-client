"use client";
import OutlineBtn from "@/components/OutlineBtn";
import PriemaryBtn from "@/components/PriemaryBtn";
import Image from "next/image";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  
  const Courses = [
    {
      id: 1,
      Name: "Graphics Design",
      Duration: "6 month || 360 hours",
      TumbnillUrl: "/asset/courses/graphics.jpg",
      next: "#slide2",
      priveus: "#slide4",
    },
    {
      id: 2,
      Name: "T-Shirt Design",
      Duration: "6 month || 360 hours",
      TumbnillUrl: "/asset/courses/tshirt.jpg",
      next: "#slide3",
      priveus: "#slide1",
    },
    {
      id: 3,
      Name: "Web design",
      Duration: "6 month || 360 hours",
      TumbnillUrl: "/asset/courses/wordpress.jpg",
      next: "#slide4",
      priveus: "#slide2",
    },
    {
      id: 4,
      Name: "Digital Marketing",
      Duration: "6 month || 360 hours",
      TumbnillUrl: "/asset/courses/dm.jpg",
      next: "#slide1",
      priveus: "#slide3",
    },
  ];

  return (
    <div className="grid grid-cols-2 items-center py-28">
      <div className="">
        <h1 className="w-full text-5xl font-bold flex flex-col gap-y-3 text-[#00280B] mb-7">
          Empower your Skill
          <span>to Shape your future</span>
        </h1>
        <p className="text-2xl text-[#00280B]">
          Transform the country’s manpower into a Skilled workforce. Join any of
          your professional course and become a self-reliant and successfull
          person.
        </p>
        <h5 className="text-2xl font-semibold text-[#00280B] mt-2">
          Join Today and Track your Changes
        </h5>

        <div className="mt-8 space-x-6">
          <PriemaryBtn title={"Contact us"} />
          <OutlineBtn title={"join Bootcamps"} />
        </div>
      </div>

      {/* carosol */}
      <div className="px-14 relative">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          // navigation={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          {Courses.map((cours, idx) => (
            <SwiperSlide>
              <div key={idx} className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                <div className="card bg-base-100 ">
                  <figure>
                    <Image
                      className="w-full rounded-xl h-72"
                      src={cours.TumbnillUrl}
                      width={500}
                      height={500}
                      alt={cours.Name}
                    />
                  </figure>
                  <div className="card-body pl-0">
                    <h2 className="card-title text-3xl">{cours.Name}</h2>
                    <p>Duration: {cours.Duration}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute border z-20 right-28 -bottom-4 flex">
          <button className="custom-next absolute left-2 bg-[#f2762f] text-white  p-4 rounded-full">
            <GrFormNext />
          </button>
          <button className="custom-prev absolute right-0 bg-[#f2762f] text-white  p-4 rounded-full">
            <GrFormPrevious />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
