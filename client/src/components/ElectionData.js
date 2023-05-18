import React, { useState, useEffect, useContext } from "react";
import { TableContainer } from '@mui/material';
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
import { GlobalStoreContext } from "../store";


const ElectionData = ({ state, district, year }) => {

  const { store } = useContext(GlobalStoreContext);
  console.log(store.state+"  electionData.js");
  console.log(store.district+" electionData.js");
  console.log(year);
  let data;

  if (store.state == "Select a State" || store.districtPlan === "2020") {
    // if incumbents is null, render a loading indicator or placeholder
    return 
    //   <Accordion
    //     style={{
    //       marginBottom: "20px",
    //       marginTop: "10px",
    //       borderRadius: "10px",
    //       boxShadow: "5px",
    //     }}
    //   >
    //     <AccordionSummary
    //       expandIcon={<KeyboardArrowDownIcon />}
    //       aria-controls="panel-content"
    //     >
    //       <Typography variant="h5" sx={{ mr: 2 }}>
    //         District Details 2022
    //       </Typography>
    //     </AccordionSummary>
    //   </Accordion>
    // );
  }
  

  switch (store.state) {
    case "Nevada":
      switch (store.district) {
        case 1:
          console.log("nevada 1 work");
          data =
             [
                  // Nevada 2022 data for district 1
                  {
                    key: "Nevada-1",
                    state: "Nevada",
                    district: 1,
                    incumbent: "Dina Titus",
                    incumbentRemained: true,
                    party: "Democratic",
                    electionResult: "W",
                    geographicVariation: "No Changes",
                    populationVariation: "6.3%",
                  },
                ];
          break;
        case 2:
          console.log("nevada 2 work");
          data =
             [
                  // Nevada 2022 data for district 2
                  {
                    key: "Nevada-2",
                    state: "Nevada",
                    district: 2,
                    incumbent: "Mark Amodei",
                    incumbentRemained: true,
                    party: "Republican",
                    electionResult: "W",
                    geographicVariation: "No Changes",
                    populationVariation: "2.7%",
                  },
                ];
          break;
        case 3:
          console.log("nevada 3 work");
          data =
             [
                  // Nevada 2022 data for district 3
                  {
                    key: "Nevada-3",
                    state: "Nevada",
                    district: 3,
                    incumbent: "Susie Lee",
                    incumbentRemained: true,
                    party: "Democratic",
                    electionResult: "W",
                    geographicVariation: "No Changes",
                    populationVariation: "5.5%",
                  },
                ];
          break;
        case 4:
          console.log("nevada 4 work");
          data =
             [
                  // Nevada 2022 data for district 4
                  {
                    key: "Nevada-4",
                    state: "Nevada",
                    district: 4,
                    incumbent: "Steven Horsford",
                    incumbentRemained: true,
                    party: "Democratic",
                    electionResult: "W",
                    geographicVariation: "No Changes",
                    populationVariation: "5.6%",
                  },
                ];
          break;
        default:
          data = [];
      }
      break;
     case "Oklahoma":
        console.log("state oklahoma test");
        switch (store.district) {
          case "1":
            console.log("oklahoma work "+store.district);
            data =
               [
                    // Oklahoma 2022 data for district 1
                    {
                      key: "Oklahoma-1",
                      state: "Oklahoma",
                      district: 1,
                      incumbent: "Kevin Hern",
                      incumbentRemained: true,
                      party: "Republican",
                      electionResult: "W",
                      geographicVariation: "No Changes",
                      populationVariation: "3.1%",
                    },
                  ];
            break;
          case "2":
            data =
               [
                    // Oklahoma 2022 data for district 2
                    {
                      key: "Oklahoma-2",
                      state: "Oklahoma",
                      district: 2,
                      incumbent: "Markwayne Mullin",
                      incumbentRemained: true,
                      party: "Republican",
                      electionResult: "W",
                      geographicVariation: "No Changes",
                      populationVariation: "2.7%",
                    },
                  ];
            break;
          case "3":
            data =
               [
                    // Oklahoma 2022 data for district 3
                    {
                      key: "Oklahoma-3",
                      state: "Oklahoma",
                      district: 3,
                      incumbent: "Frank Lucas",
                      incumbentRemained: true,
                      party: "Republican",
                      electionResult: "W",
                      geographicVariation: "No Changes",
                      populationVariation: "2.2%",
                    },
                  ];
            break;
          case "4":
            data =
               [
                    // Oklahoma 2022 data for district 4
                    {
                      key: "Oklahoma-4",
                      state: "Oklahoma",
                      district: 4,
                      incumbent: "Tom Cole",
                      incumbentRemained: true,
                      party: "Republican",
                      electionResult: "W",
                      geographicVariation: "No Changes",
                      populationVariation: "0.3%",
                    },
                  ];
            break;
          case "5":
            data =
               [
                    // Oklahoma 2022 data for district 5
                    {
                      key: "Oklahoma-5",
                      state: "Oklahoma",
                      district: 5,
                      incumbent: "Stephanie Bice",
                      incumbentRemained: true,
                      party: "Republican",
                      electionResult: "W",
                    },
                  ];
            break;
          default:
            data = [];
        }
        break;

    case 'Maryland':
          switch (store.district) {
            case "1":
              data = [
                // Maryland 2022 data for district 1
                {
                  key: "Maryland-1",
                  state: "Maryland",
                  district: 1,
                  incumbent: "Andy Harris",
                  incumbentRemained: true,
                  party: "Republican",
                  electionResult: "W",
                  geographicVariation: "11.9%",
                  populationVariation: "12.3%",
                  population: "745,963",
                  MedianHousehold: "$ 55,335",
                  Black: "56.3%",
                  White: "29.9%",
                  Hispanic: "8.5%",
                  Asian: "4.6%",
                  NativeAmerican: "2.0%",
                  PacificIslander: "0.1%",
                },
              ];
              break;
            case "2":
              data = [
                // Maryland 2022 data for district 2
                {
                  key: "Maryland-2",
                  state: "Maryland",
                  district: 2,
                  incumbent: "C.A. Dutch Ruppersberger",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "66.1%",
                  populationVariation: "44.9%",
                  population: "758,512",
                  MedianHousehold: "$ 80,653",
                  Black: "29.6%",
                  White: "54.2%",
                  Hispanic: "8.9%",
                  Asian: "9.2%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                 
                },
              ];
              break;
            case "3":
              data = [
                // Maryland 2022 data for district 3
                {
                  key: "Maryland-3",
                  state: "Maryland",
                  district: 3,
                  incumbent: "John Sarbanes",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "59.1%",
                  populationVariation: "43.1%",
                  population: "781,426",
                  MedianHousehold: "$ 97,819",
                  Black: "9.6%",
                  White: "62.4%",
                  Hispanic: "8.6%",
                  Asian: "18.4%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                  
                },
              ];
              break;
            case "4":
              data = [
                // Maryland 2022 data for district 4
                {
                  key: "Maryland-4",
                  state: "Maryland",
                  district: 4,
                  incumbent: "Glenn Ivey",
                  incumbentRemained: false,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "1.1%",
                  populationVariation: "7.2%",
                  population: "788,426",
                  MedianHousehold: "$ 88,693",
                  Black: "46.1%",
                  White: "33.9%",
                  Hispanic: "10.6%",
                  Asian: "8.2%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                  
                },
              ];
              break;
            case "5":
              data = [
                // Maryland 2022 data for district 5
                {
                  key: "Maryland-5",
                  state: "Maryland",
                  district: 5,
                  incumbent: "Steny Hoyer",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "79.4%",
                  populationVariation: "51.5%",
                  population: "740,136",
                  MedianHousehold: "$ 100,746",
                  Black: "34.5%",
                  White: "36.6%",
                  Hispanic: "5.4%",
                  Asian: "23.4%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                  
                },
              ];
              break;
            case "6":
              data = [
                // Maryland 2022 data for district 6
                {
                  key: "Maryland-6",
                  state: "Maryland",
                  district: 6,
                  incumbent: "David Trone",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "80.9%",
                  populationVariation: "37.7%",
                  population: "765,162",
                  MedianHousehold: "$ 90,543",
                  Black: "13.9%",
                  White: "74.2%",
                  Hispanic: "7.9%",
                  Asian: "3.2%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
               
                },
              ];
              break;
            case "7":
              data = [
                // Maryland 2022 data for district 7
                {
                  key: "Maryland-7",
                  state: "Maryland",
                  district: 7,
                  incumbent: "Kweisi Mfume",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "6.2%",
                  populationVariation: "49.6%",
                  population: "765,806",
                  MedianHousehold: "$ 51,224",
                  Black: "58.8%",
                  White: "32.3%",
                  Hispanic: "5.7%",
                  Asian: "6.3%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                 
                },
              ];
              break;
            case "8":
              data = [
                // Maryland 2022 data for district 8
                {
                  key: "Maryland-8",
                  state: "Maryland",
                  district: 8,
                  incumbent: "Jamie Raskin",
                  incumbentRemained: true,
                  party: "Democratic",
                  electionResult: "W",
                  geographicVariation: "42.8%",
                  populationVariation: "21.1%",
                  population: "766,801",
                  MedianHousehold: "$ 123,388",
                  Black: "37.9%",
                  White: "45.6%",
                  Hispanic: "8.4%",
                  Asian: "8.6%",
                  NativeAmerican: "0.1%",
                  PacificIslander: "0.1%",
                },
              ];
              break;
            default:
              data = [];
          }
          break;

    default:
      data = [];
  }
  

  console.log(data);

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
        District Details {year}
      </Typography>
    </AccordionSummary>
    <ul style={{ listStyleType: "none" }}>
      {data.map((d) => (
        <li key={`${d.key}-${d.district}`}>
          <h6>
            <b>State: </b>
            {d.state}
          </h6>
          <h6>
            <b>District: </b>
            {d.district}
          </h6>
          <h6>
            <b>Incumbent: </b>
            {d.incumbent}
          </h6>
          <h6>
            <b>Incumbent Remained: </b>
            {d.incumbentRemained ? "Yes" : "No"}
          </h6>
          <h6>
            <b>Party: </b>
            {d.party}
          </h6>
          <h6>
            <b>Election Result: </b>
            {d.electionResult}
          </h6>
          <h6>
            <b>Median Household Income: </b>
            {d.MedianHousehold}
          </h6>
          <h6>
            <b>Total Population: </b>
            {d.population}
          </h6>
          <h6>
            <b>Black: </b>
            {d.Black}
          </h6>
          <h6>
            <b>White: </b>
            {d.White}
          </h6>
          <h6>
            <b>Hispanic: </b>
            {d.Hispanic}
          </h6>
          <h6>
            <b>Asian: </b>
            {d.Asian}
          </h6>
          <h6>
            <b>Native American: </b>
            {d.NativeAmerican}
          </h6>
          <h6>
            <b>Pacific Islander: </b>
            {d.PacificIslander}
          </h6>
        </li>
      ))}
    </ul>

    {/* <AccordionDetails>
      <div>
        <h2>{`${state}-${district} (${year})`}</h2>

        <TableContainer
          component={Paper}
          style={{ maxWidth: "550px", overflow: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ fontWeight: "bold", fontSize: "12px" }}>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  State
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  District
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Incumbent
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Incumbent Remained
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Party
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Election Result
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Geographic Variation
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "12px" }}>
                  Population Variation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow key={d.key}>
                  <TableCell>{d.state}</TableCell>
                  <TableCell>{d.district}</TableCell>
                  <TableCell>{d.incumbent}</TableCell>
                  <TableCell>{d.incumbentRemained ? "Yes" : "No"}</TableCell>
                  <TableCell>{d.party}</TableCell>
                  <TableCell>{d.electionResult}</TableCell>
                  <TableCell>{d.geographicVariation}</TableCell>
                  <TableCell>{d.populationVariation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </AccordionDetails> */}
  </Accordion>
);
};

