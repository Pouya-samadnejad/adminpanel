import { lazy, Suspense } from "react";
import ErrorLayout from "../layout/ErrorLayout";
import Loading from "../components/common/Loading";

const Error404 = lazy(() => import("../pages/error/Error404"));
const Error403 = lazy(() => import("../pages/error/Error403"));
const Error500 = lazy(() => import("../pages/error/Error500"));

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const ErrorRoutes = {
  element: <ErrorLayout />,
  path: "/",
  children: [
    {
      path: "*",
      index: true,
      element: (
        <SuspenseWrapper>
          <Error404 />
        </SuspenseWrapper>
      ),
    },
    {
      path: "forbidden",
      element: (
        <SuspenseWrapper>
          <Error403 />
        </SuspenseWrapper>
      ),
    },
    {
      path: "server-error",
      element: (
        <SuspenseWrapper>
          <Error500 />
        </SuspenseWrapper>
      ),
    },
  ],
};
