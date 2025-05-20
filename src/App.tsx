import { Form, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { getCurrentUser } from "./services/user";
import { ConfigProvider, Input } from "antd";

const App: React.FC = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <ConfigProvider
      direction="rtl"
      locale={{ locale: "fa_IR" }}
      theme={{
        token: {
          fontFamily: "IRANYekanXFaNum, sans-serif",
        },
      }}
    >
      <div>
        <RouterProvider router={routes} />
      </div>
    </ConfigProvider>
  );
};

export default App;