export default ElectionData;



// case 'Maryland':
//       switch (district) {
//         case 1:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 1
//             {
//                 key: 'Maryland-1',
//                 state: 'Maryland',
//                 district: 1,
//                 incumbent: 'Andy Harris',
//                 incumbentRemained: true,
//                 party: 'Republican',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '0.2%',
//               }
//           ] : [
//             // Maryland 2022 data for district 1
//             {
//                 key: 'Maryland-1',
//                 state: 'Maryland',
//                 district: 1,
//                 incumbent: 'Andy Harris',
//                 incumbentRemained: true,
//                 party: 'Republican',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '2.2%',
//               }
//           ];
//           break;
//         case 2:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 2
//             {
//                 key: 'Maryland-2',
//                 state: 'Maryland',
//                 district: 2,
//                 incumbent: 'C.A. Dutch Ruppersberger',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '3.3%',
//               }
//           ] : [
//             // Maryland 2022 data for district 2
//             {
//                 key: 'Maryland-2',
//                 state: 'Maryland',
//                 district: 2,
//                 incumbent: 'C.A. Dutch Ruppersberger',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '4.4%',
//               }
//           ];
//           break;
//         case 3:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 3
//             {
//               key: 'Maryland-3',
//               state: 'Maryland',
//               district: 3,
//               incumbent: 'John Sarbanes',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '4.4%',
//             }
//           ] : [
//             // Maryland 2022 data for district 3
//             {
//               key: 'Maryland-3',
//               state: 'Maryland',
//               district: 3,
//               incumbent: 'John Sarbanes',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '5.5%',
//             }
//           ];
//           break;
//         case 4:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 4
//             {
//               key: 'Maryland-4',
//               state: 'Maryland',
//               district: 4,
//               incumbent: 'Anthony Brown',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '3.3%',
//             }
//           ] : [
//             // Maryland 2022 data for district 4
//             {
//                 key: 'Maryland-4',
//                 state: 'Maryland',
//                 district: 4,
//                 incumbent: 'Anthony Brown',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '4.4%',
//               }
//           ];
//           break;
//         case 5:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 5
//             {
//               key: 'Maryland-5',
//               state: 'Maryland',
//               district: 5,
//               incumbent: 'Steny Hoyer',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '3.3%',
//             }
//           ] : [
//             // Maryland 2022 data for district 5
//             {
//                 key: 'Maryland-5',
//                 state: 'Maryland',
//                 district: 5,
//                 incumbent: 'Steny Hoyer',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '4.4%',
//               }
//           ];
//           break;
//         case 6:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 6
//             {
//                 key: 'Maryland-6',
//                 state: 'Maryland',
//                 district: 6,
//                 incumbent: 'David Trone',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '2.8%',
//               }
//           ] : [
//             // Maryland 2022 data for district 6
//             {
//               key: 'Maryland-6',
//               state: 'Maryland',
//               district: 6,
//               incumbent: 'David Trone',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '2.2%',
//             }
//           ];
//           break;
//         case 7:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 7
//             {
//               key: 'Maryland-7',
//               state: 'Maryland',
//               district: 7,
//               incumbent: 'Kweisi Mfume',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '0.9%',
//             }
//           ] : [
//             // Maryland 2022 data for district 7
//             {
//                 key: 'Maryland-7',
//                 state: 'Maryland',
//                 district: 7,
//                 incumbent: 'Kweisi Mfume',
//                 incumbentRemained: true,
//                 party: 'Democratic',
//                 electionResult: 'W',
//                 geographicVariation: 'No Changes',
//                 populationVariation: '2.2%',
//               }
//           ];
//           break;
//         case 8:
//           data = (year === 2020) ? [
//             // Maryland 2020 data for district 8
//             {
//               key: 'Maryland-8',
//               state: 'Maryland',
//               district: 8,
//               incumbent: 'Jamie Raskin',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '5.6%',
//             }
//           ] : [
//             // Maryland 2022 data for district 8
//             {
//               key: 'Maryland-8',
//               state: 'Maryland',
//               district: 8,
//               incumbent: 'Jamie Raskin',
//               incumbentRemained: true,
//               party: 'Democratic',
//               electionResult: 'W',
//               geographicVariation: 'No Changes',
//               populationVariation: '6.6%',
//             }
//           ];
//           break;
//         default:
//           data = [];
//       }
//       break;



