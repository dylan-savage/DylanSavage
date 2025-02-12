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
          • Spearheaded development of a Proactive AI feature for a data visualization tool, improving data intake capabilities <br />
          • Automated consistent data analysis by integrating external API data into structured data models <br />
          • Designed a repeatable process for an AI model to map and process API data, enhancing system efficiency <br />
          • Collaborated closely with cross-functional teams, analyzed technical specs, code reviews, and project iterations from initial research to deployment
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
