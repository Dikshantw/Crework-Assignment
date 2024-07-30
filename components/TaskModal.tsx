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
import Link from "next/link";
import axios from "axios";

const TaskModal = ({ defaultStatus, setDefaultStatus, onClose }: any) => {
  async function handleTaskSubmission(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/createTask", {
        title: title,
        status: defaultStatus,
        priority: priority,
        deadline: deadline,
        description: description,
      });
    } catch (error: any) {
      message: error;
    }
    onClose();
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="max-w-[670px] flex flex-col px-6 gap-8 bg-[#ffffff]">
        <div className="flex flex-col gap-[27px]">
          <div className="flex mt-1 justify-between">
            <div className="flex gap-4">
              <button onClick={onClose}>
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                      value={defaultStatus}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setDefaultStatus(e.target.value)
                      }
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
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
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
                      onChange={(e) => setDeadline(e.target.value)}
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
            <div className="border-2"></div>
            <h1 className="h-[19px] text-[#C0BDBD] font-inter font-normal text-[16px] leading-[19.36px]">
              Start writing, or drag your own files here.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
