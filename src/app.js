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
import CardDetail from './components/cardDetails';
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
                <Route path="/card/:id" element={<CardDetail />} />
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;