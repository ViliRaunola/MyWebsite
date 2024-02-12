import React from 'react';
import './ProjectLink.css';

const ProjectLink = ({ project, onDataChange }) => {
  const div = document.getElementById('slider');
  div.addEventListener('animationend', function () {
    div.classList.remove('move');
  });

  const onClickLink = () => {
    onDataChange(project);
    div.classList.add('move');
  };

  return <a onClick={onClickLink}>{project.text}</a>;
};

export default ProjectLink;
