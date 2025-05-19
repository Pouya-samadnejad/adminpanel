import React from "react";
import TableSection from "../../components/common/table/TableSection";
import Action from "../../components/common/table/Action";
import getUsers from "../../services/allusers";

interface IndexUsersProps {}

const IndexUsers: React.FC<IndexUsersProps> = ({ button }) => {
  return (
    <div>
      {button}
      <TableSection
        titleNames={[
          { key: "fullName", label: "نام و نام خانوادگی" },
          { key: "nationalCode", label: "کد ملی" },
          { key: "userName", label: "نام کاربری" },
          { key: "status", label: "وضعیت کاربران" },
          { key: "twoFactorEnabled", label: "تایید دو مرحله ای" },
          { key: "type", label: "نوع کاربر" },
          { key: "action", label: "عملیات" },
        ]}
        actionCol={(row) => <Action id={row.firstName} />}
        getApi={getUsers}
        searchBar="name"
      />
    </div>
  );
};

export default IndexUsers;
