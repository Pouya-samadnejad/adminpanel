import { lazy, Suspense } from "react";
import PanelLayout from "../layout/PanelLayout";
import Loading from "../components/common/Loading";
import TableSection from "../components/common/table/TableSection";

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export const PanelRoutes = {
  path: "/",
  element: <PanelLayout />,
  children: [
    {
      path: "panel",
      element: (
        <SuspenseWrapper>
          <TableSection />
        </SuspenseWrapper>
      ),
    },
  ],
};
