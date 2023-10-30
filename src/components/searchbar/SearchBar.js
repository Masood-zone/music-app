import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function SearchBar() {
  return (
    <div className="flex items-center">
      <label className="absolute pl-1">
        <HiOutlineSearch fontSize={25} />
      </label>
      <input
        type="text"
        placeholder="Search artist, title, album"
        className="input input-bordered w-[958px] max-lg:max-w-md max-md:max-w-sm max-sm:max-w-[290px] pl-8 max-[299px]:max-w-[220px]"
      />
    </div>
  );
}

export default SearchBar;
