import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import Download from "@/icons/Sidebar/Download.svg";
import Add from "@/icons/Sidebar/Plus.svg";
import Bell from "@/icons/Sidebar/Bell.svg";
import DoubleRight from "@/icons/Sidebar/DobleRight.svg";
import StatusLive from "@/icons/Sidebar/StatusLive.svg";
import Home from "@/icons/Sidebar/Home.svg";
import Boards from "@/icons/Sidebar/Boards.svg";
import Setting from "@/icons/Sidebar/Setting.svg";
import Teams from "@/icons/Sidebar/Teams.svg";
import Analytics from "@/icons/Sidebar/Analytics.svg";
const Sidebar = ({
  setShowModal,
}: {
  setShowModal: (show: boolean) => void;
}) => {
  return (
    <div className="sticky top-0 left-0 w-[285px] h-screen border-r border-[#dedede] flex flex-col justify-between px-4 pt-6 pb-8 bg-white">
      {/* profile and setting */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-start items-center">
            <FaUser />
            {/* Add Dynamic User later */}
            <p className="text-xl leading-[24.2px] font-medium">Joe Gardner</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <Image src={Bell} alt="" />
              <Image src={StatusLive} alt="" />
              <Image src={DoubleRight} alt="" />
            </div>
            <button className="p-2 gap-[14px] rounded bg-[#f4f4f4]">
              <span className="text-[#797979] font-normal text-base leading-[19.36px]">
                Logout
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-start items-center h-[40px] border border-[#dddddd] bg-[#f4f4f4] gap-[14px] rounded">
              <Image src={Home} alt="" className="ml-2" />
              <span className="font-normal text-xl leading-[24.2px] text-[#797979]">
                Home
              </span>
            </div>
            <div className="flex justify-start hover:bg-[#f4f4f4] gap-[14px] rounded">
              <Image src={Boards} alt="" className="ml-2" />
              <span className="font-normal text-xl leading-[24.2px] text-[#797979]">
                Boards
              </span>
            </div>
            <div className="flex justify-start hover:bg-[#f4f4f4] gap-[14px] rounded">
              <Image src={Setting} alt="" className="ml-2" />
              <span className="font-normal text-xl leading-[24.2px] text-[#797979]">
                Settings
              </span>
            </div>
            <div className="flex justify-start hover:bg-[#f4f4f4] gap-[14px] rounded">
              <Image src={Teams} alt="" className="ml-2" />
              <span className="font-normal text-xl leading-[24.2px] text-[#797979]">
                Teams
              </span>
            </div>
            <div className="flex justify-start hover:bg-[#f4f4f4] gap-[14px] rounded">
              <Image src={Analytics} alt="" className="ml-2" />
              <span className="font-normal text-xl leading-[24.2px] text-[#797979]">
                Analytics
              </span>
            </div>
          </div>
          <div className=" rounded-lg mx-auto p-[0.5px] bg-gradient-to-b from-[#4b36cc] to-[#9c93d4]">
            <button
              onClick={() => setShowModal(true)}
              className="flex justify-center items-center h-[52px] w-[253px] bg-gradient-to-b from-[#4c38c2] to-[#2f2188] text-white p-2 rounded-lg gap-2 "
            >
              <span className="text-xl leading-[24.2px] font-medium text-[#ffffff]">
                Create New Task
              </span>{" "}
              <Image src={Add} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* download app */}
      <div className="flex gap-2 p-2 rounded-lg h-[61px] w-[253px]">
        <Image src={Download} alt="" />
        <div className="flex flex-col gap-1">
          <span className="font-medium text-xl leading-[24.2px] text-[#666666]">
            Download the app
          </span>
          <span className="font-normal text-sm leading-[16.94px] text-[#666666]">
            Get the full experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
