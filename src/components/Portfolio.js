import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaCertificate } from 'react-icons/fa';

// Import your project images
import ProjectImage1 from '../assets/carnation.png';
import ProjectImage2 from '../assets/currency.png';
import ProjectImage3 from '../assets/personal.png';
import ProjectImage4 from '../assets/splitright.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'CarnationJoyCare Website',
      image: ProjectImage1,
      link: 'https://carnationjoycare.com.au',
      techStack: ['AWS, HTML, CSS, JavaScript'],
      type: 'Website',
    },
    {
      title: 'Currency Converter',
      image: ProjectImage2,
      link: 'http://13.236.94.102',
      techStack: ['AWS EC2, Python, JavaScript, CSS'],
      type: 'Application',
    },
    {
      title: 'Personal Portfolio',
      image: ProjectImage3,
      link: 'https://www.galen-yuan.com/',
      techStack: ['AWS Amplify, React, JavaScript, CSS Tailwind'],
      type: 'Portfolio',
    },
    {
      title: 'Expense Splitter',
      image: ProjectImage4,
      link: 'http://aeba73389ac9f440ab6b82b03c595b30-8e2a78f55f0297b7.elb.ap-southeast-2.amazonaws.com/',
      techStack: ['AWS Kubernetes Service, React, JavaScript, Python, Flask'],
      type: 'Application',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Essentials',
      description: 'Earned in 2024. Demonstrates expertise in designing cloud fundamentals.',
    },
    {
      title: 'Incoming... AWS Certified Solutions Architect - Associate',
      description: 'Demonstrating foundational qualification that validates the ability to design secure, cost-effective, and scalable cloud architectures.',
    },
  ];

  return (
    <div className="bg-[#23262b] text-white p-4 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-left">Portfolio</h1>

      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            activeTab === 'projects'
              ? 'bg-blue-600 text-white'
              : 'bg-[#2e2f36] text-[#9a9da3] hover:text-blue-500'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('certs')}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            activeTab === 'certs'
              ? 'bg-blue-600 text-white'
              : 'bg-[#2e2f36] text-[#9a9da3] hover:text-blue-500'
          }`}
        >
          Certifications
        </button>
      </div>

      {/* Projects Section */}
      {activeTab === 'projects' ? (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left flex items-center">
            <FaCube className="text-blue-500 mr-4 text-xl sm:text-2xl" /> Projects
          </h2>

          {/* Grid now always displays one column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="border border-gray-600 rounded-2xl p-4 relative transition-transform"
              >
                {/* Project Tag */}
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
                  Project
                </div>

                {/* Image Container with Hover Effect */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay Showing Tech Stack */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="text-black text-sm space-y-1 text-center">
                      <h4 className="font-bold text-md mb-2">Tech Stack</h4>
                      <ul>
                        {project.techStack?.map((tech, i) => (
                          <li key={i} className="text-black-300">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 text-left">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      {project.type}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left flex items-center">
            <FaCertificate className="text-blue-500 mr-4 text-xl sm:text-2xl" /> Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-600 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-[#9a9da3]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
