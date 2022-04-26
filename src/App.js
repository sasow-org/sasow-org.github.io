import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {DataHandlerConfig} from "../src/model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "./model/environments/twitter/ExperimentTwitter";

function App() {

    const repetitions : number = 3;
    const name: string = "test experiment twitter"
    const description: string = "test description"
    const dataHandlerConfig: DataHandlerConfig = new DataHandlerConfig(name, true, true);

    const startExperiment = () => {
        let experimentTwitter : ExperimentTwitter = new ExperimentTwitter(repetitions, name, description, dataHandlerConfig);
        experimentTwitter.run();
    }

    return (
        <div className="App">
          <header className="App-header">
              <Button variant="contained"><PlayCircleFilledWhiteIcon/></Button>
              <h1>Hola soy el D1ekeu</h1>
          </header>
        </div>
    );
}

export default App;
