import React from 'react';
import { FaServer, FaGlobe, FaSync, FaTools, FaRocket, FaCloud } from 'react-icons/fa';
import { SiPython, SiNginx, SiGunicorn, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

const CConBlog = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-left">Building a Currency Converter Web App with Flask, AWS, and Nginx</h1>

      <p className="muted-text mb-6 text-left">
        In this blog post, I'll walk you through the development and deployment of a simple yet powerful <strong>Currency Converter Web App</strong>. 
        This project was an exciting dive into Python, Flask, AWS EC2, Nginx, Gunicorn, and Supervisor, combining front-end aesthetics with back-end efficiency.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaGlobe className="text-blue-500 mr-2" /> Project Overview
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Convert amounts between different currencies.</li>
          <li>Get real-time exchange rates using the ExchangeRate-API.</li>
          <li>Enjoy a sleek, responsive, and user-friendly interface.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-green-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 muted-text">
          <div className="flex items-center">
            <SiPython className="text-yellow-500 mr-2" /> Python & Flask
          </div>
          <div className="flex items-center">
            <SiHtml5 className="text-red-500 mr-2" /> HTML
          </div>
          <div className="flex items-center">
            <SiCss3 className="text-blue-500 mr-2" /> CSS
          </div>
          <div className="flex items-center">
            <SiJavascript className="text-yellow-300 mr-2" /> JavaScript
          </div>
          <div className="flex items-center">
            <SiJavascript className="text-orange-500 mr-2" /> AWS EC2
          </div>
          <div className="flex items-center">
            <SiNginx className="text-green-500 mr-2" /> Nginx
          </div>
          <div className="flex items-center">
            <SiGunicorn className="text-green-700 mr-2" /> Gunicorn
          </div>
          <div className="flex items-center">
            <FaServer className="text-gray-400 mr-2" /> Supervisor
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaSync className="text-purple-400 mr-2" /> How It Works
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-2 text-left">
          <li>User selects the base currency, target currency, and amount.</li>
          <li>Flask sends a request to ExchangeRate-API for the latest conversion rates.</li>
          <li>The app calculates the converted amount.</li>
          <li>The result is displayed with smooth animations and real-time updates.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaCloud className="text-blue-400 mr-2" /> Deployment on AWS EC2
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-2 text-left">
          <li>Launched an Ubuntu EC2 instance and connected via SSH.</li>
          <li>Installed dependencies: Python, Nginx, Gunicorn, and Supervisor.</li>
          <li>Ran Flask app with Gunicorn.</li>
          <li>Configured Nginx as a reverse proxy and secured with SSL.</li>
          <li>Managed the app with Supervisor for auto-restart capabilities.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Key Takeaways
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>End-to-end deployment of a Python web app in production.</li>
          <li>Understanding web servers, process managers, and cloud infrastructure. (I had no clue what Nginx, Gunicorn, and Supervisor were...).</li>
          <li>SMALL SOFTWARE APPS ARE COOL!!!!!!!!!! :)).</li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Check It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Gal-Y/Currency-converter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
          >
            GitHub Repository
          </a>
          <a
            href="https://d6kev5zk7z0ut.cloudfront.net"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white transition"
          >
            Live Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default CConBlog;
