import React, { useState } from "react";

const Documentation = () => {
  const [selectedSection, setSelectedSection] = useState("Introduction");

  const sections = [
    "Introduction",
    "Getting Started",
    "SDK Setup",
    "API Reference",
    "Advanced Topics",
    "FAQs",
  ];

  const content = {
    Introduction:
    //Introduction
    "Welcome to the documentation! This section covers basic information.",
    //Getting started
    "Getting Started":
    "This section will help you set up the project from scratch.",
    //SDK setup
    "SDK Setup": "Learn how to set up the SDK step-by-step.",
    //API references
    "API Reference": "Here's a complete API reference with all the details.",
    //Advanced topics
    "Advanced Topics":
    "This section covers advanced use cases and optimizations.",
    //FAQs
    FAQs: "Frequently Asked Questions and troubleshooting tips.",
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => setSelectedSection(section)}
                className={`block text-left w-full py-2 px-4 rounded ${
                  selectedSection === section
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <header className="border-b pb-4 mb-8">
          <h1 className="text-3xl font-bold">{selectedSection}</h1>
        </header>

        <main className="prose max-w-full">
          <p>{content[selectedSection]}</p>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
