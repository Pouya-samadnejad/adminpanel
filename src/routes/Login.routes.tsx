import { lazy, Suspense } from "react";
import Loading from "../components/common/loading";
import LoginLayout from "../layout/LoginLayout";
const Form = lazy(() => import("../components/common/Form"));

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const LoginRoutes = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: "login",
      element: (
        <SuspenseWrapper>
          <Form />
        </SuspenseWrapper>
      ),
    },
  ],
};
