import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import getUsers from "../../../services/allusers";
import { useSearchParams } from "react-router-dom";
import { Pagination, Select } from "antd";

interface TableSectionProps {
  titleNames: { label: string; key: string }[];
}

const TableSection: React.FC<TableSectionProps> = ({ titleNames }) => {
  const [datasource, setDatasource] = useState<any[]>([]);
  const [pageParams, setPageParams] = useSearchParams();
  const page = Number(pageParams.get("page") || 1); // صفحه جاری را از URL می‌خوانیم

  const [numTable, setNumtable] = useState<number>(5); // تعداد ردیف‌های هر صفحه

  const pageSize = numTable;

  // محاسبه تعداد صفحات بر اساس داده‌های فعلی (slicedUsers)
  const totalPage = Math.ceil(datasource.length / pageSize);

  // برش داده‌ها برای نمایش در صفحه
  const slicedUsers = datasource.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    getUsers()
      .then((res) => {
        const items = res?.data?.items;
        setDatasource(items);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleNumTable = (value: number) => {
    setNumtable(value);
    setPageParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", "1");
      return newParams;
    });
  };
  const rowNumberCol = {
    title: "ردیف",
    dataIndex: "row",
    render: (_: any, __: any, index: number) =>
      index + 1 + (page - 1) * pageSize,
  };

  const otherCols = titleNames.map((item) => ({
    title: item.label,
    dataIndex: item.key,
  }));

  const handlePageChange = (p: number) => {
    setPageParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", String(p));
      return newParams;
    });
  };

  const columns = [rowNumberCol, ...otherCols];

  return (
    <>
      <div className="overflow-x-auto rounded-xl shadow-sm mb-4flex justify-between mb-4">
        <table className="min-w-full text-sm text-right">
          <TableHeader columns={columns} />
          <TableBody columns={columns} datasource={slicedUsers} />
        </table>
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          align="center"
          current={page}
          total={datasource.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
        <Select
          value={numTable}
          onChange={handleNumTable}
          options={[
            { label: "5 سطر", value: 5 },
            { label: "10 سطر", value: 10 },
            { label: "15 سطر", value: 15 },
          ]}
          className="ml-2"
        />
      </div>
    </>
  );
};

export default TableSection;
