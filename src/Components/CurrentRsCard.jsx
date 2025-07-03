import React from "react";
import { Linkedin, BookOpen } from "lucide-react";

const CurrentRsCard = ({ scholar }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">

      <a href={scholar.linkedin} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img src={scholar.photo}
        alt={scholar.name} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{scholar.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{scholar.program}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{scholar.post}</p>
    </div>
      </a>
    </div>
  );
};

export default CurrentRsCard;
