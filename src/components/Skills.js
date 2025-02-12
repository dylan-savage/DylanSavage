import React from 'react';
import './Skills.css';

const skills = [
  'Python', 'C++', 'C', 'HTML', 'CSS',
  'Javascript', 'Java', 'Kotlin', 'React.js', 'QT', 'Android Studios', 'Azure', 'Google Firebase',
  'AWS', 'Git', 'Figma',  'Numpy', 'pandas', 'Scikit-Learn', 'TensorFlow', 'Keras'
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="container">
            <button className="button">{skill}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
