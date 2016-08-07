import React from 'react';

export default ({ events }) => (
  <div>
    {
      events.map((event) => (
        <li>{ event.speaker }: { event.text }</li>
      ))
    }
  </div>
)
