
import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { GlobalStoreContext } from '../store'


export default function AppBar1() {
  const [selectedState, setSelectedState] = useState("Oklahoma");

  const { store } = useContext(GlobalStoreContext);


  const handleStateButtonClick = (state) => {
    setSelectedState(state);
  };
  
  const handleResetMap = (event) => {
    console.log("\nTHE HANDLE RESET MAP FUNCTION HAS BEEN TRIGGERED!\n");
    store.setState("Select a State");
    store.setDistrict(null);
    store.setDistrictPlan("2022");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#353333" }}>
        <Toolbar>
          <a>
            <img
              onClick={handleResetMap}
              width="40"
              height="40"
              src="https://i.ibb.co/2N8j8BR/image-removebg-preview-4.png"
              alt="image-removebg-preview-4"
              style={{ cursor: "pointer" }}
              class="highlight"
            />
          </a>
          <Typography
            component="div"
            sx={{
              fontSize: '20px',
              flexGrow: 1,
              textAlign: "left",
              color: "yellow",
              fontWeight: "bold",
              fontFamily: "system-ui",
            }}
          >
               Team LeMickey
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
