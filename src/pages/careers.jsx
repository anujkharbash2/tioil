// pages/Careers.jsx

import React from "react";
import openPositions from "../data/openPositionsData"; 
const OpenPositionsTable = ({ positions }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full text-sm text-left text-black">
      <caption className="p-4 text-lg font-semibold text-left text-[#7c3e65] bg-[#eee8d8]">
        Open Positions
        <p className="mt-1 text-sm font-normal text-black">
          Browse open job opportunities at TIOIL.
        </p>
      </caption>
      <thead className="text-xs  uppercase bg-[#f5ecf2] text-black">
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
            className="bg-[#eee8d8] border-[#f5ecf2]"
          >
            <td className="px-4 py-4 font-medium whitespace-nowrap text-black">
              {pos.position}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-black">{pos.lastDate}</td>
            <td className="px-4 py-4 text-right">
              <a
                href={pos.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#7c3e65] hover:underline"
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
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f5ecf2]">
      <h2 className="text-3xl font-bold text-[#7c3e65] mb-6">
        Careers at TIOIL
      </h2>
      <OpenPositionsTable positions={openPositions} />
    </section>
  );
};

export default Careers;
