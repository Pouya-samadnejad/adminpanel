import StatusCell from "./cells/StatusCell";
import TwoFactorCell from "./cells/TwoFactorCell";
import UserTypeCell from "./cells/UserTypeCell";
import ActionCell from "./cells/ActionCell";

const TableCell = ({ column, data, rowIndex }) => {
  const value = data[column.dataIndex];

  switch (column.dataIndex) {
    case "status":
      return <StatusCell value={value} />;
    case "twoFactorEnabled":
      return <TwoFactorCell value={value} />;
    case "type":
      return <UserTypeCell value={value} />;
    case "action":
      return <ActionCell />;
    default:
      return <>{value}</>;
  }
};

export default TableCell;
