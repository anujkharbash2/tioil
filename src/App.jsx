import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/notfound.jsx';


function App() {
  return (
    <Router basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
      
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;