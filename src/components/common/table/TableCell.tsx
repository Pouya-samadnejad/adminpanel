import React from "react";
import Action from "./Action";
import StatusCell from "./cells/StatusCell";
import UserTypeCell from "./cells/UserTypeCell";

const TableCell = ({ column, data, rowIndex, page, pageSize, ActionBar }) => {
  const { dataIndex } = column;

  if (dataIndex === "__rowNumber") {
    return rowIndex + 1 + (page - 1) * pageSize;
  }

  if (dataIndex === "fullName") {
    return `${data.firstName || ""} ${data.lastName || ""}`;
  }

  const value = data[dataIndex];

  switch (dataIndex) {
    case "status":
    case "twoFactorEnabled":
      return <StatusCell value={value} />;
    case "type":
      return <UserTypeCell value={value} />;
    case "action":
      return <Action ActionBar={ActionBar} />;
    default:
      return value;
  }
};

export default TableCell;
