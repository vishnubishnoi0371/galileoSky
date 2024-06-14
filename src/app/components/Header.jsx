"use client";
import React, { useState, useEffect, useRef } from "react";
import GalileoNav from "./GalileoNav";
import { HeroSocialLinks } from "../common/Helper";
import Link from "next/link";
import { RedBox, WhiteLineSvg } from "../common/Icon";
import Image from "next/image";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [presentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    "/assets/videos/nextVideo.mp4",
    "/assets/videos/headerVideo.mp4",
    "/assets/videos/headerVideoSecond.mp4",
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

  const [toggle, setToggle] = useState(false);
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleToggleClick = () => {
    setToggle((prevToggle) => !prevToggle);
    if (toggle) {
      scrollToSection("header");
    } else {
      scrollToSection("footer");
    }
  };

  return (
    <div id="header" className="relative overflow-hidden">
      <div className="absolute z-50 -translate-x-1/2 bottom-10 left-1/2">
        <button
          onClick={handleToggleClick}
          className={`flex w-10 sm:w-11 h-[72px] sm:h-[76px] rounded-full border border-redSecondary relative after:absolute sm:after:w-[27px] after:w-[22px] after:h-[27px] after:rounded-full after:bg-redSecondary after:duration-300 after:left-1/2 after:-translate-x-1/2 ${
            toggle ? "after:top-9" : "after:top-2"
          }`}
        ></button>
      </div>
      <span className="w-full h-full backdrop-blur-lg absolute top-0 left-auto"></span>
      <video
        id="backvideo"
        ref={videoRef}
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="min-h-screen backdrop:blur-[10px] relative flex flex-col">
        <div className="relative z-50">
          <GalileoNav />
        </div>
        <div className="flex-grow container mx-auto flex justify-center items-center relative">
          <div className="text-center">
            <div className="relative flex justify-center pb-2.5">
              <Image
                src="/assets/images/webp/futureBg.webp"
                alt="My Image"
                width={240}
                height={43}
                className="mb-4 cursor-pointer"
              />
              <p className="absolute bottom-9 text-sm font-medium font-inter text-whitePrimary">
                Future of Gaming
              </p>
            </div>
            <p className="text-3xl Hebrew md:text-5xl xl:text-xxl2 font-normal relative z-40 text-whitePrimary mb-4 md:leading-10 xl:leading-[99px]">
              BEYOND <br />
              <span className="text-redSecondary">ENTERTAINMENT</span>
            </p>
            <p className="text-base font-normal px-6 lg:px-0 font-poppins text-whitePrimary max-w-[809px] opacity-90">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire.
            </p>
          </div>
          <div className="flex md:flex-col max-md:items-baseline items-center gap-6 h-20 absolute max-md:justify-center md:left-0 max-md:bottom-[20%] md:top-[38%] translate-y-[50%] space-y-2.5 md:space-y-2.5">
            {videos.map((_, index) => (
              <span
                key={index}
                className={`w-5 h-3 rounded-[21px] ${
                  index === presentVideo
                    ? "bg-redSecondary w-[47px]"
                    : "bg-grayDark"
                } cursor-pointer md:rotate-90`}
                onClick={() => setCurrentVideo(index)}
              ></span>
            ))}
          </div>
        </div>
        <div
          className={`${
            sidebar ? "max-lg:right-0" : ""
          } absolute bg-gray md:bg-navBlur backdrop:blur-[1.5px] flex justify-center py-[70px] px-[22px] z-20 max-lg:-right-[68px] duration-300 lg:right-0 top-[30%] w-[68px] h-[368px] flex-col gap-7`}
        >
          <span
            className="bg-white absolute top-[30%] -left-[15px] w-3 sm:w-[15px] h-[145px] rounded-[30px_0_0_30px] cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          ></span>
          {HeroSocialLinks.map((obj, index) => (
            <Link
              key={index}
              href={obj.url}
              className="w-9 h-9 rounded-[36px] flex justify-center items-center"
            >
              {obj.socialIcon}
            </Link>
          ))}
        </div>
      </div>
      <span className="left-5 absolute top-[16%]">
        <WhiteLineSvg />
      </span>
      <span className="right-14 absolute bottom-14">
        <RedBox />
      </span>
      <div id="footer"></div>
    </div>
  );
};

export default Header;
