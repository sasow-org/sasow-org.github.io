import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {DataHandlerConfig} from "./model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "./model/environments/twitter/ExperimentTwitter";
import {Box, Button, ListItemButton} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import List from '@mui/material/List';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import StartButton from "./components/StartButton";
import NavBar from "./components/NavBar";
import TemplateLayout from "./components/TemplateLayout";

function App() {




  return (
      <div className="App">
          <BrowserRouter>
              <NavBar/>
              <Box mt={2} maxHeight={1000} height={1000} style={{backgroundColor: "darkgray",
              }}>
                  <TemplateLayout/>
              </Box>
          </BrowserRouter>
      </div>
  )
}

export default App;
