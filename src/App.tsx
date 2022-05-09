import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {DataHandlerConfig} from "./model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "./model/environments/twitter/ExperimentTwitter";
import {Box, Button, ListItemButton} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import List from '@mui/material/List';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import StartButton from "./components/Buttons/StartButton";
import NavBar from "./components/NavBar";
import TemplateLayout from "./components/TemplateLayout";



function App() {


//agenttype deberia hacer referencia a la clase del objeto que debemos instanciar
    const agentConfig1 = {
        initialState: 0,
        configName: "agent234123123",
        percentageFollowers: 1,
        percentageFollowings: 0,
        agentType: "TwitterAgent",
        actions: [
            {
                name: "read",
                probability: 0.5,
                type: "ActionRead" //aqui se hace referencia a la clase del objeto action que se debera instanciar
            },
            {
                name: "share",
                probability: 0.03,
                type: "ActionShare" //aqui se hace referencia a la clase del objeto action que se debera instanciar}
            },
        ]
        ,
        isSeed: false,
        quantityAgent: 950
    }

    const agentConfig2 = {
        initialState: 2,
        configName: "agent2234234",
        percentageFollowers: 1,
        percentageFollowings: 0,
        agentType: "TwitterAgent",
        actions: [
            {
                name: "read",
                probability: 0.5,
                type: "ActionRead" //aqui se hace referencia a la clase del objeto action que se debera instanciar
            },
            {
                name: "share",
                probability: 0.03,
                type: "ActionShare" //aqui se hace referencia a la clase del objeto action que se debera instanciar}
            },
        ],
        isSeed: true,
        quantityAgent: 50
    }

    const experimentConfig = {
        experimentName: "123",
        repetitions: 1,
        networkSize: 1000,
        seedSize: 50,
        periods: 20,
        description: "true",
        agentsConfigs: [
            agentConfig1,agentConfig2
        ],
        essentialData: true,
        detailedData: true,
        experimentType: "TwitterExperiment"//referencia a la clase que se deberia instanciar
    };



    return (
      <div className="App">
          <BrowserRouter>
              <NavBar experimentConfig={experimentConfig} />
              <Box mt={2} maxHeight={1000} height={1000} style={{backgroundColor: "darkgray",
              }}>
                  <TemplateLayout experimentConfig={experimentConfig}/>
              </Box>
          </BrowserRouter>
      </div>
  )
}

export default App;
