import React, { useState, useEffect, useContext } from "react";
import {Accordion,AccordionSummary,AccordionDetails,Table,TableBody,TableCell,TableHead,TableRow,Paper,Typography,} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../App.css";
import axios from "axios";
import Map from "./Map";
import { GlobalStoreContext } from "../store";
import { Switch, FormControlLabel } from "@material-ui/core";

//victor edit

function EnsembleSummary(props, { data }, districtPlan) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [ensembleSummaryData, setEnsembleSummaryData] = useState([]);
  const { store } = useContext(GlobalStoreContext);
  const [selectedDistrictPlan, setSelectedDistrictPlan] = useState("");

  const handleDistrictClick = (e) => {
    console.log(e);
    setSelectedRowIndex(e);
    console.log(e + " district summary");
  };

  useEffect(() => {
    console.log(props);
    setSelectedState(store.state);
    setSelectedDistrictPlan(store.districtPlan);

    if (store.districtPlan !== "") {
      axios
        .get(`http://localhost:8094/summaryEnsemble/${store.districtPlan}`)
        .then((response) => {
          console.log(store.districtPlan);
          setEnsembleSummaryData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [store.districtPlan]);

  const handleChange = (event) => {
    setSelectedState(store.state);
  };

  const handleStateChange = (state) => {
    console.log(state);
    setSelectedState(state);
  };

  if (!ensembleSummaryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
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
              Ensemble Summary {districtPlan}
            </Typography>
          </AccordionSummary>
          {/* <h6>Number of Districts: </h6> */}
          <ul style={{ listStyleType: "none" }}>
            {ensembleSummaryData.map((data) => (
              <li key={data.id}>
                {/* <h6>
                  <b>District Plan: </b>
                  {data.districtPlan}
                </h6> */}
                <h6>
                  <b>Number of District Plan: </b>
                  {data.numOfDistrictPlan}
                </h6>
                <h6>
                  <b>Number of Incumbent: </b>
                  {data.numOfIncumbent}
                </h6>
                <h6>
                  <b>Average Geographic Variation: </b>
                  {data.avgGeographicVariation}
                </h6>
                <h6>
                  <b>Average Population Variation: </b>
                  {data.avgPopulationVariation}
                </h6>
              </li>
            ))}
          </ul>
          {/* <AccordionDetails>
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
                      Incumbent Predicted to win{" "}
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
                      Geographic Variation %
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "bold", fontSize: "12px" }}
                      align="left"
                    >
                      Population Variation %
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ensembleSummaryData.map((ensembleSummary, row, rowIndex) => (
                    <TableRow
                      key={ensembleSummary.district}
                      onClick={() => handleDistrictClick(rowIndex)}
                    >
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {ensembleSummary.district}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {ensembleSummary.incumbent}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {ensembleSummary.party}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {ensembleSummary.geographicVariation}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {ensembleSummary.populationVariation}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </AccordionDetails> */}
        </Accordion>
      }
    </div>
  );
}

export default EnsembleSummary;
