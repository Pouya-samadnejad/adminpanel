import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import IndexSideBar from "../pages/panel/IndexSideBar";
import UserSection from "../components/common/panel/UserSection";
import RouteBasedBreadcrumb from "../components/common/RouteBasedBreadcrumb";

const { Content, Sider } = Layout;

const PanelLayout: React.FC = ({ button }) => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout dir="rtl">
      <Layout>
        <Drawer onClose={onClose} open={open} placement="right">
          <IndexSideBar />
        </Drawer>

        <Sider
          width={200}
          breakpoint="lg"
          style={{
            background: colorBgContainer,
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 0,
            overflowY: "auto",
            zIndex: 30,
          }}
          className="hidden md:block sidebar-scrollbar-left"
        >
          <UserSection />
          <IndexSideBar />
        </Sider>

        <Layout
          style={{
            marginRight: 200,
            padding: "0 24px 24px 24px",
          }}
        >
          <div className="flex items-center">
            <div className="md:hidden mt-2.5 mx-4 mb-4">
              <Button onClick={showDrawer} shape="circle">
                <UserOutlined />
              </Button>
            </div>
            <div className="flex items-center w-full justify-between">
              <RouteBasedBreadcrumb />
              <div id="buttonHolder" />
            </div>
          </div>

          <Content
            className="min-h-screen"
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
