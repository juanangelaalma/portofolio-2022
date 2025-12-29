import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactGA from 'react-ga';

// Components
import Navbar from './components/redesign/common/Navbar';
import Loader from './components/redesign/common/Loader';
import { ScrollProgress, CustomCursor } from './components/redesign/common/SmoothScroll';
import ChatPopup from './components/redesign/common/ChatPopup';

// Sections
import Hero from './components/redesign/sections/Hero';
import About from './components/redesign/sections/About';
import Projects from './components/redesign/sections/Projects';
import Skills from './components/redesign/sections/Skills';
import Contact from './components/redesign/sections/Contact';
import Footer from './components/redesign/sections/Footer';

function AppRedesign() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('UA-236024154-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom cursor effect */}
      <CustomCursor />

      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Main content */}
      {!isLoading && (
        <div className="relative">
          {/* Mesh gradient background */}
          <div className="mesh-gradient-bg" />

          {/* Noise texture overlay */}
          <div className="noise-bg" />

          {/* Scroll progress indicator */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Bottom chat popup */}
          <ChatPopup
            author="Juan"
            title="JuanBot"
            subtitle="Chatbot (coming soon)"
            message="Hey! Leave a message here — I'll connect this to a chatbot soon."
            delayMs={800}
            enableSound={true}
            userAvatarSrc={""}
            suggestions={["Show me your projects", "Let's collaborate", "How can I contact you?"]}
          />
        </div>
      )}
    </>
  );
}

export default AppRedesign;
