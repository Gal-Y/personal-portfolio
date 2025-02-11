import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import SvgDecoration from './components/SvgDecoration';
import SvgDecorationLeftBottom from './components/SvgDecorationLeft1';
import SvgDecorationRight from './components/SvgDecorationRight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative">
        <SvgDecoration />
        <SvgDecorationLeftBottom />
        <SvgDecorationRight />
        <div className="App flex justify-center bg-[#1d1e24] min-h-screen">
          <div className="max-w-screen-lg w-full">
            <Header />
            <div className="flex items-start mt-2">
              <Sidebar />
              <div className="flex-1 p-8">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
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