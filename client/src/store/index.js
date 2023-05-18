//store reducer (redux)
import { Global } from '@emotion/react';
import { React, createContext, useReducer, useContext, useState } from 'react'
import api from "./store-request-api";

/*
    This is our GLOBAL data store. Note that it uses the Flux design pattern,
    which makes use of things like actions and reducers. 
    
*/

export const initialState = {
  state: "Select a State",
  districtPlan: "2022",
  district: null,
  showIncumbents: false,
  geoJson: null,
}

export const GlobalStoreContext = createContext({});

// THESE ARE ALL THE TYPES OF UPDATES TO OUR GLOBAL
// DATA STORE STATE THAT CAN BE PROCESSED

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE",
    SET_DISTRICT_PLAN: "SET_DISTRICT_PLAN",
    SET_DISTRICT: "SET_DISTRICT",
    SHOW_INCUMBENTS: "SHOW_INCUMBENTS",
    SET_GEOJSON: "SET_GEOJSON",
}



// WITH THIS WE'RE MAKING OUR GLOBAL DATA STORE
// AVAILABLE TO THE REST OF THE APPLICATION
function GlobalStoreContextProvider(props) {
    
  const globalStoreReducer = (state, action) => {
    switch (action.type) {
      // LIST UPDATE OF ITS NAME
      case GlobalStoreActionType.SET_STATE: {
        return {
            ...state,
            state: action.payload.state
        };
      }
      case GlobalStoreActionType.SET_DISTRICT_PLAN: {
        return {
          ...state,
          districtPlan: action.payload.districtPlan
        };
      }
      case GlobalStoreActionType.SET_DISTRICT: {
        return {
          ...state,
          district: action.payload.district,
        };
      }
      case GlobalStoreActionType.SHOW_INCUMBENTS: {
        return {
          ...state,
          showIncumbents: action.payload.showIncumbents,
        }
      }
      case GlobalStoreActionType.SET_GEOJSON: {
        return {
          ...state,
          geojson: action.payload.geojson
        }
      }
      default:
          return state;
    }
  }

  const [store, dispatch] = useReducer(globalStoreReducer, initialState);

  // Functions to change the global store 

  store.setState = (state) => {
    dispatch({
      type: GlobalStoreActionType.SET_STATE,
      payload: { state }
    });
  };
    
  store.setDistrictPlan = (districtPlan) => {
    dispatch({
      type: GlobalStoreActionType.SET_DISTRICT_PLAN,
      payload: { districtPlan }
    });
  };

  store.setDistrict = (district) => {
    dispatch({
      type: GlobalStoreActionType.SET_DISTRICT,
      payload: { district }
    });
  };
    
  store.setShowIncumbents = (value) => {
    dispatch({
      type: GlobalStoreActionType.SHOW_INCUMBENTS,
      payload: { showIncumbents: value },
    });
  };
    
  store.fetchGeojson = (state) => {
    const asyncFetchGeojson = async (state) => {
      try {
        const response = await api.getMapGeoJson(state);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    return asyncFetchGeojson(state);
  };
    
  return (
    <GlobalStoreContext.Provider value={ { store } }>
          {props.children}
    </GlobalStoreContext.Provider>
  );
    
}


export default GlobalStoreContext;
export { GlobalStoreContextProvider };