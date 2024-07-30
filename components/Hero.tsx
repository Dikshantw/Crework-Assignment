"use client";
import Image from "next/image";
import React from "react";
import Help from "@/icons/Hero/Help.svg";
import Calendar from "@/icons/Hero/Calendar.svg";
import Automation from "@/icons/Hero/Automation.svg";
import Filter from "@/icons/Hero/Filter.svg";
import Share from "@/icons/Hero/Share.svg";
import Search from "@/icons/Hero/Search.svg";
import Add from "@/icons/Sidebar/Plus.svg";
import image1 from "@/icons/Hero/image1.png";
import image2 from "@/icons/Hero/image2.png";
import image3 from "@/icons/Hero/image3.png";

function Hero({ setShowModal }: { setShowModal: (show: boolean) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-[#080808] text-5xl font-semibold leading-[57.6px]">
          Good morning,Joe!{/*Barlow */}
        </span>
        {/*Add User later */}
        <span className="flex items-center gap-2">
          <p className="text-base leading-[16.36px] font-normal text-[#080808]">
            Help & feedback
          </p>
          <Image src={Help} alt="" />
        </span>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-4 p-4 rounded-lg bg-white border border-[#f4f4f4]">
          <Image src={image1} alt="" width={77} height={61} />
          <div className="flex flex-col gap-1">
            <h2 className="text-[#757575] font-semibold text-base leading-[19.36px]">
              Introducing tags
            </h2>
            <p className="text-[#868686] font-normal text-sm leading-[16.94px]">
              Easily categorize and find your notes by adding tags. Keep your
              workspace clutter-free and efficient.
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-white border border-[#f4f4f4]">
          <Image src={image2} alt="" width={76} height={50} />
          <div className="flex flex-col gap-1">
            <h2 className="text-[#757575] font-semibold text-base leading-[19.36px]">
              Share Notes Instantly
            </h2>
            <p className="text-[#868686] font-normal text-sm leading-[16.94px]">
              Effortlessly share your notes with others via email or link.
              Enhance collaboration with quick sharing options.
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-white border border-[#f4f4f4]">
          <Image src={image3} alt="" className="object-cover" />
          <div className="flex flex-col gap-1">
            <h2 className="text-[#757575] font-semibold text-base leading-[19.36px]">
              Access Anywhere
            </h2>
            <p className="text-[#868686] font-normal text-sm leading-[16.94px]">
              Sync your notes across all devices. Stay productive whether
              you&asop;re on your phone, tablet, or computer.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between p-2 rounded-lg bg-white border border-[#e9e9e9]">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="placeholder-[#797979] focus:outline-none"
          />
          <label htmlFor="search">
            <Image src={Search} alt="" />
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-[14px] p-2 rounded-[4px] bg-[#f4f4f4]">
              <span className="font-normal text-base leading-[19.36px] text-[#797979]">
                Calendar view
              </span>
              <Image src={Calendar} alt="" />
            </div>
            <div className="flex items-center gap-[14px] p-2 rounded-[4px] bg-[#f4f4f4]">
              <span className="font-normal text-base leading-[19.36px] text-[#797979]">
                Automation
              </span>
              <Image src={Automation} alt="" />
            </div>
            <div className="flex items-center gap-[14px] p-2 rounded-[4px] bg-[#f4f4f4]">
              <span className="font-normal text-base leading-[19.36px] text-[#797979]">
                Filter
              </span>
              <Image src={Filter} alt="" />
            </div>
            <div className="flex items-center gap-[14px] p-2 rounded-[4px] bg-[#f4f4f4]">
              <span className="font-normal text-base leading-[19.36px] text-[#797979]">
                Share
              </span>
              <Image src={Share} alt="" />
            </div>
          </div>
          <div className=" rounded-lg mx-auto p-[0.5px] bg-gradient-to-b from-[#4b36cc] to-[#9c93d4]">
            <button
              onClick={() => setShowModal(true)}
              className="flex justify-center items-center h-[40px] bg-gradient-to-b from-[#4c38c2] to-[#2f2188] text-white p-2 rounded-lg gap-2 "
            >
              <span className="text-base leading-[19.36px] font-medium text-[#ffffff]">
                Create New
              </span>{" "}
              <Image src={Add} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
