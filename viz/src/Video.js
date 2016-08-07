import React, { Component, PropTypes } from 'react';
import './Video.css';

class Video extends Component {

  static propTypes = {
    onSeek: PropTypes.func.isRequired
  }

  componentDidMount() {
    const el = document.getElementById('theVideo');
    setInterval(() => {
      this.props.onSeek(el.currentTime);
    }, 100);
  }

  render() {
    return (
      <div>
        <video id="theVideo" className="Video" controls>
          <source src="./video/outputStephanie.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

}

export default Video;
