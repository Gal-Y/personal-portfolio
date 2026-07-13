import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projectData';

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-6 text-left text-white sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-300">Project notes</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Project not found</h1>
        <Link to="/blog" className="project-action-secondary mt-6 inline-flex">
          <FaArrowLeft aria-hidden="true" /> Back to blog
        </Link>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <article className="surface-card project-case-study mx-auto w-full max-w-screen-lg overflow-hidden rounded-3xl text-white">
      <div className="project-case-study__hero">
        <img src={project.image} alt={`${project.title} interface`} />
        <div className="project-case-study__overlay" />
        <div className="project-case-study__hero-copy">
          <Link to="/blog" className="project-case-study__back">
            <FaArrowLeft aria-hidden="true" /> Blog
          </Link>
          <p>{caseStudy.eyebrow}</p>
          <h1>{project.title}</h1>
          <span className={`deployment-badge deployment-badge--${project.deploymentState} project-case-study__status`}>
            {project.deploymentLabel}
          </span>
        </div>
      </div>

      <div className="project-case-study__body">
        <motion.p
          className="project-case-study__intro"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {caseStudy.intro}
        </motion.p>

        <div className="project-case-study__meta">
          <div>
            <span>Deployment</span>
            <strong>{project.deploymentLabel}</strong>
            <small>{project.deploymentDetail}</small>
          </div>
          <div>
            <span>Stack</span>
            <div className="project-case-study__chips">
              {project.techStack.map((tech) => <small key={tech}>{tech}</small>)}
            </div>
          </div>
        </div>

        <div className="project-case-study__grid">
          <section>
            <p className="project-case-study__number">01</p>
            <h2>The problem</h2>
            <p>{caseStudy.problem}</p>
          </section>
          <section>
            <p className="project-case-study__number">02</p>
            <h2>The approach</h2>
            <p>{caseStudy.approach}</p>
          </section>
        </div>

        <section className="project-case-study__outcomes">
          <p className="project-case-study__number">03</p>
          <h2>What the build demonstrates</h2>
          <div>
            {caseStudy.outcomes.map((outcome, index) => (
              <article key={outcome}>
                <span>0{index + 1}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="project-case-study__reflection">
          <p className="project-case-study__number">04</p>
          <h2>What I learned</h2>
          <p>{caseStudy.reflection}</p>
        </section>

        <div className="project-case-study__actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-case-study__primary">
              Open live demo <FaExternalLinkAlt aria-hidden="true" />
            </a>
          )}
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-action-secondary">
              <FaGithub aria-hidden="true" /> View source
            </a>
          ) : (
            <span className="project-action-secondary project-action-secondary--disabled">
              <FaLock aria-hidden="true" /> Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
