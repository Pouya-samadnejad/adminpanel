import React from "react";
import TableSection from "../../components/common/table/TableSection";

interface IndexUsersProps {}

const IndexUsers: React.FC<IndexUsersProps> = (props) => {
  return (
    <div>
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
      />{" "}
    </div>
  );
};

export default IndexUsers;
