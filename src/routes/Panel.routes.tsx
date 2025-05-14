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
          <TableSection
            titleNames={[
              { key: "firstName", label: "نام" },
              { key: "lastName", label: "نام خانوادگی" },
              { key: "nationalCode", label: "کد ملی" },
              { key: "userName", label: " نام کاربری" },
              { key: "status", label: "وضعیت کاربران" },
              { key: "twoFactorEnabled", label: "تایید دو مرحله ای" },
              { key: "type", label: "نوع کاربر" },
              { key: "action", label: "عملیات" },
            ]}
          />
        </SuspenseWrapper>
      ),
    },
  ],
};
