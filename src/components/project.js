import React from 'react';
import './Hero.css'; // Reusing the same CSS

const Projects = () => {
  return (
    <section className='project' id='projects'>
      <div className='container1' style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 className='header1'>Projects</h1>
        <p className='intro'>
          Explore some of the exciting projects I've worked on — blending innovation with practical problem-solving in full-stack development, AI, and more.
        </p>
        <div className='projectCards'>
          <div className='projectCard'>
          <div className='card'>
            <h2 className='header3'>Sustained Paths</h2>
            <p className='intro'>A centralized platform for sustainable development data using integrated APIs, Firebase, and Auth0.</p>
          </div>
          </div>
          <div className='projectCard'>
          <div className='card'>
            <h2 className='header3'>Smart OCR Portal</h2>
            <p className='intro'>A web app that captures product images and uses Tesseract.js + EfficientNet to extract MRP and evaluate fruit freshness.</p>
          </div>
          </div>
          <div className='projectCard'>
            <div className='card'>
            <h2 className='header3'>Zealoops</h2>
            <p className='intro'>Website for DevRhylme Foundation with a focus on community building, Web 3.0, and Generative AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
