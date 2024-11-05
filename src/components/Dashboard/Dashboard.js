import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Users from "./Users";
import Staffs from "./Staffs";
import Orders from "./Orders";
import Card from "./Card";
import { FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { LineChart, BarChart } from "./Charts";
import Products from "./Products";
import Labs from "./Labs";
import RequireAuth from "../RequireAuth";

const ROLES = {
  Manager: 'Manager',
  Staff: 'Staff'
}

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const renderSection = () => {
    switch (selectedSection) {
      case "userManagement":
        return <Users />;
      case "staffManagement":
        return <Staffs />;
      case "orderManagement":
        return <Orders />;
      case "productManagement":
        return <Products />;
      case "labManagement":
        return <Labs />;
      default:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="Users" value="1,234" icon={<FaUsers />} />
              <Card title="Orders" value="567" icon={<FaShoppingCart />} />
              <Card title="Revenue" value="$12,345" icon={<FaDollarSign />} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
                <LineChart />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Orders</h2>
                <BarChart />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex">
      <Sidebar
        onSelect={setSelectedSection}
        selectedSection={selectedSection}
      />

      <div className="flex-1 p-6 dark:bg-gray-900 dark:text-white">
        <Topbar />
        <div className="flex justify-end mb-4"></div>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
