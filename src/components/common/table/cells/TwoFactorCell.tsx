const TwoFactorCell = ({ value }) => {
  return value ? (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md">
      فعال
    </span>
  ) : (
    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md">
      غیرفعال
    </span>
  );
};

export default TwoFactorCell;
