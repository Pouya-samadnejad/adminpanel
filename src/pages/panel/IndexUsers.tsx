import React from "react";
import TableSection from "../../components/common/table/TableSection";
import Action from "../../components/common/table/Action";
import { getUsers } from "../../services/allusers";
import Nav from "../../components/common/Nav";
import { Link } from "react-router-dom";

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
      <Nav>
        <div className="bg-sky-600 text-white px-6 py-2  rounded-[12px] hover:bg-sky-700 transition-all duration-200 cursor-pointer">
          <Link to="new" className="!text-white">
            افزودن کاربر
          </Link>
        </div>
      </Nav>
      <TableSection
        titleNames={titles}
        actionCol={(row) => <Action id={row.id} />}
        getApi={getUsers}
        searchBar="name"
      />
    </div>
  );
};

export default IndexUsers;
