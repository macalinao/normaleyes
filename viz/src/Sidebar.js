import React from 'react';
import './Sidebar.css';

const interviews = [
  {
    type: 'Distributed Systems',
    interviewer: 'Christina Huang',
    selected: true,
  },
  {
    type: 'Algorithms',
    interviewer: 'Jeff Dean',
  },
  {
    type: 'Algorithms',
    interviewer: 'Sanjay Gupta',
  },
]

export default () => (
  <div className="Sidebar">
    <div id="logoContainer">
      <img id="logo" src="./images/logo.png" alt="Logo" />
    </div>
    <h2>Candidate Interviews</h2>
    <ul>
      {
        interviews.map((interview) =>
          <li className={ interview.selected && 'selected' }>
            <h3>{ interview.type }</h3>
            <h4>{ interview.interviewer }</h4>
          </li>)
      }
    </ul>
    <h2>Related Candidates</h2>
  </div>
)
