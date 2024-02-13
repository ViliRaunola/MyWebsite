import React from 'react';
import './Welcome.css';
import Header from './Header';
import DisplayBox from './DisplayBox';
import ProjectSelection from './ProjectSelection';
import { useState } from 'react';

const Welcome = () => {
  const [data, setData] = useState({
    text: 'Welcome',
    description:
      "I'm a fifth-year student at LUT. I'm studying Software Engineering and my minor is Embedded Systems and Communications. I completed my bachelors in 2022. Im eager to learn more about software engineering and the world around us! Please, take a look at the projects I have completed over the years!",
    demoVideoLink: '',
    repository: '',
    liveBuild: '',
    src: null
  });

  const onDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="container-welcome">
      <div className="container-inner">
        <Header onDataChange={onDataChange}></Header>
        <div className="container-content">
          <DisplayBox data={data}></DisplayBox>
          <ProjectSelection onDataChange={onDataChange}></ProjectSelection>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
