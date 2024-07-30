"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";
import Hero from "./Hero";
import TaskModal from "./TaskModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex gap-4 bg-[#f7f7f7]">
      <Sidebar setShowModal={setShowModal} />
      <div className="flex flex-col gap-4 mt-6 mr-6">
        <Hero setShowModal={setShowModal} />
        <TaskList />
      </div>
      {showModal && <TaskModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Dashboard;
