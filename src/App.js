import React from 'react';
import './App.css';
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

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#1d1e24] flex flex-col">
      <div className="absolute inset-0 z-0">
        <SvgDecoration />
        <SvgDecorationLeftBottom />
        <SvgDecorationRight />
      </div>

        <div className="App flex justify-center bg-[#1d1e24] min-h-screen">
          <div className="max-w-screen-lg w-full">
            <Header />

            {/* Render Mobile Sidebar (horizontal) on small screens */}
            <div className="md:hidden">
              <Sidebar variant="mobile" />
            </div>

            <div className="flex">
              {/* Render Desktop Sidebar (vertical) on medium and larger screens */}
              <div className="hidden md:block">
                <Sidebar variant="desktop" />
              </div>

              <div className="flex-1 p-8 pt-8 md:pt-8 bg-[#1d1e24] overflow-y-auto min-h-screen relative z-20">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blogPosts/cjoy" element={<CJoyBlog />} />
                  <Route path="/blogPosts/ccon" element={<CConBlog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



export default App;