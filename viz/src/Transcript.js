import React from 'react';
import './Transcript.css';

export default ({ events, currentEvent }) => {

  return (
    <div>
      {
        events.map((event, i) => (
          <li className={ i === currentEvent && 'Transcript-current' }>{ event.speaker }: { event.text }</li>
        ))
      }
    </div>
  );

};
