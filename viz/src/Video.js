import React, { Component } from 'react';
import './Video.css';

class Video extends Component {

  componentDidMount() {
    const el = document.getElementById('theVideo');
    setInterval(() => {
      this.props.onSeek(el.currentTime);
    }, 100);
  }

  render() {
    const { fileName } = this.props;
    return (
      <div>
        <video id="theVideo" className="Video" src={'./video/' + fileName} controls>
        </video>
      </div>
    );
  }

}

export default Video;
