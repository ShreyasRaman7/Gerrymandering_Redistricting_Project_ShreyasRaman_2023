import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { red, green, blue } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SimulatedElectionData({ state }) {
  let partyInfluence;
  if (state === "Maryland") {
    partyInfluence = "Influenced Party:  Democratic";
  } else if (state === "Nevada") {
    partyInfluence =
      "Influenced Party: Swing state, but has recently trended towards the Democratic Party.";
  } else if (state === "Oklahoma") {
    partyInfluence =
      "Influenced Party:  Republican";
  } else {
    partyInfluence = null;
  }

  const data =
    state === "Maryland"
      ? import("../data/MD_sampleInterestingDistrictPlans.json")
      : state === "Nevada"
      ? import("../data/NV_sampleInterestingDistrictPlans.json")
      : state === "Oklahoma"
      ? import("../data/OK_sampleInterestingDistrictPlans.json")
      : null;

  const [plans, setPlans] = React.useState(null);

  React.useEffect(() => {
    async function fetchPlans() {
      const response = await data;
      setPlans(response["interesting_district_plans"]);
    }
    fetchPlans();
  }, [data]);

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
          Simulated Election Data
        </Typography>
      </AccordionSummary>
      <div>
        <div
          style={{
            paddingLeft: "10px",
            paddingBottom: "10px"
          }}
        >
          <Typography variant="h5">{state}</Typography>
          {partyInfluence && (
            <Typography variant="h6">{partyInfluence}</Typography>
          )}
        </div>
        {plans &&
          plans.map((plan) => {
            const democratWinDistricts = plan.districts.filter(
              (district) => district.winner === "Democrat"
            );
            const republicanWinDistricts = plan.districts.filter(
              (district) => district.winner === "Republican"
            );

            const totalDemocratPercentage = democratWinDistricts.reduce(
              (acc, curr) => acc + curr.estimatedPercentage,
              0
            );
            const democratAverage =
              democratWinDistricts.length > 0
                ? (
                    totalDemocratPercentage / democratWinDistricts.length
                  ).toFixed(2)
                : 0;

            const totalRepublicanPercentage = republicanWinDistricts.reduce(
              (acc, curr) => acc + curr.estimatedPercentage,
              0
            );
            const republicanAverage =
              republicanWinDistricts.length > 0
                ? (
                    totalRepublicanPercentage / republicanWinDistricts.length
                  ).toFixed(2)
                : 0;

            return (
              <Accordion key={plan.name}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${plan.name}-content`}
                  id={`panel-${plan.name}-header`}
                >
                  <Typography>{`${plan.name}  `}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        background: `linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,1) 100%), 
      linear-gradient(to bottom, ${blue[400]} 0%, ${blue[700]} 100%)`,
                        border: "1px solid black",
                        padding: "10px",

                        height: "200px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6">{`When Democrat wins, Avg Win % is: ${democratAverage}%`}</Typography>
                    </div>

                    <div
                      style={{
                        background: `linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,1) 100%), 
      linear-gradient(to bottom, ${red[400]} 0%, ${red[700]} 100%)`,
                        border: "1px solid black",
                        padding: "10px",
                        height: "200px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6">{`When Republican wins, Avg Win % is: ${republicanAverage}%`}</Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "70%" }} />
                  </div>
                </AccordionDetails>

                <Grid
                  container
                  spacing={2}
                  sx={{ paddingLeft: "16px", paddingBottom: "10px" }}
                >
                  {plan.districts.map((district) => (
                    <Grid item key={district.number} xs={12} sm={6}>
                      <Card
                        variant="outlined"
                        sx={{
                          backgroundColor:
                            district.winner === "Democrat"
                              ? blue[100]
                              : district.winner === "Republican"
                              ? red[100]
                              : green[100],
                          maxWidth: "250px",
                        }}
                      >
                        <CardContent>
                          <b>
                            <Typography variant="h6">{`District ${district.number}`}</Typography>
                          </b>
                          <Typography>{`Winner: ${district.winner}`}</Typography>
                          <Typography>{`Estimated Percentage: ${district.estimatedPercentage}%`}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Accordion>
            );
          })}
      </div>
    </Accordion>
  );
}



{
  /* <div
                  style={{
                    background: `linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,1) 100%), 
              linear-gradient(to bottom, ${blue[400]} 0%, ${blue[700]} 100%)`,
                    border: "1px solid black",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">{`When Democrat wins, Avg Win % is: ${democratAverage}%`}</Typography>
                </div>

                <div
                  style={{
                    background: `linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,1) 100%), 
              linear-gradient(to bottom, ${red[400]} 0%, ${red[700]} 100%)`,
                    border: "1px solid black",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">{`When Republican wins, Avg Win % is: ${republicanAverage}%`}</Typography>
                </div> */
}