import React from 'react';
import { FaTools, FaCloud, FaCode, FaRobot, FaDumbbell, FaBasketballBall,
  FaMusic, FaGamepad } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-[#23262b] text-white p-8 rounded-3xl w-full h-full">
      <h1 className="text-4xl font-bold mb-4 text-white text-left">About Me</h1>
      <p className="text-base mb-6 text-[#9a9da3] text-left">
        I'm a Software Engineering student passionate about cloud technologies, DevOps, and infrastructure automation. 
        I'm eager to apply my skills in real-world projects and am actively seeking internship opportunities to 
        contribute, learn, and grow as an aspiring Solutions Architect.
      </p>
      <p className="text-base mb-6 text-[#9a9da3] text-left">
        I have experience with a range of programming languages, including C, Java, and Python, 
        as well as front-end technologies like HTML, CSS, JavaScript, and React. Additionally, I have hands-on 
        knowledge of AWS services, using tools like S3, CloudFront, API Gateway, and Lambda to host and manage my 
        projects efficiently. I've also implemented CI/CD pipelines using GitHub Actions to automate build, test, 
        and deployment processes, ensuring smooth and efficient project workflows.
      </p>
      <p className="text-base mb-6 text-[#9a9da3] text-left">
        While completing my Bachelor's degree in Software Engineering, I am committed to continuous learning 
        and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of 
        Solutions Architect, Software Development, and cloud engineering projects.
      </p>

      {/* What I'm Doing */}
      <div className="border-t border-gray-600 my-8"></div>
      <h2 className="text-4xl font-bold mb-4 text-white text-left">What I'm Doing</h2>
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: '#2e2f36' }}
          className="bg-[#1d1e23] p-4 rounded-lg text-center border border-gray-600"
        >
          <FaTools className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-[#9a9da3]">Solutions Architect</h3>
          <p className="text-[#9a9da3]">Designing scalable, secure, and cost-effective cloud architectures to optimize performance and enable seamless integration.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: '#2e2f36' }}
          className="bg-[#1d1e23] p-4 rounded-lg text-center border border-gray-600"
        >
          <FaCloud className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-[#9a9da3]">Cloud Engineer</h3>
          <p className="text-[#9a9da3]">I enjoy designing, securing, and maintaining an organization's cloud-based infrastructure and applications.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: '#2e2f36' }}
          className="bg-[#1d1e23] p-4 rounded-lg text-center border border-gray-600"
        >
          <FaRobot className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-[#9a9da3]">AI</h3>
          <p className="text-[#9a9da3]">Leveraging AI to drive innovation and improve decision-making.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: '#2e2f36' }}
          className="bg-[#1d1e23] p-4 rounded-lg text-center border border-gray-600"
        >
          <FaCode className="text-4xl text-blue-500 mb-2 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-[#9a9da3]">Software Development</h3>
          <p className="text-[#9a9da3]">I enjoy learning software development either for personal or specific purposes.</p>
        </motion.div>
      </div>

      {/* Outside of Work */}
      <div className="border-t border-gray-600 my-8"></div>
      <h2 className="text-4xl font-bold mb-4 text-left">Outside of Work</h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <motion.div
          whileHover={{ y: -10, rotate: 2, transition: { type: "spring", stiffness: 300 } }}
          className="flex flex-col items-center bg-[#1d1e23] p-6 rounded-xl shadow-lg border border-gray-600 w-full md:w-1/4"
        >
          <FaDumbbell className="text-5xl text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-[#9a9da3] mb-2">Gym</h3>
          <p className="text-center text-[#9a9da3]">
            Pushing my limits with intense workouts like Chris Bumstead.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, rotate: -2, transition: { type: "spring", stiffness: 300 } }}
          className="flex flex-col items-center bg-[#1d1e23] p-6 rounded-xl shadow-lg border border-gray-600 w-full md:w-1/4"
        >
          <FaBasketballBall className="text-5xl text-orange-500 mb-4" />
          <h3 className="text-2xl font-bold text-[#9a9da3] mb-2">Basketball</h3>
          <p className="text-center text-[#9a9da3]">
            Splashing and dunking like LeBron James.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          className="flex flex-col items-center bg-[#1d1e23] p-6 rounded-xl shadow-lg border border-gray-600 w-full md:w-1/4"
        >
          <FaMusic className="text-5xl text-purple-500 mb-4" />
          <h3 className="text-2xl font-bold text-[#9a9da3] mb-2">Piano</h3>
          <p className="text-center text-[#9a9da3]">
            Striking the keys to create melodies that soothe the soul.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, rotate: 3, transition: { type: "spring", stiffness: 300 } }}
          className="flex flex-col items-center bg-[#1d1e23] p-6 rounded-xl shadow-lg border border-gray-600 w-full md:w-1/4"
        >
          <FaGamepad className="text-5xl text-red-500 mb-4" />
          <h3 className="text-2xl font-bold text-[#9a9da3] mb-2">Video Games</h3>
          <p className="text-center text-[#9a9da3]">
            Diving into immersive worlds and adventures for fun and relaxation.
          </p>
        </motion.div>
      </div>

      {/* Thank You Section */}
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-r from-[#5e68e6] via-[#405dea] to-[#363c87] p-8 rounded-3xl shadow-2xl text-center"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl font-extrabold text-white mb-4 animate-pulse"
          >
            Thank You For Visiting!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl text-white"
          >
            I truly appreciate your time and interest. Let's connect and create something extraordinary together!
          </motion.p>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="mt-8 inline-block"
          >
            {/* Decorative rotating SVG */}
            <svg width="80" height="80" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5" fill="transparent" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;