import { lazy, Suspense } from "react";
import PanelLayout from "../layout/PanelLayout";
import Loading from "../components/common/Loading";
const IndexUsers = lazy(() => import("../pages/panel/IndexUsers"));
const Form = lazy(() => import("../pages/panel/form/Form"));
const IndexDashboard = lazy(() => import("../pages/panel/IndexDashboard"));
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const PanelRoutes = {
  path: "/",
  element: <PanelLayout />,
  handle: { breadcrumb: "داشبورد" },
  children: [
    {
      index: true,
      element: (
        <SuspenseWrapper>
          <IndexDashboard />
        </SuspenseWrapper>
      ),
    },
    {
      path: "users",
      handle: { breadcrumb: "کاربران" },
      children: [
        {
          index: true,
          element: (
            <SuspenseWrapper>
              <IndexUsers />
            </SuspenseWrapper>
          ),
        },
        {
          path: "new",
          element: (
            <SuspenseWrapper>
              <Form />
            </SuspenseWrapper>
          ),
          handle: { breadcrumb: "افزودن کاربر" },
        },
        {
          path: "edit/:id",
          element: (
            <SuspenseWrapper>
              <Form />
            </SuspenseWrapper>
          ),
          handle: { breadcrumb: "ویرایش کاربر" },
        },
      ],
    },
    {
      path: "applications",
      element: (
        <SuspenseWrapper>
          <div>سامانه ها</div>
        </SuspenseWrapper>
      ),
      handle: { breadcrumb: "سامانه‌ها" },
    },
    {
      path: "loginLogs",
      element: (
        <SuspenseWrapper>
          <div>نشست‌ها</div>
        </SuspenseWrapper>
      ),
      handle: { breadcrumb: "نشست‌ها" },
    },
  ],
};
