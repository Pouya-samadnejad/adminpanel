const UserTypeCell = ({ value }) => {
  return value === 0 ? (
    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
      سازمانی
    </span>
  ) : (
    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-md">
      شهروند
    </span>
  );
};

export default UserTypeCell;
