import React from "react";
import ToolBar from "./ToolBar";
import Map from "./Map"

import SummaryEnsemble from "./SummaryEnsemble";
import IncumbentBarGraph from "./IncumbentBarGraph";
// import SummaryTable from "./SummaryTable";
import IncumbentSafeGraph from "./IncumbentSafeGraph";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Box from '@mui/material/Box';
import { useState, useEffect, useContext } from 'react';
import BoxWhiskerPlot from "./BoxWhiskerPlot";
import ElectionData from "./ElectionData";
import incumbentData from "../data/incumbentdata.json"
import { GlobalStoreContext } from '../store'
import IncumbentSummary from "./IncumbentSummaryTable";
import DistrictSummary from "./DistrictSummary";
import EnsembleSummary from "./EnsembleSummary";
import SplitComparison from "./SplitComparison";
import SimulatedElectionData from "./SimulatedElectionData";
import IncumbentSafeSeat from "./IncumbentSafeSeat";
import BoxWhiskerChart from "./BoxWhiskerChart";
import BoxWhiskerTabsDisplay from "./BoxWhiskerTabsDisplay";




const incumbentsDataN = incumbentData["incumbentN"];
const incumbentsDataM = incumbentData["incumbentM"];
const incumbentsDataO = incumbentData["incumbentO"];



function HomeScreen() {
  // const [state, setState] = useState({})
  // const [districtNum, setDistrictNum] = useState({});
  const { store } = useContext(GlobalStoreContext);




  return (
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col">
          <ToolBar />
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-7">
          <main>
            <div class="row g-0">
              {/* handleClick={handleClick} handleDistrict={handleDistrict} */}
              <Map />
            </div>
          </main>
        </div>
        <div class="col-md-5">
          <aside>
            {/* <div class="row g-0"> */}
            <div class="row g-0">
              <IncumbentSummary />
              {/* <SummaryTable
                  data={
                    store.state === "Nevada"
                      ? incumbentsDataN
                      : store.state === "Maryland"
                      ? incumbentsDataM
                      : incumbentsDataO
                  }
                  state={store.state}
                /> */}
            </div>
            <div class="row g-0 ">
              {/* <IncumbentBarGraph /> */}

              {/* <ElectionData
                  state={store.state}
                  district={store.district}
                  year={2020}
                /> */}
              <ElectionData
                state={store.state}
                district={store.district}
                year={2022}
              />
            </div>
            <div class="row g-0">
              {/* <IncumbentSafeGraph /> */}
              <IncumbentSafeSeat state={store.state} />
            </div>
            <div class="row g-0">
              {/* <SummaryEnsemble /> */}
              <EnsembleSummary />
            </div>
            <div class="row g-0">
              {/* <BoxWhiskerPlot /> */}
              <BoxWhiskerTabsDisplay />
            </div>
            <div class="row g-0">
              <DistrictSummary />
            </div>
            <div class="row g-0">
              {/* <SummaryEnsemble /> */}
              <SplitComparison state={store.state} />
              {/* <SplitComparison state={"Oklahoma"} />
                <SplitComparison state={"Nevada"} /> */}
            </div>
            <div class="row g-0">
              <SimulatedElectionData state={store.state} />
            </div>
            {/* </div> */}
            <div class="row g-0 p-2">
              {/* <div class="row g-0">
                <IncumbentSafeSeat state={store.state} />
              </div> */}
              <div class="row g-0">
                {/* <BoxWhiskerChart /> */}
                {/* <BoxWhiskerTabsDisplay /> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;


//Comments

  // useEffect(() => {
  //   console.log('argument from Child: ', state);

  // }, [state])