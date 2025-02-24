import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-header">Experience</h2>
      <div className="experience-cards">
        {/* Experience 1 */}
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Groopit - Software Engineer Intern</div>
          <div className="notibody">
          Seattle | June 2024 - August 2024 <br />
          • Engineered an automated data ingestion system in Python, leveraging web scraping and API integration to replace manual data collection. <br />
          • Developed a Python-based data modeling system that structured external data for Groopit’s AI tool, enabling real-time visualization and insights for client-facing sales demos.<br />
          •	Implemented an OAuth-secured application to authenticate and authorize Groopit’s data collection pipeline, ensuring secure API interactions without compromising system integrity.          
          </div>
        </div>
        {/* Experience 2 */}
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Incident Aid - Research Assistant Software Engineer</div>
          <div className="notibody">
          Santa Clara University | September 2023 - January 2024  <br />
          •  Led development of an Android application leveraging Kotlin and Android Studio <br />
          •  Implemented features focused on enhancing efficiency and safety for first responders.<br />
          •  Collaborated to utilize Firebase for backend functionality and real-time data sharing         
          </div>
        </div>
        {/* Experience 3 */}
        <div className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Santa Clara University - Education</div>
          <div className="notibody">
          Santa Clara | September 2022 - March 2026  <br />
          •  Bachelor of Science, Computer Science <br />
          •  Minor in Mathematics <br />
          •  3.62 GPA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
