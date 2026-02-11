import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaRegFileAlt, FaRegEnvelope, FaRegStar } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="surface-card relative overflow-hidden rounded-[1.85rem] p-5 text-white sm:p-6"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative mx-auto sm:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/80 to-blue-700/90 blur-[1px]" />
            <div className="relative m-[2px] h-28 w-28 rounded-2xl bg-[#1b202d] p-[5px] sm:h-32 sm:w-32">
              <img
                src={require('../assets/profile.jpg')}
                alt="Profile"
                className="h-full w-full rounded-[0.95rem] object-cover"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[2.1rem]">Galen Yuan</h1>
            <p className="mt-1 text-sm font-semibold text-blue-200 sm:text-base">
              SWE Student | Aspiring Solutions Architect | Software Engineer
            </p>
            <span className="chip mt-3 inline-flex gap-1.5">
              <FaRegStar className="text-[0.72rem] text-blue-300" /> Open to opportunities
            </span>
          </div>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 xl:w-auto xl:min-w-[430px]">
          <div className="surface-card-soft rounded-xl p-3 text-left">
            <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-blue-200">
              <FaRegEnvelope /> Email
            </p>
            <a
              className="mt-1 block text-sm font-semibold text-[#ebf2ff] transition hover:text-blue-300"
              href="mailto:galenyuan1@gmail.com"
            >
              galenyuan1@gmail.com
            </a>
          </div>

          <div className="surface-card-soft rounded-xl p-3 text-left">
            <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-blue-200">
              <FaRegFileAlt /> CV
            </p>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="mt-1 inline-block text-sm font-semibold text-[#ebf2ff] transition hover:text-blue-300"
            >
              Download Resume
            </a>
          </div>

          <div className="surface-card-soft rounded-xl p-3 text-left">
            <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-blue-200">
              <FaMapMarkerAlt /> Location
            </p>
            <p className="mt-1 text-sm font-semibold text-[#ebf2ff]">Sydney, Australia</p>
          </div>

          <div className="surface-card-soft rounded-xl p-3 text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-blue-200">Status</p>
            <p className="mt-1 text-sm font-semibold text-[#ebf2ff]">Available for SWE internships</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 xl:justify-end">
          <a href="https://www.linkedin.com/in/galen-yuan/" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="https://github.com/Gal-Y" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub">
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
