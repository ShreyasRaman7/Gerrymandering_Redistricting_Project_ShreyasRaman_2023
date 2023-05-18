import React from "react";
import { Bar } from "react-chartjs-2";
import mdData from "../data/MarylandSplit.json";
import nvData from "../data/NevadaSplit.json";
import okData from "../data/OklahomaSplit.json";
import { scaleLinear } from "chart.js/helpers";
import { Chart, registerables } from "chart.js";
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
import TableContainer from "@mui/material/TableContainer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

Chart.register(...registerables);

const SplitComparison = ({ state }) => {
  const [realLifeData, setRealLifeData] = React.useState({});
  const [generatedSplits, setGeneratedSplits] = React.useState([]);

  React.useEffect(() => {
    switch (state) {
      case "Maryland":
        setRealLifeData(mdData.realLifeData);
        setGeneratedSplits(mdData.generatedSplits);
        break;
      case "Nevada":
        setRealLifeData(nvData.realLifeData);
        setGeneratedSplits(nvData.generatedSplits);
        break;
      case "Oklahoma":
        setRealLifeData(okData.realLifeData);
        setGeneratedSplits(okData.generatedSplits);
        break;
      default:
        break;
    }
  }, [state]);

//   const maxSeats = Math.max(
//     realLifeData.republican,
//     realLifeData.democratic,
//     ...generatedSplits.map((split) => split.republican + split.democratic)
//   );

const maxSeats = Math.max(
  realLifeData.republican,
  realLifeData.democratic,
  ...(generatedSplits.length > 0
    ? generatedSplits.map((split) => split.republican + split.democratic)
    : [])
);
  const barColors = {
    republican: "rgb(220, 20, 60)",
    democratic: "rgb(15, 82, 186)",
  };

//   const flattenedSplits = generatedSplits.flatMap((split) => {
//     return [
//       { republican: split.republican, democratic: 0 },
//       { republican: 0, democratic: split.democratic },
//     ];
//   });

const flattenedSplits = generatedSplits.flatMap((split, index) => {
  return [
    {
      label: `Generated ${index + 1} Republican`,
      republican: split.republican,
      democratic: 0,
      backgroundColor: barColors.republican,
      borderColor: barColors.republican,
      borderWidth: 1,
    },
    {
      label: `Generated ${index + 1} Democratic`,
      republican: 0,
      democratic: split.democratic,
      backgroundColor: barColors.democratic,
      borderColor: barColors.democratic,
      borderWidth: 1,
    },
  ];
});

//   const data = {
//     labels: Array.from(Array(generatedSplits.length + 1).keys()).map((x) =>
//       x === 0 ? "2022 Actual Data" : `Generated ${x}`
//     ),
//     datasets: [
//       {
//         label: "Republican",
//         data: [
//           realLifeData.republican,
//           ...flattenedSplits.map((split) => split.republican),
//         ],
//         backgroundColor: barColors.republican,
//         borderColor: barColors.republican,
//         borderWidth: 1,
//       },
//       {
//         label: "Democratic",
//         data: [
//           realLifeData.democratic,
//           ...flattenedSplits.map((split) => split.democratic),
//         ],
//         backgroundColor: barColors.democratic,
//         borderColor: barColors.democratic,
//         borderWidth: 1,
//       },
//     ],
//   };

const data = {
  labels: [
    "2022 Actual Plan",
    // ...generatedSplits.map((split, index) => `Plan ${index + 1}`),
    ...generatedSplits.map((split) => split.name),
  ],
  datasets: [
    {
      label: "Republican",
      data: [
        realLifeData.republican,
        ...generatedSplits.map((split) => split.republican),
      ],
      backgroundColor: barColors.republican,
      borderColor: barColors.republican,
      borderWidth: 1,
    },
    {
      label: "Democratic",
      data: [
        realLifeData.democratic,
        ...generatedSplits.map((split) => split.democratic),
      ],
      backgroundColor: barColors.democratic,
      borderColor: barColors.democratic,
      borderWidth: 1,
    },
  ],
};

  const options = {
    scales: {
      y: {
        type: "linear",
        ticks: {
          beginAtZero: true,
          max: maxSeats,
        },
        grid: {
          drawBorder: false,
        },
        title: {
          display: true,
          text: "Seats",
          color: "black",
          font: {
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: `Republican/Democratic Splits for ${state}`,
        font: {
          size: 18,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

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
              Republican/Democratic Splits
            </Typography>
          </AccordionSummary>
          <div>
            <div>
              <pre style={{ fontSize: "1px", color: "white" }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>

            <Bar data={data} options={options} />

            <div></div>
          </div>
        </Accordion>
      }
    </div>
  );
};
export default SplitComparison;
