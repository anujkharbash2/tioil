import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, ExternalLink, Clock, Mail, Download } from 'lucide-react';

const Isbh2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const eventDetails = {
    title: 'International Symposia on Bone Health 2025',
    subtitle: null,
    date: 'Dec 17-19, 2025',
    venue: 'AIIMS, New Delhi, India',
    theme: null,
    registrationDeadline: null,
    abstractDeadline: null,
    regislink: 'https://tioil.aiims.edu/isbh2025/registration',
    poster: '/isbh2025poster1.avif'
  };

  const keyDates = [
    { event: 'Conference Dates', date: 'Dec 17,18 &19, 2025' }
  ];

  const tracks = [
    {
      title: 'Pre conference Workshop',
      description: null,
      topics: [null]
    },
    {
      title: 'Speaker session',
      description: null,
      topics: [null]
    },
    {
      title: 'Young- Scientist presentations',
      description: null,
      topics: [null]
    },
    {
      title: 'Travel Awards',
      description: null,
      topics: [null]
    },
    
  ];

  const confirmedSpeakers = [
    
    {
      name: 'Prof Rupesh K. Srivastava',
      affiliation: 'AIIMS, New Delhi, India',
      
      expertise: 'Osteoimmunology and Immunoporosis',
      image: '/drRks.avif'
    },
    
  ];

  const registrationFees = [
    {
      category: 'Faculty/Industry Professional',
      earlyBird: '₹5,000',
      regular: '₹10,000',
      international: '$200'
    },
    {
      category: 'PhD Students/Postdocs',
      earlyBird: '₹2500',
      regular: '₹5000',
      international: '$100'
    },
    {
      category: 'UG/PG Students',
      earlyBird: '₹1500',
      regular: '₹3000',
      international: '$50'
    }
  ];

  const schedule = [
    // {
    //   day: 'Day 1 - Dec 17, 2025',
    //   theme: null,
    //   events: [
    //     { time: '9:00-9:45', event: 'Registrations and Welcome session' },
        
    //   ]
    // },
    
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'program', label: 'Program' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'registration', label: 'Registration' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-aiims-blue to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" >
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Registration Open
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-blue-100 mb-6">{eventDetails.subtitle}</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-blue-100 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{eventDetails.venue}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.open(eventDetails.regislink, "_blank")}  className="px-8 cursor-pointer py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Register Now
              </button>
              <button onClick={() => window.open(eventDetails.poster, "_blank")} className="px-8 py-3 cursor-pointer border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
               Download first Poster
              </button>
            </div>
            <div className="text-center p-10">
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For sponsorship opportunities, 
                <a href="/contact" className="text-aiims-blue dark:text-blue-400 hover:underline ml-1">
                  contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 whitespace-nowrap font-medium text-sm border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-aiims-blue text-aiims-blue dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* main */}
            <div className="text-center mb-16" >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               More details to be announced soon!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                {/* Paragraph  */}
              </p>
            </div>

            {/* Key Dates */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Important Dates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyDates.map((item, index) => (
                  <div
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.event}
                    </h4>
                    <p className="text-aiims-blue dark:text-blue-400 font-medium">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Tracks */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Conference Tracks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {track.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {track.description}
                    </p>
                    {/* <ul className="space-y-1">
                      {track.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                          <span className="w-2 h-2 bg-aiims-blue dark:bg-blue-400 rounded-full mr-2"></span>
                          {topic}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Program Tab */}
      {activeTab === 'program' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Program Schedule
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Schedule will be announced soon!
              </p>
            </div>

            <div className="space-y-8">
              {schedule.map((day, dayIndex) => (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-aiims-blue dark:bg-blue-800 text-white p-6">
                    <h3 className="text-xl font-semibold">{day.day}</h3>
                    <p className="text-blue-100">{day.theme}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-aiims-blue dark:text-blue-400 w-24">
                              {event.time}
                            </span>
                            <span className="text-gray-900 dark:text-white">
                              {event.event}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



  {activeTab === 'speakers' && (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Speakers will be announced soon!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
           
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {confirmedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={speaker.image}
                  alt={`${speaker.name} - ${speaker.affiliation}`}
                  className="object-cover w-full md:w-48 h-64 md:h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
                />
                <div className="p-4 text-center md:text-left">
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {speaker.name}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {speaker.affiliation}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {speaker.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}



      {/* Registration Tab */}
      {activeTab === 'registration' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Registration Information
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Secure your spot at ISBH 2025 with early bird pricing
              </p>
            </div>

            {/* Registration Fees */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Registration Fees
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-aiims-blue dark:bg-blue-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-center">Early Bird<br/>(Before Oct 31)</th>
                      <th className="px-6 py-4 text-center">Regular<br/>(After Oct 31)</th>
                      <th className="px-6 py-4 text-center">International</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {registrationFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {fee.category}
                        </td>
                        <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-semibold">
                          {fee.earlyBird}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-900 dark:text-white">
                          {fee.regular}
                        </td>
                        <td className="px-6 py-4 text-center text-blue-600 dark:text-blue-400 font-semibold">
                          {fee.international}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Registration Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Registration Includes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Access to all scientific sessions',
                  'Conference materials and proceedings',
                  'Welcome reception and networking events',
                  'Daily refreshments and lunch',
                  'Certificate of participation',
                  'Access to exhibition and poster sessions',
                  'Free WiFi throughout the venue',
                  'Digital access to presentations'
                ].map((benefit) => (
                  <div className="flex items-center bg-green-50 dark:bg-green-900 rounded-lg p-4"
                  >
                    <Award className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Actions */}
            <div className="text-center">
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For sponsorship opportunities, 
                <a href="/contact" className="text-aiims-blue dark:text-blue-400 hover:underline ml-1">
                  contact us
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About ISBH 2025?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our organizing committee is here to help with any inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rupeshk@aiims.edu"
                className="inline-flex items-center px-8 py-3 bg-aiims-blue dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-aiims-blue dark:border-blue-400 text-aiims-blue dark:text-blue-400 rounded-lg font-semibold hover:bg-aiims-blue hover:text-white transition-colors duration-200"
              >
                Contact Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Isbh2025;