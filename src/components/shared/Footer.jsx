import React from "react";
import Container from "../Container";
import Image from "next/image";
import SocialIcons from "../SocialIcon";
import Link from "next/link";
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#02300f] text-white py-6 sticky top-0 w-full z-10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <Image
              src="/asset/SEF_Logo-01.svg"
              width={160}
              height={50}
              alt="Shah Emdadia Freelancers' logo"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="flex gap-x-6">
              <p className="text-[#F2762F] flex flex-row gap-x-3 items-center">
                <FaMapLocationDot className="text-xl text-white" />
                <Link
                  target="_blank"
                  href={
                    "https://www.google.com/maps/place/Maizbhandar+Manzil+(Shah+Emdadia),+No+4+Zakir+Hossain+Housing+Society+Rd,+Chittagong/@22.359707,91.8086936,19z/data=!4m15!1m8!3m7!1s0x30acd8f29487057f:0x2e934a891fc8158a!2sNo+3+Zakir+Hossain+Housing+Society+Rd,+Chittagong!3b1!8m2!3d22.3605467!4d91.8105926!16s%2Fg%2F1q6294xq6!3m5!1s0x30acd8f273fb292b:0x17be5fd326389fd2!8m2!3d22.3599328!4d91.8089408!16s%2Fg%2F11b6g95_11?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                  }
                  className="font-medium text-white"
                >
                  Office Location
                </Link>
              </p>
              <div className="flex gap-x-3 font-medium items-center">
                <FaPhoneVolume />
                <p>+880 1817-121469, +880 1757-549926, +880 1316-765066</p>
              </div>
            </div>
            <h1>
              Copyright © 2025 Shah Emdadia Freelancers. All right reserved
            </h1>
          </div>
          <SocialIcons className={"gap-x-4 text-white"} />
        </div>
      </Container>
    </div>
  );
}
