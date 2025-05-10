import type React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
