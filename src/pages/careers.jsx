// pages/Careers.jsx

import React from "react";
import { Search, MapPin, Clock, Users, GraduationCap, Mail, Phone, Globe, Filter, X, Calendar, DollarSign, User } from 'lucide-react';
import openPositions from "../data/openPositionsData"; 
const OpenPositionsTable = ({ positions }) => {
  return (



    <div className="overflow-x-auto shadow-md rounded-lg">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#eee8d8] border-l-4 border-[#7c3e65] p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-[#7c3e65]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-[#7c3e65] mb-2">Important Information</h3>
              <ul className="text-[#7c3e65] space-y-1">
                <li>• Only shortlisted candidates will be invited for an interview</li>
                <li>• Interviews will be conducted in person only</li>
                <li>• There is no provision of TA/DA for the interview</li>
                <li>•No enquiries shall be entertained in this regard after the due date.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>


  

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-8">
          {positions.map((pos, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col xl:flex-row xl:gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#7c3e65] mb-4">{pos.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{pos.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Location</div>
                            <div className="text-gray-600">{pos.location}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Duration</div>
                            <div className="text-gray-600">{pos.duration}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Users className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Principal Investigator</div>
                            <div className="text-gray-600">{pos.professor}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <User className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Age Limit</div>
                            <div className="text-gray-600">{pos.ageLimit}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <DollarSign className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Salary</div>
                            <div className="text-gray-600">{pos.salary}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-[#7c3e65] mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-900">Application Deadline</div>
                            <div className="text-red-600 font-semibold">{pos.applicationDeadline}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Eligibility & Requirements:</h4>
                      <ul className="space-y-2">
                        {pos.eligibility.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-[#7c3e65] mr-3 mt-1 flex-shrink-0">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="xl:w-80 xl:flex-shrink-0">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">How to Apply</h4>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center mb-2">
                            <Mail className="h-5 w-5 text-[#7c3e65] mr-2" />
                            <span className="font-semibold text-gray-900">Email Application on both</span>
                          </div>
                          <a 
                            href="mailto:rupeshk@aiims.edu,tioil@aiims.edu" subject="Application for Project Research Scientist-II (Non-Medical)"
                            className="text-[#7c3e65] hover:text-green-700 transition-colors font-medium break-all"
                          >
                            rupeshk@aiims.edu <span className="text-black">and</span> tioil@aiims.edu 
                          </a> 
                        </div>
                        
                        <div className="text-sm text-gray-600 space-y-2">
                          <p className="font-semibold">Required Documents:</p>
                          <ul className="space-y-1 text-xs">
                            <li>• Detailed CV/Resume</li>
                            <li>• SOP</li>
                            <li>• Experience certificates</li>
                            <li>• Age proof</li>
                            <li>• Educational qualification certificates</li>
                          </ul>
                          <p className="font-semibold">Important notes:</p>
                          <ul className="space-y-1 text-xs">
                            <li>• Merge all documents into one single PDF file.</li>
                            <li>• Use the following subject line in your email: <br />
                            “Application for Project Research Scientist-II (Non-Medical)”</li>
                            <li>• Send the merged PDF via email to both of the email addresses: rupeshk@aiims.edu and tioil@aiims.edu</li>
                          </ul>
                          
                        </div>
                      </div>
                      
                      <button  
                        onClick={() => window.location.href = `# `}
                        className="w-full mt-6 bg-[#7c3e65] text-white px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-[#7c3e65] hover:border-2 hover:border-[#7c3e65] transition-colors shadow-md hover:shadow-lg"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </section>






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
