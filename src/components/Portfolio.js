import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaCertificate } from 'react-icons/fa';

import ProjectImage1 from '../assets/carnation.png';
import ProjectImage2 from '../assets/currency.png';
import ProjectImage3 from '../assets/personal.png';
import ProjectImage4 from '../assets/splitright.png';
import ProjectImage5 from '../assets/sushi-invoice.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'CarnationJoyCare Website',
      image: ProjectImage1,
      link: 'https://carnationjoycare.com.au',
      techStack: ['AWS', 'HTML', 'CSS', 'JavaScript'],
      type: 'Website',
    },
    {
      title: 'Currency Converter',
      image: ProjectImage2,
      link: 'https://d6kev5zk7z0ut.cloudfront.net',
      techStack: ['AWS S3', 'CloudFront', 'JavaScript', 'Chart.js', 'Frankfurter API'],
      type: 'Application',
    },
    {
      title: 'Personal Portfolio',
      image: ProjectImage3,
      link: 'https://www.galen-yuan.com/',
      techStack: ['AWS Amplify', 'React', 'JavaScript', 'Tailwind CSS'],
      type: 'Portfolio',
    },
    {
      title: 'Expense Splitter',
      image: ProjectImage4,
      link: 'http://aeba73389ac9f440ab6b82b03c595b30-8e2a78f55f0297b7.elb.ap-southeast-2.amazonaws.com/',
      techStack: ['AWS EKS', 'React', 'Python', 'Flask'],
      type: 'Application',
    },
    {
      title: 'Sushi-Invoice',
      image: ProjectImage5,
      link: 'https://d31n0bqlviw94c.cloudfront.net',
      techStack: ['React', 'Node.js', 'API Gateway', 'Lambda', 'DynamoDB'],
      type: 'Application',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Essentials',
      description: 'Earned in 2024. Demonstrates expertise in cloud fundamentals.',
    },
    {
      title: 'Incoming: AWS Certified Solutions Architect - Associate',
      description:
        'Building toward a formal validation of secure, cost-effective, and scalable cloud architecture design skills.',
    },
  ];

  return (
    <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-5 text-white sm:p-8">
      <h1 className="text-left text-3xl font-bold sm:text-4xl">Portfolio</h1>

      <div className="mt-6 inline-flex rounded-xl border border-blue-300/25 bg-[#252d3e]/85 p-1">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 text-sm font-semibold sm:text-base ${
            activeTab === 'projects' ? 'pill-button pill-button-active' : 'pill-button'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('certs')}
          className={`ml-2 px-4 py-2 text-sm font-semibold sm:text-base ${
            activeTab === 'certs' ? 'pill-button pill-button-active' : 'pill-button'
          }`}
        >
          Certifications
        </button>
      </div>

      {activeTab === 'projects' ? (
        <div className="mt-8">
          <h2 className="flex items-center text-left text-2xl font-bold sm:text-3xl">
            <FaCube className="mr-3 text-xl text-blue-400 sm:text-2xl" /> Projects
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -4, scale: 1.01 }}
                className="surface-card-soft interactive-card overflow-hidden rounded-2xl"
              >
                <div className="relative">
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-[#1f3d73]/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-blue-100">
                    {project.type}
                  </span>
                  <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522]/85 via-[#141d30]/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-xs">
                      {project.techStack.map((tech) => (
                        <span key={`${project.title}-${tech}`} className="rounded-full border border-blue-200/25 bg-[#1e2f4f]/85 px-2 py-1 text-blue-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 text-left">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Project
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <h2 className="flex items-center text-left text-2xl font-bold sm:text-3xl">
            <FaCertificate className="mr-3 text-xl text-blue-400 sm:text-2xl" /> Certifications
          </h2>

          <div className="mt-5 space-y-4">
            {certifications.map((cert) => (
              <article key={cert.title} className="surface-card-soft rounded-2xl p-5 text-left">
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="muted-text mt-2">{cert.description}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
