import React from "react";
import StatusCell from "./cells/StatusCell";
import UserTypeCell from "./cells/UserTypeCell";

const TableCell = ({ column, data, rowIndex, page, pageSize, actionCol }) => {
  const { dataIndex } = column;

  if (dataIndex === "__rowNumber") {
    return rowIndex + 1 + (page - 1) * pageSize;
  }

  if (dataIndex === "fullName") {
    return `${data.firstName || ""} ${data.lastName || ""}`.trim();
  }

  const value = data[dataIndex];

  switch (dataIndex) {
    case "status":
    case "twoFactorEnabled":
      return <StatusCell value={value} />;
    case "type":
      return <UserTypeCell value={value} />;
    case "action":
      return actionCol?.(data);
    default:
      return value;
  }
};

export default TableCell;
