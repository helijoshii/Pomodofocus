import React from "react";

const SettingsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-md relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <p className="text-lg">Do you want to receive notifications?</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-2">
            Save
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
