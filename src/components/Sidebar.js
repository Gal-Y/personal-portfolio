import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaFileAlt, FaCube, FaBook, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ variant }) => {
  const location = useLocation();
  const normalizePath = (path) => (path === '/' ? '/about' : path);
  const [activeLink, setActiveLink] = React.useState(normalizePath(location.pathname));

  useEffect(() => {
    setActiveLink(normalizePath(location.pathname));
  }, [location.pathname]);

  const links = [
    { to: '/about', icon: <FaUser />, label: 'ABOUT' },
    { to: '/resume', icon: <FaFileAlt />, label: 'RESUME' },
    { to: '/portfolio', icon: <FaCube />, label: 'PORTFOLIO' },
    { to: '/blog', icon: <FaBook />, label: 'BLOG' },
    { to: '/contact', icon: <FaEnvelope />, label: 'CONTACT' },
  ];

  if (variant === 'mobile') {
    return (
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="surface-card sticky top-3 z-30 rounded-2xl p-2 md:hidden"
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {links.map((link) => {
            const isActive = activeLink === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setActiveLink(link.to)}
                className={`flex min-w-[80px] flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[0.65rem] font-semibold tracking-[0.06em] transition ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_12px_24px_-20px_rgba(59,130,246,1)]'
                    : 'text-[#9ea8c4] hover:bg-[#2d364b] hover:text-white'
                }`}
              >
                <span className="text-sm">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="surface-card sticky top-6 w-[180px] rounded-[1.6rem] p-4 text-white"
    >
      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const isActive = activeLink === link.to;

          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setActiveLink(link.to)}
              className={`group relative flex h-[74px] items-center gap-3 rounded-xl px-4 text-sm font-semibold tracking-wide transition ${
                isActive
                  ? 'bg-blue-600 text-white shadow-[0_18px_30px_-24px_rgba(59,130,246,1)]'
                  : 'bg-[#2a3142]/70 text-[#a5afcb] hover:bg-[#323c52] hover:text-white'
              }`}
            >
              <span className={`text-base ${isActive ? 'text-white' : 'text-blue-300/90 group-hover:text-blue-200'}`}>
                {link.icon}
              </span>
              <span>{link.label}</span>
              {isActive && <span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />}
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
