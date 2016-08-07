import React from 'react';
import './Video.css';

export default () => (
  <div>
    <video className="Video" controls>
      <source src="./video/toystory.mp4" type="video/mp4" />
    </video>
  </div>
);
