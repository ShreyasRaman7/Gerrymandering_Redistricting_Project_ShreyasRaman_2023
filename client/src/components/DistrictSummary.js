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

function DistrictSummary(props, { data }, districtPlan) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [districtSummaryData, setDistrictSummaryData] = useState([]);
  const { store } = useContext(GlobalStoreContext);
  const [selectedDistrictPlan, setSelectedDistrictPlan] = useState("");


  

  const handleDistrictClick = (e) => {
    console.log(e);
    setSelectedRowIndex(e);
    console.log(e+" district summary");
  };

  useEffect(() => {
    console.log(props);
    setSelectedState(store.state);
    setSelectedDistrictPlan(store.districtPlan);
    
    if (store.districtPlan !== "") {
      axios
        .get(`http://localhost:8094/districtSummary/${store.districtPlan}`)
        .then((response) => {
          console.log(store.districtPlan);
          setDistrictSummaryData(response.data);
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

  if (!districtSummaryData) {
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
              District Summary {districtPlan}
            </Typography>
          </AccordionSummary>
          {/* <h6>Number of Districts: </h6> */}
          <AccordionDetails>
            <Paper>
              <Table aria-label="summary table" style={{ maxWidth: "550px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      State
                    </TableCell>
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
                      Incumbent{" "}
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
                      Geometric Variation %
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
                  {districtSummaryData.map((districtSummary, row, rowIndex) => (
                    <TableRow
                      key={districtSummary.district}
                      onClick={() => handleDistrictClick(rowIndex)}
                    >
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.state}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.district}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.incumbent}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.party}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.geometricVariation}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }} align="left">
                        {districtSummary.populationVariation}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </AccordionDetails>
        </Accordion>
      }
    </div>
  );
}

export default DistrictSummary;
