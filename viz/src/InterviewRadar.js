import React from 'react';
import { Radar } from 'react-pathjs-chart';

const options = {
  width: 300,
  height: 300,
  margin: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  r: 100,
  max: 150,
  fill: "#2980B9",
  stroke: "#2980B9",
  animate: {
    type: 'oneByOne',
    duration: 200
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: true,
    fill: '#34495E'
  }
};

export default ({ overallStats }) => (
    <Radar data={[overallStats]} options={options} />
);
