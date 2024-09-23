import React from "react";
import Topbar from "../components/Dashboard/Topbar";
import Dashboard from "../components/Dashboard/Dashboard";

function DashboardPage() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
