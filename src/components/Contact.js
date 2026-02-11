import React from 'react';
import { FaEnvelope, FaHourglassHalf, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-5 text-center text-white sm:p-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-300/20 bg-gradient-to-b from-[#25324a]/85 to-[#1f2738]/90 p-6 shadow-[0_24px_45px_-38px_rgba(25,44,77,1)]">
        <FaHourglassHalf className="mx-auto text-5xl text-blue-400" />
        <h2 className="mt-4 text-2xl font-bold text-white">Contact Form Coming Soon</h2>
        <p className="muted-text mt-2 text-base">
          I&apos;m building a polished contact experience. For now, email is the fastest way to reach me.
        </p>

        <div className="section-divider mx-auto my-6 w-full border-t sm:w-4/5" />

        <a
          href="mailto:galenyuan1@gmail.com"
          className="mx-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
        >
          <FaEnvelope /> galenyuan1@gmail.com
        </a>

        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/galen-yuan/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://github.com/Gal-Y"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
