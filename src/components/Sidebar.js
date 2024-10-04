import React from 'react';
import { FaHome, FaCalculator, FaDatabase, FaChartLine } from 'react-icons/fa';  // Icons importieren

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-6 fixed">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-6">
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaHome className="mr-3" /> Dashboard
        </li>
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaChartLine className="mr-3" /> Staking Providers
        </li>
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaCalculator className="mr-3" /> Staking Calculator
        </li>
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaDatabase className="mr-3" /> Data API
        </li>
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaChartLine className="mr-3" /> Liquid Staking
        </li>
        <li className="hover:text-indigo-500 cursor-pointer flex items-center">
          <FaChartLine className="mr-3" /> Active Staking
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

