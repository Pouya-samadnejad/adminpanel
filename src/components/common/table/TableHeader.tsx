import React from "react";

interface TableHeaderProps {
  columns: {
    key: string;
    label: string;
    className?: string;
    style?: React.CSSProperties;
  }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-200 text-gray-700 font-semibold text-center sticky top-0 z-10 rounded-t-2xl">
      <tr>
        <th className=""></th>
        <th className="p-3">ردیف</th>
        {columns.map((column, index) => (
          <th
            key={column.key || index}
            className={`p-3 ${column.className || ""}`}
            style={column.style}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
