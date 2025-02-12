import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Load the tsparticles package
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#000", // Background color
      },
    },
    particles: {
      number: {
        value: 100, // Number of particles
      },
      color: {
        value: "#ffffff", // Particle color
      },
      size: {
        value: 3, // Particle size
      },
      move: {
        enable: true,
        speed: 1, // Speed of particle movement
      },
      links: {
        enable: true,
        color: "#6c5ce7", // Link color
        distance: 250, // Link distance
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Repulse effect on hover
        },
      },
    },
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
  );
};

export default ParticlesBackground;
