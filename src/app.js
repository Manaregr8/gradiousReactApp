import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/about';
import Projects from './components/project';
import Skills from './components/skills';
import Footer from './components/Footer';
import Team from './components/TeamCard';
import Counter from "./components/Counter";
import Todos from "./components/todos";
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
                <Route path='/counter' element={
                    <>
                    <Counter/>
                    </>
                }/>
                <Route path='/todos' element={
                    <>
                    <Todos/>
                    </>
                }/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;