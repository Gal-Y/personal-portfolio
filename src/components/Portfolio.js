import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBookOpen,
  FaCertificate,
  FaCodeBranch,
  FaCube,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaLock,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deploymentFilters, projects } from '../data/projectData';

const certifications = [
  {
    title: 'AWS Certified Cloud Essentials',
    description: 'Earned in 2024. Demonstrates expertise in cloud fundamentals.',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    description:
      'Validates practical skills in designing secure, resilient, high-performing, and cost-optimized AWS architectures.',
  },
  {
    title: 'AWS Certified AI Practitioner',
    description:
      'Validates foundational knowledge of AI/ML concepts and practical application of AWS AI services and responsible AI principles.',
  },
];

const statusIcon = {
  live: FaGlobe,
  source: FaCodeBranch,
  offline: FaCodeBranch,
  private: FaLock,
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [deploymentFilter, setDeploymentFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (deploymentFilter === 'all') return projects;
    if (deploymentFilter === 'not-live') return projects.filter((project) => project.deploymentState !== 'live');
    return projects.filter((project) => project.deploymentState === deploymentFilter);
  }, [deploymentFilter]);

  const liveCount = projects.filter((project) => project.deploymentState === 'live').length;
  const privateCount = projects.filter((project) => project.deploymentState === 'private').length;

  return (
    <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-5 text-white sm:p-8">
      <div className="flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-300">Selected builds and experiments</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Portfolio</h1>
        </div>
        <p className="max-w-md text-sm text-[#aeb8d2]">
          Deployment labels are checked against the current public URLs, so live demos and source-only projects are clearly separated.
        </p>
      </div>

      <div className="mt-6 inline-flex rounded-xl border border-blue-300/25 bg-[#252d3e]/85 p-1">
        <button
          type="button"
          onClick={() => setActiveTab('projects')}
          aria-pressed={activeTab === 'projects'}
          className={`px-4 py-2 text-sm font-semibold sm:text-base ${
            activeTab === 'projects' ? 'pill-button pill-button-active' : 'pill-button'
          }`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('certs')}
          aria-pressed={activeTab === 'certs'}
          className={`ml-2 px-4 py-2 text-sm font-semibold sm:text-base ${
            activeTab === 'certs' ? 'pill-button pill-button-active' : 'pill-button'
          }`}
        >
          Certifications
        </button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {activeTab === 'projects' ? (
          <motion.div
            key="projects"
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="flex items-center text-left text-2xl font-bold sm:text-3xl">
                  <FaCube className="mr-3 text-xl text-blue-400 sm:text-2xl" /> Projects
                </h2>
                <p className="mt-2 text-left text-sm text-[#aeb8d2]">
                  {projects.length} projects · {liveCount} live · {privateCount} private
                </p>
              </div>

              <div className="deployment-filters" aria-label="Filter projects by deployment status">
                {deploymentFilters.map((filter) => (
                  <button
                    type="button"
                    key={filter.value}
                    onClick={() => setDeploymentFilter(filter.value)}
                    aria-pressed={deploymentFilter === filter.value}
                    className="deployment-filter"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const StatusIcon = statusIcon[project.deploymentState];

                  return (
                    <motion.article
                      layout
                      key={project.slug}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      whileHover={{ y: -7, scale: 1.012 }}
                      className="surface-card-soft interactive-card project-card group flex overflow-hidden rounded-2xl"
                    >
                      <div className="flex w-full flex-col">
                        <div className="project-card__media relative overflow-hidden">
                          <span className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-[#1f3d73]/90 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-blue-100">
                            {project.type}
                          </span>
                          <span className={`deployment-badge deployment-badge--${project.deploymentState}`}>
                            <StatusIcon aria-hidden="true" /> {project.deploymentLabel}
                          </span>
                          <img
                            src={project.image}
                            alt={`${project.title} interface`}
                            loading="lazy"
                            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.045]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522]/92 via-[#141d30]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-xs">
                              {project.techStack.map((tech) => (
                                <span key={`${project.title}-${tech}`} className="rounded-full border border-blue-200/25 bg-[#1e2f4f]/90 px-2 py-1 text-blue-100">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-4 text-left">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-bold text-white">{project.title}</h3>
                            {project.liveUrl && (
                              <FaExternalLinkAlt className="mt-1 shrink-0 text-xs text-blue-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                            )}
                          </div>
                          <p className="muted-text mt-2 text-sm leading-relaxed">{project.summary}</p>
                          <p className="deployment-detail mt-3">{project.deploymentDetail}</p>

                          <div className="mt-auto flex flex-wrap gap-2 pt-4">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card__link inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                              >
                                Live demo <FaArrowRight className="text-xs" aria-hidden="true" />
                              </a>
                            )}
                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-action-secondary"
                              >
                                <FaGithub aria-hidden="true" /> Source code
                              </a>
                            )}
                            {project.blogPath && (
                              <Link to={project.blogPath} className="project-action-secondary">
                                <FaBookOpen aria-hidden="true" /> Build notes
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="certifications"
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <h2 className="flex items-center text-left text-2xl font-bold sm:text-3xl">
              <FaCertificate className="mr-3 text-xl text-blue-400 sm:text-2xl" /> Certifications
            </h2>

            <div className="mt-5 space-y-4">
              {certifications.map((cert) => (
                <motion.article key={cert.title} whileHover={{ x: 4 }} className="surface-card-soft certification-card rounded-2xl p-5 text-left">
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <p className="muted-text mt-2">{cert.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
