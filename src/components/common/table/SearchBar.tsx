import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
  defaultValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  defaultValue = "",
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSearch = () => {
    onSearch(value.trim());
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" items-center max-w-md bg-gray-100 rounded-xl overflow-hidden">
      <input
        type="text"
        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        placeholder="جستجو کنید..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onEnterPress}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors duration-200 m-1 rounded-xl"
        aria-label="جستجو"
      >
        جستجو
      </button>
    </div>
  );
};

export default SearchBar;
