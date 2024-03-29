import React from 'react';
import './MeSection.css';
import lutLogo from '../images/lut.svg';
import fishingImage from '../images/IMG_1871.jpeg';

function calculateDiffInYears(dateStart) {
  let timeNow = Date.now();
  let timeDifMs = timeNow - dateStart;
  let timeDate = new Date(timeDifMs);
  let result = Math.abs(timeDate.getUTCFullYear() - 1970);
  return result;
}

// This is meant only for the 5 year PeriodicWave, not including the "teen years"
function addingSuffixToYear(year) {
  if (year === 1) {
    return year + 'st';
  } else if (year === 2) {
    return year + 'nd';
  } else if (year === 3) {
    return year + 'rd';
  } else {
    return year + 'th';
  }
}

function Section({ reference }) {
  var myStartDateInUni = new Date(2019, 8, 1);
  var diffInYears = calculateDiffInYears(myStartDateInUni) + 1;

  return (
    <div ref={reference} className="mesection">
      <h1 style={{ paddingTop: '0.3em', paddingBottom: '1em' }}>About Me</h1>
      <div className="cards-div-me-section">
        <div className="card-div" id="first-box">
          <img height={150} src={lutLogo} alt="LUT Logo" className="lutLogo" />
          <div>
            <h4>Education</h4>
            <ul className="ul-group">
              <li className="li-item-me-section">Started in LUT 2019</li>
              <li className="li-item-me-section">
                Currently in my {addingSuffixToYear(diffInYears)} year
              </li>
              <li className="li-item-me-section">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Bachelor's Degree, completed: Software Engineering, Data
                Analytics{' '}
              </li>
              <li className="li-item-me-section">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Master's Degree, underway: Software Engineering, Embedded
                Systems and Communications
              </li>
            </ul>
          </div>
        </div>
        <div className="card-seperator" />
        <div className="card-div">
          <div>
            <h4>Freetime</h4>
            <ul className="ul-group">
              <li className="li-item-me-section">
                Trying my skills on own coding projects
              </li>
              <li className="li-item-me-section">
                Love to spend my time in nature especially with fishing,
                discgolfing and cross country skiing
              </li>
              <li className="li-item-me-section">All year bike commuter</li>
            </ul>
          </div>
          <img className="fishing-image" src={fishingImage} alt="Me Fishing" />
        </div>
      </div>
    </div>
  );
}

export default Section;
