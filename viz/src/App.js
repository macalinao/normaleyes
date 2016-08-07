import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Transcript from './Transcript';
import Video from './Video';

import model from './model';

const InterviewHeader = ({ interviewee }) => (
  <div className="InterviewHeader">
    <img src="./images/avatar.jpeg" alt="avatar" />
    <div>
      <h1>{ interviewee.name }</h1>
      <h2>{ interviewee.role }</h2>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App-container">
          <InterviewHeader interviewee={model.interviewee} />
          <div className="App-containerContents">
            <div className="App-main">
              <Video />
            </div>
            <div className="App-live">
              <Transcript events={model.events} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
