// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ onSelect, selectedSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <h1 className="text-2xl font-bold p-4">Admin Dashboard</h1>
      <ul>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "dashboard" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("dashboard")}
        >
          General
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "userManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("userManagement")}
        >
          Manage Users
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "orderManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("orderManagement")}
        >
          Manage Orders
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "productManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("productManagement")}
        >
          Manage Products
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
