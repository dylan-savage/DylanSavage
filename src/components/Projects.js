import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "MLB Win Predictor",
    image: "/images/win-predictor-image-copy.jpg",
    link: "https://github.com/dylan-savage/MLB-Win-Predictor",
  },
  {
    name: "Therapist Chatbot with Meta's Llama3",
    image: "/images/chatbot-image.jpg",
    link: "https://github.com/dylan-savage/llama3-chatbot",
  },
  {
    name: "SF Safe Park",
    image: "/images/sf-safepark-image.jpg",
    link: "https://www.youtube.com/watch?v=LgcK7ceVOfI",
  },
  {
    name: "Flappy Bird AI",
    image: "/images/flappybird.png",
    link: "https://github.com/dylan-savage/flappy-bird-ML",
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