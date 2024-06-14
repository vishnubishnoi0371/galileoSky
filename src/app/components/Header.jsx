"use client";
import React, { useState, useEffect, useRef } from "react";
import GalileoNav from "./GalileoNav";
import { HeroSocialIconArray } from "../common/Helper";
import Link from "next/link";
import { RedBox } from "../common/Icon";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [presentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    "/assets/videos/nextVideo.mp4",
    "/assets/videos/headerVideoSecond.mp4",
    "/assets/videos/headerVideo.mp4",
  ];

  useEffect(() => {
    const videoTags = videoRef.current;
    if (videoTags) {
      videoTags.src = videos[presentVideo];
      videoTags.play();

      const handleVideoEnded = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      };

      videoTags.addEventListener("ended", handleVideoEnded);

      return () => {
        videoTags.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, [presentVideo]);

  return (
    <div className="relative overflow-hidden">
      <video
        id="backvideo"
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="min-h-screen relative flex flex-col">
        <div className="relative z-50">
          <GalileoNav />
        </div>
        <div className="flex-grow flex justify-center items-center relative">
          <div className="text-center">
            <p className=" text-3xl md:text-5xl  xl:text-xxl2 font-normal relative z-40 text-whitePrimary mb-4 md:leading-10 xl:leading-[99px]">
              BEYOND <br />
              <span className="text-redSecondary">ENTERTAINMENT</span>
            </p>
            <p className="text-base font-normal px-6 lg:px-0 font-poppins text-whitePrimary max-w-[809px] opacity-90">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
          </div>
        </div>
        <div
          className={`${
            sidebar ? "max-lg:right-0" : ""
          } absolute  bg-navBlur backdrop:blur-[1.5px] flex justify-center py-[70px] px-[22px] z-20 max-lg:-right-[68px] duration-300 lg:right-0 top-[30%] w-[68px] h-[368px] flex-col gap-7 `}
        >
          <span
            className="bg-white absolute top-[30%] -left-[15px] w-[15px] h-[145px] rounded-[30px_0_0_30px]"
            onClick={() => setSidebar(!sidebar)}
          ></span>
          {HeroSocialIconArray.map((obj, index) => (
            <Link
              key={index}
              href={obj.url}
              className="w-9 h-9 rounded-[36px] flex justify-center items-center"
            >
              {obj.socialIcon}
            </Link>
          ))}
        </div>
        <span className="left-5 absolute bottom-4">
          <RedBox />
        </span>
      </div>
    </div>
  );
};

export default Header;
