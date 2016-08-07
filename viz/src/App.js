import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Transcript from './Transcript';
import Video from './Video';
import InterviewRadar from './InterviewRadar';
import Sentiment from './Sentiment';

import candidates from './candidates';

const getEvent = (events, time) => {
  return events.length - 1 - events.slice().reverse().findIndex((e) => time >= e.time);
};

const findState = (states, time) => {
  return {};
};

const InterviewHeader = ({ interviewee }) => (
  <div className="InterviewHeader">
    <img src={interviewee.img} alt="avatar" />
    <div>
      <h1>{ interviewee.name }</h1>
      <h2>{ interviewee.role }</h2>
    </div>
  </div>
)

class App extends Component {

  constructor() {
    super();
    this.state = {
      candidateId: 0,
      interviewId: 0
    };
  }

  onSeek(time) {
    const i = this.currentInterview();
    const ev = getEvent(i.events, time);
    this.setState({
      currentEvent: ev,
    });
  }

  onTranscriptSelect(index) {
    const i = this.currentInterview();
    const el = document.getElementById('theVideo');
    if (el) {
      el.currentTime = i.events[index].time;
    }
  }

  currentCandidate() {
    const { candidateId } =  this.state;
    return candidates[candidateId];
  }

  currentInterview() {
    const { candidateId, interviewId } =  this.state;
    return candidates[candidateId].interviews[interviewId];
  }

  onCandidateSelect(c) {
    if (c !== 0 && c !== 1) return;
    this.setState({
      candidateId: c
    });
  }

  onButtonClick(name) {
    this.setState({
      buttonState: name
    })
  }

  onMoneySent() {
    alert("Money Sent!");
  }

  render() {
    const c = this.currentCandidate();
    const i = this.currentInterview();

    return (
      <div className="App">
        <Sidebar interviews={c.interviews} candidates={candidates} onCandidateSelect={this.onCandidateSelect.bind(this)} />

        <div className="App-container">
          <InterviewHeader interviewee={c.interviewee} />

          <div className="App-containerContents">
            <div className="App-main">
              <Video onSeek={this.onSeek.bind(this)} fileName={c.interviewee.video} />

              <div className="App-details">

                <div className="App-radar">
                  <h3>Overall Attributes</h3>
                  <InterviewRadar overallStats={i.stats} />
                </div>

                <div className="App-info">

                  <h3>Info</h3>
                  <ul>
                    <li><strong>Name: </strong>{ c.interviewee.name }</li>
                    <li><strong>Email: </strong>{ c.interviewee.email }</li>
                    <li><strong>Phone: </strong>{ c.interviewee.phone }</li>
                    <li><strong>Interviewed By: </strong>{ i.interviewer }</li>
                  </ul>

                  <h3>Hiring Decision</h3>
                  <button className={this.state.buttonState==='approve' && "Button-approve-clicked"}
                  onClick={() => this.onButtonClick('approve')}>Approve</button>

                  <button className={this.state.buttonState==='reject' && "Button-reject-clicked"}
                  onClick={() => this.onButtonClick('reject')}>Reject</button>

                  <h3>Reimbursement</h3>
                  <p>Amount Requested: { c.interviewee.reimbursement }</p>
                  <button className="Button-reimburse" onClick = {() => this.onMoneySent()}>Fulfill via CapitalOne</button>
                  <img className="Logo" src="https://media.cofstatic.com/assets/rwd/img/logo/option-2-btn.png" />

                </div>
              </div>

            </div>

            <div className="App-live">

              <h3>Live Sentiment</h3>
              <Sentiment event={i.events[this.state.currentEvent]} />

              <h3>Transcript</h3>
              <Transcript events={i.events} currentEvent={this.state.currentEvent} onTranscriptSelect={this.onTranscriptSelect.bind(this)} />

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
