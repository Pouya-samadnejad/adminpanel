import React, { lazy, Suspense } from "react";
import LandingLayout from "../layout/LandingLayout";
import Loading from "../components/common/Loading";
const Form = lazy(() => import("../pages/panel/form/Form"));

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const Landingroutes = {
  element: <LandingLayout />,
  path: "/",
  children: [
    {
      path: "landing",
      index: true,
      element: (
        <SuspenseWrapper>
          <Form />
        </SuspenseWrapper>
      ),
      handle: { breadcrumb: "خانه" },
    },
  ],
};
