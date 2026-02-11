import React from 'react';
import { FaHeart, FaCloud, FaTasks, FaTools, FaBug, FaRocket, FaServer, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, } from 'react-icons/si';
import { HiOutlineCube } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';

const CJoyBlog = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4">Building a Dynamic Web Application with AWS: My Carnation Joy Project</h1>
      
      <p className="muted-text mb-6 text-left mb-12">
        In today’s digital landscape, leveraging cloud services is crucial for creating scalable, secure, and efficient web applications. 
        In this blog post, I’ll walk you through the architecture, development process, and AWS services I utilized to build 
        <strong> "Carnation Joy"</strong>, a comprehensive web platform designed to streamline aged and disability care services.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaHeart className="text-orange-500 mr-2" /> Why This Project Matters
        </h2>
        <p className="muted-text text-left">
          This project wasn’t just another technical endeavor for me—it was personal. I built Carnation Joy for my father’s business, 
          which operates under the National Disability Insurance Scheme (NDIS). His mission is to connect compassionate carers with individuals 
          who require aged and disability care services. Witnessing his dedication inspired me to create a platform that could enhance 
          the way he serves the community.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTasks className="text-blue-500 mr-2" /> Project Overview
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Contact Form for general inquiries</li>
          <li>Become a Carer Form for job applications</li>
          <li>Dynamic service pages with carousels and responsive layouts</li>
          <li>Automated email notifications and secure data storage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-green-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 muted-text">
          <div className="flex items-center">
            <SiHtml5 className="text-red-500 mr-2" /> HTML - Frontend
          </div>
          <div className="flex items-center">
            <SiCss3 className="text-blue-500 mr-2" /> CSS - Frontend
          </div>
          <div className="flex items-center">
            <SiJavascript className="text-yellow-500 mr-2" /> JavaScript - Frontend
          </div>
          <div className="flex items-center">
            <HiOutlineCube className="text-orange-500 mr-2" /> AWS S3 - Static website hosting
          </div>
          <div className="flex items-center">
            <FaDatabase className="text-blue-400 mr-2" /> DynamoDB - Database
          </div>
          <div className="flex items-center">
            <FaServer className="text-yellow-400 mr-2" /> AWS Lambda - Form Processing
          </div>
          <div className="flex items-center">
            <FaNetworkWired className="text-pink-400 mr-2" /> AWS API Gateway - Form Processing
          </div>
          <div className="flex items-center">
            <FaCloud className="text-purple-400 mr-2" /> AWS CloudFront - CDN
          </div>
          <div className="flex items-center">
            <FiLink className="text-purple-400 mr-2" /> AWS Route 53 - DNS
          </div>
          <div className="flex items-center">
            <FiLink className="text-purple-400 mr-2" /> AWS SES - Email Notifications
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaCloud className="text-blue-400 mr-2" /> Development Process
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-4 text-left">
          <li>
            <strong className="text-white">Frontend Development</strong>
            <p className="mt-2">
              I started with building a responsive user interface using HTML, CSS, and JavaScript. The website includes:
            </p>
            <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
              <li>A dynamic navigation bar with dropdown menus</li>
              <li>Service sections with carousels to showcase offerings</li>
              <li>Cool animations to enhance user experience</li>
              <li>Forms with validation for contact inquiries and job applications</li>
              <li>Fully mobile-responsive design to ensure accessibility for all users</li>
            </ul>
          </li>

          <li>
            <strong className="text-white">Setting Up AWS Infrastructure</strong>
            <p className="mt-2">I leveraged AWS services to build a secure, scalable backend:</p>
            <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
              <li><strong>S3 & CloudFront:</strong> Deployed the static website on Amazon S3 with CloudFront and 
              Route 53for faster and more secure global content delivery.</li>
              <li><strong>API Gateway:</strong> Created REST APIs to handle form submissions securely.</li>
              <li><strong>Lambda Functions:</strong> Developed serverless functions to process form data, store it in DynamoDB, and trigger emails via SES.</li>
              <li><strong>DynamoDB:</strong> Designed NoSQL tables for storing contact inquiries and job applications.</li>
              <li><strong>SES (Simple Email Service):</strong> Configured SES for sending automated emails upon form submissions.</li>
              <li><strong>Route 53:</strong> Managed DNS settings to ensure proper routing and applied SSL certificates for secure HTTPS connections.</li>
            </ul>
          </li>

          <li>
            <strong className="text-white">Workflow & Error Handling</strong>
            <p className="mt-2">To ensure smooth operations, I implemented:</p>
            <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
              <li>Github Actions for CI/CD pipeline.</li>
              <li>Robust error handling within Lambda functions to capture and log errors in CloudWatch.</li>
              <li>Configured CORS settings in API Gateway to handle cross-origin requests from the frontend securely.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBug className="text-red-400 mr-2" /> Key Challenges
        </h2>
        <div className="space-y-4 muted-text text-left">
          <div>
            <strong>Caching Issues During Development:</strong> Changes made to CSS and HTML were not reflecting on the live website due to browser caching.
          </div>
          <div>
            <strong>Email Deliverability Problems:</strong> Improved with DKIM and SPF records in Route 53.
          </div>
          <div>
            <strong>Handling File Uploads:</strong> Simplified form, with plans to add secure file uploads using S3 pre-signed URLs.
          </div>
          <div>
            <strong>For more detailed key challenges and learnings</strong> <a href="https://github.com/Gal-Y/Carnation-Joy-Website/blob/main/Documentation/LEARNINGS.md" target="_blank" rel="noopener noreferrer">LEARNINGS.md</a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Lessons Learned
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Deepened AWS expertise (Lambda, API Gateway, DynamoDB, SES).</li>
          <li>Enhanced debugging and troubleshooting skills.</li>
          <li>Improved cloud security practices with IAM roles and secure APIs.</li>
          <li>HTML and CSS are so old there's way better alternatives nowadays.</li>
          <li>AWS SERVICES ARE COOL!!!!!!!!!!! :)).</li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Check It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Gal-Y/Carnation-Joy-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
          >
            GitHub Repository
          </a>
          <a
            href="https://carnationjoycare.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white transition"
          >
            Live Website
          </a>
        </div>
      </section>
    </div>
  );
};

export default CJoyBlog;
