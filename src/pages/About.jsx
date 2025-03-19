import React, { useState } from 'react';
import '../styles/About.css';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Resume from '../components/Resume';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="about-container">
      <header className="site-header">
        <h1 className="site-title">Aley Wigwe Takes Tech</h1>
      </header>

      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button 
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`}
          onClick={() => setActiveTab('resume')}
        >
          Resume
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>
      </div>

      <div className="about-content">
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'contact' && <ContactMe />}
      </div>

      <footer className="site-footer">
        <p>Email me at aleyawigwe@gmail.com</p>
      </footer>
    </div>
  );
};

export default About; 