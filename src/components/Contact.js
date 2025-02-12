import React from 'react';
import { FaEnvelope, FaHourglassHalf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-[#23262b] text-white p-8 rounded-3xl w-full max-w-screen-lg mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <div className="flex flex-col items-center justify-center space-y-4">
        <FaHourglassHalf className="text-blue-500 text-6xl animate-pulse" />
        <h2 className="text-2xl font-bold text-white">Coming Soon...</h2>
        <p className="text-[#9a9da3] text-lg">I'm working on creating an awesome contact form. Stay tuned!</p>

        <div className="border-t border-gray-600 my-6 w-1/2"></div>

        <p className="text-lg text-white">
          For any queries, feel free to reach out via email:
        </p>
        <a
          href="mailto:galenyuan1@gmail.com"
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
        >
          <FaEnvelope className="mr-2" /> galenyuan1@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
