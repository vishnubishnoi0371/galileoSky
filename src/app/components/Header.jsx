"use client";
import React, { useState, useEffect } from "react";
import GalileoNav from "./GalileoNav";

const Header = () => {
  const [presentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "/assets/videos/nextVideo.mp4",
    "/assets/videos/headerVideoSecond.mp4",
    "/assets/videos/headerVideo.mp4",
  ];
  useEffect(() => {
    const videoTags = document.getElementById("backvideo");
    videoTags.src = videos[presentVideo];
    videoTags.play();

    videoTags.addEventListener("ended", () => {
      setCurrentVideo((presentVideo + 1) % videos.length);
      videoTags.src = videos[presentVideo];
      videoTags.play();
    });
  }, [presentVideo]);

  return (
    <div className="relative overflow-hidden">
      <video
        id="backvideo"
        muted
        autoPlay
        playsInline
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="min-h-screen flex flex-col">
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
      </div>
    </div>
  );
};

export default Header;
