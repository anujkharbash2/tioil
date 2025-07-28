import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import NewsTicker from './NewsTicker.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5ecf2] text-white">
        <Navbar />
        <div className="pt-16"> {/* adjust depending on your nav height */}
        <NewsTicker />
        </div>
        
        
        {/* Main content area */}
      <main >
        {children}
      </main> 
     
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Layout;