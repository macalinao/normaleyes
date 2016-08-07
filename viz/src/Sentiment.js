import React from 'react';
import { Bar } from 'react-pathjs-chart';

const adaptEventStatsToBar = (eventStats) => {
  return Object.keys(eventStats).map((key) => [{
    name: key,
    v: eventStats[key],
  }]);
};

const options = {
  width: 300,
  height: 200,
  margin: {
    top: 0,
    left: 0,
    bottom: 70,
    right: 0
  },
  color: '#2980B9',
  gutter:20,
  animate:{
  type:'oneByOne',
  duration:200,
  fillTransition:3
  },
  axisX: {
  showAxis: true,
  showLines: true,
  showLabels: true,
  showTicks: true,
  zeroAxis: false,
  orient: 'bottom',
  label:{
  fontFamily:'Arial',
  fontSize:14,
  fontWeight:true,
  fill:'#34495E'
  }
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'left',
    label:{
      fontFamily:'Arial',
      fontSize:14,
      fontWeight:true,
      fill:'#34495E'
    }
  }
};

export default ({ event }) => {
  if (typeof event === 'undefined') {
    return <div />;
  } else {
    return <Bar accessorKey="v" data={adaptEventStatsToBar(event.stats)} options={options} />;
  }
};
