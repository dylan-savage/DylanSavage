import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Hi! <br /> I'm, <name><strong> Dylan</strong></name> 
        <br />ML Engineer & <br />Software Developer.
        </h1>
        <div className="hero-buttons">
          <button className="button">Resume </button>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
