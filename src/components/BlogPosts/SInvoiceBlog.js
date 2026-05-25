import React from 'react';
import { FaTools, FaRobot, FaCloud, FaBug, FaRocket, FaTasks, FaServer, FaFileInvoiceDollar } from 'react-icons/fa';

const SInvoiceBlog = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-left">
        Sushi-Invoice: Building an AI-Powered Invoice and Support Platform
      </h1>

      <p className="muted-text mb-6 text-left">
        Sushi-Invoice started as a practical full-stack build to simplify invoice creation and document management.
        I expanded it into an AI-assisted platform where users can generate invoices faster, search supporting files,
        and get contextual help through an LLM-powered workflow.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTasks className="text-blue-500 mr-2" /> Project Overview
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Generate structured invoices through a guided workflow.</li>
          <li>Store and retrieve invoice data and related files efficiently.</li>
          <li>Use an LLM layer for invoice drafting, document lookup, and customer support prompts.</li>
          <li>Deploy on AWS with CI/CD and repeatable infrastructure setup.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-green-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 muted-text">
          <div className="flex items-center">
            <FaFileInvoiceDollar className="text-yellow-400 mr-2" /> React - Frontend UI
          </div>
          <div className="flex items-center">
            <FaServer className="text-blue-400 mr-2" /> Node.js + Express - Backend API
          </div>
          <div className="flex items-center">
            <FaCloud className="text-orange-400 mr-2" /> AWS Elastic Beanstalk - App hosting
          </div>
          <div className="flex items-center">
            <FaCloud className="text-cyan-400 mr-2" /> AWS S3 - File storage
          </div>
          <div className="flex items-center">
            <FaCloud className="text-purple-400 mr-2" /> AWS DynamoDB - Data persistence
          </div>
          <div className="flex items-center">
            <FaRocket className="text-pink-400 mr-2" /> CodePipeline - CI/CD automation
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRobot className="text-indigo-400 mr-2" /> AI Features
        </h2>
        <div className="space-y-3 muted-text text-left">
          <p>
            I integrated an LLM workflow to support invoice generation and user assistance, focusing on practical quality and speed.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Prompt-guided invoice drafting with consistent output structure.</li>
            <li>Context-aware file search to help users reference the right documents quickly.</li>
            <li>Support assistant flow for common customer questions and operational queries.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaCloud className="text-blue-400 mr-2" /> Development and Deployment Process
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-2 text-left">
          <li>Designed the invoice domain model and API structure for extensibility.</li>
          <li>Built React pages and backend endpoints for invoice creation, storage, and retrieval.</li>
          <li>Integrated AI-assisted generation and search workflows into the core user journey.</li>
          <li>Deployed to AWS services and automated releases through CodePipeline.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBug className="text-red-400 mr-2" /> Key Challenges
        </h2>
        <div className="space-y-4 muted-text text-left">
          <div>
            <strong>LLM Output Reliability:</strong> Tuned prompt templates and response structure to improve consistency for invoice formatting.
          </div>
          <div>
            <strong>Cloud Integration Complexity:</strong> Coordinated storage, app hosting, and deployment pipelines while keeping environment configuration manageable.
          </div>
          <div>
            <strong>Data and UX Balance:</strong> Improved backend validation and frontend flow to keep invoice creation fast but accurate.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Lessons Learned
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>AI features deliver the most value when tightly embedded in existing workflows, not added as standalone tools.</li>
          <li>Clear API boundaries and deployment automation make iteration much faster on full-stack projects.</li>
          <li>Production-ready cloud systems require equal focus on reliability, maintainability, and user experience.</li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Check It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Gal-Y/Sushi-Invoice"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
          >
            GitHub Repository
          </a>
          <a
            href="https://d31n0bqlviw94c.cloudfront.net"
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

export default SInvoiceBlog;
