import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TechCloud from './components/TechCloud';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // generate random stars with varied sizes, twinkle durations and delays
    const count = 120; // number of stars
    const arr = Array.from({ length: count }).map(() => {
      const size = Math.round(Math.random() * 3) + 1; // 1-4 px
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: (Math.random() * 3) + 2, // 2s - 5s
        delay: Math.random() * 5, // 0s - 5s
        opacity: 0.5 + Math.random() * 0.6,
        glow: Math.random() > 0.85, // some stars have extra glow
        glowSize: 2 + Math.random() * 6,
        color: Math.random() > 0.96 ? 'rgba(0,229,255,0.9)' : 'rgba(255,255,255,0.9)'
      };
    });
    setStars(arr);
  }, []);
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col text-gray-100">
        {/* Starry background layer (fixed). It remains static while content scrolls above. */}
        <div className="stars" aria-hidden="true">
          {/* Stars are generated dynamically in state and rendered here */}
          {stars.map((s, i) => (
            <span
              key={i}
              className={`star ${s.glow ? 'glow' : ''}`}
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
                opacity: s.opacity,
                boxShadow: `0 0 ${s.glowSize}px ${s.color}`
              }}
            />
          ))}
        </div>

        <Header />

        <main className="flex-1 pt-16 site-content"> {/* pt-16 accounts for fixed header height */}
          <Routes>
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/" element={
              <>
                <Hero />
                <div className="container-max mx-auto">
                  <About />
                  <TechCloud />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Contact />
                </div>
              </>
            } />
          </Routes>
        </main>

        <div className="container-max mx-auto">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
