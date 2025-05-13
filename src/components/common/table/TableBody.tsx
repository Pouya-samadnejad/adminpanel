import React from "react";

interface TableBodyProps {
  columns: any[];
  datasource: any[];
}

const TableBody: React.FC<TableBodyProps> = ({ columns, datasource }) => {
  return (
    <tbody>
      {datasource.map((data, rowIndex) => (
        <tr
          key={rowIndex}
          className="even:bg-gray-100 hover:bg-gray-50 transition"
        >
          {columns.map((column, colIndex) => (
            <td key={colIndex} className="p-3">
              {column.render
                ? column.render(data[column.dataIndex], data, rowIndex)
                : data[column.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
