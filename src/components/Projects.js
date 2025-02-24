import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "MLB Win Predictor - Machine Learning Model",
    image: process.env.PUBLIC_URL + "/images/win-predictor-image-copy.jpg",
    link: "https://github.com/dylan-savage/MLB-Win-Predictor",
  },
  {
    name: "Therapist Chatbot with Meta's Llama3",
    image: process.env.PUBLIC_URL + "/images/chatbot-image.jpg",
    link: "https://github.com/dylan-savage/llama3-chatbot",
  },
  {
    name: "SF Safe Park - Web Application",
    image: process.env.PUBLIC_URL + "/images/sf-safepark-image.jpg",
    link: "https://www.youtube.com/watch?v=LgcK7ceVOfI",
  },
  {
    name: "Q-Learning Flappy Bird",
    image: process.env.PUBLIC_URL + "/images/flappybird.png",
    link: "https://github.com/dylan-savage/flappy-bird-ML",
  },
  {
    name: "Plant Portal - Web Application",
    image: process.env.PUBLIC_URL + "/images/PlantPortalLogo.png",
    link: "https://github.com/dwu006/scuhacks",
  },
];


const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2> 
      <div className="projects-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-overlay">
              <h3 className="project-title">{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;