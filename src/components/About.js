import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaCloud,
  FaCode,
  FaRobot,
  FaDumbbell,
  FaBasketballBall,
  FaMusic,
  FaGamepad,
} from 'react-icons/fa';

const focusAreas = [
  {
    title: 'Solutions Architect',
    description:
      'Designing scalable, secure, and cost-effective cloud architectures to optimize performance and enable seamless integration.',
    icon: FaTools,
    iconColor: 'text-blue-400',
  },
  {
    title: 'Cloud Engineer',
    description:
      "Designing, securing, and maintaining an organization's cloud-based infrastructure and applications.",
    icon: FaCloud,
    iconColor: 'text-cyan-400',
  },
  {
    title: 'AI',
    description: 'Leveraging AI to drive innovation and improve decision-making.',
    icon: FaRobot,
    iconColor: 'text-indigo-300',
  },
  {
    title: 'Software Development',
    description: 'Building practical, high-impact software for both personal and professional use cases.',
    icon: FaCode,
    iconColor: 'text-blue-300',
  },
];

const hobbies = [
  {
    title: 'Gym',
    description: 'Pushing my limits with consistent training and discipline.',
    icon: FaDumbbell,
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Basketball',
    description: 'Playing pickup games and improving fundamentals on the court.',
    icon: FaBasketballBall,
    iconColor: 'text-orange-400',
  },
  {
    title: 'Piano',
    description: 'Practicing pieces that challenge precision, rhythm, and creativity.',
    icon: FaMusic,
    iconColor: 'text-sky-300',
  },
  {
    title: 'Video Games',
    description: 'Enjoying immersive worlds and collaborative gameplay with friends.',
    icon: FaGamepad,
    iconColor: 'text-rose-400',
  },
];

const introParagraphs = [
  "I'm a Software Engineering student passionate about cloud technologies, DevOps, and infrastructure automation. I'm eager to apply my skills in real-world projects and am actively seeking internship opportunities to contribute, learn, and grow as an aspiring Solutions Architect.",
  "I have experience with a range of programming languages, including C, Java, and Python, as well as front-end technologies like HTML, CSS, JavaScript, and React. I also have hands-on AWS experience with S3, CloudFront, API Gateway, and Lambda, plus CI/CD automation using GitHub Actions.",
  "While completing my Bachelor's degree in Software Engineering, I am committed to continuous learning and professional growth. I am seeking opportunities to contribute to Solutions Architecture, Software Development, and cloud engineering projects.",
];

const About = () => {
  return (
    <div className="surface-card w-full rounded-3xl p-5 text-white sm:p-8">
      <h1 className="text-left text-3xl font-bold sm:text-4xl">About Me</h1>

      <div className="mt-4 space-y-4 text-left text-sm leading-relaxed sm:text-base">
        {introParagraphs.map((paragraph) => (
          <p key={paragraph} className="muted-text">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="section-divider my-8 border-t" />

      <h2 className="text-left text-2xl font-bold sm:text-3xl">What I'm Doing</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {focusAreas.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="surface-card-soft interactive-card rounded-2xl p-5 text-center"
            >
              <Icon className={`mx-auto mb-3 text-3xl sm:text-4xl ${item.iconColor}`} />
              <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
              <p className="muted-text mt-2 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="section-divider my-8 border-t" />

      <h2 className="text-left text-2xl font-bold sm:text-3xl">Outside of Work</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={hobby.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="surface-card-soft interactive-card rounded-2xl p-5 text-center"
            >
              <Icon className={`mx-auto mb-3 text-4xl ${hobby.iconColor}`} />
              <h3 className="text-xl font-bold text-white">{hobby.title}</h3>
              <p className="muted-text mt-2 text-sm">{hobby.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl border border-blue-300/25 bg-gradient-to-r from-[#27477f] via-[#2b5da2] to-[#1f6bb1] p-6 text-center shadow-[0_20px_45px_-34px_rgba(26,66,128,1)] sm:p-8"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Thank You For Visiting!</h2>
          <p className="mt-3 text-sm text-blue-50 sm:text-lg">
            I appreciate your time and interest. Let&apos;s connect and build something meaningful together.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-blue-100/60" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
