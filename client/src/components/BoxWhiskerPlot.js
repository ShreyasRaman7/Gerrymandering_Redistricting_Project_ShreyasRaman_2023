import React, { useState } from 'react';
import IncumbentBoxAndWhiskerChart from './IncumbentBoxAndWhiskerChart';
import DemographicBoxAndWhiskerChart from './DemographicBoxAndWhiskerChart';
import { Tabs, Tab, Box } from '@material-ui/core';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BoxWhiskerPlot = () => {
  const incumbentData = [
    [45, 50, 55, 60, 65],
    [44, 47, 52, 58, 64],
    [47, 50, 55, 58, 62],
    [43, 49, 53, 59, 65],
    [46, 51, 56, 59, 64],
    // Add more data for additional district plans
  ];

  const demographicData = [
    {
      race: [45, 50, 55, 60, 65],
      income: [60000, 65000, 70000, 75000, 80000],
      age: [30, 35, 40, 45, 50],
    },
    {
      race: [44, 47, 52, 58, 64],
      income: [55000, 60000, 65000, 70000, 75000],
      age: [35, 40, 45, 50, 55],
    },
    // Add more objects for additional district plans
  ];

  const incumbentBasis = 'Population Variation';
  const demographicBasis = 'Geometric Variation';
  const [expanded, setExpanded] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ width: "100%" }}>
      <Accordion expanded={expanded} onChange={handleExpand} style={{ marginBottom: "20px", borderRadius:"10px", boxShadow:"5px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="chart-content"
          id="chart-header"
        >
          <Typography variant="h5">Box and Whisker Plot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <div>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label="chart tabs">
        <Tab label="Geographic Variation" />
        <Tab label="Population Variation" />
      </Tabs>
      <Box hidden={selectedTab !== 0}>
        
        <IncumbentBoxAndWhiskerChart data={incumbentData} basis={incumbentBasis} />
      </Box>
      <Box hidden={selectedTab !== 1}>
        <DemographicBoxAndWhiskerChart data={incumbentData} basis={incumbentBasis} />
      </Box>
    </div>
            
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
};

export default BoxWhiskerPlot;
