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

function IncumbentSummary(props, { data }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [incumbentSummaryData, setIncumbentSummaryData] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const { store } = useContext(GlobalStoreContext);
  const [checked, setChecked] = useState(false);

  const label = { label: "Only Incumbents" };



  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };

  // filter the incumbentSummaryData based on the "Only incumbent" toggle
  let filteredData = incumbentSummaryData;
  if (isToggleOn) {
    filteredData = incumbentSummaryData.filter(
      (incumbent) => incumbent.incumbent !== ""
    );
  }

  
  const handleIncumbentClick = (e) => {
    console.log(e);
    if(e == store.district) {
      setSelectedRowIndex(null);
      store.setDistrict(null);
    } else {
      setSelectedRowIndex(e); //sets = to incumbent's district
      store.setDistrict(e);
    }
    console.log(selectedRowIndex);
    console.log("EVENTTTTTT");
  };

  useEffect(() => {
    console.log(props);
    setSelectedState(store.state);
    console.log(selectedState + " incumbentTable");
    //setSelectedState(store.state);
    console.log(store.state + " this is store.state incumbentTable");

    if (store.state !== "") {
      axios
        .get(`http://localhost:8094/incumbentsSY/${store.state}`)
        .then((response) => {
          setIncumbentSummaryData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [store.state]);

  const handleChange = (event) => {
    setSelectedState(store.state);
  };

  const handleStateChange = (state) => {
    console.log(state);
    setSelectedState(state);
  };

  if (store.state == "Select a State" || store.districtPlan === "2020") {
    // if incumbents is null, render a loading indicator or placeholder
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
      </Accordion>
    );
  }

  return (
    <div>
      {/* <label htmlFor="stateSelect">Select a state:</label>
      <select id="stateSelect" onChange={handleChange}>
        <option value="">Select a state</option>
        <option value="Nevada">Nevada</option>
        <option value="Maryland">Maryland</option>
        <option value="Oklahoma">Oklahoma</option>
      </select> */}

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
              Incumbent Summary
            </Typography>
          </AccordionSummary>
          {/* <Typography variant="h10" sx={{ textAlign: "left", padding: "5px", ml: 2, display: "flex", alignItems: "center"}}>
            The Incumbent Summary Table shows the following incumbent information for each district: Candidate Name, Incumbent Remained, Political Party, and their Election Result in 2022
          </Typography> 
          <br/>*/}
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={isToggleOn}
                onChange={(e) => setIsToggleOn(e.target.checked)}
              />
            }
            labelPlacement="start"
            {...label}
          />
          <AccordionDetails>
            <Paper>
              <TableContainer
                component={Paper}
                style={{ maxWidth: "550px", overflow: "auto" }}
              >
                <Table
                  aria-label="summary table"
                  style={{ maxWidth: "550px", overflowX: "auto" }}
                >
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
                        Incumbent Remained{" "}
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
                        Election Result in 2022
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
                    {incumbentSummaryData.map((incumbent, row, rowIndex) => {
                      const shouldDisplay =
                        !isToggleOn ||
                        (isToggleOn && incumbent.incumbentRemained);
                      if (!shouldDisplay) {
                        return null;
                      }
                      return (
                        <TableRow
                          key={incumbent.district}
                          className={
                            store.district == incumbent.district &&
                            store.districtPlan === "2022"
                              ? "selected"
                              : ""
                          }
                          onClick={() =>
                            handleIncumbentClick(incumbent.district)
                          }
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.district}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.incumbent}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.incumbentRemained ? "Yes" : "No"}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.party}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.electionResult}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.geographicVariation}
                          </TableCell>
                          <TableCell sx={{ fontSize: "12px" }} align="left">
                            {incumbent.populationVariation}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </AccordionDetails>
        </Accordion>
      }
    </div>
  );
}

export default IncumbentSummary;
