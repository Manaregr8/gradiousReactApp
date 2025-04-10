import React from 'react';
import './Hero.css'; // Reusing styles

const Footer = () => {
  return (
    <footer className='footer' style={{ borderTop: '1px solid rgb(230,230,230)', padding: '30px 0' }}>
      <div className='container' style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <p className='intro'>© {new Date().getFullYear()} Manjeet Singh. All rights reserved.</p>
        <div className='links' style={{ marginTop: '10px', flexDirection: 'row', gap: '20px' }}>
          <a className='link' href='#projects'>Projects</a>
          <a className='link' href='#skills'>Skills</a>
          <a className='link' href='tel:8506040783'>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
