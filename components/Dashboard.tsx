import React from "react";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";
import Hero from "./Hero";

const Dashboard = () => {
  return (
    <div className="flex gap-4 bg-[#f7f7f7]">
      <Sidebar />
      <div className="flex flex-col gap-4 mt-6 mr-6">
        <Hero />
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
