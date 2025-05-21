import { lazy, Suspense } from "react";
import PanelLayout from "../layout/PanelLayout";
import Loading from "../components/common/Loading";
const IndexUsers = lazy(() => import("../pages/panel/IndexUsers"));
const Form = lazy(() => import("../components/common/Form"));
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const PanelRoutes = {
  path: "/panel",
  element: <PanelLayout />,
  children: [
    {
      path: "users",
      element: (
        <SuspenseWrapper>
          <IndexUsers />
        </SuspenseWrapper>
      ),
    },
    {
      path: "users/new",
      element: (
        <SuspenseWrapper>
          <Form />
        </SuspenseWrapper>
      ),
    },
    {
      path: "users/edit/:id",
      element: (
        <SuspenseWrapper>
          <Form />
        </SuspenseWrapper>
      ),
    },
    {
      path: "applications",
      element: (
        <SuspenseWrapper>
          <div>سامانه ها</div>
        </SuspenseWrapper>
      ),
    },
    {
      path: "loginLogs",
      element: (
        <SuspenseWrapper>
          <div>نشست ها</div>
        </SuspenseWrapper>
      ),
    },
  ],
};
