import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Breadcrumb,
  Button,
  Drawer,
  Layout,
  Menu,
  theme,
  Avatar,
  Space,
} from "antd";

const { Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: Array.from({ length: 4 }).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
function PanelLayout() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen ">
      <Layout>
        <Drawer onClose={onClose} open={open}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Drawer>

        <Sider
          width={200}
          breakpoint="lg"
          style={{ background: colorBgContainer }}
          className="hidden md:block "
        >
          <div className="w-full mx-auto">
            <Space direction="vertical" size={16}>
              <Avatar size={64} icon={<UserOutlined />} />
            </Space>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout className="!px-4 !pb-3 !md:px-6 !md:pb-4">
          <div className="flex items-center">
            <div className="md:hidden mt-2.5 mx-4 mb-4">
              <Button onClick={showDrawer} shape="circle">
                <UserOutlined />
              </Button>
            </div>
            <Breadcrumb
              items={[
                { title: "خانه" },
                { title: "لیست" },
                { title: "برنامه" },
              ]}
              style={{ margin: "16px 0" }}
            />
          </div>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            محتوای اصلی اینجاست
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PanelLayout;
