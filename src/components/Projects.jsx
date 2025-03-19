import React from 'react';
import weatherDash from '../pictures/weatherdash.png';
import kanbanBoard from '../pictures/kanbanboard.png';
import frenchFootsteps from '../pictures/frenchfootsteps.png';
import candidateFinder from '../pictures/candidatefinder.png';
import gainsGrains from '../pictures/gainsgrains.png';
import hrAssessment from '../pictures/hrassessment.png';
import comingSoon from '../pictures/comingsoon.png';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="about-title">My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src={weatherDash} alt="Weather Dashboard" />
          </div>
          <div className="project-info">
            <h3>Weather Dashboard</h3>
            <p className="project-description">A weather application that provides current and 5-day forecast data for any city.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/weather-Girl.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://weather-girl-2.onrender.com/" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src= {kanbanBoard} alt="Project 2" />
          </div>
          <div className="project-info">
            <h3>Kanban Board</h3>
            <p className="project-description">An application that allows users to write, save, and delete notes for better organization.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/kanban-board.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://kanban-board1-svr4.onrender.com/" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={frenchFootsteps} alt="Project 3" />
          </div>
          <div className="project-info">
            <h3>French Footsteps</h3>
            <p className="project-description">A platform to educate users on the history of French castles.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/frenchFootsteps.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://aleyw2244.github.io/frenchFootsteps/" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={candidateFinder} alt="Project 4" />
          </div>
          <div className="project-info">
            <h3>Candidate Finder</h3>
            <p className="project-description">A platform to help users find candidates for their job openings.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/candidate-finder.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://candidate-finder-qicg.onrender.com/" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src= {gainsGrains} alt="Project 5" />
          </div>
          <div className="project-info">
            <h3>Gains Grains</h3>
            <p className="project-description">A platform that showcases nutritional plans and workouts.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/Gains-Grains.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://gains-grains-xp41.onrender.com/" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={hrAssessment} alt="Project 6" />
          </div>
          <div className="project-info">
            <h3>HR Assessment</h3>
            <p className="project-description">Add a new employee, role, or department to the database.</p>
            <div className="project-links">
              <a href="https://github.com/aleyw2244/HR-assessment.git" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://drive.google.com/file/d/1Bd_SUBn1x0Mv3BUa_quEd8Ynq_6nH6ZZ/view?usp=sharing" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 