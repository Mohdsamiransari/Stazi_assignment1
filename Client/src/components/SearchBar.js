import React from "react";


export const SearchBar = ({setSearch}) => {
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className=" basis-16 bg-[#e5eaf4] rounded-2xl flex flex-row justify-start items-center px-4 gap-4">
      <div className="relative w-1/5">
        <label></label>
        <input
          type="search"
          placeholder="Search..."
          className=" text-sm px-4 py-2 rounded-2xl bg-white w-full appearance-none border-none"
          onChange={handleSearch}
        />
      </div>
      <select className="bg-transparent text-gray-700">
        <option>Relavance</option>
        <option>Low to High</option>
        <option>High to Low</option>
      </select>
      <select className="bg-transparent text-gray-700">
        <option>All brands</option>
        <option>Hyundai</option>
        <option>Tata</option>
      </select>
      <div></div>
      
    </div>
  );
};
