import React from 'react';
import './Transcript.css';

export default ({ events, currentEvent, onTranscriptSelect }) => {

  return (
    <div className="Transcript">
      <ul>
      {
        events.map((event, i) => (
          <li className={ i === currentEvent && 'Transcript-current' }>
            <a onClick={() => onTranscriptSelect(i)}><em>({ event.time }s)</em> <strong>{ event.speaker }:</strong> { event.text }</a>
          </li>
        ))
      }
      </ul>
    </div>
  );

};
