import { SimulationConfig } from './SimulationConfig';
import { DataHandlerConfig } from './DataHandlerConfig';

export class ExperimentConfig {
  private _name : string;

  private _description : string;

  private _repetitions: number;

  private _DataHandlerConfig: DataHandlerConfig;

  private _simulationConfig: SimulationConfig;

  private _experimentType: string;

  constructor(
    experimentType: string,
    name: string,
    description: string,
    repetitions: number,
    essentialData: boolean,
    detailedData: boolean,
  ) {
    this._experimentType = experimentType;
    this._name = name;
    this._description = description;
    this._repetitions = repetitions;
    this._DataHandlerConfig = new DataHandlerConfig(name, essentialData, detailedData);
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

  get repetitions(): number {
    return this._repetitions;
  }

  set repetitions(value: number) {
    this._repetitions = value;
  }

  get simulationConfig(): SimulationConfig {
    return this._simulationConfig;
  }

  set simulationConfig(value: SimulationConfig) {
    this._simulationConfig = value;
  }

  get DataHandlerConfig(): DataHandlerConfig {
    return this._DataHandlerConfig;
  }

  set DataHandlerConfig(value: DataHandlerConfig) {
    this._DataHandlerConfig = value;
  }

  get experimentType(): string {
    return this._experimentType;
  }

  set experimentType(value: string) {
    this._experimentType = value;
  }
}
