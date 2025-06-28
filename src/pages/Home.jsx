import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Microscope, Users, BookOpen, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';



const Home = () => {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <img src="/logo.avif" alt="TIOIL Logo" className="h-36 animate-bounce-slow" />
              <img src="/aiimslogo.avif" alt="AIIMS Logo" className="h-36 animate-bounce-slow" />
            </div>


            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
              Translational Immunology and<br />
              <span className="text-blue-200">Osteoimmunology Lab</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            ICMR-Collaborating Centre of Excellence (ICMR-CCoE) on Bone Health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/research-openings"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
