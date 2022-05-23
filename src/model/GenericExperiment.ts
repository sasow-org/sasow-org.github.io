import { Experiment } from './essential/Experiment';
import { SimulationTwitter } from './environments/twitter/SimulationTwitter';
import { DataHandler } from './util/datahandler/DataHandler';
import { ExperimentConfig } from './util/config/ExperimentConfig';

export class GenericExperiment extends Experiment {
  constructor(experimentConfig: ExperimentConfig, doConfig: Function) {
    super(experimentConfig, doConfig);
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
