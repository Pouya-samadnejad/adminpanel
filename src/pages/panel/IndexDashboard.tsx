import React from "react";
import { Link } from "react-router-dom";

interface IndexDashboardProps {}

const IndexDashboard: React.FC<IndexDashboardProps> = () => {
  return (
    <div className="flex pt-4 gap-8 justify-center items-center my-auto h-full">
      <div className=" cursor-pointer hover:scale-110 transition-all duration-300">
        <Link
          to="/users"
          className="!text-black text-3xl font-bold flex flex-col gap-4 items-center justify-center"
        >
          <i className="fal fa-users-cog text-6xl"></i>
          کاربران
        </Link>
      </div>
      <div className="cursor-pointer hover:scale-110 transition-all duration-300 ">
        <Link
          to="/applications"
          className="!text-black text-3xl font-bold flex flex-col gap-4 items-center justify-center"
        >
          <i className="fal fa-solar-system text-6xl"></i>
          سامانه ها
        </Link>
      </div>
      <div className="cursor-pointer hover:scale-110 transition-all duration-300">
        <Link
          to="/loginLogs"
          className="!text-black text-3xl font-bold flex flex-col gap-4 items-center justify-center"
        >
          <i className="fal fa-calendar-clock text-6xl"></i>
          نشست ها
        </Link>
      </div>
    </div>
  );
};

export default IndexDashboard;
