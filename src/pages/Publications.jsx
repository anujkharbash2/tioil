import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ExternalLink, Calendar, Users } from 'lucide-react';
import publications from '../data/publicationsData'; 

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(publications.map(p => p.category))];
  const years = ['all', ...Array.from(new Set(publications.map(p => p.year.toString()))).sort((a, b) => b - a)];

  const filteredPublications = publications.filter(pub => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch = [pub.title, pub.authors, pub.journal].some(field =>
      field.toLowerCase().includes(lowerSearch)
    );
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;

    return matchesSearch && matchesYear && matchesCategory;
  });

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const averageImpact = publications.reduce((sum, pub) => sum + pub.impact, 0) / publications.length;

  return (
    <div className="min-h-screen bg-[#f5ecf2] transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-[#f5ecf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-black"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7c3e65]">Publications</h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Explore our research contributions to the field of translational immunology and osteoimmunology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Search and Filters */}
      <section className="py-12 bg-[#f5ecf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f5ecf2] rounded-xl p-6 mb-8">
            <div className="flex flex-col  md:flex-row gap-4">
              <div className="flex-1 border-2 border-[#7c3e65]  rounded-xl relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[#f5ecf2]  rounded-lg focus:ring-2 focus:ring-[#7c3e65] focus:border-transparent bg-[#f5ecf2] text-black"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 border border-[#f5ecf2] rounded-lg focus:ring-2 focus:ring-[#7c3e65] focus:border-transparent bg-[#f5ecf2] text-black"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-[#f5ecf2] rounded-lg focus:ring-2 ffocus:ring-[#7c3e65] focus:border-transparent bg-[#f5ecf2] text-black"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#eee8d8] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-[#7c3e65] mb-2 leading-tight">
                        {publication.title}
                      </h3>
                      <span className="bg-[#7c3e65] text-white px-3 py-1 rounded-full text-xs font-medium ml-4">
                        {publication.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-black mb-3">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {publication.authors}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {publication.year}
                      </span>
                    </div>

                    <div className="text-black  mb-4">
                      <strong className="text-[#7c3e65]">{publication.journal}</strong>
                    </div>

                    <p className="text-black  text-sm mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center bg-[#f5ecf2] text-[#7c3e65] px-2 py-1 rounded">
                        IF: {publication.impact}
                      </span>
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#7c3e65]  hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        DOI: {publication.doi}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-[#7c3e65] mx-auto mb-4" />
              <p className="text-xl text-black ">
                No publications found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
