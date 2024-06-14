"use client";
import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../common/Icon";
import Link from "next/link";
import Image from "next/image";

const GalileoNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setfirst] = useState(false);

  function setopen() {
    setfirst(!first);
  }

  useEffect(() => {
    if (first) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [first]);

  return (
    <div className="bg-navBlur backdrop-blur-xl py-4 md:py-0 px-3 md:px-0 mx-auto hover:shadow-[0px_7px_10.9px_0px_#0000002E]">
      <div className="max-w-[861px] container mx-auto lg:pr-[69px]">
        <div className="max-md:flex justify-between items-center md:hidden">
          <Link
            href="#!"
            className="max-w-[200px] sm:max-w-[330px] max-md:block"
          >
            <Image
              className="w-full max-w-[280px] max-sm:max-w-[280px] md:max-w-[372px]"
              width={372}
              height={71}
              src="/assets/images/webp/pageLogo.webp"
              alt="logo"
            />
          </Link>
          <button
            aria-label="navshow"
            onClick={setopen}
            className="md:hidden relative z-[72]"
          >
            {first ? (
              <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                <span className="bg-white min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[11px]"></span>
                <span className="bg-white min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[8px]"></span>
              </div>
            ) : (
              <div className="flex md:hidden flex-col z-50 justify-between w-[21px] h-[15px] cursor-pointer relative">
                <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
                <span className="bg-white rounded-md w-full h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
                <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
              </div>
            )}
          </button>
        </div>
        <div
          className={`${
            first ? "right-0 bg-black" : "right-[-100%]"
          } flex gap-3 sm:gap-6 max-md:w-full max-md:h-screen max-md:top-0 max-md:fixed bg-navBg max-md:bg-black max-md:backdrop-blur-[20px] top-0 max-md:pt-[120px] justify-center items-center md:bg-transparent z-[70] transition-all ease-linear flex-col md:flex-row duration-300 px-6 md:px-0`}
        >
          <div className="relative inline-block text-left">
            <Link
              href="#!"
              className="inline-flex justify-center items-center gap-1 w-full rounded-md shadow-sm font-poppins font-semibold text-sm md:text-base leading-normal text-whitePrimary focus:outline-none"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              Games
              <ArrowIcon
                className={`${isOpen ? "rotate-180" : ""} duration-300`}
              />
            </Link>
            {isOpen && (
              <div
                className="absolute left-0 mt-2 w-[70px] rounded-md shadow-lg origin-top-right ring-1 bg-grayPrimary text-blackPrimary ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="" role="none">
                  <Link
                    href="#"
                    className="text-blackPrimary block px-4 py-2 text-sm md:text-base font-poppins font-normal leading-normal hover:bg-white hover:text-blackPrimary duration-300 hover:rounded-t-md"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Link1
                  </Link>
                  <Link
                    href="#"
                    className="text-blackPrimary block px-4 py-2 text-sm md:text-base font-poppins font-normal leading-normal hover:bg-white hover:text-black-dark duration-300"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Link2
                  </Link>
                  <Link
                    href="#"
                    className="text-blackPrimary block px-4 py-2 text-sm md:text-base font-poppins font-normal leading-normal hover:bg-white hover:text-black-dark duration-300 hover:rounded-b-md"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    Link3{" "}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="#!"
            className="font-poppins font-semibold text-sm md:text-base leading-normal text-whitePrimary lg:mr-4"
          >
            AI-Platform
          </Link>
          <Link href="#!" className="max-w-[372px] max-md:hidden">
            <Image
              className="w-full"
              width={372}
              height={71}
              src="/assets/images/webp/pageLogo.webp"
              alt="logo"
            />
          </Link>
          <Link
            href="#!"
            className="font-poppins font-semibold text-sm md:text-base leading-normal text-whitePrimary lg:ms-4"
          >
            Team
          </Link>
          <Link
            href="#!"
            className="font-poppins font-semibold text-sm md:text-base leading-normal text-whitePrimary"
          >
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalileoNav;
