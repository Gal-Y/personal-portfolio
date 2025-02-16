import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaFileAlt, FaCube, FaBook, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ variant }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState(location.pathname === '/' ? '/about' : location.pathname);

  const links = [
    { to: '/about', icon: <FaUser />, label: 'ABOUT' },
    { to: '/resume', icon: <FaFileAlt />, label: 'RESUME' },
    { to: '/portfolio', icon: <FaCube />, label: 'PORTFOLIO' },
    { to: '/blog', icon: <FaBook />, label: 'BLOG' },
    { to: '/contact', icon: <FaEnvelope />, label: 'CONTACT' },
  ];

  if (variant === 'mobile') {
    return (
      <motion.nav className="sticky top-0 z-30 flex flex-row items-center justify-around bg-[#23262b] text-white p-4 rounded-3xl mt-8 mx-4 md:hidden">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setActiveLink(link.to)}
            className={`flex flex-col items-center justify-center w-20 h-16 rounded-lg text-xs ${
              activeLink === link.to
                ? 'bg-blue-600 text-white'
                : 'bg-[#2e2f36] text-[#9a9da3] hover:text-blue-500'
            }`}
          >
            <div className="mb-1">{link.icon}</div>
            <span>{link.label}</span>
          </Link>
        ))}
      </motion.nav>
    );
  }
  
  return (
    <motion.aside className="sticky top-0 flex flex-col items-center bg-[#23262b] text-white p-4 rounded-3xl mt-8 space-y-4 w-40">
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setActiveLink(link.to)}
            className={`flex flex-col items-center justify-center w-28 h-20 rounded-lg text-sm ${
              activeLink === link.to ? 'bg-blue-600 text-white' : 'bg-[#2e2f36] text-[#9a9da3] hover:text-blue-500'
            }`}
          >
            <div className="mb-3">{link.icon}</div>
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;