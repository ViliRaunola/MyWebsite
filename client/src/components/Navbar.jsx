import React from 'react';
import './Navbar.css';

function Navbar({
  handelScroll,
  meRef,
  projectsRef,
  contactRef,
  meVisible,
  projectsVisible,
  contactVisible
}) {
  return (
    <div className="navbarsticky">
      <ul style={{ margin: 0, paddingTop: '1em', color: '#f1faee' }}>
        <li
          onClick={() => handelScroll(meRef)}
          className="link"
          style={
            meVisible === true ? { color: '#457b9d' } : { color: 'white' }
          }>
          Me
        </li>
        <li
          onClick={() => handelScroll(projectsRef)}
          className="link"
          style={
            projectsVisible === true ? { color: '#457b9d' } : { color: 'white' }
          }>
          My projects
        </li>
        <li
          onClick={() => handelScroll(contactRef)}
          className="link"
          style={
            contactVisible === true ? { color: '#457b9d' } : { color: 'white' }
          }>
          Contact Me
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
