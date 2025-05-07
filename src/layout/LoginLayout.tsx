import React from "react";

function LoginLayout() {
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto">
        outlet
      </div>
    </div>
  );
}

export default LoginLayout;
