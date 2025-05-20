import React from "react";

interface TableHeaderProps {
  columns: any[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-200 text-gray-700 font-semibold text-center sticky top-0 z-10">
      <tr>
        <th className="p-3"></th>
        {columns.map((column, index) => (
          <th
            key={index}
            className={`p-3 ${column.className || ""}`}
            style={column.style}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
