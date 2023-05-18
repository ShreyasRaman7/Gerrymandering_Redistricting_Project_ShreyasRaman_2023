import React from "react";
import  { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Pie } from "react-chartjs-2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GlobalStoreContext } from "../store";

import mdData from "../data/MarylandIncumbentSafeSeats.json";
import nvData from "../data/NevadaIncumbentSafeSeats.json";
import okData from "../data/OklahomaIncumbentSafeSeats.json";

const IncumbentSafeSeat = ({ state }) => {
  const { store } = useContext(GlobalStoreContext);
  if (state == "Select a State" || store.districtPlan === "2020") {
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
            Safe Seats
          </Typography>
        </AccordionSummary>
      </Accordion>
    );
  }
  let data = null;
  let disclaimer = "";

  if (state === "Maryland") {
    data = mdData;
   disclaimer =
     "Maryland is influenced by the Democratic Party.";
  } else if (state === "Nevada") {
    data = nvData;
    disclaimer =
      "Nevada is a swing state, but has recently trended towards the Democratic Party.";
  } else if (state === "Oklahoma") {
    data = okData;
    disclaimer = "Oklahoma is influenced by the Republican Party.";
  }

  const districtNames = data.incumbents.map(
    ({ district, name, party }) => `${district} (${name}, ${party})`
  );

  const getBackgroundColor = (party) => {
    return party === "Republican"
      ? "rgba(255, 99, 132, 0.2)"
      : "rgba(75, 192, 192, 0.2)";
  };

  const chartData = {
    labels: districtNames,
    datasets: [
      {
        label: "Safe Seats for ${year} ${state}",
        data: data.incumbents.map(({ safeSeats }) => safeSeats),
        backgroundColor: data.incumbents.map(({ party }) =>
          getBackgroundColor(party)
        ),
        borderColor: data.incumbents.map(({ safeSeats }) =>
          getBackgroundColor(safeSeats)
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartData2 = {
    labels: districtNames,
    datasets: [
      {
        label: "Margin of Victory for ${year} ${state} Safe Seats",
        data: data.incumbents.map(({ margin }) => margin),
        backgroundColor: data.incumbents.map(({ party }) =>
          getBackgroundColor(party)
        ),
        borderColor: data.incumbents.map(({ party }) =>
          getBackgroundColor(party)
        ),
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    plugins: {
      title: {
        display: true,
        padding: {
          bottom: 20,
        },
        text: `Margin of Victory for 2022 ${state} Districts`,
        font: {
          size: 26,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            return `${value.toFixed(2)}%`;
          },
        },
      },
      legend: {
        display: false,
        align: "center",
      },

      annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: districtNames[0],
            borderColor: "black",
            borderWidth: 1,
            label: {
              //   content: `Party in control: ${partyInControl}`,
              enabled: true,
            },
          },
        ],
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
          font: {
            size: 14,
            weight: "bold",
            family: "sans-serif",
          },
        },
        title: {
          display: true,
          text: "Margin of Victory %",
          font: {
            size: 14,
            weight: "bold",
            family: "sans-serif",
          },
        },
      },
      x: {
        type: "category",
        labels: districtNames,
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
    },
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `2022 ${state} Safe Seats`,
        font: {
          size: 30,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            if (typeof value !== "undefined") {
              return `${value.toFixed(2)}%`;
            }
            return "";
          },
        },
      },
      legend: {
        display: true,
        align: "start",
        labels: {
          boxWidth: 10,
          font: {
            size: 17,
            weight: "bold",
          },
        },
        onClick: (event, legendItem) => {},
        onHover: (event, legendItem) => {},
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: districtNames[0],
            borderColor: "black",
            borderWidth: 1,
            label: {
              //   content: `Party in control: ${partyInControl}`,
              enabled: true,
            },
          },
        ],
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          max: 1,
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Safe Seats Pie Chart",
          font: {
            size: 24,
            weight: "bold",
            family: "sans-serif",
          },
        },
      },
      x: {
        type: "category",
        labels: districtNames,
        ticks: {
          font: {
            size: 1,
            weight: "bold",
          },
        },
      },
    },
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
          Safe Seats
        </Typography>
      </AccordionSummary>
      <>
        <h4 style={{ paddingLeft: "10px" }}>{`${state} 2022`}</h4>
        <p style={{ paddingLeft: "10px" }}>{disclaimer}</p>

        <Grid
          container
          spacing={1}
          style={{ marginLeft: "2px", marginBottom: "40px" }}
        >
          <Grid item xs={6}>
            <Paper
              style={{
                background: "linear-gradient(to right, blue, lightblue)",
                height: "180px",
                width: "270px",
                paddingTop: "7px",
              }}
              elevation={3}
            >
              <Typography
                variant="h2"
                align="center"
                style={{ color: "white", fontFamily: "Impact" }}
              >
                {`${(
                  (data.incumbents.filter(({ party }) => party === "Democratic")
                    .length /
                    data.labels.length) *
                  100
                ).toFixed(1)}%`}
              </Typography>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "white", fontFamily: "Impact" }}
              >
                Democratic Safe Seats
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              style={{
                background: "linear-gradient(to right, red, pink)",
                height: "180px",
                width: "270px",
                paddingTop: "7px",
              }}
              elevation={3}
            >
              <Typography
                variant="h2"
                align="center"
                style={{ color: "white", fontFamily: "Impact" }}
              >
                {/* {`${Math.round(
                  (data.incumbents.filter(({ party }) => party === "Republican")
                    .length /
                    data.labels.length) *
                    100
                )}%`} */}
                {`${(
                  (data.incumbents.filter(({ party }) => party === "Republican")
                    .length /
                    data.labels.length) *
                  100
                ).toFixed(1)}%`}
              </Typography>
              <Typography
                variant="h4"
                align="center"
                style={{ color: "white", fontFamily: "Impact" }}
              >
                Republican Safe Seats
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Pie data={chartData} options={options} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "20vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "0px solid black",
              padding: "10px",
            }}
          >
            <canvas id="chart"></canvas>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    marginRight: "5px",
                    border: "1px solid black",
                  }}
                ></div>
                <span>Democrat</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    marginRight: "5px",
                    border: "1px solid black",
                  }}
                ></div>
                <span>Republican</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "rgba(201, 203, 207, 0.2)",
                    marginRight: "5px",
                    border: "1px solid black",
                  }}
                ></div>
                <span>Open Seat</span>
              </div>
            </div>
          </div>
        </div>

        {/* <Bar data={chartData} options={options} /> */}

        <Bar data={chartData2} options={options2} />
      </>
    </Accordion>
  );
};

export default IncumbentSafeSeat;
