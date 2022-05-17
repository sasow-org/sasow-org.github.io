import { Experiment } from './Experiment';
import { DataHandlerConfig } from '../util/config/DataHandlerConfig';
import { SimulationTwitter } from '../environments/twitter/SimulationTwitter';
import { DataHandler } from '../util/datahandler/DataHandler';

export class GenericExperiment extends Experiment {
  constructor(repetitions: number, name: string, description : string, dataHandlerConfig : DataHandlerConfig, doConfig: Function) {
    super(repetitions, name, description, dataHandlerConfig, doConfig);
  }

  initialize(id: number): void {
    console.log('Inicializando experiment  id: ', id); // todo change this with eval, to evite hardcoding.
    this.simulation = new SimulationTwitter(id, this.simulationConfig);
    this.simulation.initialize();
    DataHandler.getInstance().experiment = this;
    DataHandler.getInstance().simulation = this.simulation;
    DataHandler.getInstance().environment = this.simulation.environment;
  }
}
