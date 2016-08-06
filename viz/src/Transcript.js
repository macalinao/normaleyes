import React from 'react';

export default ({ events }) => (
  <div>
    <h1>Transcript</h1>
    {
      events.map((event) => (
        <li>{ event.speaker }: { event.text }</li>
      ))
    }
  </div>
)
