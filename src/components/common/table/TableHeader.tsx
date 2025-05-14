import React from "react";

// Define the props for TableHeader
interface TableHeaderProps {
  columns: any[]; // Array of column configurations
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-100 text-gray-700 font-semibold text-center">
      <tr>
        {columns.map((column, index) => (
          <th key={index} className="p-3">
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
