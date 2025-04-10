import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Footer/>
    </>
);


