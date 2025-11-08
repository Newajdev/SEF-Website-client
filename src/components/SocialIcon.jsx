import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialIcons = () => {
  const SocialLinks = [
    {
      path: "https://www.facebook.com/shahemdadiafreelancers",
      icon: <FaFacebookF />,
    },
    {
      path: "https://www.instagram.com/sefreelancers",
      icon: <FaSquareInstagram />,
    },
    {
      path: "https://www.linkedin.com/in/sefreelancers",
      icon: <FaLinkedinIn />,
    },
    {
      path: "https://x.com/sefreelancers",
      icon: <FaXTwitter />,
    },
    {
      path: "https://www.facebook.com/shahemdadiafreelancers",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 text-2xl text-[#00280b]">
      {SocialLinks.map((icon, idx) => (
        <button>
          <Link target="_blank" href={icon.path}>
            {icon.icon}
          </Link>
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
