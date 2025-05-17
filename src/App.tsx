import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { getCurrentUser } from "./services/user";
import { ConfigProvider } from "antd";

const App: React.FC = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <ConfigProvider direction="rtl" locale={{ locale: "fa_IR" }}>
      <div
        style={{
          fontFamily: "IRANYekanXFaNum, Tahoma, Arial, sans-serif ",
        }}
      >
        <RouterProvider router={routes} />
      </div>
    </ConfigProvider>
  );
};

export default App;
