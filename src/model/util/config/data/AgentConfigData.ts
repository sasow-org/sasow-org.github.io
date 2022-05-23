import { ActionConfigData } from './ActionConfigData';

export class AgentConfigData {
  private _quantityAgent: number;

  private _percentageFollowers: number;

  private _percentageFollowings: number;

  private _isSeed: boolean;

  private _actionsData: ActionConfigData[];

  private _nameConfig: string;

  private _initialState: number;

  constructor(configName: string, initialState: number, actionsData: ActionConfigData[], isSeed: boolean, quantityAgent: number, percentageFollowers: number, percentageFollowings: number) {
    this._quantityAgent = quantityAgent;
    this._percentageFollowers = percentageFollowers;
    this._percentageFollowings = percentageFollowings;
    this._actionsData = actionsData;
    this._nameConfig = configName;
    this._isSeed = isSeed;
    this._initialState = initialState;
  }

  get quantityAgent(): number {
    return this._quantityAgent;
  }

  set quantityAgent(value: number) {
    this._quantityAgent = value;
  }

  get percentageFollowers(): number {
    return this._percentageFollowers;
  }

  set percentageFollowers(value: number) {
    this._percentageFollowers = value;
  }

  get percentageFollowings(): number {
    return this._percentageFollowings;
  }

  set percentageFollowings(value: number) {
    this._percentageFollowings = value;
  }

  get isSeed(): boolean {
    return this._isSeed;
  }

  set isSeed(value: boolean) {
    this._isSeed = value;
  }

  get actionsData(): ActionConfigData[] {
    return this._actionsData;
  }

  set actionsData(value: ActionConfigData[]) {
    this._actionsData = value;
  }

  get nameConfig(): string {
    return this._nameConfig;
  }

  set nameConfig(value: string) {
    this._nameConfig = value;
  }

  get initialState(): number {
    return this._initialState;
  }

  set initialState(value: number) {
    this._initialState = value;
  }
}
