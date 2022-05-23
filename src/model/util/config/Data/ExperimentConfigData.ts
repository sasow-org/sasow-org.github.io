import { AgentConfigData } from './AgentConfigData';

export class ExperimentConfigData {
  private _name : string;

  private _description : string;

  private _repetitions: number;

  private _essentialData: boolean;

  private _detailedData: boolean;

  private _periods: number;

  private _networkSize: number;

  private _seedSize: number;

  private _agentConfigsData: AgentConfigData[];

  constructor(
    name: string,
    description: string,
    repetitions: number,
    essentialData: boolean,
    detailedData: boolean,
    periods: number,
    networkSize: number,
    seedSize: number,
    agentConfigsData: AgentConfigData[],
  ) {
    this._agentConfigsData = agentConfigsData;
    this._name = name;
    this._description = description;
    this._repetitions = repetitions;
    this._essentialData = essentialData;
    this._detailedData = detailedData;
    this._periods = periods;
    this._networkSize = networkSize;
    this._seedSize = seedSize;
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

  get essentialData(): boolean {
    return this._essentialData;
  }

  set essentialData(value: boolean) {
    this._essentialData = value;
  }

  get detailedData(): boolean {
    return this._detailedData;
  }

  set detailedData(value: boolean) {
    this._detailedData = value;
  }

  get periods(): number {
    return this._periods;
  }

  set periods(value: number) {
    this._periods = value;
  }

  get networkSize(): number {
    return this._networkSize;
  }

  set networkSize(value: number) {
    this._networkSize = value;
  }

  get seedSize(): number {
    return this._seedSize;
  }

  set seedSize(value: number) {
    this._seedSize = value;
  }

  get agentConfigsData(): AgentConfigData[] {
    return this._agentConfigsData;
  }

  set agentConfigsData(value: AgentConfigData[]) {
    this._agentConfigsData = value;
  }
}
