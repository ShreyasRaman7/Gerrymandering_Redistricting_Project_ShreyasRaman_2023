import React from 'react';
import Plot from 'react-plotly.js';

const IncumbentBoxAndWhiskerChart = ({ data, basis }) => {
  const layout = {
    title: 'Geographic Variation Box & Whisker Chart',
    xaxis: { title: 'Districts' },
    // yaxis: { title: basis },
    yaxis: { title: 'Geographic Variation' },
    legend: { title: 'Legend' },
  };

  const traces = [];

  // Add box & whisker traces for each basis
  data.forEach((districtData, index) => {
    const trace = {
      type: 'box',
      name: `District ${index + 1}`,
      boxpoints: 'all',
      jitter: 0.3,
      pointpos: -1.8,
      y: districtData,
      marker: {
        size: 5,
      },
    };

    traces.push(trace);
  });

  // Add incumbents as scatter points
  const incumbentTrace = {
    type: 'scatter',
    mode: 'markers',
    x: data.map((_, index) => `District ${index + 1}`),
    y: data.map((districtData) => districtData[0]),
    marker: {
      size: 10,
      color: 'black',
    },
    name: 'Incumbents',
  };

  traces.push(incumbentTrace);

  return <Plot data={traces} layout={layout} />;
};

export default IncumbentBoxAndWhiskerChart;