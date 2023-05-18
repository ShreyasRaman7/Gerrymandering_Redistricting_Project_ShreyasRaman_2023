import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import App from '../App.css'

function createData(district, name, party, electionResult, geographicVariation, populationVariation) {
  return { district, name, party, electionResult, geographicVariation, populationVariation };
}

const SummaryTable = ({ data }, state) => {
  const [selectedState, setSelectedState] = useState(state);

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleIncumbentClick = e => {
    console.log("Incumbent Summary Table Row -> e: ", e);
    setSelectedRowIndex(e);   
    console.log("Current State: ", state);
    console.log("EVENTTTTTT");
  }

  fetch("/incumbentsSY/" + identifier)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });


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
          Incumbent Summary
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper>
          <Table aria-label="summary table" style={{ maxWidth: "550px" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  District{" "}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  Candidate Name{" "}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  Party
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  Election Result
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  Geographic Variation
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                  align="left"
                >
                  Population Variation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow
                  key={row.name}
                  className={selectedRowIndex === rowIndex ? "selected" : ""}
                  onClick={() => handleIncumbentClick(rowIndex)}
                >
                  <TableCell
                    sx={{ fontSize: "12px" }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    {row.district}
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }} align="left">
                    {row.party}
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }} align="left">
                    {row.electionResult}
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }} align="left">
                    {row.geographicVariation}
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }} align="left">
                    {row.populationVariation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
};

export default SummaryTable;
