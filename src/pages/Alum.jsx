import React from "react";
import { GraduationCap, Briefcase, Mail, ExternalLink } from "lucide-react";

// Assuming currentRsData is correctly imported from its path
import { Alumni } from "../data/Alumni";


// Custom SVG Icon Components... (no changes here)
const ResearchGateIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M19.586 0H4.414C1.977 0 0 1.977 0 4.414v15.172C0 22.023 1.977 24 4.414 24h15.172C22.023 24 24 22.023 24 19.586V4.414C24 1.977 22.023 0 19.586 0zM8.063 18.963c-1.12 0-2.031-.911-2.031-2.031s.911-2.031 2.031-2.031 2.031.911 2.031 2.031-.911 2.031-2.031 2.031zm5.847 0c-1.12 0-2.031-.911-2.031-2.031s.911-2.031 2.031-2.031 2.031.911 2.031 2.031-.911 2.031-2.031 2.031zm2.09-9.781H8v1.71h7.96c.345 0 .625-.28.625-.625V9.807c0-.345-.28-.625-.625-.625z"/> </svg> );
const GoogleScholarIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/> </svg> );
const ORCIDIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.322 5.016h-3.922V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.303 3.588-3.722 0-2.297-1.303-3.722-3.634-3.722h-2.251z"/> </svg> );
const LinkedInIcon = () => ( <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> </svg> );


// Add a default empty array for the 'research' prop
const CurrentResearcher = ({ research }) => {
  return (
    <div className="min-h-screen bg-[#f5ecf2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#7c3e65]">
            Current Researchers
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Name and Department */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{post.name}</h3>
                    <p className="text-sm text-[#7c3e65] font-medium">{post.department}</p>
                  </div>

                  {/* Degree */}
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{post.degree}</span>
                  </div>

                  {/* Position */}
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{post.position}</span>
                  </div>

                  {/* Specialization */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 italic">{post.specialization}</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center mb-4">
                    <Mail className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                    <a
                      href={`mailto:${post.email}`}
                      className="text-sm text-[#7c3e65] hover:text-blue-800 transition-colors duration-200"
                    >
                      {post.email}
                    </a>
                  </div>

                  {/* Academic Links */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    {post.researchGate && (
                      <a
                        href={post.researchGate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-emerald-600 transition-colors duration-200"
                        title="ResearchGate"
                      >
                        <ResearchGateIcon />
                      </a>
                    )}
                    {post.googleScholar && (
                      <a
                        href={post.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                        title="Google Scholar"
                      >
                        <GoogleScholarIcon />
                      </a>
                    )}
                    {post.orcid && (
                      <a
                        href={post.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                        title="ORCID"
                      >
                        <ORCIDIcon />
                      </a>
                    )}
                    {post.linkedin && (
                      <a
                        href={post.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
                        title="LinkedIn"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    <a
                      href={`mailto:${post.email}`}
                      className="text-gray-500 hover:text-red-600 transition-colors duration-200 ml-auto"
                      title="Send Email"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const Alum = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f5ecf2]">
      
      <CurrentResearcher research={Alumni} />
    </section>
  );
};

export default Alum;