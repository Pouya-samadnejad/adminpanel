import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
