import { IObserver } from './observer/IObserver';
import { Experiment } from '../../essential/Experiment';
import { Environment } from '../../essential/Environment';
import { Simulation } from '../../essential/Simulation';
import { ExperimentConfig } from '../config/ExperimentConfig';
import { MatrixData } from '../data/MatrixData';
import { DataHandlerConfig } from '../config/DataHandlerConfig';
import { RowData } from '../data/RowData';
import { Agent } from '../../essential/Agent';

export class DataHandler implements IObserver {
  private static _instance: DataHandler;

  // variables to acces after to get data to write.
  private _experiment : Experiment;

  private _environment : Environment;

  private _simulation : Simulation;

  private _experimentConfig : ExperimentConfig;

  private _essentialData : MatrixData;

  private _detailedData : MatrixData;

  private _withInterface = false;

  private _dataHandlerConfig : DataHandlerConfig;

  constructor() {
    this._essentialData = new MatrixData();
    this._detailedData = new MatrixData();
  }

  /*
        public static restartInstance() : void {
        DataHandler.instance = new DataHandler();
    }
     */

  update(): void {
    if (this._dataHandlerConfig.isEssentialData) {
      this.addLineEssential();
    }
    if (this._dataHandlerConfig.isDetailedData) {
      this.addLineDetailed();
    }
  }

  public addLineDetailed() : void {
    const rdSimulation : RowData = this._simulation.DataEssential();
    const rdEnvironment : RowData = this._environment.DataEssential();
    const essentialRef = this._detailedData;
    this._environment.users.map((user: Agent) => {
      const rd : RowData = new RowData();
      rd.addRows(rdSimulation);
      rd.addRows(rdEnvironment);
      rd.addRows(user.DataDetailed());
      essentialRef.addRow(rd);
    });
  }

  public addLineEssential() : void {
    const rd : RowData = new RowData();
    const rdSimulation : RowData = this._simulation.DataEssential();
    const rdEnvironment : RowData = this._environment.DataEssential();
    rd.addRows(rdSimulation);
    rd.addRows(rdEnvironment);
    if (this._withInterface) {
      // ??? do something
    }
    this._essentialData.addRow(rd);
  }

  /*
    Write Files functions
     */

  // todo make this with JSON.

  public writeCSVFile() : void {
    if (this._dataHandlerConfig.isEssentialData) {
      this.writeFileData(this._essentialData, 'essential');
      this._essentialData = new MatrixData();
    }

    if (this._dataHandlerConfig.isDetailedData) {
      this.writeFileData(this._detailedData, 'detailed');
      this._detailedData = new MatrixData();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private writeFileData(data: MatrixData, mode: string) : void {
    // todo create a JSON
    // todo 1.- create a format for the file name.
    // todo  like -> date-experimentname-mode.CSV
  }

  /* Getters and Setters */

  public static getInstance() : DataHandler {
    if (!DataHandler._instance) {
      DataHandler._instance = new DataHandler();
    }
    return DataHandler._instance;
  }

  public static clearInstance() : void {
    this._instance = null;
  }

  get experiment(): Experiment {
    return this._experiment;
  }

  set experiment(value: Experiment) {
    this._experiment = value;
  }

  get environment(): Environment {
    return this._environment;
  }

  set environment(value: Environment) {
    this._environment = value;
  }

  get simulation(): Simulation {
    return this._simulation;
  }

  set simulation(value: Simulation) {
    this._simulation = value;
  }

  get experimentConfig(): ExperimentConfig {
    return this._experimentConfig;
  }

  set experimentConfig(value: ExperimentConfig) {
    this._experimentConfig = value;
  }

  get essentialData(): MatrixData {
    return this._essentialData;
  }

  set essentialData(value: MatrixData) {
    this._essentialData = value;
  }

  get detailedData(): MatrixData {
    return this._detailedData;
  }

  set detailedData(value: MatrixData) {
    this._detailedData = value;
  }

  get withInterface(): boolean {
    return this._withInterface;
  }

  set withInterface(value: boolean) {
    this._withInterface = value;
  }

  get dataHandlerConfig(): DataHandlerConfig {
    return this._dataHandlerConfig;
  }

  set dataHandlerConfig(value: DataHandlerConfig) {
    this._dataHandlerConfig = value;
  }
}
