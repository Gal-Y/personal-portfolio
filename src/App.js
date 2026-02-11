import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SvgDecoration from './components/SvgDecoration';
import SvgDecorationLeftBottom from './components/SvgDecorationLeft1';
import SvgDecorationRight from './components/SvgDecorationRight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CJoyBlog from './components/BlogPosts/CJoyBlog';
import CConBlog from './components/BlogPosts/CConBlog';
import PPortBlog from './components/BlogPosts/PPortBlog';
import SRightBlog from './components/BlogPosts/SRightBlog';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 z-0">
          <SvgDecoration />
          <SvgDecorationLeftBottom />
          <SvgDecorationRight />
        </div>

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
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogPosts/cjoy" element={<CJoyBlog />} />
                <Route path="/blogPosts/ccon" element={<CConBlog />} />
                <Route path="/blogPosts/pport" element={<PPortBlog />} />
                <Route path="/blogPosts/sright" element={<SRightBlog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
