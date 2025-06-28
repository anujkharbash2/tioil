import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Calendar, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {



  return (
    <div className="min-h-screen bg-gray-900 max-w-7xl mx-auto  p-10 md:p-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact info 1 */}
        <div className="space-y-4 text-lg border-r border-gray-100 pr-8 text-right ">
        <p> <strong>Conatct Person:</strong></p>
          <p>Dr. Rupesh K. Srivastava</p>
          <p><strong>Email:</strong> rupeshk@aiims.edu</p>
          <div className="flex gap-4 mt-4 items-center justify-end">
            <a href="#" target='_blank' className="hover:text-blue-500"><Instagram/></a>
            <a href="#" target='_blank' className="hover:text-blue-500">< Github/></a>
            <a href="#" target='_blank' className="hover:text-blue-500 linkedin"><Linkedin /></a>
          </div>
        </div>
        
       

          
       

        {/* Contact Info 2 */}
        <div className="space-y-4 text-lg">
          <p> <strong>Address:</strong></p>
         
          <p> Department of Biotechnology </p>
          <p>All India Institute of Medical Sciences (AIIMS)</p>
          <p>Ansari Nagar, New Delhi - 110029</p>

          <div className="flex gap-4 mt-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;