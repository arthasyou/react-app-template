import React, { useState } from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa"; // 引入 react-icons 库中的图标

const TabBar: React.FC = () => {
  // 管理当前选中的 Tab
  const [activeTab, setActiveTab] = useState<string>("home");

  // 选项卡内容，使用图标和文字
  const renderContent = (tab: string) => {
    switch (tab) {
      case "home":
        return (
          <div className="text-center">
            <FaHome size={50} className="text-gray-700 mb-4" />
            <h2>Welcome to the Home Page</h2>
          </div>
        );
      case "search":
        return (
          <div className="text-center">
            <FaSearch size={50} className="text-gray-700 mb-4" />
            <h2>Search for your favorite items</h2>
          </div>
        );
      case "profile":
        return (
          <div className="text-center">
            <FaUser size={50} className="text-gray-700 mb-4" />
            <h2>View your profile details</h2>
          </div>
        );
      default:
        return <div>Welcome to the app</div>;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto h-screen flex flex-col">
      {/* Tab Content */}
      <div className="flex-1 p-4 bg-white shadow-lg">
        {renderContent(activeTab)}
      </div>

      {/* TabBar */}
      <div className="flex justify-around bg-gray-800 text-white py-3 rounded-t-lg fixed bottom-0 left-0 w-full">
        <button
          className={`flex-1 flex flex-col items-center justify-center py-2 focus:outline-none transition-colors ${
            activeTab === "home"
              ? "bg-gray-700"
              : "hover:bg-gray-700 active:bg-gray-600"
          }`}
          onClick={() => setActiveTab("home")}
        >
          <FaHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          className={`flex-1 flex flex-col items-center justify-center py-2 focus:outline-none transition-colors ${
            activeTab === "search"
              ? "bg-gray-700"
              : "hover:bg-gray-700 active:bg-gray-600"
          }`}
          onClick={() => setActiveTab("search")}
        >
          <FaSearch size={24} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button
          className={`flex-1 flex flex-col items-center justify-center py-2 focus:outline-none transition-colors ${
            activeTab === "profile"
              ? "bg-gray-700"
              : "hover:bg-gray-700 active:bg-gray-600"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <FaUser size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
