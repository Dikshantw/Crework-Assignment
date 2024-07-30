"use client";
import Image from "next/image";
import TaskListIcon from "@/icons/TaskList.svg";
import Link from "next/link";
import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const [defaultStatus, setDefaultStatus] = useState<string | null>(null);

  const handleClick = (newStatus: any) => {
    setDefaultStatus(newStatus);
  };
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>To do</p>
          <Image src={TaskListIcon} alt="" />
        </div>

        <TaskCard />

        <div>
          <button onClick={() => handleClick("todo")}>
            <div className="flex justify-between bg-gradient-to-b from-[#3a3a3a] to-[#202020] text-[#e3e1e1] rounded-lg p-2 w-[256px]">
              <p>Add new</p>
              <span>+</span>
            </div>
          </button>

          {defaultStatus && (
            <TaskModal
              defaultStatus={defaultStatus}
              setDefaultStatus={setDefaultStatus}
              onClose={() => setDefaultStatus(null)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>In Progress</p>
          <Image src={TaskListIcon} alt="" />
        </div>

        {/* {todos from database} */}
        <TaskCard />
        <TaskCard />
        <div>
          <button onClick={() => handleClick("inprogress")}>
            <div className="flex justify-between bg-gradient-to-b from-[#3a3a3a] to-[#202020] text-[#e3e1e1] rounded-lg p-2 w-[256px]">
              <p>Add new</p>
              <span>+</span>
            </div>
          </button>

          {defaultStatus && (
            <TaskModal
              defaultStatus={defaultStatus}
              setDefaultStatus={setDefaultStatus}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Under review</p>
          <Image src={TaskListIcon} alt="" />
        </div>

        {/* {todos from database} */}
        <TaskCard />
        <div>
          <button onClick={() => handleClick("under-review")}>
            <div className="flex justify-between bg-gradient-to-b from-[#3a3a3a] to-[#202020] text-[#e3e1e1] rounded-lg p-2 w-[256px]">
              <p>Add new</p>
              <span>+</span>
            </div>
          </button>

          {defaultStatus && (
            <TaskModal
              defaultStatus={defaultStatus}
              setDefaultStatus={setDefaultStatus}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Finished</p>
          <Image src={TaskListIcon} alt="" />
        </div>

        {/* {todos from database} */}
        <TaskCard />
        <div>
          <button onClick={() => handleClick("finished")}>
            <div className="flex justify-between bg-gradient-to-b from-[#3a3a3a] to-[#202020] text-[#e3e1e1] rounded-lg p-2 w-[256px]">
              <p>Add new</p>
              <span>+</span>
            </div>
          </button>

          {defaultStatus && (
            <TaskModal
              defaultStatus={defaultStatus}
              setDefaultStatus={setDefaultStatus}
              onClose={() => setDefaultStatus(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
