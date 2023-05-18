import React from 'react';

const IncumbentEthnicityBarGraph = () => {
  const data = [
    { ethnicity: 'White', count: 45, color: '#1976D2' },
    { ethnicity: 'Black', count: 30, color: '#009688' },
    { ethnicity: 'Hispanic', count: 20, color: 'maroon' },
    { ethnicity: 'Asian', count: 5, color: '#E91E63' }
  ];

  const barGraphStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '250px',
    backgroundColor: '#f6f6f6',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  };

  const barStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const barLabelStyles = {
    marginRight: '10px',
    width: '20%',
    fontSize: '1.2rem'
  };

  const barPercentageStyles = {
    width: '1px',
    height: '30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.9rem',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div style={barGraphStyles}>
      <h2 style={{textAlign: 'center', fontSize: '20px'}}>Voting for Incumbent by Ethnicity</h2>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{...barLabelStyles, width: '100px'}}>Ethnicity</div>
        <div style={{...barLabelStyles, width: '100px'}}></div>
      </div>
      {data.map((d, i) => (
        <div key={i} style={barStyles}>
          <div style={{...barLabelStyles, color: d.color}}>{d.ethnicity}</div>
          <div style={{...barPercentageStyles, backgroundColor: d.color, width: `${d.count}%`}}>{d.count}%</div>
        </div>
      ))}
    </div>
  );
}

export default IncumbentEthnicityBarGraph;
