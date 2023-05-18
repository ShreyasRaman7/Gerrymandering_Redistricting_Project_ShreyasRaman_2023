import React, { useState, useEffect, useRef, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON, Pane } from 'react-leaflet';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { Switch, FormControlLabel } from "@material-ui/core";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Button from '@material-ui/core/Button';

// 2022 districts
import nevadaDistricts from '../GeoJSON/nevadaDistricts.json'
import marylandDistricts from '../GeoJSON/maryland2022.json'
import oklahomaDistricts from '../GeoJSON/oklahoma2021.json'
//import nvd1 from '../nvd1.json'
// 2020 districts
import nvDistricts2020 from '../GeoJSON/nvdistricts2020.json'
import okDistricts2020 from '../GeoJSON/okdistricts2020.json'
import mdDistricts2020 from '../GeoJSON/maryland2020.json'

import mdHighGeoVar from '../GeoJSON/MarylandHighGeoVar.json'
import mdDemFavored from '../GeoJSON/mdDemFavored.json'
import mdHighPopVar from '../GeoJSON/Maryland23.json'

import '../App.css';

import { GlobalStoreContext } from '../store'

function Map() {
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const label = {label: "Enacted Plan"}
  const { store } = useContext(GlobalStoreContext);
  
  
  const mapRef = useRef(null);
  // const [geoJSONData, setGeoJSONData] = useState(null);
  

  // handles click on each state 
  function onEachState(state, layer) {
    layer.on({
      click: (event) => {
        console.log("state clicked");
        if(['Maryland', 'Oklahoma', 'Nevada'].includes(state.properties.name)) {
          store.setState(state.properties.name);
        }
        store.setDistrict(null);       
      },
    });
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json')
      .then(response => response.json())
      .then(data => setGeoJSONData(data));
  }, []);


  // handles click on each district, sets District number state, handleDistrict-> homescreen
  const onEachDistrict = (district, layer) => {
    // Attach click event listener to each district feature
    layer.on({
      click: (event) => {
        console.log("district clicked");
        var d = event.target.feature.properties.District;
        console.log("\ndistrict clicked: " + event.target.feature.properties.District + "\n");
        console.log("\ndistrict.properties.District = " + district.properties.District + "\n");
        console.log("\ndistrict.properties.district = " + district.properties.district + "\n");
        // console.log("\n District Object: " + JSON.stringify(district, null, 2) + "\n");
        
        store.state === "Maryland" ? store.setDistrict(district.properties.Districts) : store.setDistrict(district.properties.District);
        
        // handleDistrict(d);
      },
      doubleClick: (event) => {
        console.log("\ndistrict double clicked\n");
        mapRef.current.flyToBounds(event.target.features[district.properties.District - 1].getBounds());
        store.setDistrict(district.properties.District);
      }
    });
  };

  const handleDistrictDoubleClick = (district) => {
    mapRef.current.flyToBounds(district.properties.District.getBounds());
    store.setDistrict(district.properties.District);
  }

  // style of district (red = republican, blue = democatic)
  const districtStyle = (feature) => {
    // Set the highlight style for the selected district
    var district = feature.properties.District;
    if(store.districtPlan === "2022" && store.state === "Maryland") {
      district = feature.properties.Districts;
    }
    var fillColor = "";
    if (store.districtPlan === "2022" || store.districtPlan === "2020"){
      switch(store.state) {
          case "Nevada":
              // return district === 2 ? ({fillColor: 'red', color: 'black'}) : ({fillColor: 'blue', color: 'black'});
              district === 2 ? fillColor = 'red' : fillColor = 'blue';
              break;
          case "Oklahoma": 
              // return ({fillColor: 'red', color: "black"});
              fillColor = 'red';
              break;
          case "Maryland":
              // return district == "1" ? ({fillColor: 'red', color: 'black'}) : ({fillColor: 'blue', color: 'black'});
              (district === "1" || district === "01" || district === 1) ? fillColor = 'red' : fillColor = 'blue';
              if((district === "4" || district === 4) && store.districtPlan === "2022") {
                fillColor = 'grey';
              }
              break;
          default:
            fillColor = 'purple';
              // return ({fillColor: 'purple', color: 'black'});
          //1R2D3D4D5D6D7D8D
      }
  }
    if(district == store.district && store.districtPlan === "2022") {
      // fillColor = "rgba(198, 198, 184, 0.975)";
      fillColor = "rgb(255, 255, 142)";
    }
    if(!['2020', '2022'].includes(store.districtPlan)) {
      fillColor = "transparent";
    }
    return ({fillColor: fillColor, fillOpacity: 0.65, color:'black'});
  };
  
  const seawulfStyle = (feature) => {
    var fillColor = "";
    var district = feature.properties.district;
    
    if(store.districtPlan === "DemocratFavored") {
      fillColor = 'blue';
    } else if(store.districtPlan === "HighGeometricVariation") {
      district === "1" ? fillColor = 'red' : fillColor = 'blue';
    } else if(store.districtPlan === "HighPopulationVariation") {
      if(district === "1" || district === "2") {
        fillColor = 'red';
      } else {
        fillColor = 'blue';
      }
    } 

    return ({
      fillColor: fillColor, 
      weight: 1.3,
      color: 'white',
      fillOpacity: 0.5,
    })
  }

  //state style 
  function getStateStyle(state) {
    switch (state.properties.name) {
      case 'Nevada':
        return { fillColor: '#552583', weight: 1, fillOpacity: 1 };
      case 'Oklahoma':
        return { fillColor: '#552583', weight: 1, fillOpacity: 1 };
      case 'Maryland':
        return { fillColor: '#552583', weight: 1, fillOpacity: 1 };
      default:
        return { fillColor: 'green', weight: 0.5};
    }
  }
  

   //if district is selected
  // useEffect(() => {
  //   if (!mapRef.current) return;
  //   console.log("\nStore district = " + store.district + "\n");
    
  //   if(store.district) {
      
  //   }
  // }, [store.district]);


  
  // if state changes or a state is selected, -> NV, OK, MD 
  useEffect(() => {
    if (!mapRef.current) return;

    switch (store.state) {
      case 'Nevada':
        mapRef.current.flyToBounds([
          [35.001857, -120.008162], // Southwest coordinates
          [42.002207, -114.039587] // Northeast coordinates
        ]);
        break;
      case 'Oklahoma':
        mapRef.current.flyToBounds([
          [33.610777, -103.002989], // Southwest coordinates
          [37.004259, -94.430662] // Northeast coordinates
        ]);
        break;
      case 'Maryland':
        mapRef.current.flyToBounds([
          [37.903422, -79.487651], // Southwest coordinates
          [39.722998, -74.986176] // Northeast coordinates
        ]);
        break;
      default:
        mapRef.current.flyToBounds([
          [24.9493, -125.0011], // Southwest coordinates
          [49.5904, -66.9326] // Northeast coordinates
        ]);
        break;
    }
  }, [store.state]);

  //handler for menu dropdown clicks / handles state selection
  const handleStateSelect = (event) => {
    console.log("\nStateName: " + event.target.value + "\n");
    // setSelectedState(event.target.value);
    setIsToggleOn(false);
    store.setState(event.target.value);
    console.log("\nStore: " + store.state + "\n");
    store.setDistrict(null);
    mapRef.current.flyToBounds(event.target.value.getBounds());
  };

  const handleDistrictPlanSelect = (event) => {
    console.log(event.target.value);
    setIsToggleOn(false);
    store.setDistrictPlan(event.target.value);
    // console.log("\nstore.districtPlan = " + store.districtPlan + "\n");
  };

  // bounds for the initial map container of the U.S. 
  const bounds = [
    [24.9493, -127.0011], // Southwest coordinates 127 instead of 125 for smoother NV zoom
    [49.5904, -66.9326]  // Northeast coordinates
  ];
  
  const handleResetMap = (event) => {
    console.log("\nTHE HANDLE RESET MAP FUNCTION HAS BEEN TRIGGERED!\n");
    store.setState("Select a State");
    store.setDistrict(null);
    store.setDistrictPlan("2022");
  };

  const handleResetState = (event) => {
    console.log("\nTHE HANDLE RESET STATE FUNCTION HAS BEEN TRIGGERED\n");
    switch (store.state) {
      case 'Nevada':
        mapRef.current.flyToBounds([
          [35.001857, -120.008162], // Southwest coordinates
          [42.002207, -114.039587] // Northeast coordinates
        ]);
        break;
      case 'Oklahoma':
        mapRef.current.flyToBounds([
          [33.610777, -103.002989], // Southwest coordinates
          [37.004259, -94.430662] // Northeast coordinates
        ]);
        break;
      case 'Maryland':
        mapRef.current.flyToBounds([
          [37.903422, -79.487651], // Southwest coordinates
          [39.722998, -74.986176] // Northeast coordinates
        ]);
        break;
      default:
        mapRef.current.flyToBounds([
          [24.9493, -125.0011], // Southwest coordinates
          [49.5904, -66.9326] // Northeast coordinates
        ]);
        break;
    }
    setIsToggleOn(false);
    store.setDistrict(null);
    store.setDistrictPlan("2022");
  }

  return (
    <div className="map-wrapper">
      <MapContainer
        ref={mapRef}
        bounds={bounds}
        style={{ height: "80vh" }}
        maxBounds={bounds}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Pane zIndex={999}>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              padding: "10px",
              position: "absolute",
              top: "380px",
              left: "0px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "red",
                  display: "inline-block",
                  height: "55px",
                  marginRight: "10px",
                  width: "25px",
                }}
              ></div>
              <span style={{ margin: "auto 0" }}>
                Republican Incumbent District
              </span>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "blue",
                  display: "inline-block",
                  height: "55px",
                  marginRight: "10px",
                  width: "25px",
                }}
              ></div>
              <span style={{ margin: "auto 0" }}>
                Democratic Incumbent District
              </span>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "grey",
                  display: "inline-block",
                  height: "55px",
                  marginRight: "10px",
                  width: "20px",
                }}
              ></div>
              <span style={{ margin: "auto 0" }}>Non-incumbent District</span>
            </div>
          </div>
        </Pane>

        {!["Nevada", "Maryland", "Oklahoma"].includes(store.state) &&
          geoJSONData && (
            <GeoJSON
              data={geoJSONData}
              style={getStateStyle}
              onEachFeature={onEachState}
            />
          )}
        {["Nevada", "Maryland", "Oklahoma"].includes(store.state) &&
          store.districtPlan === "2022" && (
            <>
              {store.state === "Nevada" && (
                <GeoJSON
                  data={nevadaDistricts}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                  // onDoubleClick={() => handleDistrictDoubleClick(nevadaDistricts.features[store.district - 1].geometry)}
                />
              )}
              {store.state === "Maryland" && (
                <GeoJSON
                  data={marylandDistricts}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                />
              )}
              {store.state === "Oklahoma" && (
                <GeoJSON
                  data={oklahomaDistricts}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                />
              )}
            </>
          )}
        {["Nevada", "Maryland", "Oklahoma"].includes(store.state) &&
          store.districtPlan === "2020" && (
            <>
              {store.state === "Nevada" && (
                <GeoJSON
                  data={nvDistricts2020}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                />
              )}
              {store.state === "Maryland" && (
                <GeoJSON
                  data={mdDistricts2020}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                />
              )}
              {store.state === "Oklahoma" && (
                <GeoJSON
                  data={okDistricts2020}
                  style={districtStyle}
                  onEachFeature={onEachDistrict}
                />
              )}
            </>
          )}
        
        {['Nevada', 'Oklahoma', 'Maryland'].includes(store.state) &&
         store.districtPlan === "DemocratFavored" && 
          (<GeoJSON
            data={mdDemFavored}
            style={seawulfStyle}
            onEachFeature={onEachDistrict}
          />)
        }
        {['Nevada', 'Oklahoma', 'Maryland'].includes(store.state) &&
         store.districtPlan === "HighGeometricVariation" && 
          (<GeoJSON
            data={mdHighGeoVar}
            style={seawulfStyle}
            onEachFeature={onEachDistrict}
          />)
        }        
        {['Nevada', 'Oklahoma', 'Maryland'].includes(store.state) &&
         store.districtPlan === "HighPopulationVariation" && 
          (<GeoJSON
            data={mdHighPopVar}
            style={seawulfStyle}
            onEachFeature={onEachDistrict}
          />)
        }        
        
        
        {isToggleOn && (
          <>
            {store.state === "Nevada" && (
              <GeoJSON
                data={nevadaDistricts}
                style={districtStyle}
                onEachFeature={onEachDistrict}
                // onDoubleClick={() => handleDistrictDoubleClick(nevadaDistricts.features[store.district - 1].geometry)}
              />
            )}
            {store.state === "Maryland" && (
              <GeoJSON
                data={marylandDistricts}
                style={districtStyle}
                onEachFeature={onEachDistrict}
              />
            )}
            {store.state === "Oklahoma" && (
              <GeoJSON
                data={oklahomaDistricts}
                style={districtStyle}
                onEachFeature={onEachDistrict}
              />
            )}
          </>
        )}
      </MapContainer>

      {["Maryland", "Oklahoma", "Nevada"].includes(store.state) && (
        <Typography
          className="selected-state"
          marginTop={"10px"}
          paddingTop={"10px"}
        >
          {store.state}
        </Typography>
      )}
      <Box sx={{ paddingTop: "10px", width: "100%" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="filled"
                onClick={handleResetMap}
                sx={{
                  color: "yellow",
                  backgroundColor: "#353333",
                  mx: 1,
                  my: 0.25,
                  width: 150,
                  "&:hover": { backgroundColor: "#552583" },
                  display: "block",
                }}
              >
                Reset Page
              </Button>
              <Button
                variant="filled"
                onClick={handleResetState}
                sx={{
                  color: "yellow",
                  backgroundColor: "#353333",
                  mx: 1,
                  my: 0.25,
                  width: 150,
                  "&:hover": { backgroundColor: "#552583" },
                  display: "block",
                }}
              >
                Reset State
              </Button>
            </Box>
          </Grid>
          <Grid item xs>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="state-select-label">Select State</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={store.state}
                label="Select a State"
                onChange={handleStateSelect}
              >
                <MenuItem value="Nevada">Nevada</MenuItem>
                <MenuItem value="Oklahoma">Oklahoma</MenuItem>
                <MenuItem value="Maryland">Maryland</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="district-plan-select-label">
                District Plan
              </InputLabel>
              <Select
                labelId="district-plan-select-label"
                id="district-plan-select"
                value={store.districtPlan}
                label="Select a District Plan"
                onChange={handleDistrictPlanSelect}
              >
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                {store.state === "Nevada" && (
                  <MenuItem value="SeawulfNevada">Seawulf-Nevada</MenuItem>
                )}
                {store.state === "Oklahoma" && (
                  <MenuItem value="SeawulfOklahoma">Seawulf-Oklahoma</MenuItem>
                )}
                {store.state === "Maryland" && [
                  <MenuItem key="DemocratFavored" value="DemocratFavored">
                    Democrat Favored
                  </MenuItem>,
                  <MenuItem
                    key="HighGeometricVariation"
                    value="HighGeometricVariation"
                  >
                    High Geometric Variation
                  </MenuItem>,
                  <MenuItem
                    key="HighPopulationVariation"
                    value="HighPopulationVariation"
                  >
                    High Population Variation
                  </MenuItem>,
                ]}
              </Select>
            </FormControl>
          </Grid>

          {!["2022", "2020"].includes(store.districtPlan) && (
            <Grid item xs>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={isToggleOn}
                    onChange={(e) => setIsToggleOn(e.target.checked)}
                  />
                }
                labelPlacement="top"
                {...label}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Map;

