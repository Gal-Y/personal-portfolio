import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'CarnationJoyCare Website Rationale',
    description: 'A user-friendly website for an aged care and disability service provider.',
    date: '11/02/2025',
    image: require('../assets/carnationblog.png'),
    link: '/blogPosts/cjoy',
  },
  {
    id: 2,
    title: 'Simple Currency Converter Rationale',
    description: 'Converting currency with a responsive cloud-hosted application.',
    date: '11/09/2024',
    image: require('../assets/currencyblog.png'),
    link: '/blogPosts/ccon',
  },
  {
    id: 3,
    title: 'Personal Portfolio Rationale',
    description: 'How I built this portfolio to present projects and professional growth.',
    date: '15/01/2025',
    image: require('../assets/personalblog.png'),
    link: '/blogPosts/pport',
  },
  {
    id: 4,
    title: 'SplitRight Rationale',
    description: 'Expense splitting with Kubernetes autoscaling and cloud architecture.',
    date: '28/02/2025',
    image: require('../assets/splitrightblog.png'),
    link: '/blogPosts/sright',
  },
];

const Blog = () => {
  return (
    <div className="surface-card mx-auto w-full max-w-screen-lg rounded-3xl p-5 text-white sm:p-8">
      <h1 className="text-left text-3xl font-bold sm:text-4xl">Blog</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <motion.article key={post.id} whileHover={{ y: -4, scale: 1.01 }} className="surface-card-soft interactive-card overflow-hidden rounded-2xl">
            <Link to={post.link} className="block h-full">
              <div className="relative">
                <span className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-[#203864]/90 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-blue-100">
                  {post.date}
                </span>

                <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />

                <div className="absolute inset-0 flex items-center justify-center bg-[#111826]/78 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <FaBookOpen className="text-4xl text-white" />
                </div>
              </div>

              <div className="p-4 text-left">
                <h3 className="line-clamp-2 text-lg font-bold text-white">{post.title}</h3>
                <p className="muted-text mt-2 line-clamp-2 text-sm">{post.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                  Read post <FaArrowRight className="text-xs" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
