import React from "react";
import { ArrowRight, Award, BookOpen, Users, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Rks = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section - Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Dr. Rupesh K. Srivastava
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Dr. Rupesh K. Srivastava is an Associate Professor, Department of Biotechnology, AIIMS and Adjunct Faculty (CCRF, AIIMS), New Delhi. He is a translational researcher with expertise in Cellular and Molecular Immunology.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              He earned his Ph.D. from NCCS Pune and received post-doctoral training at Columbia University and Roswell Park Cancer Institute, New York. 
              Known for proposing the novel concept of “Immunoporosis,” his lab at AIIMS (TIOIL) focuses on immune-bone system interactions in health and disease.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              He has received numerous national and international awards, handled 20+ major research projects (₹24+ Cr), published 100+ papers, and currently leads a clinical trial on probiotics and osteoporosis.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center text-aiims-blue dark:text-blue-400 font-semibold hover:underline"
            >
              Read Full Biography <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* Research Interests */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Research Interests</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Immunology</li>
                <li>Bone Biology</li>
                <li>Autoimmunity</li>
                <li>Probiotics</li>
              </ul>
            </div>  
          </div>

          {/* Right Section - Photo + Research Excellence */}
          <div className="space-y-6">
            <img 
              src="/drRks.avif"
              alt="Dr. Rupesh Srivastava"
              className="rounded-2xl shadow-lg object-cover w-full max-h-96"
            />

            <div className="bg-gradient-to-br from-blue to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-blue-200" />
                  <span>PPost-Doctoral Scientist, Columbia University, New York, USA</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3 text-blue-200" />
                  <span>Resident Affiliate, Roswell Park Cancer Institute, New York, USA</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-blue-200" />
                  <span>Ph.D., NCCS, Pune, India</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-blue-200" />
                  <span>MBA, Symbiosis International University, Pune, India</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rks;
