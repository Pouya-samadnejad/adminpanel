import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAxiosInterceptor } from "../utils/api";
const { Header, Content, Footer } = Layout;

const items = [
  { key: "1", label: <Link to="/login">ورود</Link> },
  { key: "3", label: <Link to="/panel">پنل کاربری</Link> },
];

const LandingLayout: React.FC = () => {
  useAxiosInterceptor();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Header
        style={{ display: "flex", alignItems: "center" }}
        className="!bg-white"
      >
        <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>خانه</Breadcrumb.Item>
          <Breadcrumb.Item>لیست</Breadcrumb.Item>
          <Breadcrumb.Item>اپ</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LandingLayout;
