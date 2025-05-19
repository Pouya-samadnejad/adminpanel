import React from "react";
import SearchBar from "./SearchBar";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({ handleSearch, search }) => {
  return (
    <div className="flex items-center gap-2">
      <SearchBar onSearch={handleSearch} defaultValue={search} />
    </div>
  );
};

export default NavBar;
