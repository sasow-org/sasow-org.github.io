import { Experiment } from '../essential/Experiment';
import { ExperimentConfig } from '../util/config/ExperimentConfig';
import { FactoryDynamicClass } from '../util/factory/FactoryDynamicClass';

export class GenericExperiment extends Experiment {
  constructor(experimentConfig: ExperimentConfig, doConfig: Function) {
    super(experimentConfig, doConfig);
  }

  initialize(id: number): void {
    // this.simulation = new SimulationTwitter(id, this.simulationConfig);
    const simulationClassRef = FactoryDynamicClass.getInstance().getSimulation(this.experimentConfig.experimentType);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line new-cap
    this.simulation = new simulationClassRef(id, this.simulationConfig);
    super.initialize(id);
  }
}
