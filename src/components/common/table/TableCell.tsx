import React from "react";
import Action from "./Action";
import StatusCell from "./cells/StatusCell";
import UserTypeCell from "./cells/UserTypeCell";

const TableCell = ({ column, data, rowIndex, page, pageSize }) => {
  const { dataIndex } = column;

  if (dataIndex === "__rowNumber") {
    return rowIndex + 1 + (page - 1) * pageSize;
  }

  const value = data[dataIndex];

  switch (dataIndex) {
    case "status":
    case "twoFactorEnabled":
      return <StatusCell value={value} />;
    case "type":
      return <UserTypeCell value={value} />;
    case "action":
      return <Action />;
    default:
      return value;
  }
};

export default TableCell;
