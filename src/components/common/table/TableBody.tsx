import TableCell from "./TableCell";

const TableBody = ({ columns, datasource, page, pageSize }) => {
  return (
    <tbody>
      {datasource.map((data, rowIndex) => (
        <tr
          key={rowIndex}
          className="even:bg-gray-100 hover:bg-gray-50 transition text-center"
        >
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
      ))}
    </tbody>
  );
};

export default TableBody;
