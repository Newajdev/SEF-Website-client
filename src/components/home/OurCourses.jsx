"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PriemaryBtn from "../PriemaryBtn";
import OutlineBtn from "../OutlineBtn";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const OurCourses = () => {
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
    <div className="py-20">
      <div className="text-center w-[80%] mx-auto mb-20 text-[#00280B]">
        <h3 className="text-5xl font-bold mb-4">Our Course</h3>
        <p className="text-2xl">
          All courses offered by Shah Emdadia Freelancers are among the most
          popular and in-demand in today's global job market. These carefully
          curated programs are designed to equip you with the skills and
          knowledge needed to succeed in your chosen profession.
        </p>
      </div>

      <div className="w-full my-3">
        <Swiper
          slidesPerView={3}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {Courses?.map((course) => (
            <SwiperSlide>
              <div
                key={course.id}
                className="bg-white p-4 rounded-2xl mx-3 border border-gray-300"
              >
                <div className="card bg-base-100">
                  <figure>
                    <Image
                      className="w-full rounded-xl h-56"
                      src={course.TumbnillUrl}
                      width={500}
                      height={500}
                      alt={course.Name}
                    />
                  </figure>
                  <div className="card-body pl-0">
                    <h2 className="card-title">{course.Name}</h2>
                    <p>Duration: {course.Duration}</p>
                    <div className="card-actions justify-start mt-4">
                      <PriemaryBtn title={"Buy Now"} />
                      <OutlineBtn title={"Details"} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurCourses;
