import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const data = [
  {
    name: "Rep. Incumb",
    "Won Seats": 10,
    "Lost Seats": 2,
    "Open Seats": 5,
  },
  {
    name: "Dem. Incumb",
    "Won Seats": 8,
    "Lost Seats": 4,
    "Open Seats": 3,
  },
  {
    name: "Rep. Open",
    "Won Seats": 5,
    "Lost Seats": 7,
    "Open Seats": 10,
  },
  {
    name: "Dem. Open",
    "Won Seats": 6,
    "Lost Seats": 6,
    "Open Seats": 10,
  },
];

const colors = ["#FF4136", "#0074D9", "#FF851B"];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const IncumbentSafeGraph = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{ marginBottom: "20px", marginTop: "10px", borderRadius:"10px", boxShadow:"5px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" sx={{ mr: 2 }}>Safe Seats</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BarChart
            width={560}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Won Seats" fill={colors[0]} stackId="a" />
            <Bar dataKey="Lost Seats" fill={colors[1]} stackId="a" />
            <Bar dataKey="Open Seats" fill={colors[2]} stackId="a" />
          </BarChart>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default IncumbentSafeGraph;