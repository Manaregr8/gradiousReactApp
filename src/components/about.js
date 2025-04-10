import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className='about'>
      <div className="containerAbout">
        <h1 className="header1 headAbout">About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p className='intro'>
              I am a dedicated Full Stack Developer with 4+ years of experience designing and 
              developing user-centric applications. My expertise spans across front-end and back-end 
              technologies, with a strong foundation in AI and ML implementations.
              Throughout my professional journey, I've successfully led multiple projects from 
              conception to deployment, ensuring the highest standards of code quality and user experience.
              My approach combines technical excellence with effective project management, allowing me 
              to deliver solutions that not only meet but exceed client expectations.
            </p>
            <div className='linkAbout'>
            <div className="about-info intro">
              <div className="info-item">
                <span>Name:</span> Manjeet Singh
              </div>
              <div className="info-item intro">
                <span>Experience:</span> 4+ Years
              </div>
              <div className="info-item intro">
                <span>Email:</span> manjeetdevelops@gmail.com
              </div>
              <div className="info-item intro">
                <span>Location:</span> Delhi
              </div>
            </div>
            <a href="tel:8506040783" className="btn">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;