import React from 'react';
import './Transcript.css';

export default ({ events, currentEvent, onTranscriptSelect }) => {

  return (
    <div className="Transcript">
      {
        events.map((event, i) => (
          <li className={ i === currentEvent && 'Transcript-current' }>
            <a onClick={() => onTranscriptSelect(i)}>{ event.speaker }: { event.text }</a>
          </li>
        ))
      }
    </div>
  );

};
