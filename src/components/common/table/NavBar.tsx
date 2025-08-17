import React from "react";
import SearchBar from "./SearchBar";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({
  handleSearch,
  search,
  totalCount,
}) => {
  return (
    <div className="flex items-center gap-2 justify-between w-full mb-4">
      <SearchBar onSearch={handleSearch} defaultValue={search} />
      <p>تعداد کاربر:{totalCount}</p>
    </div>
  );
};

export default NavBar;
