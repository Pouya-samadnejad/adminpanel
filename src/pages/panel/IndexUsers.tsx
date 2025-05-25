import React from "react";
import TableSection from "../../components/common/table/TableSection";
import Action from "../../components/common/table/Action";
import { getUsers } from "../../services/allusers";
import { Link } from "react-router-dom";
import PageActionPortal from "../../components/common/PageActionPortal";

interface IndexUsersProps {}
const titles = [
  { key: "fullName", label: "نام و نام خانوادگی" },
  { key: "nationalCode", label: "کد ملی" },
  { key: "userName", label: "نام کاربری" },
  { key: "status", label: "وضعیت کاربران" },
  { key: "twoFactorEnabled", label: "تایید دو مرحله ای" },
  { key: "type", label: "نوع کاربر" },
  { key: "action", label: "عملیات" },
];

const IndexUsers: React.FC<IndexUsersProps> = () => {
  return (
    <div>
      <PageActionPortal>
        <div className="bg-sky-700 rounded-xl px-4 py-2 hover:bg-sky-800 transition-all duration-200">
          <Link to="new" className="!text-white flex items-center gap-2">
            <i className="fal fa-user-plus"></i>
            افزودن کاربر
          </Link>
        </div>
      </PageActionPortal>

      <TableSection
        titleNames={titles}
        actionCol={(row) => <Action user={row} />}
        getApi={getUsers}
        searchBar="name"
      />
    </div>
  );
};

export default IndexUsers;
