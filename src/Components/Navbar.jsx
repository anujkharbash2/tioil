import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // State to manage which dropdown is open
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleDropdownClick = (name) => {
    setIsDropdownOpen(isDropdownOpen === name ? null : name); // Toggle dropdown visibility
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Updates', path: '/updates' },
    { name: 'Publications', path: '/publications' },
    {
      name: 'Research Team',
      dropdown: true,
      subItems: [
        { name: 'Current Reseachers', path: '/current-rs' },
        { name: 'Alumni', path: '/alumni' },
      ],
    },
    {
      name: 'Conferences',
      dropdown: true,
      subItems: [
        { name: 'ISBH 2025', path: '/isbh2025' },
        { name: 'ISBH 2024', path: '/isbh2024' },
      ],
    },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#eee8d8] backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.avif" className="h-15" alt="TIOIL Logo" />
            <img src="/aiimslogo.avif" className="h-15" alt="AIIMS Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              TIOIL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-gray-700 hover:bg-[#7c3e65] hover:text-white ${
                        isDropdownOpen === item.name || item.subItems.some((i) => isActive(i.path))
                          ? 'bg-[#7c3e65] text-white shadow-lg shadow-[#7c3e65]'
                          : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          isDropdownOpen === item.name ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-40 bg-[#eee8d8] text-gray-700 rounded-md shadow-lg transition-opacity duration-200 z-50 ${isDropdownOpen === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsDropdownOpen(null)} // Close dropdown on item click
                          className={`block px-4 py-2 text-sm hover:bg-[#7c3e65] hover:text-white ${
                            isActive(sub.path) ? 'bg-[#7c3e65] text-white' : ''
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-gray-700 hover:bg-[#7c3e65] hover:text-white ${
                      isActive(item.path)
                        ? 'bg-[#7c3e65] text-white shadow-lg shadow-[#7c3e65]'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-[#7c3e65] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#eee8d8] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#7c3e65] hover:text-white"
                  >
                    {item.name}
                  </button>
                  {isDropdownOpen === item.name &&
                    item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)} // Close mobile menu on item click
                        className={`ml-4 block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-[#7c3e65] hover:text-white ${
                          isActive(sub.path)
                            ? 'bg-[#7c3e65] text-white shadow shadow-[#7c3e65]'
                            : ''
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close mobile menu on item click
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#7c3e65] hover:text-white ${
                    isActive(item.path)
                      ? 'bg-[#7c3e65] text-white shadow-lg shadow-[#7c3e65]'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
