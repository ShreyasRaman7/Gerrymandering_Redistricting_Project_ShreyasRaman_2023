// import React from "react";
// import ReactDOM from "react-dom";
// import ReactApexChart from "react-apexcharts";

// class BoxWhiskerChart extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("props.type", props.type);

//     let testData2 = {};
//     switch (props.type) {
//       case "population":
//         console.log("test props type", props.type);
//         break;
//       case "geometric":
//         console.log("test props type", props.type);
//         break;
//       default:
//         break;
//     }
//     switch (props.stateInput) {
//       case "Maryland":
//         testData2 = require("../data/md_boxWhisker.json");
//         testData2 = testData2[props.type];
//         console.log("testData2", testData2);
//         console.log("props.type::", props.type);
//         break;
//       case "Nevada":
//         testData2 = require("../data/nv_boxWhisker.json");
//         testData2 = testData2[props.type];

//         console.log("testData2", testData2);
//         console.log("props.type::", props.type);
//         console.log("testData2[props.type]:", testData2[props.type]);
//         break;
//       case "Oklahoma":
//         testData2 = require("../data/ok_boxWhisker.json");
//         testData2 = testData2[props.type];
//         console.log("testData2", testData2);
//         break;
//       default:
//         testData2 = require("../data/md_boxWhisker.json"); 
//         break;
//     }

//     this.state = {
//       series: [
//         {
//           name: "box",
//           type: "boxPlot",
//           data: testData2.boxData,
//         },
//         {
//           name: "outliers",
//           type: "scatter",
//           data: testData2.outliersData,
//         },
//         {
//           name: "trendline",
//           type: "line",
//           data: testData2.outliersData,
//         },
//       ],
//       options: {
//         chart: {
//           type: "boxPlot",
//           height: 350,
//         },
//         colors: ["#008FFB", "#FEB019"],
//         // title: {
//         //   text: "Box and Whisker Chart with Dots",
//         //   align: "left",
//         // },
//         xaxis: {
//           type: "category",
//           floating: false,
//           tickAmount: 5,
//           categories: ["1", "2", "3", "4", "5"],
//           title: {
//             text: "District Plans",
//           },
//         },
//         yaxis: {
//           title: {
//             text: "% Variation",
//           },
//           min: 0,
//           max: 100,
//         },
//         tooltip: {
//           shared: false,
//           intersect: true,
//         },
//       },
//     };
//   }

//   render() {
//     const { stateInput, type } = this.props;

//     let stateOptions = {};
//     switch (stateInput) {
//       case "Maryland":
//         stateOptions = {
//           yaxis: {
//             title: {
//               text: "% Variation",
//             },
//             min: 0,
//             max: 100,
//           },
//         };
//         break;
//       case "Nevada":
//         switch (type) {
//           case "geometric":
//             stateOptions = {
//               yaxis: {
//                 title: {
//                   text: "% Variation",
//                 },
//                 min: 0,
//                 max: 100,
//               },
//             };
//             break;
//           case "population":
//             stateOptions = {
//               yaxis: {
//                 title: {
//                   text: "% Variation",
//                 },
//                 min: 0,
//                 max: 100,
//               },
//             };
//             break;
//           default:
//             break;
//         }
//         break;
//       case "Oklahoma":
//         stateOptions = {
//           yaxis: {
//             title: {
//               text: "% Variation",
//             },
//             min: 0,
//             max: 100,
//           },
//         };
//         break;
//       default:
//         break;
//     }

//     const options = { ...this.state.options, ...stateOptions };

//     return (
//       <div id="chart">
//         <h1>{stateInput}</h1>
//         <ReactApexChart
//           options={options}
//           series={this.state.series}
//           type="boxPlot"
//           height={350}
//         />
//       </div>
//     );
//   }
// }

// export default BoxWhiskerChart;

import React from "react";
import ReactApexChart from "react-apexcharts";

class BoxWhiskerChart extends React.Component {
  constructor(props) {
    super(props);

    const { stateInput } = props;
    let testData2 = {};

    switch (stateInput) {
      case "Maryland":
        testData2 = require("../data/md_boxWhisker.json");
        if (props.type === "population") {
          testData2 = testData2["popVar"];
        } else {
          testData2 = testData2["geoVar"];
        }
        break;
      case "Nevada":
        testData2 = require("../data/nv_boxWhisker.json");
        if (props.type === "population") {
          testData2 = testData2["popVar"];
        } else {
          testData2 = testData2["geoVar"];
        }
        break;
      case "Oklahoma":
        testData2 = require("../data/ok_boxWhisker.json");
        if (props.type === "population") {
          testData2 = testData2["popVar"];
        } else {
          testData2 = testData2["geoVar"];
        }
        break;
      default:
        testData2 = require("../data/md_boxWhisker.json");
        if (props.type === "population") {
          testData2 = testData2["popVar"];
        } else {
          testData2 = testData2["geoVar"];
        }
        break;
    }

    testData2 = Object.entries(testData2).map(([district, data]) => {
      const outliers = Array.isArray(data.outliers)
        ? data.outliers
        : [data.outliers]; // Ensure outliers is an array
      return {
        x: String(district),
        y: [data.min, data.q1, data.median, data.q3, data.max],
        outliers: outliers.map((outlier) => ({
          x: String(district), // Set the x-value as the district number
          y: outlier,
        })),
      };
    });

    const seriesData = [
      {
        name: "box",
        type: "boxPlot",
        data: testData2,
      },
    ];

    // Concatenate all outliers into a single array
    const outliersData = testData2.reduce(
      (acc, data) => acc.concat(data.outliers),
      []
    );

    if (outliersData.length > 0) {
      seriesData.push({
        name: "2022 Incumbents",
        type: "scatter",
        data: outliersData,
        marker: {
          size: 5,
          fillColor: "#FF4560",
        },
      });
    }

    this.state = {
      series: seriesData,
      options: {
        chart: {
          type: "boxPlot",
          height: 350,
        },
        colors: ["#008FFB", "#FF4560"], // Add color for outliers series
        xaxis: {
          type: "category",
          categories: testData2.map((item) => item.x),
          title: {
            text: "District Numbers",
          },
        },
        yaxis: {
          title: {
            text: "% Variation",
          },
          min: 0,
          max: 1,
        },
        tooltip: {
          shared: false,
          intersect: true,
        },
        dataLabels: {
          enabled: false, // Disable data labels for outliers
        },
      },
    };
  }
  render() {
    const { stateInput } = this.props;
    const { options, series } = this.state;

    return (
      <div id="chart">
        <h1>{stateInput}</h1>
        {console.log("options:", options)}
        {console.log("series:", series)}
        <ReactApexChart
          options={options}
          series={series}
          type="boxPlot"
          height={350}
        />
      </div>
    );
  }
}

export default BoxWhiskerChart;
