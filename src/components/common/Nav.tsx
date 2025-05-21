import { Breadcrumb } from "antd";
import React from "react";

const Nav = ({ children }) => {
  return (
    <div>
      <div className="flex items-center w-full justify-between">
        <Breadcrumb
          items={[{ title: "خانه" }, { title: "لیست" }, { title: "برنامه" }]}
          style={{ margin: "16px 0" }}
        />
        {children}
      </div>
    </div>
  );
};

export default Nav;
