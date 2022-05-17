import { Simulation } from './Simulation';
import { ExperimentConfig } from '../util/config/ExperimentConfig';
import { SimulationConfig } from '../util/config/SimulationConfig';
import { DataHandler } from '../util/datahandler/DataHandler';
import { DataHandlerConfig } from '../util/config/DataHandlerConfig';
import { IObservable } from '../util/datahandler/observer/IObservable';
import { IDataEssential } from '../util/data/interfaces/IDataEssential';
import { RowData } from '../util/data/RowData';

export abstract class Experiment implements IObservable, IDataEssential {
  private _simulation: Simulation;

  private _maxRepetitions: number; // runs..

  private _repetitionNumber: number; // run..

  private _name: string;

  private _description: string;

  private _experimentConfig: ExperimentConfig;

  private _simulationConfig: SimulationConfig;

  protected constructor(
    maxRepetitions: number,
    name: string,
    description: string,
    dataHandlerConfig: DataHandlerConfig,
    doConfig: Function,
  ) {
    this._repetitionNumber = 0;
    this._maxRepetitions = maxRepetitions;
    this._name = name;
    this._description = description;
    DataHandler.getInstance().dataHandlerConfig = dataHandlerConfig;
    this._simulationConfig = this.configure(doConfig);
    this.configureExperimentConfig();
    DataHandler.getInstance().experimentConfig = this._experimentConfig;
  }

  public run() : void {
    console.log('Starting to running in Experiment');
    console.log('this._repetitionNumber: ', this._repetitionNumber);
    console.log('this._maxRepetitions: ', this._maxRepetitions);
    console.log('this._repetitionNumber< this._maxRepetitions: ', this._repetitionNumber < this._maxRepetitions);
    while (this._repetitionNumber < this._maxRepetitions) {
      console.log(`Starting run (${this._repetitionNumber} ) of ${this._maxRepetitions}`);
      this.initialize(this._repetitionNumber);
      this._simulation.run();
      console.log(`Ending run (${this._repetitionNumber} ) of ${this._maxRepetitions}`);
      this.repetitionNumber = ++this._repetitionNumber;
    }
    console.log('Ending Experiment ');
  }

  public abstract initialize(id: number) : void ;

  public configure(doConfig: Function) : SimulationConfig {
    return doConfig();
  }

  private configureExperimentConfig() {
    this._experimentConfig = new ExperimentConfig(this._simulationConfig);
    this._experimentConfig.name = this._name;
    this._experimentConfig.description = this._description;
    this._experimentConfig.repetitions = this._maxRepetitions;
    this._experimentConfig.essentialData = DataHandler.getInstance().dataHandlerConfig.isEssentialData;
    this._experimentConfig.detailedData = DataHandler.getInstance().dataHandlerConfig.isDetailedData;
  }

  DataEssential(): RowData {
    const rd: RowData = new RowData();
    rd.addRow(this._name, 'experiment_name');
    rd.addRow(this._description, 'experiment_description');
    rd.addRow(this._maxRepetitions, 'experiment_max_repetitions');
    rd.addRow(this._repetitionNumber, 'experiment_repetition_number');
    return rd;
  }

  notifyData(): void {
    // do nothin ?
  }

  get simulation(): Simulation {
    return this._simulation;
  }

  set simulation(value: Simulation) {
    this._simulation = value;
  }

  get maxRepetitions(): number {
    return this._maxRepetitions;
  }

  set maxRepetitions(value: number) {
    this._maxRepetitions = value;
  }

  get repetitionNumber(): number {
    return this._repetitionNumber;
  }

  set repetitionNumber(value: number) {
    this._repetitionNumber = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get experimentConfig(): ExperimentConfig {
    return this._experimentConfig;
  }

  set experimentConfig(value: ExperimentConfig) {
    this._experimentConfig = value;
  }

  get simulationConfig(): SimulationConfig {
    return this._simulationConfig;
  }

  set simulationConfig(value: SimulationConfig) {
    this._simulationConfig = value;
  }
}
