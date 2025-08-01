import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Rks from '../Components/rks'; // Importing the rupesh component



const Home = () => {

  return (
    <div className="min-h-screen bg-[#7c3e65] transition-colors duration-300">
      

      {/* Hero Section */}
      <section className="relative py-20 lg:py-12 bg-[#7c3e65] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <img src="/logo.avif" alt="TIOIL Logo" className="h-36 " />
              <img src="/aiimslogo.avif" alt="AIIMS Logo" className="h-36 hidden md:block" />
            </div>


            <h1 className="text-4xl md:text-6xl font-bold text-[#eee8d8] mb-6 animate-pulse">
            Translational Immunology, Osteoimmunology <br />
              <span className="text-blue-200">& Immunoporosis Lab
              (TIOIL)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            ICMR-Collaborating Centre of Excellence (ICMR-CCoE) on Bone Health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-[#eee8d8] text-[#7c3e65] rounded-lg font-semibold hover:bg-[#7c3e65]  hover:border-2 hover:border-[#eee8d8] hover:text-[#eee8d8] transition-colors duration-200"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/research-openings"
                className="inline-flex items-center px-8 py-3 border-2 border-[#eee8d8] text-[#eee8d8] rounded-lg font-semibold hover:bg-[#eee8d8] hover:text-[#7c3e65] transition-colors duration-200"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* About Dr. Rupesh K. Srivastava Section */}
      
      <Rks/>

     
     
        
    
    </div>
  );
};

export default Home;
