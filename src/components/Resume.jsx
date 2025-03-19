import React from 'react';
import comingSoon from '../pictures/comingSoon.png';

const Resume = () => {
  return (
    <div className="resume-section">
      <h1 className="about-title">Resume</h1>

      <div className="resume-content"> 
        <h1 style={{color: 'black'}} fontSize={100} className="resume-title">Education</h1>
        <p>EdX CodingBootcamp</p>
        <br></br>
        <h1 style={{color: 'black'}} fontSize={100} className="resume-title">Skills</h1>
        <p>Coding</p>
        <br></br>
        <h1 style={{color: 'black'}} fontSize={100} className="resume-title">Interests</h1>
        <p>Building billion $$$ companies</p>
      </div>
      <div className="resume-image-container">
        <img 
          src={comingSoon}
          alt="Coming Soon" 
          className="resume-image" 
        />
      </div>
      
    </div>
  );
};

export default Resume; 