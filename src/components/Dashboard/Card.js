import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-2xl">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
