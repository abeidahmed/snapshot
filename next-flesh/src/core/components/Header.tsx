import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex items-center space-x-3 sm:space-x-0 border-b sticky top-0 z-10 bg-white">
      <button
        type="button"
        className="flex-shrink-0 no-focus sm:hidden -ml-1 text-gray-700 hover:text-gray-500"
      >
        Menu
      </button>
      <div className="relative flex-1">
        <label htmlFor="search-global" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search-global"
          placeholder="Search snapshot"
          className="block w-full border-gray-200 rounded-lg leading-5 pl-10 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-opacity-50 focus:ring-rose-500 focus:border-rose-500"
        />
        <div className="absolute inset-0 left-0 flex items-center pointer-events-none pl-3">
          Search
        </div>
      </div>
      <div className="flex-shrink-0 sm:hidden">Usermenu</div>
    </header>
  );
};

export default Header;
