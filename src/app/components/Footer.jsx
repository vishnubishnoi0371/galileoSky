"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TechniqueData, quickLinks } from "../common/Helper";

const Footer = () => {
  const [formdata, setFormdata] = useState({ email: "" });
  const [formerror, setFormerror] = useState({ email: "" });

  const inputFill = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!formdata.email) {
      setFormerror({ email: "Email is required" });
    } else {
      setFormerror({ email: "" });
      console.log("Form submitted", formdata);
    }
  };
  return (
    <div className="bg-white">
      <div className="container max-w-[1164px] px-6 xl:px-3 mx-auto pt-20 pb-[45px]">
        <div className="flex-row flex -mx-3 flex-wrap justify-between">
          <div className="w-full lg:w-5/12 ">
            <Image
              src="/assets/images/svg/footerLogo.svg"
              alt="My Image"
              width={290}
              height={53}
              className="mb-4 cursor-pointer"
            />
            <p className="font-normal text-base leading-6 font-poppins max-w-[427px] text-blackPrimary opacity-70 mb-6">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire.
            </p>
            <div className="flex gap-4 items-center pb-10 lg:pb-0">
              {TechniqueData.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 hover:shadow-[0px_7px_14.3px_0px_lightPink] duration-300  border border-darkRed rounded-full flex justify-center items-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-6/12 ">
            <div className="flex-row flex  flex-wrap justify-between">
              <div className="w-full sm:w-1/2 md:w-4/12 ">
                <p className="text-base font-normal leading-6 font-poppins mb-4 text-blackPrimary">
                  Quick Links
                </p>
                <ul className="text-base font-normal leading-6 font-poppins mb-4 opacity-70 text-blackPrimary">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="mb-3">
                      <a href={link.url} className="">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-8/12 ">
                <p className="text-base font-normal leading-6 font-poppins mb-4 text-blackPrimary">
                  Get Connected{" "}
                </p>
                <form
                  onSubmit={submit}
                  className={`${
                    formerror.email && "border-tamarillo"
                  } border border-transparent bg-alto gap-2 max-w-[347px] p-[7px] relative z-[1] rounded-[10px] flex justify-between items-center mt-4`}
                >
                  <label htmlFor="email"></label>
                  <input
                    id="email"
                    type="email"
                    className="bg-transparent w-full pl-[14px] border-0 outline-0 font-poppins text-base leading-[150%] text-gray placeholder:font-poppins placeholder:text-base placeholder:leading-[150%] placeholder:text-gray"
                    onChange={inputFill}
                    value={formdata.email}
                    name="email"
                    placeholder="Email Here"
                  />
                  {formerror.email && (
                    <p className="absolute -bottom-6 text-darkRed  left-0">
                      {formerror.email}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="sm:py-[14px] py-[10px] px-5 sm:px-[32px] border border-transparent bg-darkRed font-poppins text-sm sm:text-base font-normal leading-[150%] text-whitePrimary rounded-lg "
                  >
                    Submit
                  </button>
                </form>
                <p className="text-base font-normal max-w-[338px] leading-6 font-poppins mt-4 opacity-70 text-blackPrimary">
                  Your email address is very safe with Galileo Sky. You will
                  only receive our gaming updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-blackPrimary opacity-70 py-6 border-t border-grayPrimary">
        ©{new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
