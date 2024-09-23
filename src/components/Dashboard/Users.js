// src/components/Users.js
import React, { useEffect, useState } from "react";
// import { getUsers } from "../../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const data = await getUsers();
  //       setUsers(data);
  //     };
  //     fetchUsers();
  //   }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          <tr>
            {/* <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td> */}
            <td className="border px-4 py-2">User ID</td>
            <td className="border px-4 py-2">User fullname</td>
            <td className="border px-4 py-2">User email</td>
            <td className="border px-4 py-2">Username</td>
            <td className="border px-4 py-2">
              <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
