import React from 'react';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#eee8d8', color: 'black' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-clip-text text-transparent" style={{ color: '#7c3e65' }}>
              TIOIL : 
              </div>
            </div>
            <p className="max-w-md" style={{ color: 'black' }}>
              Translational Immunology, Osteoimmunology & Immunoporosis Lab - The birth place of "Immunoporosis" : Immunology of Osteoporosis
              <br />ICMR-Collaborating Centre of Excellence (ICMR-CCoE) on Bone Health
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#7c3e65' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/team" className="hover:text-white transition-colors" style={{ color: 'black' }}>Reseach Team</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors" style={{ color: 'black' }}>Publications</a></li>
              <li><a href="/isbh2025" className="hover:text-white transition-colors" style={{ color: 'black' }}>ISBH 2025</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors" style={{ color: 'black' }}>Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#7c3e65' }}>Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2" style={{ color: 'black' }}>
                <Mail className="h-4 w-4" style={{ color: '#7c3e65' }} />
                <span>rupeshk@aiims.edu</span>
              </div>
              
              <div className="flex items-center space-x-2" style={{ color: 'black' }}>
                <MapPin className="h-4 w-4" style={{ color: '#7c3e65' }} />
                <span>Department of Biotechnology, AIIMS, New Delhi 110029</span>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center" style={{ borderColor: '#7c3e65' }}>
      <p className="text-sm" style={{ color: 'black' }}>
        © 2025 TIOIL, All India Institute of Medical Sciences | All rights reserved.
      </p>
      <div className="flex flex-row space-x-2 mt-4 sm:mt-0 text-sm" style={{ color: 'black' }}>
        <p className="flex text-[#7c3e65] items-center">
          Designed and Developed 
          by
          <a
            href="https://www.linkedin.com/in/anujkharbash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#7c3e65] ml-1"
            
          >
            Anuj Kumar
          </a>
        </p>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;