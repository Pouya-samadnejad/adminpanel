import { lazy, Suspense } from "react";
import PanelLayout from "../layout/PanelLayout";
import Loading from "../components/common/Loading";
const IndexUsers = lazy(() => import("../pages/panel/IndexUsers"));
const Form = lazy(() => import("../pages/panel/form/Form"));
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const PanelRoutes = {
  path: "/panel",
  element: <PanelLayout />,
  handle: { breadcrumb: "داشبورد" }, // <- اگه خواستی
  children: [
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