import React from 'react';
import { FaTools, FaCloud, FaCode, FaRobot } from 'react-icons/fa';
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

      <div className="border-t border-gray-600 my-8"></div>
      <h2 className="text-4xl font-bold mb-4 text-white text-left">Leadership & Extra-Curricular</h2>
      {/* Finsoc */}
      <div className="flex items-center gap-4 mt-12">
        <a href="https://www.unswfinsoc.org.au/" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={require('../assets/finsoc.png')} alt="University Society Logo" className="w-100 h-12" />
          </motion.div>
        </a>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full ml-8 mb-2"></div>
          <h3 className="text-xl font-bold mb-2 ml-10 text-white">General Secretary</h3>
        </div>
      </div>
      {/* 180 */}
      <div className="flex items-center gap-4 mt-20">
        <a href="https://www.facebook.com/unswmarksoc/" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={require('../assets/180.png')} alt="University Society Logo" className="w-100 h-16" />
          </motion.div>
        </a>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full ml-20 mb-2"></div>
          <h3 className="text-xl font-bold mb-2 ml-10 text-white">Project Consultant</h3>
        </div>
      </div>
      {/* Marksoc */}
      <div className="flex items-center gap-4 mt-20">
        <a href="https://marksocietywebsite.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img src={require('../assets/marksoc.png')} alt="University Society Logo" className="w-100 h-16" />
          </motion.div>
        </a>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full ml-20 mb-2"></div>
          <h3 className="text-xl font-bold mb-2 ml-10 text-white">IT Sub-Committee</h3>
        </div>
      </div>
    </div>
  );
};

export default About;