import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import getUsers from "../../../services/allusers";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Select } from "antd";
import NavBar from "./NavBar";

const TableSection = ({ titleNames }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page, pageSize, search],
    queryFn: () => getUsers(page, pageSize, search).then((res) => res.data),
    keepPreviousData: true,
  });

  const users = data?.items || [];
  const totalCount = data?.totalCount || 0;

  const handleSearch = (value) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("search", value);
      newParams.set("page", "1"); // وقتی سرچ می‌کنیم حتما صفحه اول باشه
      return newParams;
    });
  };

  const handleNumTable = (value) => {
    setPageSize(value);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", "1");
      return newParams;
    });
  };

  const handlePageChange = (p) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", String(p));
      return newParams;
    });
  };

  const rowNumberCol = {
    title: "ردیف",
    dataIndex: "__rowNumber",
  };

  const otherCols = titleNames.map((item) => ({
    title: item.label,
    dataIndex: item.key,
  }));

  const columns = [rowNumberCol, ...otherCols];

  return (
    <div>
      <div className="my-2 flex items-center justify-between gap-x-2">
        <NavBar search={search} handleSearch={handleSearch} />
        <p>تعداد کاربر:{totalCount}</p>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm mb-4">
        {isLoading ? (
          <p className="text-center py-4">در حال بارگذاری...</p>
        ) : isError ? (
          <p className="text-center py-4 text-red-500">خطا در دریافت اطلاعات</p>
        ) : (
          <table className="min-w-full text-sm text-right">
            <TableHeader columns={columns} />
            <TableBody
              columns={columns}
              datasource={users}
              page={page}
              pageSize={pageSize}
            />
          </table>
        )}
      </div>

      <div className="flex items-center justify-center mt-4 gap-2">
        <Pagination
          current={page}
          total={totalCount}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
        <Select
          value={pageSize}
          onChange={handleNumTable}
          options={[
            { label: "5 سطر", value: 5 },
            { label: "10 سطر", value: 10 },
            { label: "15 سطر", value: 15 },
          ]}
          className="w-28"
        />
      </div>
    </div>
  );
};

export default TableSection;
