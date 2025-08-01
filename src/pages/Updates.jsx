import React, { useState } from 'react';
import { BookOpen, Search, ExternalLink, Calendar, Users } from 'lucide-react'; 
import updatesData from '../data/updatesData'; // Assuming you have a data file for updates


const Updates = () => {

  return (
    <div className="min-h-screen bg-[#f5ecf2] transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-[#f5ecf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7c3e65]">Latest Updates</h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      
      <section className="py-12 bg-[#f5ecf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Publications List */}
          <div className="space-y-6">
            {updatesData.map((updates ) => (
              <div className="bg-[#eee8d8] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-[#7c3e65] mb-2 leading-tight">
                        {updates.title}
                      </h3>
                      <span className="bg-[#7c3e65] text-white px-3 py-1 rounded-full text-xs font-medium ml-4">
                        {updates.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-black mb-3">
                      
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {updates.date}
                      </span>
                    </div>

                    

                    <p className="text-black  text-sm mb-4 leading-relaxed">
                     {updates.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                    
                      <a
                        href={updates.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#7c3e65]  hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View more
                      </a>
                      <a
                        href={updates.register}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#7c3e65]  hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Updates;
