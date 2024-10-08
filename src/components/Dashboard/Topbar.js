import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import ToggleDarkMode from "./ToggleDarkMode";
const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md">
      {/* Breadcrumbs */}
      <nav className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <ol className="list-reset flex">
          <li>
            <a href="#" className="text-blue-500">
              General
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>Manage ...</li>
        </ol>
      </nav>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm focus:outline-none text-gray-600 dark:text-gray-300"
        />
        <span className="absolute top-2 right-4 text-gray-500">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      {/* Right Actions: Dark Mode Toggle, Notifications, User Dropdown */}
      <div className="flex items-center space-x-6">
        <ToggleDarkMode />
        {/* Notifications */}
        <div className="relative">
          <button className="relative text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute top-0 left-2 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* User Avatar and Dropdown */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            className="h-10 w-10 rounded-full cursor-pointer"
            alt="User Avatar"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Quick Action Button */}
      </div>
    </div>
  );
};

export default Topbar;
