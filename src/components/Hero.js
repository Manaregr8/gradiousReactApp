import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='textContent'>
          <p className='hellotext'>
            Hello There!
          </p>
          <h1 className='header1'>Manjeet Singh</h1>
          <h2 className="position">Full Stack Developer</h2>
          <p className='intro'>Passionate about creating innovative solutions with expertise in Full Stack, Front End, AI, ML, and Project Management.</p>
          <div className='links'>
            <a className='link' href='tel:8506040783'>Contact Me</a>
            <a className='link' href='#projects'>View Projects</a>
            <a className='link' href='#about'>About Me</a>
            <a className='link' href='#skills'>My Skill Set</a>
          </div>
        </div>
        <div className='imageContent'>
          <div className='circle1'>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;