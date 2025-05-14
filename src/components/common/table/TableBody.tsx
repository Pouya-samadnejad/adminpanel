import React from "react";
import Action from "./Action";

interface TableBodyProps {
  columns: any[];
  datasource: any[];
}

const TableBody: React.FC<TableBodyProps> = ({ columns, datasource }) => {
  const renderCellValue = (column, data) => {
    const value = data[column.dataIndex];

    switch (column.dataIndex) {
      case "status":
      case "twoFactorEnabled":
        return value === true || value === 1 ? (
          <span className="bg-green-100 text-green-700 border-1 px-3 py-1 rounded-md">
            فعال
          </span>
        ) : (
          <span className="bg-red-100 text-red-600 border-1 px-3 py-1 rounded-md">
            غیر فعال
          </span>
        );

      case "type":
        return value === 0 ? (
          <span className="bg-blue-100 text-blue-700 border-1 px-3 py-1 rounded-md">
            سازمانی
          </span>
        ) : (
          <span className="bg-orange-100 text-orange-700 border-1 px-3 py-1 rounded-md">
            شهروند
          </span>
        );
      case "action":
        return <Action />;

      default:
        return value;
    }
  };

  return (
    <tbody>
      {datasource.map((data, rowIndex) => (
        <tr
          key={rowIndex}
          className="even:bg-gray-100 hover:bg-gray-50 transition text-center"
        >
          {columns.map((column, colIndex) => (
            <td key={colIndex} className="p-3">
              {column.render
                ? column.render(data[column.dataIndex], data, rowIndex)
                : renderCellValue(column, data)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
