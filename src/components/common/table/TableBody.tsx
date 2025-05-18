import React, { useState } from "react";
import TableCell from "./TableCell";

const TableBody = ({ columns, datasource, page, pageSize }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <tbody>
      {datasource.map((data, rowIndex) => {
        const isExpanded = expandedRow === data.id;

        return (
          <React.Fragment key={data.id}>
            <tr
              className="even:bg-gray-100 odd:bg-white hover:bg-gray-50 transition text-center cursor-pointer"
              onClick={() => toggleExpand(data.id)}
            >
              {/* ستون آیکون اکسپند */}
              <td className="p-3 select-none w-1 text-center">
                <i
                  className={`fal ${
                    isExpanded ? "fa-chevron-up" : "fa-chevron-down"
                  } text-gray-600 transition-transform duration-300`}
                ></i>
              </td>

              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3">
                  <TableCell
                    column={column}
                    data={data}
                    rowIndex={rowIndex}
                    page={page}
                    pageSize={pageSize}
                  />
                </td>
              ))}
            </tr>

            {isExpanded && (
              <tr>
                <td colSpan={columns.length + 1} className="p-0 border-0">
                  <div
                    className="p-4 text-right bg-white border border-gray-200 shadow rounded-md"
                    style={{ userSelect: "text" }}
                  >
                    <p>
                      <strong>شماره تماس:</strong>{" "}
                      {data.phoneNumber || "نامشخص"}
                    </p>
                    <p>
                      <strong>آدرس:</strong> {data.address || "ندارد"}
                    </p>
                    <p>
                      <strong>تاریخ عضویت:</strong> {data.registeredAt}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        );
      })}
    </tbody>
  );
};

export default TableBody;
