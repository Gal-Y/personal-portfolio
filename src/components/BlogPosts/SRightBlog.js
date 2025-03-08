import React from 'react';
import { FaDollarSign, FaTasks, FaUsers, FaChartLine, FaCloud, FaNetworkWired, FaDatabase, FaRocket, FaBug, FaTools } from 'react-icons/fa';
import { SiJavascript, SiPython, SiPostgresql, SiKubernetes, SiDocker, SiGrafana } from 'react-icons/si';
import { HiOutlineCube } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';

const SRightBlog = () => {
  return (
    <div className="bg-[#23262b] text-white p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4">SplitRight: Simplifying Expense Splitting with Scalable Cloud Architecture</h1>

      <p className="text-[#9a9da3] mb-6 text-left">
        Managing group expenses can be frustrating—keeping track of who paid what, ensuring fair splits, and handling reimbursements often turns into a mess. 
        <strong> "SplitRight"</strong> is designed to make this process seamless by automatically calculating and optimizing expense settlements.
        While the core focus is simplifying expense management, I also used SplitRight as a **real-world experiment in Kubernetes autoscaling and cloud infrastructure**.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTasks className="text-blue-500 mr-2" /> How SplitRight Works
        </h2>
        <ul className="list-disc list-inside text-[#9a9da3] space-y-2 text-left">
          <li>Create groups and add shared expenses</li>
          <li>Track individual contributions and calculate fair settlements</li>
          <li>Optimized payment flow to reduce the number of transactions</li>
          <li>Real-time calculations and seamless UI interactions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaDollarSign className="text-green-500 mr-2" /> The Expense Splitting Algorithm
        </h2>
        <p className="text-[#9a9da3] text-left">
          Instead of handling multiple individual transactions, SplitRight **optimizes settlements** by minimizing the number of payments required between group members.
        </p>
        <p className="text-[#9a9da3] mt-2">
          <strong>Example Scenario:</strong>
          <ul className="list-disc list-inside ml-6 space-y-1 mt-2">
            <li>Alice pays $60 for dinner, Bob and Charlie owe $20 each.</li>
            <li>David pays $30 for drinks, which Alice and Bob need to split.</li>
            <li>Instead of multiple transfers, SplitRight calculates: 
              <ul className="list-disc list-inside ml-6">
                <li>Bob pays Alice $10</li>
                <li>Charlie pays Alice $20</li>
                <li>Alice pays David $10</li>
              </ul>
            </li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-yellow-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 text-[#9a9da3]">
          <div className="flex items-center">
            <SiJavascript className="text-yellow-500 mr-2" /> React.js - Frontend
          </div>
          <div className="flex items-center">
            <SiPython className="text-blue-400 mr-2" /> Flask - Backend
          </div>
          <div className="flex items-center">
            <SiKubernetes className="text-orange-500 mr-2" /> Kubernetes - Deployment
          </div>
          <div className="flex items-center">
            <SiDocker className="text-blue-600 mr-2" /> Docker - Containerization
          </div>
          <div className="flex items-center">
            <FaNetworkWired className="text-pink-400 mr-2" /> AWS Load Balancer - Traffic Routing
          </div>
          <div className="flex items-center">
            <SiGrafana className="text-green-400 mr-2" /> Grafana & Prometheus - Monitoring
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaCloud className="text-blue-400 mr-2" /> Kubernetes Load Testing & Autoscaling
        </h2>
        <p className="text-[#9a9da3] text-left">
          To test the system’s ability to handle traffic spikes, I created an endpoint (`/api/load-test`) that simulates high-intensity calculations.
          Running load tests helped trigger **Kubernetes Horizontal Pod Autoscaler (HPA)**, allowing SplitRight to dynamically scale backend pods as needed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBug className="text-red-400 mr-2" /> Key Challenges
        </h2>
        <div className="space-y-4 text-[#9a9da3] text-left">
          <div><strong>Scaling Backend Services:</strong> Adjusted CPU/memory thresholds for optimal autoscaling.</div>
          <div><strong>UI for user needs:</strong> Re-designed UI for better user experience.</div>
          <div><strong>Ingress Controller Configuration:</strong> Fixed routing issues for frontend-backend communication.</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Lessons Learned
        </h2>
        <ul className="list-disc list-inside text-[#9a9da3] space-y-2 text-left">
          <li>Building scalable web applications requires **cloud-native solutions**.</li>
          <li>Kubernetes autoscaling helps **handle unpredictable traffic spikes**.</li>
          <li>Frontend-backend communication requires careful **API gateway and ingress routing** configurations.</li>
          <li>LEARNING KUBERNETES IS LIKE LEARNING A WHOLE NEW WORLD OF OPERATING SYSTEMS!!!</li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Try It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Gal-Y/SplitRight"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition"
          >
            GitHub Repository
          </a>
          <a
            href="http://aeba73389ac9f440ab6b82b03c595b30-8e2a78f55f0297b7.elb.ap-southeast-2.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white transition"
          >
            Live App
          </a>
        </div>
      </section>
    </div>
  );
};

export default SRightBlog;
