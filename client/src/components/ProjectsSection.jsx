import React from 'react';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projectdata';

function ProjectSection({ reference }) {
  return (
    <div ref={reference} className="projects-section">
      <h1 style={{ paddingTop: '0.3em' }}>My Projects</h1>
      <p style={{ fontSize: '1.1em', width: '50%' }}>
        Here are some of my school and personal projects during my time
        university. Click the cards to see more, like the live builds, source
        code or demo videos!
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project?.src}
            text={project?.text}
            description={project?.description}
            demoVideoLink={project?.demoVideoLink}
            repository={project?.repository}
            liveBuild={project?.liveBuild}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
