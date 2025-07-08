import React from 'react';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-white bg-clip-text text-transparent">
              TIOIL : 
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Translational Immunology, Osteoimmunology & Immunoporosis Lab - The birth place of "Immunoporosis" : Immunology of Osteoporosis
              <br />ICMR-Collaborating Centre of Excellence (ICMR-CCoE) on Bone Health
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/team" className="text-gray-400 hover:text-white transition-colors">Reseach Team</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Publications</a></li>
              <li><a href="/isbh2025" className="text-gray-400 hover:text-white transition-colors">ISBH 2025</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>rupeshk@aiims..edu</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Department of Biotechnology, AIIMS, New Delhi 110029</span>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        © 2025 TIOIL, All India Institute of Medical Sciences | All rights reserved.
      </p>
      <div className="flex flex-row space-x-2 mt-4 sm:mt-0 text-sm text-gray-400">
        <p className="flex items-center">
          Designed and Developed with <Heart className="h-5 w-5 text-red-500 mx-1" />
          by{' '}
          <a
            href="https://www.linkedin.com/in/anujkharbash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1"
          >
            Anuj Kumar
          </a>{' '}
        </p>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;