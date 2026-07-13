import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SideBackdrop from './components/SideBackdrop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CJoyBlog from './components/BlogPosts/CJoyBlog';
import CConBlog from './components/BlogPosts/CConBlog';
import PPortBlog from './components/BlogPosts/PPortBlog';
import SRightBlog from './components/BlogPosts/SRightBlog';
import SInvoiceBlog from './components/BlogPosts/SInvoiceBlog';
import MQuantBlog from './components/BlogPosts/MQuantBlog';
import ProjectCaseStudy from './components/BlogPosts/ProjectCaseStudy';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { BackToTop, ScrollProgress } from './components/PageMotion';

const AnimatedRoutes = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="route-stage"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8, filter: 'blur(3px)' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogPosts/cjoy" element={<CJoyBlog />} />
          <Route path="/blogPosts/ccon" element={<CConBlog />} />
          <Route path="/blogPosts/pport" element={<PPortBlog />} />
          <Route path="/blogPosts/sright" element={<SRightBlog />} />
          <Route path="/blogPosts/sinvoice" element={<SInvoiceBlog />} />
          <Route path="/blogPosts/mquant" element={<MQuantBlog />} />
          <Route path="/blogPosts/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-clip">
        <ScrollProgress />
        <SideBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-3 pb-10 pt-8 sm:px-5 lg:px-8">
          <Header />

          <div className="mt-6 md:hidden">
            <Sidebar variant="mobile" />
          </div>

          <div className="mt-6 flex items-start gap-6">
            <div className="hidden md:block md:shrink-0">
              <Sidebar variant="desktop" />
            </div>

            <main className="min-w-0 flex-1">
              <AnimatedRoutes />
            </main>
          </div>
        </div>

        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
