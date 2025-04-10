import React from 'react';
import './Hero.css'; // Reusing your global styles

const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Tailwind CSS",
        "Bootstrap",
        "C++",
        "Java",
        "Python",
        "MySQL",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Firebase",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Netlify",
        "Vercel", 
  'Python', 'TensorFlow', 'PyTorch', 'Tesseract OCR', 'OpenCV',
  'ML', 'DL', 'NLP','AI'
];

const Skills = () => {
  return (
    <section className='skills'id=' skills'>
      <div className='containerskills'>
        <h1 className='header1'>My Skill Set</h1>
        <p className='intro'>Here are the tools, technologies, and frameworks I'm experienced with in full stack development and AI/ML.</p>
        <div className='skillsGrid'>
          {skills.map((skill, index) => (
            <div key={index} className='skillCard'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
