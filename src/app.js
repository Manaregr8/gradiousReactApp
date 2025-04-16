import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Footer from './components/Footer';
import Team from './components/TeamCard';

function App(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <>
                    <Hero/>
                    <About/>
                    <Projects/>
                    <Skills/>
                    </>
                }/>
                <Route path='/teamCards' element={
                    <>
                    <About/>
                    <Team/>
                    </>
                }/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;