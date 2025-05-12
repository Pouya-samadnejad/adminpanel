import React, { useState } from "react";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Drawer, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import IndexSideBar from "../pages/panel/IndexSideBar";
import { Link } from "react-router-dom";
import { useAxiosInterceptor } from "../utils/api";
import UserSection from "../pages/panel/UserSection";
const { Content, Sider } = Layout;

const PanelLayout: React.FC = () => {
  useAxiosInterceptor();
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Layout>
        <Drawer onClose={onClose} open={open}>
          <IndexSideBar />
        </Drawer>

        <Sider
          width={200}
          breakpoint="lg"
          style={{ background: colorBgContainer }}
          className="hidden md:block"
        >
          <UserSection />
          <IndexSideBar />
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
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;
