import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Select } from "antd";
import NavBar from "./NavBar";

const TableSection = ({ titleNames, actionCol, searchBar, getApi }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get(searchBar) || "";
  const [pageSize, setPageSize] = useState(5);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page, pageSize, search],
    queryFn: () => getApi(page, pageSize, search),
    keepPreviousData: true,
    select: ({ data }) => (data ? data : undefined),
  });

  const users = data?.items || [];
  const totalCount = data?.totalCount || 0;

  const handleSearch = (value) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set(searchBar, value);
      newParams.set("page", "1");
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
  if (isError)
    return (
      <p className="text-center py-4 text-red-500">خطا در دریافت اطلاعات</p>
    );

  return (
    <div>
      <div>
        <div className="w-full ">
          <NavBar
            search={search}
            handleSearch={handleSearch}
            totalCount={totalCount}
          />
        </div>
        <div className="overflow-x-auto rounded-2xl shadow-sm mb-4">
          <table className="min-w-full text-sm text-right shadow-md">
            <TableHeader columns={titleNames} />
            <TableBody
              columns={columns}
              datasource={users}
              page={page}
              pageSize={pageSize}
              totalCount={totalCount}
              actionCol={actionCol}
              handlePageChange={handlePageChange}
              handleNumTable={handleNumTable}
            />
          </table>
        </div>
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
            { label: "30سطر", value: 30 },
          ]}
          className="w-28"
        />
      </div>
    </div>
  );
};

export default TableSection;
