import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import getUsers from "../../../services/allusers";

const titleName = {
  firstName: "نام",
  lastName: "نام خانوادگی",
  nationalCode: "کد ملی",
  userName: "نام کاربری",
  status: "وضعیت کاربر",
  twoFactorEnabled: "تایید دو مرحله ای",
  type: "نوع کاربر",
  action: "عملیات",
};

interface TableSectionProps {}

const TableSection: React.FC<TableSectionProps> = () => {
  const [datasource, setDatasource] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        const items = res.data.items;
        setDatasource(items);
      })
      .catch((err) => console.error(err));

    const cols = Object.keys(titleName).map((key) => ({
      title: titleName[key],
      dataIndex: key,
    }));

    const rowNumberCol = {
      title: "ردیف",
      dataIndex: "row",
      render: (_: any, __: any, index: number) => index + 1,
    };

    setColumns([rowNumberCol, ...cols]); // Add the row number column first
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="overflow-x-auto rounded-xl shadow-sm mb-4">
      <table className="min-w-full text-sm text-right">
        <TableHeader columns={columns} />
        <TableBody columns={columns} datasource={datasource} />
      </table>
    </div>
  );
};

export default TableSection;
