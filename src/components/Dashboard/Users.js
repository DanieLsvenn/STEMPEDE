import React, { useEffect, useState } from "react";
import { IoMdCopy } from "react-icons/io";
import UsersApi from "../../api/users"; // Make sure the path is correct
import axios from "../../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UsersApi.getAllUsers();
        setUsers(data.data); // Assuming data.data is the users array
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleBanUser = async (userId) => {
    try {
      const response = await UsersApi.banUser(userId);
      alert(response.message || "User banned successfully!");
      // Refresh users list after banning
      const data = await UsersApi.getAllUsers();
      setUsers(data.data);
    } catch (error) {
      console.error("Failed to ban user:", error);
      alert("Failed to ban user.");
    }
  };

  const handleUnbanUser = async (userId) => {
    try {
      const response = await UsersApi.unbanUser(userId);
      alert(response.message || "User unbanned successfully!");
      // Refresh users list after unbanning
      const data = await UsersApi.getAllUsers();
      setUsers(data.data);
    } catch (error) {
      console.error("Failed to unban user:", error);
      alert("Failed to unban user.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Manage Users</h2>
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Full Name</th>
            <th className="border px-2 py-1">Username</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userID}>
              <td className="border px-2 py-1">{user.userID}</td>
              <td className="border px-2 py-1">{user.fullName}</td>
              <td className="border px-2 py-1">{user.username}</td>
              <td className="border px-2 py-1">{user.status}</td>
              <td className="border px-2 py-1">
                <div className="flex justify-center items-center">
                  {user.status === "Banned" ? (
                    <button 
                      onClick={() => handleUnbanUser(user.userID)} 
                      className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                    >
                      Unban User
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleBanUser(user.userID)} 
                      className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                    >
                      Ban User
                    </button>
                  )}
                  <button
                    onClick={() => {
                      const textToCopy = user.username; // Copying the username
                      navigator.clipboard.writeText(textToCopy).then(() => {
                        alert("Copied to clipboard!");
                      }).catch(err => {
                        console.error("Failed to copy: ", err);
                      });
                    }}
                    className="ml-2 hover:text-blue-500"
                  >
                    <IoMdCopy />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
