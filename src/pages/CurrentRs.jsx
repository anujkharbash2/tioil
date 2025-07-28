import React from "react";
import CurrentRsCard from "../Components/CurrentRsCard";
import { currentRsData } from "../data/CurrentRsData";

const CurrentRs = () => {
  return (
    <div className="min-h-screen bg-[#f5ecf2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#7c3e65]">
            Current Researchers
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentRsData.map((scholar) => (
            <CurrentRsCard key={scholar.id} scholar={scholar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentRs;
