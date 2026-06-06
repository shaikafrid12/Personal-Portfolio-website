import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import FloatingParticles from './components/FloatingParticles';

function App() {


  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden flex flex-col justify-between z-10 bg-bg-dark text-white">
        {/* Persistent Premium Navbar */}
        <FloatingParticles />
        <Navbar />

        {/* Main dynamic route content */}
        <main className="flex-grow pt-8 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
