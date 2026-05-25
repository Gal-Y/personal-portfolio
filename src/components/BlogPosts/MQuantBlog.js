import React from 'react';
import { FaTasks, FaTools, FaCloud, FaBug, FaRocket, FaChartLine } from 'react-icons/fa';

const MQuantBlog = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-left">
        Mini Quant Lab: Learning Predictive Investing with NumPy and Pandas
      </h1>

      <p className="muted-text mb-6 text-left">
        Mini Quant Lab is an educational project that demonstrates a full prediction workflow: generating market-like data,
        engineering features, fitting a simple model, and testing a rules-based strategy. It is built to make quantitative
        concepts easier to experiment with in the browser.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTasks className="text-blue-500 mr-2" /> Project Overview
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Interactive controls for experiment inputs like historical days, seed, threshold, and test split.</li>
          <li>Feature engineering flow with moving averages, volatility, momentum, and next-day return targets.</li>
          <li>Linear regression modeling using `numpy.linalg.lstsq` for lightweight predictive training.</li>
          <li>Backtest visualization comparing strategy and market cumulative returns across a selectable date range.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaTools className="text-green-500 mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4 muted-text">
          <div className="flex items-center">JavaScript + HTML/CSS - Frontend UI</div>
          <div className="flex items-center">Chart.js - Data visualization</div>
          <div className="flex items-center">Python - Modeling service</div>
          <div className="flex items-center">NumPy + Pandas - Data prep and regression</div>
          <div className="flex items-center">AWS API Gateway - Public API endpoint</div>
          <div className="flex items-center">CloudFront - Global frontend delivery</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaChartLine className="text-indigo-400 mr-2" /> Modeling and Backtest Flow
        </h2>
        <ol className="list-decimal list-inside muted-text space-y-2 text-left">
          <li>Generate synthetic market data with controlled randomness.</li>
          <li>Transform raw values into predictive features with Pandas.</li>
          <li>Train a NumPy-based regression model for next-day return prediction.</li>
          <li>Convert model output to buy/cash signals and compare cumulative performance.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaCloud className="text-blue-400 mr-2" /> Deployment Notes
        </h2>
        <div className="space-y-4 muted-text text-left">
          <div>
            <strong>Cloud Architecture:</strong> Static frontend delivered on CloudFront with a separate API endpoint for running experiments.
          </div>
          <div>
            <strong>Responsiveness:</strong> Kept model execution light to return metrics, preview tables, and chart data quickly.
          </div>
          <div>
            <strong>Learning Focus:</strong> Added step-by-step explanations so each stage of the pipeline is easy to follow.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaBug className="text-red-400 mr-2" /> Key Challenges
        </h2>
        <div className="space-y-4 muted-text text-left">
          <div>
            <strong>Balancing Simplicity and Realism:</strong> Needed enough statistical depth to be useful without making the app hard to understand.
          </div>
          <div>
            <strong>Data Presentation:</strong> Structured outputs so metrics, charts, and tables stay aligned and readable.
          </div>
          <div>
            <strong>Experiment UX:</strong> Tuned defaults to keep results stable while still allowing meaningful parameter exploration.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaRocket className="text-purple-400 mr-2" /> Lessons Learned
        </h2>
        <ul className="list-disc list-inside muted-text space-y-2 text-left">
          <li>Clean educational tooling benefits from combining transparent math with immediate visual feedback.</li>
          <li>Small model APIs can be highly practical when paired with focused feature engineering.</li>
          <li>Cloud-hosted experimentation apps are a strong way to explain technical concepts interactively.</li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Try It Out!</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://d3mf2mf3fqpn.cloudfront.net/"
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

export default MQuantBlog;
