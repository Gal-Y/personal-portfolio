import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

// blog posts
const blogPosts = [
  {
    id: 1,
    title: 'CarnationJoyCare Website Rationale',
    description: 'A user-friendly website for a aged care & disability service provider.',
    date: '11/02/2025',
    image: require('../assets/carnationblog.png'),
    link: '/blogPosts/cjoy',
  },
  {
    id: 2,
    title: 'Simple Currency Converter Rationale',
    description: 'Convert currency with ease using this simple application.',
    date: '11/09/2024',
    image: require('../assets/currencyblog.png'),
    link: '/blogPosts/ccon',
  },
  {
    id: 3,
    title: 'Personal Portfolio Rationale',
    description: 'Display my projects and experiences.',
    date: '15/01/2025',
    image: require('../assets/personalblog.png'),
    link: '/blogPosts/pport',
  },
];

const Blog = () => {
  return (
    <div className="bg-[#23262b] text-white p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-left">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-600 rounded-2xl overflow-hidden relative transition-transform"
          >
            {/* Date Tag */}
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
              {post.date}
            </div>

            {/* Blog Image */}
            <div className="relative group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay with Book Icon */}
              <div
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer rounded-2xl"
                onClick={() => (window.location.href = post.link)}
              >
                <FaBookOpen className="text-white text-4xl" />
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[#9a9da3] text-sm line-clamp-2">
                {post.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
