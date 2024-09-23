// src/components/Orders.js
import React, { useEffect, useState } from "react";
// import { getOrders } from "../../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     const fetchOrders = async () => {
  //       const data = await getOrders();
  //       setOrders(data);
  //     };
  //     fetchOrders();
  //   }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.product}</td>
              <td className="border px-4 py-2">${order.amount}</td>
              <td className="border px-4 py-2">{order.status}</td>
              
            </tr>
          ))}
        </tbody> */}
        <tbody>
          <tr>
            <td className="border px-4 py-2">Order ID</td>
            <td className="border px-4 py-2">Order Products</td>
            <td className="border px-4 py-2">$ Order Price</td>
            <td className="border px-4 py-2">Order Status</td>
            <td className="border px-4 py-2">
              <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded">
                Delete
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
