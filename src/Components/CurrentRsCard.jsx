import React from "react";
import { Linkedin, BookOpen,GraduationCap } from "lucide-react";

const CurrentRsCard = ({ scholar }) => {
  return (
    <div className="bg-[#f5ecf2] rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
      <div className="flex flex-col items-center bg-[#eee8d8] border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl">
        <img src={scholar.photo}
          alt={scholar.name} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7c3e65]">{scholar.name}</h5>
          <p className="mb-3 font-normal text-black">{scholar.program}</p>
          <p className="text-sm text-black">{scholar.post}</p>
          <div className="flex justify-center space-x-4 mt-2">
            {scholar.linkedin && (
              <a href={scholar.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} color="#7c3e65" />
              </a>
            )}
            {scholar.scholarProfile && (
              <a href={scholar.scholarProfile} target="_blank" rel="noopener noreferrer">
                <GraduationCap size={24} color="#7c3e65" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRsCard;
