import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transcript from './Transcript';

const events = [
  {
    speaker: 'Ian',
    text: 'Hello',
  },
  {
    speaker: 'Christian',
    text: 'Hello',
  },
  {
    speaker: 'Ian',
    text: 'Hello',
  },
  {
    speaker: 'Christina',
    text: 'Hello',
  },
  {
    speaker: 'Ian',
    text: 'Hello',
  },
  {
    speaker: 'Christina',
    text: 'Hello',
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>yolos</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Transcript events={events} />
        </p>
      </div>
    );
  }
}

export default App;
