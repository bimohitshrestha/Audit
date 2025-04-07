import React from "react";

interface SearchBarInterface {
  title: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarInterface> = ({
  title,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-serif font-bold text-gray-700">
          {title}
        </h1>
      </div>
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search Posts..."
          className="w-full px-6 py-3 rounded-full text-black bg-white border border-black focus:outline-none focus:ring-1 focus:ring-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
