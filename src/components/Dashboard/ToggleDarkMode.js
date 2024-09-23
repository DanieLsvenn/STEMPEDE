// src/components/ToggleDarkMode.js
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="bg-gray-500 text-white p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ToggleDarkMode;
