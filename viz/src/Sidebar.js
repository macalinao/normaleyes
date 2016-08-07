import React from 'react';
import './Sidebar.css';

export default ({ interviews, candidates, onCandidateSelect }) => (
  <div className="Sidebar">
    <div id="logoContainer">
      <img id="logo" src="./images/logo.png" alt="Logo" />
    </div>

    <h2>Interviews</h2>
    <ul>
      {
        interviews.map((interview) =>
          <li className={ interview.selected && 'selected' }>
            <h3>{ interview.type }</h3>
            <h4>{ interview.interviewer }</h4>
          </li>)
      }
    </ul>

    <h2>Candidates</h2>
    <ul>
      {
        candidates.map(x => x.interviewee).map((candidate, index) =>
          <li className={ candidate.selected && 'selected' } onClick={() => onCandidateSelect(index)}>
            <h3>{ candidate.name }</h3>
            <h4>{ candidate.role }</h4>
          </li>)
      }
    </ul>

  </div>
)
