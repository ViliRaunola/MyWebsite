import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';

const Header = ({ onDataChange }) => {
  const onClickHeader = () => {
    onDataChange({
      text: 'Welcome',
      description:
        'Im a fifth year student at LUT. Im studying Software Engineering and my minor is Embedded Systems and Communications. I completed my batchelors in 2022. Im eager to learn more about software engineering and the world around us! Please, take a look at the projects I have completed over the years!',
      demoVideoLink: '',
      repository: '',
      liveBuild: '',
      src: null
    });
  };

  return (
    <div className="header-container">
      <a onClick={onClickHeader}>
        <h1 style={{ margin: '0.5rem 0 0 0' }}>Vili Raunola</h1>
      </a>

      <div className="links">
        <div className="contact-info-item">
          <a
            className="underline_link"
            style={{ color: 'white' }}
            href="https://github.com/ViliRaunola"
            target="_blank"
            rel="noreferrer">
            <GitHubIcon
              style={{
                margin: '0.2em',
                width: '30',
                height: '30'
              }}
            />
          </a>
        </div>
        <div className="contact-info-item">
          <a
            className="underline_link"
            style={{ color: 'white' }}
            href="https://www.linkedin.com/in/vili-raunola-614920260/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon
              style={{
                margin: '0.2em',
                width: '30',
                height: '30'
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
