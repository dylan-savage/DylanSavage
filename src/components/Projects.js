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
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} />
            <div className="overlay">
              <h3>{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// List of projects
// - Win predictor: put on github and use a thumbnail
// - UCCE: link to the website - find the page
// - SF: safe park: link to demo
// - flappy bird: link to github
// - therapy bot: link to github