// case "Nevada":
//       switch (store.district) {
//         case 1:
//           data =
//             year === 2020
//               ? [
//                   // Nevada 2020 data for district 1
//                   {
//                     key: "Nevada-1",
//                     state: "Nevada",
//                     district: 1,
//                     incumbent: "Dina Titus",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "6.3%",
//                   },
//                 ]
//               : [
//                   // Nevada 2022 data for district 1
//                   {
//                     key: "Nevada-1",
//                     state: "Nevada",
//                     district: 1,
//                     incumbent: "Dina Titus",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "6.3%",
//                   },
//                 ];
//           break;
//         case 2:
//           data =
//             year === 2020
//               ? [
//                   // Nevada 2020 data for district 2
//                   {
//                     key: "Nevada-2",
//                     state: "Nevada",
//                     district: 2,
//                     incumbent: "Mark Amodei",
//                     incumbentRemained: true,
//                     party: "Republican",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "3.3%",
//                   },
//                 ]
//               : [
//                   // Nevada 2022 data for district 2
//                   {
//                     key: "Nevada-2",
//                     state: "Nevada",
//                     district: 2,
//                     incumbent: "Mark Amodei",
//                     incumbentRemained: true,
//                     party: "Republican",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "2.7%",
//                   },
//                 ];
//           break;
//         case 3:
//           data =
//             year === 2020
//               ? [
//                   // Nevada 2020 data for district 3
//                   {
//                     key: "Nevada-3",
//                     state: "Nevada",
//                     district: 3,
//                     incumbent: "Susie Lee",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "5.1%",
//                   },
//                 ]
//               : [
//                   // Nevada 2022 data for district 3
//                   {
//                     key: "Nevada-3",
//                     state: "Nevada",
//                     district: 3,
//                     incumbent: "Susie Lee",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "5.5%",
//                   },
//                 ];
//           break;
//         case 4:
//           data =
//             year === 2020
//               ? [
//                   // Nevada 2020 data for district 4
//                   {
//                     key: "Nevada-4",
//                     state: "Nevada",
//                     district: 4,
//                     incumbent: "Steven Horsford",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "5.1%",
//                   },
//                 ]
//               : [
//                   // Nevada 2022 data for district 4
//                   {
//                     key: "Nevada-4",
//                     state: "Nevada",
//                     district: 4,
//                     incumbent: "Steven Horsford",
//                     incumbentRemained: true,
//                     party: "Democratic",
//                     electionResult: "W",
//                     geographicVariation: "No Changes",
//                     populationVariation: "5.6%",
//                   },
//                 ];
//           break;
//         default:
//           data = [];
//       }
//       break;


  //  case "Oklahoma":
  //     console.log("state oklahoma test");
  //     switch (store.district) {
  //       case 1:
  //         console.log("oklahoma work "+store.district);
  //         data =
  //           year === 2020
  //             ? [
  //                 // Oklahoma 2020 data for district 1
  //                 {
  //                   key: "Oklahoma-1",
  //                   state: "Oklahoma",
  //                   district: 1,
  //                   incumbent: "Kevin Hern",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "0.5%",
  //                 },
  //               ]
  //             : [
  //                 // Oklahoma 2022 data for district 1
  //                 {
  //                   key: "Oklahoma-1",
  //                   state: "Oklahoma",
  //                   district: 1,
  //                   incumbent: "Kevin Hern",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "3.1%",
  //                 },
  //               ];
  //         break;
  //       case 2:
  //         data =
  //           year === 2020
  //             ? [
  //                 // Oklahoma 2020 data for district 2
  //                 {
  //                   key: "Oklahoma-2",
  //                   state: "Oklahoma",
  //                   district: 2,
  //                   incumbent: "Markwayne Mullin",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "3.3%",
  //                 },
  //               ]
  //             : [
  //                 // Oklahoma 2022 data for district 2
  //                 {
  //                   key: "Oklahoma-2",
  //                   state: "Oklahoma",
  //                   district: 2,
  //                   incumbent: "Markwayne Mullin",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "2.7%",
  //                 },
  //               ];
  //         break;
  //       case 3:
  //         data =
  //           year === 2020
  //             ? [
  //                 // Oklahoma 2020 data for district 3
  //                 {
  //                   key: "Oklahoma-3",
  //                   state: "Oklahoma",
  //                   district: 3,
  //                   incumbent: "Frank Lucas",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "2.4%",
  //                 },
  //               ]
  //             : [
  //                 // Oklahoma 2022 data for district 3
  //                 {
  //                   key: "Oklahoma-3",
  //                   state: "Oklahoma",
  //                   district: 3,
  //                   incumbent: "Frank Lucas",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "2.2%",
  //                 },
  //               ];
  //         break;
  //       case 4:
  //         data =
  //           year === 2020
  //             ? [
  //                 // Oklahoma 2020 data for district 4
  //                 {
  //                   key: "Oklahoma-4",
  //                   state: "Oklahoma",
  //                   district: 4,
  //                   incumbent: "Tom Cole",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "-0.8%",
  //                 },
  //               ]
  //             : [
  //                 // Oklahoma 2022 data for district 4
  //                 {
  //                   key: "Oklahoma-4",
  //                   state: "Oklahoma",
  //                   district: 4,
  //                   incumbent: "Tom Cole",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "0.3%",
  //                 },
  //               ];
  //         break;
  //       case 5:
  //         data =
  //           year === 2020
  //             ? [
  //                 // Oklahoma 2020 data for district 5
  //                 {
  //                   key: "Oklahoma-5",
  //                   state: "Oklahoma",
  //                   district: 5,
  //                   incumbent: "Stephanie Bice",
  //                   incumbentRemained: false,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                   geographicVariation: "No Changes",
  //                   populationVariation: "2.1%",
  //                 },
  //               ]
  //             : [
  //                 // Oklahoma 2022 data for district 5
  //                 {
  //                   key: "Oklahoma-5",
  //                   state: "Oklahoma",
  //                   district: 5,
  //                   incumbent: "Stephanie Bice",
  //                   incumbentRemained: true,
  //                   party: "Republican",
  //                   electionResult: "W",
  //                 },
  //               ];
  //         break;
  //       default:
  //         data = [];
  //     }
  //     break;