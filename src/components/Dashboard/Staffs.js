// src/components/Users.js
import React, { useEffect, useState } from "react";
import { IoMdCopy } from "react-icons/io";
// import { getUsers } from "../../api";

const Staffs = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const data = await getUsers();
  //     setUsers(data);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Manage Staffs</h2>
      <table className="min-w-full table-auto text-sm"> {/* Added text-sm for smaller text */}
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Password</th>
            <th className="border px-2 py-1">Username</th>
            <th className="border px-2 py-1">Address</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">001</td>
            <td className="border px-2 py-1">0912518309</td>
            <td className="border px-2 py-1">seizurebabe@gmail.com</td>
            <td className="border px-2 py-1">123456789</td>
            <td className="border px-2 py-1">Nguyen Nhu Thanh</td>
            <td className="border px-2 py-1 relative max-w-xs overflow-hidden items-center justify-center">
              <span
                className="whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  display: 'inline-block',
                  maxWidth: '150px', // Set the width you want
                }}
              >
                jspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqds
              </span>
              <span
                className="absolute left-0 top-0 bg-white z-10 invisible hover:visible"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  maxWidth: 'none',
                  pointerEvents: 'none', // Prevent interaction
                }}
              >
                jspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqds
              </span>
              <button
                onClick={() => {
                  // Copying text to the clipboard
                  const textToCopy = "jspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqdsjspoasjcakmvkljew;kfdqwopl;kdsaldqds";
                  navigator.clipboard.writeText(textToCopy).then(() => {
                    // Optionally, you can show a success message or do something else
                    alert("Copied to clipboard!");
                  }).catch(err => {
                    console.error("Failed to copy: ", err);
                  });
                }}
                className="hover:text-blue-500" // Styling for the button
              >
                <div className="mb-0.5">
                  <IoMdCopy />
                </div>
              </button>
            </td>

            <td className="border px-2 py-1">
              <div className="flex justify-center items-center">
                <button className="bg-red-500 text-white text-xs px-2 py-1 rounded"> {/* Adjusted padding and font size */}
                  Ban User
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Staffs;
