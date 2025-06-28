import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, BookOpen, Link } from 'lucide-react';

const NewsTicker = () => {
  const newsItems = [
    
    {
      icon: <Calendar className="h-4 w-4" />,
      text: "ISBH 2025 conference registration now open - Join us in New Delhi",
      link: "#"
    }
  ];

  return (
    <div className="bg-gray-800 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4">
          <span className="bg-white text-blue-800 px- py-1 rounded text-xs font-semibold">
            LATEST NEWS
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                {item.icon}
                <span className="text-sm"><a href={item.link} target='_blank'>{item.text}</a></span>
                
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
