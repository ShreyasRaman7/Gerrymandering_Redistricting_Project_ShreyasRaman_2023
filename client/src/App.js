import logo from './logo.svg';
import './App.css';

import 'leaflet/dist/leaflet.css';


import React, { useState } from "react";
import HomeScreen from './components/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalStoreContextProvider } from './store/index'


const incumbentsData = [
  {
    name: 'Candidate A',
    party: 'Republican',
    electionResult: 'W',
    geographicVariation: 'Low',
    populationVariation: 'High',
  },
  {
    name: 'Candidate B',
    party: 'Democratic',
    electionResult: 'L',
    geographicVariation: 'High',
    populationVariation: 'Low',
  },
  {
    name: 'Candidate C',
    party: 'Republican',
    electionResult: 'W',
    geographicVariation: 'High',
    populationVariation: 'Low',
  },
];



function App() {


  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%',
    },
    leftCol: {
      height: '100%',
      width: '0%',
      backgroundColor: '#F4F4F4',
    },
    mainCol: {
      height: '100%',
      width: '60%',
      backgroundColor: '#FFF',
    },
    rightCol: {
      height: '100%',
      width: '40%',
      backgroundColor: '#F4F4F4',
    },
  };

  

  return (
    <div>
     <GlobalStoreContextProvider>
      <HomeScreen/>
     </GlobalStoreContextProvider>  
    </div>
    
  );
}

export default App;