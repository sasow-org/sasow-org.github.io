import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import {BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import TemplateLayout from "./components/TemplateLayout";



function App() {


//agenttype deberia hacer referencia a la clase del objeto que debemos instanciar
    const agentConfig1 = {
        initialState: 0,
        configName: "agent config 1",
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
                probability: 0.5,
                type: "ActionShare" //aqui se hace referencia a la clase del objeto action que se debera instanciar}
            },
        ]
        ,
        isSeed: false,
        quantityAgent: 950
    }

    const agentConfig2 = {
        initialState: 2,
        configName: "agent config 2",
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
        experimentName: "Experiment Name Default",
        repetitions: 1,
        networkSize: 1000,
        seedSize: 50,
        periods: 20,
        description: "asdas",
        agentsConfigs: [
            agentConfig1,agentConfig2
        ],
        essentialData: true,
        detailedData: true,
        experimentType: "TwitterConfig"//referencia a la clase que se deberia instanciar
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
