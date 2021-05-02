import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div>
      <div
        className=" h-auto overflow-hidden flex items-center justify-center"
        style={{ background: "transparent" }}
      >
        <div className="relative md:mr-2 mr-1 my-2">
          <input
            type="search"
            className="md:w-72 xl:w-96 focus:outline-none bg-purple-white shadow rounded border-0 px-3 py-2"
            placeholder={placeholder}
          />
          <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
