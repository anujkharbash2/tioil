import React from "react";
import { ArrowRight, Award, BookOpen, Users, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Rks = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12" style={{ backgroundColor: '#f5ecf2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section - Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6" style={{ color: '#7c3e65' }}>
              Dr. Rupesh K. Srivastava
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4" style={{ color: 'black' }}>
              Welcome to Translational Immunology, Osteoimmunology & Immunoporosis Lab group at AIIMS, New Delhi.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4" style={{ color: 'black' }}>
              During my doctoral research work form NCCS, Pune I got a glimpse of the very exciting and thrilling field of Immunology. This led me to further continue my research work in the field of Bone and Immunology at Columbia University Medical Centre, NY, USA and Roswell Park Cancer Institute (RPCI), New York, USA
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6" style={{ color: 'black' }}>
              After coming back to India in 2013 as an Assistant professor at Central University, Sagar (MP), and now at All India Institute of Medical Sciences (AIIMS), New Delhi, I am actively involved in deciphering this new field which is still in its very naive state. My research specifically focuses on the cellular and molecular interactions between the Immune and Bone systems i.e “Osteoimmunology” (Frontiers in Biosciences, 2018), a very recent branch of modern biology which specifically deals with the interplay between the immune cells (CD4, CD8 T cells, B cells, DCs, Macrophages, ILCs etc.) and bone cells (Osteoclast, Osteoblast & Osteocytes). During normal physiology both systems are at homeostasis but during an imbalance due to various stimuli (infection, autoimmunity, environment, ageing, hormones etc.), it leads to various inflammatory conditions such as Osteoarthritis, Rheumatoid Arthritis & Osteoporosis (viz. post-menopausal osteoporosis).
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6" style={{ color: 'black' }}>
              Thus, a molecular understanding of these interactions is at the heart of my research which would ultimately lead to discovery of novel therapeutics for various inflammatory bone conditions.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center text-aiims-blue dark:text-blue-400 font-semibold hover:underline"
              style={{ color: '#7c3e65' }}
            >
              Read Full Biography <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            
          </div>

          {/* Right Section - Photo + Research Excellence */}
          <div className="space-y-6">
            <img 
              src="/drRks.avif"
              alt="Dr. Rupesh Srivastava"
              className="rounded-2xl shadow-lg object-cover w-full max-h-96"
            />

            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#eee8d8', color: 'black' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#7c3e65' }}>Education</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3" style={{ color: '#7c3e65' }} />
                  <span>Post-Doctoral Scientist, Columbia University, New York, USA</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3" style={{ color: '#7c3e65' }} />
                  <span>Resident Affiliate, Roswell Park Cancer Institute, New York, USA</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" style={{ color: '#7c3e65' }} />
                  <span>Ph.D., NCCS, Pune, India</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 mr-3" style={{ color: '#7c3e65' }} />
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
