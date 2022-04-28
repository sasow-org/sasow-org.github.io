import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DataHandlerConfig} from "./model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "./model/environments/twitter/ExperimentTwitter";
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function App() {
  const repetitions : number = 3;
  const name: string = "test experiment twitter"
  const description: string = "test description"
  const dataHandlerConfig: DataHandlerConfig = new DataHandlerConfig(name, true, true);

  const startExperiment = async () =>  {
    let experimentTwitter : ExperimentTwitter = new ExperimentTwitter(repetitions, name, description, dataHandlerConfig);
    await   experimentTwitter.run();
  }

  return (
      <div className="App">
        <header className="App-header">
          <Button onClick={startExperiment} variant="contained"><PlayCircleFilledWhiteIcon/></Button>
          <h1>Hola soy el D1ekeu</h1>
        </header>
      </div>
  )
}

export default App;
