import type React from "react";
import { Outlet } from "react-router-dom";
import { useAxiosInterceptor } from "../utils/api";

const LoginLayout: React.FC = () => {
  useAxiosInterceptor();
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
