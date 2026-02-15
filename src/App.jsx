import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';

// Wrapper for AnimatePresence to access useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <main style={{ minHeight: 'calc(100vh - 80px - 150px)' }}>
          <AnimatedRoutes />
        </main>

        <footer style={{
          padding: '4rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--border-color)',
          marginTop: '4rem',
          color: 'var(--text-secondary)'
        }}>
          <div className="container">
            <p>© {new Date().getFullYear()} Vinit Darade. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
