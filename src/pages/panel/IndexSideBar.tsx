import { Menu } from "antd";
import React from "react";
import type { MenuItemGroupProps } from "antd/es/menu";
import { useNavigate } from "react-router-dom";

const items: MenuItemGroupProps[] = [
  {
    key: "users",
    icon: <i className="fal fa-user"></i>,
    label: " کاربران",
  },
  {
    key: "applications",
    icon: <i className="fal fa-desktop"></i>,
    label: " سامنه ها",
  },
  {
    key: "loginLogs",
    icon: <i className="fal fa-clock"></i>,
    label: " نشست ها",
  },
];

interface indexSideBarProps {}

const IndexSideBar: React.FC<indexSideBarProps> = () => {
  const navigate = useNavigate();
  const clickhandler = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
        onClick={clickhandler}
      />
    </div>
  );
};

export default IndexSideBar;
