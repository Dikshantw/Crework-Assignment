"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Close from "@/icons/TakModal/Close.svg";
import Expand from "@/icons/TakModal/Expand.svg";
import Add from "@/icons/TakModal/Add.svg";
import Deadline from "@/icons/TakModal/Deadline.svg";
import Description from "@/icons/TakModal/Description.svg";
import Favorite from "@/icons/TakModal/Favorite.svg";
import Priority from "@/icons/TakModal/Priority.svg";
import Share from "@/icons/TakModal/Share.svg";
import Status from "@/icons/TakModal/Status.svg";
import Image from "next/image";

function TaskModal() {
  function handleTaskSubmission() {
    console.log("hi");
  }
  const [deadline, setDeadline] = useState("Not Selected");
  const router = useRouter();

  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-[670px] flex flex-col px-6 gap-8 bg-[#ffffff]">
        <div className="flex flex-col gap-[27px]">
          <div className="flex mt-1 justify-between">
            <div className="flex gap-4">
              <button onClick={router.back}>
                <Image src={Close} alt="" />
              </button>
              <button>
                <Image src={Expand} alt="" />
              </button>
            </div>
            <div className="flex gap-4">
              <button className="flex bg-[#f4f4f4] gap-[14px] p-2 rounded-[4px]">
                <span>Share</span> <Image src={Share} alt="" />
              </button>
              <button className="flex bg-[#f4f4f4] gap-[14px] p-2 rounded-[4px]">
                <span>Favorite</span> <Image src={Favorite} alt="" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[38px]">
            <form onSubmit={handleTaskSubmission}>
              <div className="flex flex-col gap-8">
                <div>
                  <label className="sr-only">Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="placeholder-[#cccccc] w-[600px] text-left font-semibold text-[48px] leading-[57.6px] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex ">
                    <label htmlFor="status" className="sr-only"></label>
                    <Image src={Status} alt="" />
                    <p className="text-[#666666] ml-6 text-base leading-[19.36px] font-normal">
                      status
                    </p>
                    <select
                      id="status"
                      defaultValue={`Not Selected`}
                      className="appearance-none ml-[80px] focus:outline-none"
                    >
                      <option value="Not Selected" disabled>
                        Not Selected
                      </option>
                      <option value="todo">To Do</option>
                      <option value="inprogress">In Progress</option>
                      <option value="under-review">Under Review</option>
                      <option value="finished">Finished</option>
                    </select>
                  </div>
                  <div className="flex ">
                    <label htmlFor="priority" className="sr-only"></label>
                    <Image src={Priority} alt="" />
                    <p className="text-[#666666] ml-6 text-base leading-[19.36px] font-normal">
                      Priority
                    </p>
                    <select
                      id="priority"
                      defaultValue={`Not Selected`}
                      className="appearance-none ml-[72px] focus:outline-none"
                    >
                      <option value="Not Selected" disabled>
                        Not Selected
                      </option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div className="flex ">
                    <label htmlFor="deadline" className="sr-only"></label>
                    <Image src={Deadline} alt="" />
                    <p className="text-[#666666] ml-6 text-base leading-[19.36px] font-normal">
                      Deadline
                    </p>
                    <input
                      type="datetime-local"
                      id="deadline"
                      value={deadline}
                      className="ml-[59px] focus:outline-none"
                    />
                  </div>
                  <div className="flex ">
                    <label htmlFor="description" className="sr-only"></label>
                    <Image src={Description} alt="" />
                    <p className="text-[#666666] ml-6 text-base leading-[19.36px] font-normal">
                      Description
                    </p>
                    <textarea
                      id="description"
                      rows={1}
                      placeholder="Not Seleced"
                      className="ml-[40px] placeholder-black focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </div>
            </form>
            <div className="flex gap-6">
              <Image src={Add} alt="" />{" "}
              <p className="text-base leading-[19.36px] font-normal">
                Add custom property
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
