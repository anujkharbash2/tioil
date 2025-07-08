import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/notfound.jsx';
import CurrentRs from "./pages/CurrentRs";
import Publications from './pages/Publications.jsx';
import Isbh2025 from './pages/ISBH2025.jsx';
import Updates from './pages/Updates.jsx';
import Careers from './pages/careers.jsx';
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router basename="/">
      <Layout>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/current-rs" element={<CurrentRs />} />
           <Route path="/publications" element={<Publications />} />
          <Route path="/isbh2025" element={<Isbh2025 />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/careers" element={<Careers />} />
            

           
           <Route path="*" element={<NotFound />} />
      
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;