import React from 'react';
import './DisplayBox.css';

const DisplayBox = ({ data }) => {
  return (
    <div className="display-box-container" id="slider">
      <h2>{data.text}</h2>

      <p>{data.description}</p>

      {data?.src && <img src={data.src}></img>}

      <div className="project-links-container">
        {data?.demoVideoLink && (
          <a href={data.demoVideoLink} target="_blank" rel="noreferrer">
            Demo video
          </a>
        )}
        {data?.repository && (
          <a href={data.repository} target="_blank" rel="noreferrer">
            Source code
          </a>
        )}
        {data?.liveBuild && (
          <a href={data.liveBuild} target="_blank" rel="noreferrer">
            Live build
          </a>
        )}
      </div>
    </div>
  );
};

export default DisplayBox;
