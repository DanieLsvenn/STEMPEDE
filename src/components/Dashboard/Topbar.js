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
    <div className="flex justify-end items-center bg-white dark:bg-gray-800 p-4 shadow-md">
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
