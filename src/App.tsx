import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { getCurrentUser } from "./services/user";
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <ConfigProvider
        direction="rtl"
        locale={{ locale: "fa_IR" }}
        theme={{
          token: {
            fontFamily: "IRANYekanXFaNum, sans-serif",
          },
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </>
  );
};

export default App;
