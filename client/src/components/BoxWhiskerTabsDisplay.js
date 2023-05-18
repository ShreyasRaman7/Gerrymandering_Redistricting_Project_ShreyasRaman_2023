import * as React from "react";
import  { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BoxWhiskerChart from "./BoxWhiskerChart";
import { GlobalStoreContext } from "../store";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { store } = useContext(GlobalStoreContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Accordion
    style={{
      marginBottom: "20px",
      marginTop: "10px",
      borderRadius: "10px",
      boxShadow: "5px",
    }}
  >
    <AccordionSummary
      expandIcon={<KeyboardArrowDownIcon />}
      aria-controls="panel-content"
    >
      <Typography variant="h5" sx={{ mr: 2 }}>
        Box and Whisker
      </Typography>
    </AccordionSummary>
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Geometric Variation" {...a11yProps(0)} />
          <Tab label="Population Variation" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Geometric Variation
        <BoxWhiskerChart stateInput={store.state} type="geometric" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Population Variation
        <BoxWhiskerChart stateInput={store.state} type="population" />
      </TabPanel>
    </Box>
    </Accordion>
  );
}
