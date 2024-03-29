import React from 'react';
import './ProjectSelection.css';
import projects from '../data/projectdata';
import ProjectLink from './ProjectLink';

const ProjectSelection = ({ onDataChange, slideRef }) => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-selection-container">
        {projects.map((project) => (
          <ProjectLink
            key={project.text}
            project={project}
            onDataChange={onDataChange}
            slideRef={slideRef}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSelection;
