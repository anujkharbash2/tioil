// pages/Careers.jsx

import React from "react";
import openPositions from "../data/openPositionsData"; 
const OpenPositionsTable = ({ positions }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-4 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Open Positions
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse open job opportunities at TIOIL.
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-4 py-3">Position</th>
          <th className="px-4 py-3">Last Date</th>
          <th className="px-4 py-3 text-right">Notification</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((pos, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {pos.position}
            </td>
            <td className="px-4 py-4 whitespace-nowrap">{pos.lastDate}</td>
            <td className="px-4 py-4 text-right">
              <a
                href={pos.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

const Careers = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Careers at TIOIL
      </h2>
      <OpenPositionsTable positions={openPositions} />
    </section>
  );
};

export default Careers;
